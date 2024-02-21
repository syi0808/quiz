import { HttpResponse, http } from 'msw';

const mockResponse: unknown[] = [
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'any',
    question: 'question',
    correctAnswer: 'correct',
    incorrectAnswers: ['incorrect', 'incorrect', 'incorrect'],
  },
];

const errorMockResponse: unknown[] = [{ wrongProperty: 'wrongValue' }];

export const quizHandlers = [
  http.get('/api/quiz', ({ request }) => {
    const url = new URL(request.url);

    if (url.searchParams.get('category') === 'error') {
      return HttpResponse.json(errorMockResponse);
    }

    return HttpResponse.json(mockResponse);
  }),
];
