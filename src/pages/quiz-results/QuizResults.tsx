'use client';

import Link from 'next/link';
import Loading from '../loading/Loading';
import { useQuizResults } from './hooks/useQuizResults';

export default function QuizResults() {
  const { results, error } = useQuizResults();

  if (error) {
    return (
      <div>
        <p>
          No results for the quiz.
          <br /> Would you like to go play a game?
        </p>
        <Link href="/wizard">
          <button>Play</button>
        </Link>
      </div>
    );
  }

  if (!results) {
    return <Loading loadingText="Generating a report on your results..." />;
  }

  return (
    <div>
      <div>
        <span>Correct answers / Total</span>
        <h2>
          {results.correctAnswerCount} / {results.quizzes.length}
        </h2>
      </div>
      <button>Review notes for Wrong answers.</button>
    </div>
  );
}
