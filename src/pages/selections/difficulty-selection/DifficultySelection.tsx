'use client';

import Loading from '@/pages/loading/Loading';
import { buttonStyle, buttonsContainerStyle, containerStyle, titleStyle } from '../styles';
import { useState } from 'react';
import { useDifficulties } from './hooks/useDifficulties';
import Button from '@/components/button/3DButton';

export default function DifficultySelection({
  onNext,
  initialDifficulty,
}: {
  onNext: (difficulty: string) => void;
  initialDifficulty?: string;
}) {
  const [category, setCategory] = useState<string | undefined>(initialDifficulty);
  const { isLoading, data } = useDifficulties();

  return (
    <div {...containerStyle}>
      {isLoading && <Loading />}
      <p {...titleStyle}>What level of difficulty do you want the quiz?</p>
      <div {...buttonsContainerStyle}>
        {data?.map(({ label, value }) => (
          <button key={value} onClick={() => setCategory(value)} {...buttonStyle(value === category)}>
            {label}
          </button>
        ))}
      </div>
      <Button onClick={() => onNext(category ?? '')}>Next</Button>
    </div>
  );
}
