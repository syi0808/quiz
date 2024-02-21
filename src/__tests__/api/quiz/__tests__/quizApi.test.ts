import { GET } from '../../../../app/api/quiz/route';
import { NextRequest } from 'next/server';

import { HttpResponse, http } from 'msw';

const mockApiFn = jest.fn((_queryParams) => void 0);

export const quizApiHandlers = [
  http.get('https://opentdb.com/api.php', ({ request }) => {
    const url = new URL(request.url);

    mockApiFn(url.search);

    return HttpResponse.json({ response_code: 0, results: [] });
  }),
];

describe('Get Quiz API', () => {
  test('remove query params that value is any', async () => {
    const _ = await GET({
      url: 'http://localhost:3000/api/quiz?category=any&difficulty=easy&amount=10',
    } as NextRequest);

    expect(mockApiFn).toBeCalledWith('?difficulty=easy&amount=10');
  });

  test('add amount query param automatic', async () => {
    const _ = await GET({
      url: 'http://localhost:3000/api/quiz',
    } as NextRequest);

    expect(mockApiFn).toBeCalledWith('?amount=10');
  });
});
