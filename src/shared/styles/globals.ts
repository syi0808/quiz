import * as sx from '@stylexjs/stylex';

export const globalStyles = sx.create({
  responsiveContainer: {
    width: {
      default: null,
      '@media (min-width: 1241px)': '1200px',
      '@media (max-width: 1240px)': '100%',
    },
    padding: {
      default: null,
      '@media (max-width: 1240px)': '0 20px',
    },
  },
});
