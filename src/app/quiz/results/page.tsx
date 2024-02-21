'use client';

import Loading from '@/_pages/loading/Loading';
import dynamic from 'next/dynamic';

const QuizResults = dynamic(import('@/_pages/quiz-results/QuizResults'), {
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
