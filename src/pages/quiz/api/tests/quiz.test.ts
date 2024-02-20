jest.mock('@/shared/utils/random');

import { describe, expect, jest, test } from '@jest/globals';
import { HttpResponse, http } from 'msw';
import { getQuizzes } from '../quiz';

const getRandomInterger = () => 1;

const mockResponse: unknown[] = [
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'any',
    question: 'question',
    correctAnswer: 'correct',
    incorrecetAnswers: ['incorrect', 'incorrect', 'incorrect'],
  },
];

const errorMockResponse: unknown[] = [{ wrongProperty: 'wrongValue' }];

export const quizHandlers = [
  http.get('/api/quiz', ({ params }) => {
    if (params.category === 'error') {
      return HttpResponse.json(errorMockResponse);
    }

    return HttpResponse.json(mockResponse);
  }),
];

describe('Get quizzes function', () => {
  test('converts to computed values from correct response', async () => {
    const response = await getQuizzes(new URLSearchParams());

    expect(response).toMatchObject({
      type: 'multiple',
      difficulty: 'easy',
      category: 'any',
      question: 'question',
      correctAnswerIndex: 1,
      answers: ['incorrect', 'correct', 'incorrect', 'incorrect'],
    });
  });
});
