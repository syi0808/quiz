import * as sx from '@stylexjs/stylex';

const styles = sx.create({
  container: {
    width: '100%',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
  },
  logoWrapper: {
    color: 'black',
    fontSize: '32px',
  },
});

export const headerContainerStyle = sx.props(styles.container);

export const logoWrapperStyle = sx.props(styles.logoWrapper);
