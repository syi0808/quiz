'use client';

import type { Quiz } from '@/app/quiz/page';
import { containerStyle } from './styles';
import { useQuizStorage } from './hooks/useQuizStorage';
import MultipleAnswer from './MultipleAnswer';
import BooleanAnswer from './BooleanAnswer';
import Timer from './Timer';

export default function Quiz({ data }: { data: Quiz[] }) {
  const { quizzes, currentQuizIndex } = useQuizStorage(data);
  const quiz = quizzes[currentQuizIndex];

  const handleNextQuiz = () => {};

  return (
    <div {...containerStyle}>
      <Timer />
      <h1 dangerouslySetInnerHTML={{ __html: quiz.question }}></h1>
      <div>
        {
          {
            multiple: <MultipleAnswer {...quiz} />,
            boolean: <BooleanAnswer {...quiz} />,
          }[quiz.category]
        }
      </div>
    </div>
  );
}
