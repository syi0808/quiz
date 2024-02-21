import { GET } from '../../../../app/api/difficulty/route';
import { NextRequest } from 'next/server';

describe('Get Difficulty API', () => {
  test('receive and parsing difficulties correctly from html', async () => {
    const response = await GET({
      url: 'http://localhost:3000/api/difficulty',
    } as NextRequest);

    const json = await response.json();

    expect(json).toMatchSnapshot();
  });
});
