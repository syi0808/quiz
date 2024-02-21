jest.mock('@/shared/utils/random', () => ({
  getRandomInterger: jest.fn(() => 1),
}));

import { getQuizzes } from '../quiz';
import { getRandomInterger } from '@/shared/utils/random';

describe('Get quizzes function', () => {
  test('converts to computed values from correct response', async () => {
    const response = await getQuizzes(new URLSearchParams());

    expect(getRandomInterger).toHaveBeenCalled();
    expect(response).toMatchObject([
      {
        type: 'multiple',
        difficulty: 'easy',
        category: 'any',
        question: 'question',
        correctAnswerIndex: 1,
        answers: ['incorrect', 'correct', 'incorrect', 'incorrect'],
      },
    ]);
  });

  test('throw error when receive wrong response', async () => {
    expect(async () => {
      await getQuizzes(new URLSearchParams([['category', 'error']]));
    }).rejects.toThrow(new Error('It seems like there was an issue with the response from the Quiz API.'));
  });
});
