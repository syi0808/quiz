import { describe, test, expect } from '@jest/globals';
import { GET } from '../route';
import { NextRequest } from 'next/server';

describe('Get Category API', () => {
  test('receive and parsing categories correctly from html', async () => {
    const response = await GET({
      url: 'http://localhost:3000/api/category',
    } as NextRequest);

    const json = await response.json();

    expect(json).toMatchSnapshot();
  });
});
