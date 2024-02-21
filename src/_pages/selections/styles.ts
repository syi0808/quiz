import { colors, fontFamily, text } from '@/shared/styles/tokens.stylex';
import * as sx from '@stylexjs/stylex';

const styles = sx.create({
  container: {
    maxHeight: '60%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px',
    margin: 0,
    padding: 0,
  },
  buttonsContainer: {
    display: 'grid',
    gridTemplateColumns: {
      default: 'repeat(3, 1fr)',
      '@media (max-width: 768px)': 'repeat(2, 1fr)',
    },
    gridAutoRows: '80px',
    gap: '12px',
    overflow: 'auto',
    padding: '8px',
    height: '100%',
    default: '500px',
  },
  button: {
    width: '100%',
    height: '100%',
    fontFamily: fontFamily.roboto,
    padding: '20px',
    borderRadius: '8px',
    border: 'none',
    outline: '2px solid #aaa',
    transition: 'outline 0.1s linear',
  },
  activeButton: {
    outline: '4px solid',
    outlineColor: colors.red,
  },
  title: {
    textAlign: 'center',
  },
});

export const containerStyle = sx.props(styles.container);

export const titleStyle = sx.props(text.h3, styles.title);

export const buttonsContainerStyle = sx.props(styles.buttonsContainer);

export const buttonStyle = (isActive: boolean) => sx.props(styles.button, isActive && styles.activeButton);
