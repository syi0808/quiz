const mockPushFn = jest.fn((href: string) => {});

jest.mock('next/navigation', () => {
  const actual = jest.requireActual('next/navigation');

  return {
    ...actual,
    useRouter: () => ({
      ...actual.useRouter,
      replace: jest.fn((href: string) => {}),
      push: mockPushFn,
    }),
  };
});

jest.mock('@/_pages/quiz/state-manager/QuizStorageManager', () => ({
  QuizStorageManager: MockQuizStorageManager,
}));

import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import QuizPage from '@/app/quiz/page';
import { MockQuizStorageManager } from './mock';

describe('Quiz Page', () => {
  test('redirect to result page when finish quiz game', async () => {
    render(<QuizPage />);

    await waitFor(() => {
      expect(screen.getAllByRole('button').at(-1)).toBeInTheDocument();
    });

    await userEvent.click(screen.getAllByRole('button').at(0)!);
    await userEvent.click(screen.getAllByRole('button').at(-1)!);

    expect(screen.getAllByRole('button').at(-1)).toHaveTextContent('Result');
    expect(mockPushFn).toHaveBeenCalledWith('/quiz/results');
  });
});
