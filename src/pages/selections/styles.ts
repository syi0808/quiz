import { fontFamily } from '@/shared/styles/tokens.stylex';
import * as sx from '@stylexjs/stylex';

const styles = sx.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
  },
  title: {
    fontSize: '28px',
  },
  buttonsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: '80px',
    gap: '12px',
    maxHeight: '500px',
    overflow: 'auto',
  },
  button: {
    width: '100%',
    height: '100%',
    fontFamily: fontFamily.roboto,
    padding: '20px',
  },
  activeButton: {
    border: '2px solid red',
  },
});

export const containerStyle = sx.props(styles.container);

export const titleStyle = sx.props(styles.title);

export const buttonsContainerStyle = sx.props(styles.buttonsContainer);

export const buttonStyle = (isActive: boolean) => sx.props(styles.button, isActive && styles.activeButton);
