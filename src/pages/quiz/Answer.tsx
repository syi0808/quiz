'use client';

import * as sx from '@stylexjs/stylex';
import { useQuizStorage } from './hooks/useQuizStorage';
import { QuizWithInformation } from './state-manager/QuizStorageManager';

export default function Answer({ answers, correctAnswerIndex, selectedAnswerIndex }: QuizWithInformation) {
  const { currentQuizIndex, setSelectedAnswerIndex } = useQuizStorage();
  const isAnswer = selectedAnswerIndex === correctAnswerIndex;

  const handleAnswerButton = (index: number) => () => {
    setSelectedAnswerIndex(currentQuizIndex, index);
  };

  return (
    <div {...sx.props(styles.container)}>
      {answers.map((answer, index) => {
        const isSelectedButton = selectedAnswerIndex === index;

        return (
          <button
            onClick={handleAnswerButton(index)}
            disabled={selectedAnswerIndex !== undefined}
            key={answer}
            {...sx.props(styles.button, isSelectedButton && getAnswerButtonStyle(isAnswer))}
          >
            {answer}
          </button>
        );
      })}
    </div>
  );
}

const getAnswerButtonStyle = (isAnswer: boolean) => {
  return isAnswer ? styles.correctAnswerButton : styles.incorrectAnswerButton;
};

const styles = sx.create({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr',
    gap: '12px',
  },
  button: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px 32px',
  },
  correctAnswerButton: {
    border: '1px solid green',
  },
  incorrectAnswerButton: {
    border: '1px solid tomato',
  },
});
