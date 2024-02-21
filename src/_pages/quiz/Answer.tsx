'use client';

import * as sx from '@stylexjs/stylex';
import { useQuizStorage } from './hooks/useQuizStorage';
import { QuizWithInformation } from './state-manager/QuizStorageManager';
import CheckIcon from '@/components/icons/Check';
import { colors, text } from '@/shared/styles/tokens.stylex';

export default function Answer({
  answers,
  correctAnswerIndex,
  selectedAnswerIndex,
  showCorrectAnswer = false,
}: QuizWithInformation & {
  showCorrectAnswer?: boolean;
}) {
  const { currentQuizIndex, setSelectedAnswerIndex } = useQuizStorage();
  const isAnswer = selectedAnswerIndex === correctAnswerIndex;

  const handleAnswerButton = (index: number) => () => {
    setSelectedAnswerIndex(currentQuizIndex, index);
  };

  return (
    <div {...sx.props(styles.container)}>
      {answers.map((answer, index) => {
        const isSelectedButton = selectedAnswerIndex === index;
        const isAnswerButton = correctAnswerIndex === index;

        return (
          <button
            onClick={handleAnswerButton(index)}
            disabled={selectedAnswerIndex !== undefined}
            key={answer}
            {...sx.props(text.h4, styles.button, isSelectedButton && getAnswerButtonStyle(isAnswer))}
          >
            {showCorrectAnswer && isAnswerButton && <CheckIcon style={styles.correctAnswerButton} />}
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        );
      })}
    </div>
  );
}

const getAnswerButtonStyle = (isAnswer: boolean) => {
  return isAnswer ? styles.correctSelectedButton : styles.incorrectSelectedButton;
};

const styles = sx.create({
  container: {
    padding: '4px',
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
    padding: '32px 44px',
    position: 'relative',
    border: 'none',
    borderRadius: '8px',
    ':not([disabled]):hover': {
      filter: 'brightness(0.9)',
    },
  },
  correctAnswerButton: {
    width: '36px',
    height: '36px',
    fill: colors.primary,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  correctSelectedButton: {
    outline: '4px solid',
    outlineColor: colors.primary,
  },
  incorrectSelectedButton: {
    outline: '4px solid',
    outlineColor: colors.red,
  },
});
