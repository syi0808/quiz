import Link from 'next/link';
import Logo from './Logo';
import { headerContainerStyle, headerContentWrapperStyle, linkStyle, navigationStyle } from './styles';

export default function Header() {
  return (
    <header {...headerContainerStyle}>
      <div {...headerContentWrapperStyle}>
        <Logo />
        <nav {...navigationStyle}>
          <Link href="/wizard" {...linkStyle}>
            Play
          </Link>
        </nav>
      </div>
    </header>
  );
}
