'use client';

import type { Quiz } from '@/app/quiz/page';
import Timer from '@/components/timer/Timer';
import { containerStyle } from './styles';
import { useQuizStorage } from './hooks/useQuizStorage';
import MultipleAnswer from './MultipleAnswer';
import BooleanAnswer from './BooleanAnswer';

export default function Quiz({ data }: { data: Quiz[] }) {
  const { quiz } = useQuizStorage(data);
  const handleNextQuiz = () => {};

  return (
    <div {...containerStyle}>
      <Timer />
      <h1 dangerouslySetInnerHTML={{ __html: quiz.question }}></h1>
      {
        {
          multiple: <MultipleAnswer {...quiz} />,
          boolean: <BooleanAnswer {...quiz} />,
        }[quiz.category]
      }
    </div>
  );
}
