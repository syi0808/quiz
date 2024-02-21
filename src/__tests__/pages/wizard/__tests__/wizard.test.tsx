const mockPushFn = jest.fn((href: string) => {});

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPushFn,
  }),
}));

jest.mock('@/_pages/selections/category-selection/hooks/useCategories', () => {
  const actual = jest.requireActual('@/_pages/selections/category-selection/hooks/useCategories');

  return { ...actual, useCategories: jest.fn(actual.useCategories) };
});

jest.mock('@/_pages/selections/difficulty-selection/hooks/useDifficulties', () => {
  const actual = jest.requireActual('@/_pages/selections/difficulty-selection/hooks/useDifficulties');

  return { ...actual, useDifficulties: jest.fn(actual.useDifficulties) };
});

import '@testing-library/jest-dom';
import Wizard from '@/app/wizard/page';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

describe('Wizard Page', () => {
  test('redirect to quiz page when finish create quiz wizard', async () => {
    render(<Wizard />);

    await waitFor(
      () => {
        expect(screen.getAllByRole('button').at(0)).toHaveTextContent('Any Category');
      },
      { timeout: 2000 }
    );
    const categoryPageFirstButton = screen.getAllByRole('button').at(0)!;
    await userEvent.click(categoryPageFirstButton);

    const categoryPageNextButton = screen.getAllByRole('button').at(-1)!;
    await userEvent.click(categoryPageNextButton);

    await waitFor(
      () => {
        expect(screen.getAllByRole('button').at(0)).toHaveTextContent('Any Difficulty');
      },
      { timeout: 2000 }
    );
    const difficultyPageFirstButton = screen.getAllByRole('button').at(0)!;
    await userEvent.click(difficultyPageFirstButton);

    const difficultyPageNextButton = screen.getAllByRole('button').at(-1)!;
    await userEvent.click(difficultyPageNextButton);

    await waitFor(() => {
      expect(screen.getByRole('button')).toHaveTextContent('Play');
    });
    await userEvent.click(screen.getByRole('button'));

    expect(mockPushFn).toHaveBeenCalledWith('/quiz?category=any&difficulty=any&initialize=true');
  });
});
