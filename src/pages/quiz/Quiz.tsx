'use client';

import type { Quiz } from '@/app/quiz/page';
import { containerStyle, questionStyle, questionWrapperStyle } from './styles';
import { useQuizStorage } from './hooks/useQuizStorage';
import Answer from './Answer';
import Timer from './Timer';

export default function Quiz({ data }: { data: Quiz[] }) {
  const { quizzes, currentQuizIndex, setCurrentQuizIndex } = useQuizStorage(data);
  const quiz = quizzes[currentQuizIndex];
  const isRoundEnded = quiz?.selectedAnswerIndex !== undefined;

  const handleNextQuiz = () => {
    setCurrentQuizIndex(currentQuizIndex + 1);
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
        Next Quiz
      </button>
    </div>
  );
}
