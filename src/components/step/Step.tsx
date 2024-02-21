import { colors, fontFamily } from '@/shared/styles/tokens.stylex';
import * as sx from '@stylexjs/stylex';
import CheckIcon from '../icons/Check';

interface Step {
  label: string;
}

export default function Step({ currentStep, steps }: { currentStep: number; steps: Step[] }) {
  const stepsLength = steps.length;

  return (
    <div {...sx.props(styles.container)}>
      {steps.map(({ label }, index) => (
        <div key={index} {...sx.props(styles.container)}>
          <div {...sx.props(styles.circle, index < currentStep && styles.activeCircle)}>
            {index > currentStep - 2 ? index + 1 : <CheckIcon />}
            <div {...sx.props(styles.circleLabel)}>{label}</div>
          </div>
          {index < stepsLength - 1 && (
            <div {...sx.props(styles.line, index < currentStep - 1 && styles.activeLine)}></div>
          )}
        </div>
      ))}
    </div>
  );
}

const styles = sx.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: fontFamily.roboto,
  },
  circle: {
    background: '#999',
    border: '8px solid',
    borderColor: '#ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    transition: 'all 0.3s linear',
    borderRadius: '50%',
    color: 'white',
    position: 'relative',
  },
  circleLabel: {
    position: 'absolute',
    bottom: 'calc(100% + 12px)',
    left: '50%',
    transform: 'translateX(-50%)',
    color: colors.black,
  },
  line: {
    width: '160px',
    height: '10px',
    background: 'transparent',
    borderTop: '3px solid',
    borderBottom: '3px solid',
    borderColor: '#ccc',
    transition: 'all 0.2s ease-in-out',
  },
  activeCircle: {
    background: colors.primary,
    borderColor: '#eee',
  },
  activeLine: {
    background: colors.primary,
    borderColor: '#eee',
  },
});
