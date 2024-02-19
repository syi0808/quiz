import * as sx from '@stylexjs/stylex';

export const PRIMARY_GREEN = '#6ccc29';
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
    fontSize: '48px',
    fontWeight: 700,
  },
  h2: {
    fontSize: '40px',
    fontWeight: 700,
  },
  h3: {
    fontSize: '32px',
    fontWeight: 700,
  },
  h4: {
    fontSize: '24px',
    fontWeight: 700,
  },
  h5: {
    fontSize: '20px',
    fontWeight: 700,
  },
  h6: {
    fontSize: '18px',
    fontWeight: 700,
  },
  paragraph: {
    fontSize: '16px',
    fontWeight: 500,
  },
  button: {
    fontSize: '18px',
    fontWeight: 500,
  },
  caption: {
    fontSize: '16px',
    fontWeight: 500,
  },
});
