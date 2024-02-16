import * as sx from '@stylexjs/stylex';

const styles = sx.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingVertical: '100px',
  },
});

export const containerStyle = sx.props(styles.container);
