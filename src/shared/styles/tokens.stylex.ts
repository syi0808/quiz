import * as sx from '@stylexjs/stylex';

export const PRIMARY_GREEN = '#92e856';
export const RED = '#eb2f2f';

export const colors = sx.defineVars({
  primary: PRIMARY_GREEN,
  red: RED,
  black: '#141414',
});

export const fontFamily = sx.defineVars({
  qilkabold: 'Qilkabold',
  roboto: 'Roboto Condensed',
});

export const text = sx.create({
  h1: {
    fontSize: {
      default: '48px',
      '@media (max-width: 768px)': '38px',
    },
    fontWeight: 700,
  },
  h2: {
    fontSize: {
      default: '40px',
      '@media (max-width: 768px)': '30px',
    },
    fontWeight: 700,
  },
  h3: {
    fontSize: {
      default: '32px',
      '@media (max-width: 768px)': '24px',
    },
    fontWeight: 700,
  },
  h4: {
    fontSize: {
      default: '24px',
      '@media (max-width: 768px)': '22px',
    },
    fontWeight: 700,
  },
  h5: {
    fontSize: {
      default: '20px',
      '@media (max-width: 768px)': '18px',
    },
    fontWeight: 700,
  },
  h6: {
    fontSize: {
      default: '18px',
      '@media (max-width: 768px)': '16px',
    },
    fontWeight: 700,
  },
  paragraph: {
    fontSize: '16px',
    fontWeight: 500,
  },
  button: {
    fontSize: {
      default: '18px',
      '@media (max-width: 768px)': '16px',
    },
    fontWeight: 500,
  },
  caption: {
    fontSize: {
      default: '16px',
      '@media (max-width: 768px)': '14px',
    },
    fontWeight: 500,
  },
});
