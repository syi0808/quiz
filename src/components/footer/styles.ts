import { globalStyles } from '@/shared/styles/globals';
import { fontFamily } from '@/shared/styles/tokens.stylex';
import * as sx from '@stylexjs/stylex';

const styles = sx.create({
  container: {
    width: '100%',
    padding: '100px 0',
    background: '#333',
    color: 'white',
    fontFamily: fontFamily.roboto,
  },
  contentWrapper: {
    margin: '0 auto',
    textAlign: 'center',
  },
  link: {
    color: 'white',
    ':active': {
      color: 'white',
    },
    ':visit': {
      color: 'white',
    },
  },
});

export const containerStyle = sx.props(styles.container);

export const contentWrapperStyle = sx.props(globalStyles.responsiveContainer, styles.contentWrapper);

export const linkStyle = sx.props(styles.link);
