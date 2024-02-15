'use client';

import Step from '@/components/step/Step';
import CategorySelection from '@/pages/category-selection/CategorySelection';
import DifficultySelection from '@/pages/difficulty-selection/DifficultySelection';
import * as sx from '@stylexjs/stylex';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Wizard() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<string>();
  const [difficulty, setDifficulty] = useState<string>();
  const router = useRouter();

  const onFinish = () => {
    router.push('/quiz');
  };

  return (
    <div {...sx.props(styles.container)}>
      <Step max={3} step={step} />
      {
        {
          1: (
            <CategorySelection initialCategory={category} onNext={(category) => (setStep(2), setCategory(category))} />
          ),
          2: <DifficultySelection />,
          3: <Finish onFinish={onFinish} />,
        }[step]
      }
    </div>
  );
}

function Finish({ onFinish }: { onFinish: () => void }) {
  return <></>;
}

const styles = sx.create({
  container: {
    position: 'absolute',
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
