import Header from '@/components/header/Header';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import * as sx from '@stylexjs/stylex';
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
    width: {
      default: null,
      '@media (min-width: 1241px)': '1200px',
      '@media (max-width: 1240px)': '100%',
    },
    padding: {
      default: null,
      '@media (max-width: 1240px)': '0 20px',
    },
    marginHorizontal: 'auto',
  },
});
