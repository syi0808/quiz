import { globalStyles } from '@/shared/styles/globals';
import { fontFamily } from '@/shared/styles/tokens.stylex';
import * as sx from '@stylexjs/stylex';

const styles = sx.create({
  container: {
    height: '100%',
    maxHeight: '760px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    background: 'white',
    padding: '80px 60px',
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

export const containerStyle = sx.props(globalStyles.responsiveContainer, styles.container);

export const quizMatedataStyle = sx.props(styles.quizMatedata);

export const questionWrapperStyle = sx.props(styles.questionWrapper);

export const questionStyle = sx.props(styles.question);
