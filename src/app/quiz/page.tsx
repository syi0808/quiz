'use client';

import Loading from '@/pages/loading/Loading';
import dynamic from 'next/dynamic';

const QuizGame = dynamic(import('@/pages/quiz/QuizGame'), { ssr: false, loading: () => <Loading /> });

export default function QuizPage() {
  return <QuizGame />;
}
