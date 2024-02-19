'use client';

import dynamic from 'next/dynamic';

const QuizReview = dynamic(import('@/pages/quiz-results/review/QuizReview'), { ssr: false });

export default function ReviewPage() {
  return <QuizReview />;
}
