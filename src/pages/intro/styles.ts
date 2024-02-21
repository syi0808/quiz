import { colors, fontFamily, text } from '@/shared/styles/tokens.stylex';
import * as sx from '@stylexjs/stylex';

const styles = sx.create({
  container: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    fontFamily: fontFamily.roboto,
    color: colors.black,
    position: 'relative',
  },
});

export const containerStyle = sx.props(styles.container, text.h1);
