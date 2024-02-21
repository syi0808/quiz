import Spinner from '@/components/spinner/Spinner';
import { containerStyle, loadingTextStyle } from './styles';

export default function Loading({ loadingText = 'Loading...' }: { loadingText?: string }) {
  return (
    <div {...containerStyle}>
      <p {...loadingTextStyle}>{loadingText}</p>
      <Spinner />
    </div>
  );
}
