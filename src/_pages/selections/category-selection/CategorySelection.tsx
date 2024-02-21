'use client';

import { useState } from 'react';
import Loading from '../../loading/Loading';
import { useCategories } from './hooks/useCategories';
import { buttonStyle, buttonsContainerStyle, containerStyle, titleStyle } from '../styles';
import Button from '@/components/button/3DButton';

export default function CategorySelection({
  initialCategory,
  onNext,
}: {
  initialCategory?: string;
  onNext: (category: string) => void;
}) {
  const [category, setCategory] = useState<string | undefined>(initialCategory);
  const { isLoading, data } = useCategories();

  return (
    <div {...containerStyle}>
      {isLoading && <Loading />}
      <p {...titleStyle}>What category of quiz do you want?</p>
      <div {...buttonsContainerStyle}>
        {data?.map(({ label, value }) => (
          <button role="button" key={value} onClick={() => setCategory(value)} {...buttonStyle(value === category)}>
            {label}
          </button>
        ))}
      </div>
      <Button disabled={!category} onClick={() => onNext(category ?? '')}>
        Next
      </Button>
    </div>
  );
}
