import Logo from './Logo';
import { headerContainerStyle } from './styles';

export default function Header() {
  return (
    <header {...headerContainerStyle}>
      <Logo />
    </header>
  );
}
