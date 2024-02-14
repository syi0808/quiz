import { NextRequest, NextResponse } from 'next/server';
import cheerio from 'cheerio';

export async function GET(request: NextRequest) {
  const res = await fetch('https://opentdb.com/api_config.php');
  const html = await res.text();
  const $ = cheerio.load(html);

  const categories: { label: string; value: string }[] = $('select[name=trivia_difficulty]:first')
    .children()
    .toArray()
    .reduce((categories, optionElement) => {
      categories.push({
        label: (optionElement.children[0] as { data: string }).data,
        value: optionElement.attribs.value,
      });

      return categories;
    }, [] as { label: string; value: string }[]);

  return NextResponse.json(categories);
}
