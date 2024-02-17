'use client';

import { formatSecondsToMinutes } from '@/shared/utils/number';
import * as sx from '@stylexjs/stylex';
import { useSeconds } from './hooks/useSeconds';

export default function Timer() {
  const seconds = useSeconds();

  return <span {...sx.props(styles.title)}>{formatSecondsToMinutes(seconds)}</span>;
}

const styles = sx.create({
  title: {
    fontSize: '30px',
  },
});
