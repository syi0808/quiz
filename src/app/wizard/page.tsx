'use client';

import Step from '@/components/step/Step';
import CategorySelection from '@/_pages/selections/category-selection/CategorySelection';
import DifficultySelection from '@/_pages/selections/difficulty-selection/DifficultySelection';
import Finish from '@/_pages/selections/finish/Finish';
import * as sx from '@stylexjs/stylex';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { responesiveContainerStyle } from '@/_pages/quiz/styles';

export default function Wizard() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<string>();
  const [difficulty, setDifficulty] = useState<string>();
  const router = useRouter();

  const onFinish = () => {
    const searchParams = new URLSearchParams([
      ['category', category ?? ''],
      ['difficulty', difficulty ?? ''],
      ['initialize', 'true'],
    ]);

    router.push(`/quiz?${searchParams.toString()}`);
  };

  return (
    <div {...responesiveContainerStyle}>
      <div {...sx.props(styles.container)}>
        <Step
          steps={[{ label: 'Category' }, { label: 'Difficulty' }, { label: 'Finish' }]}
          currentStep={step}
          changeStep={setStep}
        />
        {
          {
            1: (
              <CategorySelection
                initialCategory={category}
                onNext={(category) => (setStep(2), setCategory(category))}
              />
            ),
            2: (
              <DifficultySelection
                initialDifficulty={difficulty}
                onNext={(difficulty) => (setStep(3), setDifficulty(difficulty))}
              />
            ),
            3: <Finish onFinish={onFinish} />,
          }[step]
        }
      </div>
    </div>
  );
}

const styles = sx.create({
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '24px',
  },
});
