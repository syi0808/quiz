import toCamelCase from '@/shared/utils/object';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  if (!searchParams.has('amount')) {
    searchParams.set('amount', '10');
  }

  if (searchParams.get('category') === 'any') {
    searchParams.delete('category');
  }

  if (searchParams.get('difficulty') === 'any') {
    searchParams.delete('difficulty');
  }

  const res = await fetch(`https://opentdb.com/api.php?${searchParams.toString()}`);
  const { results } = await res.json();

  console.log(results);

  return NextResponse.json(results.map(toCamelCase));
}
