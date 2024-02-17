import { sleep } from '@/shared/utils/async';
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

  const getResult = async () => {
    const res = await fetch(`https://opentdb.com/api.php?${searchParams.toString()}`);
    return await res.json();
  };

  do {
    const result = await getResult();

    if (result.response_code === 0) {
      return NextResponse.json(result.results.map(toCamelCase));
    } else {
      await sleep(100);
    }
  } while (1);
}
