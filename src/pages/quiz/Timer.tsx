'use client';

import { formatSecondsToMinutes } from '@/shared/utils/number';
import * as sx from '@stylexjs/stylex';
import { useQuizTimer } from './hooks/useQuizStorage';

export default function Timer() {
  const seconds = useQuizTimer();

  return <span {...sx.props(styles.title)}>{formatSecondsToMinutes(seconds)}</span>;
}

const styles = sx.create({
  title: {
    fontSize: '30px',
  },
});
