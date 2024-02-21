'use client';

import { formatSecondsToMinutes } from '@/shared/utils/number';
import * as sx from '@stylexjs/stylex';
import { useQuizTimer } from './hooks/useQuizStorage';
import { text } from '@/shared/styles/tokens.stylex';

export default function Timer() {
  const seconds = useQuizTimer();

  return <span {...sx.props(text.h3)}>{formatSecondsToMinutes(seconds)}</span>;
}
