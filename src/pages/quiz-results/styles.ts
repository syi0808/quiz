import * as sx from '@stylexjs/stylex';

const styles = sx.create({
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
    flexDirection: {
      default: 'row',
      '@media (max-width: 768px)': 'column',
    },
  },
});

export const scoreContainer = sx.props(styles.scoreContainer);

export const analyticsContainer = sx.props(styles.analyticsContainer);
