import Link from 'next/link';
import { containerStyle, titleStyle } from '../styles';

export default function Finish({ onFinish }: { onFinish: () => void }) {
  return (
    <div {...containerStyle}>
      <p {...titleStyle}>Take a quiz based on the information you choose</p>
      <button onClick={onFinish}>Play</button>
    </div>
  );
}
