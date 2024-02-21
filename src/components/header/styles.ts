import { colors, text } from '@/shared/styles/tokens.stylex';
import * as sx from '@stylexjs/stylex';
import { linkVars } from './link.stylex';
import { globalStyles } from '@/shared/styles/globals';

const styles = sx.create({
  container: {
    width: '100%',
    height: '70px',
    minHeight: '70px',
    background: 'rgba(255, 255, 255, 0.92)',
    display: 'flex',
    justifyContent: 'center',
  },
  contentWrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  logoWrapper: {
    color: colors.black,
  },
  navigation: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  link: {
    color: colors.black,
    textDecoration: 'none',
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

export const headerContentWrapperStyle = sx.props(globalStyles.responsiveContainer, styles.contentWrapper);

export const logoWrapperStyle = sx.props(styles.logoWrapper, text.h2);

export const navigationStyle = sx.props(styles.navigation);

export const linkStyle = sx.props(styles.link, text.button);
