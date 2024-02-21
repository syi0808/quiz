import { opentdbHandlers } from '@/app/api/__tests__/mock';
import { quizApiHandlers } from '@/app/api/quiz/__tests__/quizApi.test';
import { quizHandlers } from '@/pages/quiz/api/__tests__/mock';

export const handlers = [...quizHandlers, ...quizApiHandlers, ...opentdbHandlers];
