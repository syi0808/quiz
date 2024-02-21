import { fontFamily } from '@/shared/styles/tokens.stylex';
import * as sx from '@stylexjs/stylex';

const styles = sx.create({
  contianer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    color: 'white',
    fontSize: '24px',
    fontFamily: fontFamily.roboto,
  },
});

export const containerStyle = sx.props(styles.contianer);

export const loadingTextStyle = sx.props(styles.loadingText);
