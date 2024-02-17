'use client';

import { containerStyle, questionStyle, questionWrapperStyle } from './styles';
import { useQuizStorage } from './hooks/useQuizStorage';
import Answer from './Answer';
import Timer from './Timer';
import Loading from '../loading/Loading';
import { QuizWithInformation } from './state-manager/QuizStorageManager';

export default function QuizGame() {
  const { quizzes, currentQuizIndex, setCurrentQuizIndex, initialized } = useQuizStorage();

  const handleNextQuiz = () => {
    setCurrentQuizIndex(currentQuizIndex + 1);
  };

  if (!initialized) return <Loading />;

  // quizzes variable is must be not undefined after initialized.
  const quiz = quizzes?.[currentQuizIndex] as QuizWithInformation;
  const isRoundEnded = quiz?.selectedAnswerIndex !== undefined;

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
