import { colors } from '@/shared/styles/tokens.stylex';
import * as sx from '@stylexjs/stylex';
import { linkVars } from './link.stylex';

const styles = sx.create({
  container: {
    width: '100%',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  logoWrapper: {
    color: colors.black,
    fontSize: '32px',
  },
  navigation: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  link: {
    color: colors.black,
    textDecoration: 'none',
    fontSize: '18px',
    position: 'relative',
    '::before': {
      content: '',
      position: 'absolute',
      width: '100%',
      height: '4px',
      borderRadius: '4px',
      backgroundColor: colors.black,
      bottom: 0,
      left: 0,
      transformOrigin: linkVars.transformOrigin,
      transform: linkVars.trasnform,
      transition: 'transform .3s ease-in-out',
    },
    ':hover': {
      [linkVars.transformOrigin]: 'left',
      [linkVars.trasnform]: 'scaleX(1)',
    },
  },
});

export const headerContainerStyle = sx.props(styles.container);

export const logoWrapperStyle = sx.props(styles.logoWrapper);

export const navigationStyle = sx.props(styles.navigation);

export const linkStyle = sx.props(styles.link);
