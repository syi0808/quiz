import { HttpResponse, http } from 'msw';
import { mockOpentdbHtml } from './mockData';

export const opentdbHandlers = [
  http.get('https://opentdb.com/api_config.php', () => {
    return HttpResponse.text(mockOpentdbHtml);
  }),
  http.get('/api/category', () => {
    return HttpResponse.json([{ label: 'Any Category', value: 'any' }]);
  }),
  http.get('/api/difficulty', () => {
    return HttpResponse.json([{ label: 'Any Difficulty', value: 'any' }]);
  }),
];
