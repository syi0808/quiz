import Link from 'next/link';
import Logo from './Logo';
import { headerContainerStyle, linkStyle, navigationStyle } from './styles';

export default function Header() {
  return (
    <header {...headerContainerStyle}>
      <Logo />
      <nav {...navigationStyle}>
        <Link href="/wizard" {...linkStyle}>
          Play
        </Link>
      </nav>
    </header>
  );
}
