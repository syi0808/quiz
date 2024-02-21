import { opentdbHandlers } from '@/__tests__/api/__tests__/mock';
import { quizApiHandlers } from '@/__tests__/api/quiz/__tests__/quizApi.test';
import { quizHandlers } from '@/_pages/quiz/api/__tests__/mock';

export const handlers = [...quizHandlers, ...quizApiHandlers, ...opentdbHandlers];
