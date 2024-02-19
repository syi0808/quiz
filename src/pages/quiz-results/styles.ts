import * as sx from '@stylexjs/stylex';

const styles = sx.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px',
  },
  scoreContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
  },
  analyticsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
});

export const containerStyle = sx.props(styles.container);

export const scoreContainer = sx.props(styles.scoreContainer);

export const analyticsContainer = sx.props(styles.analyticsContainer);
