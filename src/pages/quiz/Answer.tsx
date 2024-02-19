'use client';

import * as sx from '@stylexjs/stylex';
import { useQuizStorage } from './hooks/useQuizStorage';
import { QuizWithInformation } from './state-manager/QuizStorageManager';
import CheckIcon from '@/components/icons/Check';
import { colors } from '@/shared/styles/tokens.stylex';

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
  console.log(correctAnswerIndex, selectedAnswerIndex);

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
            {...sx.props(styles.button, isSelectedButton && getAnswerButtonStyle(isAnswer))}
          >
            {showCorrectAnswer && isAnswerButton && <CheckIcon style={styles.correctAnswerButton} />}
            {answer}
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
    padding: '40px 60px',
    position: 'relative',
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
    border: '1px solid',
    borderColor: colors.primary,
  },
  incorrectSelectedButton: {
    border: '1px solid',
    borderColor: colors.red,
  },
});
