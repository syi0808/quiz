import { globalStyles } from '@/shared/styles/globals';
import { fontFamily, text } from '@/shared/styles/tokens.stylex';
import * as sx from '@stylexjs/stylex';

const styles = sx.create({
  responsiveContainer: {
    height: '100%',
    display: 'flex',
    padding: {
      default: null,
      '@media (max-width: 768px)': '10px',
    },
  },
  container: {
    padding: {
      default: '80px 60px',
      '@media (max-width: 768px)': '80px 20px 40px 20px',
    },
    height: '100%',
    maxHeight: '780px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    background: 'white',
    borderRadius: '20px',
    position: 'relative',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
  },
  quizMatedata: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  questionWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: fontFamily.roboto,
  },
  question: {
    textAlign: 'center',
  },
});

export const responesiveContainerStyle = sx.props(styles.responsiveContainer);

export const containerStyle = sx.props(globalStyles.responsiveContainer, styles.container);

export const quizMatedataStyle = sx.props(styles.quizMatedata);

export const questionWrapperStyle = sx.props(styles.questionWrapper);

export const questionStyle = sx.props(styles.question, text.h2);
