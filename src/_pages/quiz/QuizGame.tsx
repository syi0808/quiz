'use client';

import * as sx from '@stylexjs/stylex';
import {
  containerStyle,
  questionStyle,
  questionWrapperStyle,
  quizMatedataStyle,
  responesiveContainerStyle,
} from './styles';
import { useQuizStorage } from './hooks/useQuizStorage';
import Answer from './Answer';
import Timer from './Timer';
import Loading from '../loading/Loading';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Button from '@/components/button/3DButton';
import { text } from '@/shared/styles/tokens.stylex';

export default function QuizGame() {
  const router = useRouter();
  const { initialized, quizzes, currentQuizIndex, initialize, setCurrentQuizIndex, finishQuiz } = useQuizStorage();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    initialize(searchParams.get('initialize') === 'true');

    searchParams.delete('initialize');

    router.replace(`/quiz?${searchParams.toString()}`);
  }, []);

  if (!initialized) return <Loading />;

  const quiz = quizzes?.[currentQuizIndex];
  const isRoundEnded = quiz?.selectedAnswerIndex !== undefined;
  const isLastQuiz = currentQuizIndex >= quizzes.length - 1;

  const handleNextQuiz = () => {
    if (isLastQuiz) {
      finishQuiz();
      router.push('/quiz/results');
    } else {
      setCurrentQuizIndex(currentQuizIndex + 1);
    }
  };

  return (
    <div {...responesiveContainerStyle}>
      <div {...containerStyle}>
        <div {...quizMatedataStyle}>
          <span {...sx.props(text.h5)}>
            Category: <span dangerouslySetInnerHTML={{ __html: quiz.category }} />
          </span>
          <span {...sx.props(text.h5)}>Difficulty: {quiz.difficulty}</span>
        </div>
        <span>
          {currentQuizIndex + 1} / {quizzes.length}
        </span>
        <Timer />
        <div {...questionWrapperStyle}>
          <h1 dangerouslySetInnerHTML={{ __html: quiz.question }} {...questionStyle} />
          <div>
            <Answer {...quiz} />
          </div>
        </div>
        <Button disabled={!isRoundEnded} onClick={handleNextQuiz}>
          {isLastQuiz ? 'Result' : 'Next Quiz'}
        </Button>
      </div>
    </div>
  );
}
