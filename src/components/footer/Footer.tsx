import { containerStyle, contentWrapperStyle, linkStyle } from './styles';

export default function Footer() {
  return (
    <div {...containerStyle}>
      <div {...contentWrapperStyle}>
        <p>© 2024 Sung Ye In. All rights reserved.</p>
        <p>
          Image by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.freepik.com/free-photo/soft-gradient-background_47719631.htm"
            {...linkStyle}
          >
            Freepik
          </a>
        </p>
      </div>
    </div>
  );
}
