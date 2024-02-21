'use client';

import Loading from '@/_pages/loading/Loading';
import dynamic from 'next/dynamic';

const QuizGame = dynamic(import('@/_pages/quiz/QuizGame'), {
  ssr: false,
  loading: () => <Loading loadingText="Loading quizzes..." />,
});

export default function QuizPage() {
  return <QuizGame />;
}
