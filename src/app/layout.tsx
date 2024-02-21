import Header from '@/components/header/Header';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import * as sx from '@stylexjs/stylex';
import Image from 'next/image';
import backgroundImage from '@/assets/soft-gradient-background.jpg';
import '@/shared/styles/globals.css';
import '@/shared/styles/reset.css';

export const metadata: Metadata = {
  title: 'QuizUp',
  description: 'Take quizzes in various categories and build knowledge.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Image
          src={backgroundImage.src}
          width={backgroundImage.width}
          height={backgroundImage.height}
          alt="flat wave green background"
          {...sx.props(styles.backgroundImage)}
        />
        <div {...sx.props(styles.container)}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

const styles = sx.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '100%',
    marginHorizontal: 'auto',
    overflow: 'auto',
  },
  backgroundImage: {
    width: '100vw !important',
    height: '100vh !important',
    objectFit: 'cover',
    position: 'absolute',
    zIndex: -1,
  },
});
