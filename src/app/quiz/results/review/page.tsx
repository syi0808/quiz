'use client';

import dynamic from 'next/dynamic';

const QuizReview = dynamic(import('@/_pages/quiz-results/review/QuizReview'), { ssr: false });

export default function ReviewPage() {
  return <QuizReview />;
}
