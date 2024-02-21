import { HttpResponse, http } from 'msw';
import { mockOpentdbHtml } from './mockData';

export const opentdbHandlers = [
  http.get('https://opentdb.com/api_config.php', () => {
    return HttpResponse.text(mockOpentdbHtml);
  }),
];
