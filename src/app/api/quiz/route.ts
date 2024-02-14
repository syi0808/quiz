import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  if (!searchParams.has('amount')) {
    searchParams.set('amount', '10');
  }

  const res = await fetch(`https://opentdb.com/api.php?${searchParams.toString()}`);
  const json = await res.json();

  return NextResponse.json(json);
}
