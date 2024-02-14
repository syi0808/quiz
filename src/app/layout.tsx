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
    width: '1200px',
    marginHorizontal: 'auto',
  },
});
