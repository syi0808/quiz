'use client';

import Loading from '@/pages/loading/Loading';
import dynamic from 'next/dynamic';

const QuizResults = dynamic(import('@/pages/quiz-results/QuizResults'), {
  ssr: false,
  loading: () => <Loading loadingText="Generating a report on your results..." />,
});

export default function QuizResultsPage() {
  return (
    <>
      <QuizResults />
    </>
  );
}
