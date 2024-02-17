import * as sx from '@stylexjs/stylex';

const styles = sx.create({
  container: {
    height: '100%',
    maxHeight: '600px',
    marginVertical: 'auto',
    paddingBottom: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
  },
  questionWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  question: {
    textAlign: 'center',
  },
});

export const containerStyle = sx.props(styles.container);

export const questionWrapperStyle = sx.props(styles.questionWrapper);

export const questionStyle = sx.props(styles.question);
