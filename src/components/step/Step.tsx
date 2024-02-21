import { colors, fontFamily } from '@/shared/styles/tokens.stylex';
import * as sx from '@stylexjs/stylex';
import CheckIcon from '../icons/Check';

interface Step {
  label: string;
}

export default function Step({
  currentStep,
  steps,
  changeStep,
}: {
  currentStep: number;
  steps: Step[];
  changeStep: (step: number) => void;
}) {
  const stepsLength = steps.length;

  return (
    <div {...sx.props(styles.container)}>
      {steps.map(({ label }, index) => (
        <div key={index} {...sx.props(styles.container)}>
          <div
            onClick={() => changeStep(index + 1)}
            {...sx.props(styles.circle, index < currentStep && styles.activeCircle)}
          >
            {index > currentStep - 2 ? index + 1 : <CheckIcon style={styles.icon} />}
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
    minWidth: {
      default: '50px',
      '@media (max-width: 768px)': '40px',
    },
    minHeight: {
      default: '50px',
      '@media (max-width: 768px)': '40px',
    },
    background: '#999',
    border: '8px solid',
    borderColor: '#ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s linear',
    borderRadius: '50%',
    color: 'white',
    position: 'relative',
    cursor: 'pointer',
  },
  circleLabel: {
    position: 'absolute',
    bottom: 'calc(100% + 12px)',
    left: '50%',
    transform: 'translateX(-50%)',
    color: colors.black,
  },
  line: {
    maxWidth: '160px',
    minWidth: '32px',
    width: '100%',
    height: '10px',
    background: 'transparent',
    borderTop: '3px solid',
    borderBottom: '3px solid',
    borderColor: '#ccc',
    transition: 'all 0.2s ease-in-out',
  },
  activeCircle: {
    background: colors.primary,
    borderColor: '#efefef !important',
  },
  activeLine: {
    background: colors.primary,
    borderColor: '#efefef !important',
  },
  icon: {
    fill: 'white',
  },
});
