'use client';

import { containerStyle, questionStyle, questionWrapperStyle } from './styles';
import { useQuizStorage } from './hooks/useQuizStorage';
import Answer from './Answer';
import Timer from './Timer';
import Loading from '../loading/Loading';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function QuizGame() {
  const router = useRouter();
  const { initialized, quizzes, currentQuizIndex, initialize, setCurrentQuizIndex, finishQuiz } = useQuizStorage();

  useEffect(() => void initialize(), []);

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
    <div {...containerStyle}>
      <Timer />
      <div {...questionWrapperStyle}>
        <h1 dangerouslySetInnerHTML={{ __html: quiz.question }} {...questionStyle}></h1>
        <div>
          <Answer {...quiz} />
        </div>
      </div>
      <button disabled={!isRoundEnded} onClick={handleNextQuiz}>
        {isLastQuiz ? 'Result' : 'Next Quiz'}
      </button>
    </div>
  );
}
