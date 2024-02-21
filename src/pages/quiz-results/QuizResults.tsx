'use client';

import Link from 'next/link';
import Loading from '../loading/Loading';
import * as sx from '@stylexjs/stylex';
import { useQuizResults } from './hooks/useQuizResults';
import { analyticsContainer, scoreContainer } from './styles';
import { text } from '@/shared/styles/tokens.stylex';
import dynamic from 'next/dynamic';
import Spinner from '@/components/spinner/Spinner';
import { containerStyle, responesiveContainerStyle } from '../quiz/styles';
import Button from '@/components/button/3DButton';

const PieChart = dynamic(import('./PieChart'), { ssr: false, loading: () => <Spinner /> });

export default function QuizResults() {
  const { results, error } = useQuizResults();

  if (error) {
    return (
      <div {...containerStyle}>
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
    <div {...responesiveContainerStyle}>
      <div {...containerStyle}>
        <div {...scoreContainer}>
          <span {...sx.props(text.caption)}>Correct answers / Total</span>
          <h1 {...sx.props(text.h1)}>
            {results.correctAnswerCount} / {results.quizzes.length}
          </h1>
        </div>
        <div {...analyticsContainer}>
          <div {...scoreContainer}>
            <span {...sx.props(text.h4)}>Correct answers: {results.correctAnswerCount}</span>
            <span {...sx.props(text.h4)}>Incorrect answers: {results.incorrectAnswerCount}</span>
          </div>
          <PieChart {...results} />
        </div>
        <Link href="/quiz/results/review">
          <Button {...sx.props(text.button)}>Review notes for Wrong answers.</Button>
        </Link>
      </div>
    </div>
  );
}
