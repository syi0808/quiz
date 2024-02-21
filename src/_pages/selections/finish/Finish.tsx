import { containerStyle, titleStyle } from '../styles';
import Button from '@/components/button/3DButton';

export default function Finish({ onFinish }: { onFinish: () => void }) {
  return (
    <div {...containerStyle}>
      <p {...titleStyle}>Take a quiz based on the information you choose</p>
      <Button onClick={onFinish}>Play</Button>
    </div>
  );
}
