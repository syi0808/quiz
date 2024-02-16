import * as sx from '@stylexjs/stylex';

const styles = sx.create({
  title: {
    fontSize: '30px',
  },
});

export const titleStyle = sx.props(styles.title);
