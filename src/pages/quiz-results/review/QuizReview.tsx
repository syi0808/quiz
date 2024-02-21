'use client';

import Answer from '../../quiz/Answer';
import * as sx from '@stylexjs/stylex';
import { containerStyle, questionStyle, questionWrapperStyle, responesiveContainerStyle } from '../../quiz/styles';
import { useState } from 'react';
import { useQuizResults } from '@/pages/quiz-results/hooks/useQuizResults';
import Loading from '@/pages/loading/Loading';
import { useRouter } from 'next/navigation';
import { colors } from '@/shared/styles/tokens.stylex';
import Button from '@/components/button/3DButton';

export default function QuizReview() {
  const router = useRouter();
  const [viewQuizIndex, setViewQuizIndex] = useState(0);
  const { results } = useQuizResults();

  if (!results) return <Loading />;

  const { quizzes } = results;
  const quiz = quizzes?.[viewQuizIndex];
  const isRoundEnded = quiz.selectedAnswerIndex !== undefined;
  const isLastQuiz = viewQuizIndex >= quizzes.length - 1;
  const isAnswer = quiz.selectedAnswerIndex === quiz.correctAnswerIndex;

  const handleNextQuiz = () => {
    if (isLastQuiz) {
      router.push('/quiz/results');
    } else {
      setViewQuizIndex(viewQuizIndex + 1);
    }
  };

  return (
    <div {...responesiveContainerStyle}>
      <div {...containerStyle}>
        <h3 {...sx.props(isAnswer ? styles.correct : styles.incorrect)}>
          {isAnswer ? 'Correct Answer' : 'Incorrect Answer'}
        </h3>
        <span>
          {viewQuizIndex + 1} / {quizzes.length}
        </span>
        <div {...questionWrapperStyle}>
          <h1 dangerouslySetInnerHTML={{ __html: quiz.question }} {...questionStyle}></h1>
          <div>
            <Answer showCorrectAnswer {...quiz} />
          </div>
        </div>
        <Button disabled={!isRoundEnded} onClick={handleNextQuiz}>
          {isLastQuiz ? 'Finish' : 'Next'}
        </Button>
      </div>
    </div>
  );
}

const styles = sx.create({
  correct: {
    color: colors.primary,
  },
  incorrect: {
    color: colors.red,
  },
});
