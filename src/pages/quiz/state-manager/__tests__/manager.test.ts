jest.mock('../../api/quiz', () => {
  const actual = jest.requireActual('../../api/quiz') as any;

  return {
    ...actual,
    getQuizzes: jest.fn(actual.getQuizzes),
  };
});
jest.mock('@/shared/utils/random', () => ({
  __esModule: true,
  getRandomInterger: jest.fn(() => 1),
}));

import { describe, expect, jest, test } from '@jest/globals';
import { QUIZ_STORAGE_NAME, QuizStorageManager, QuizWithInformation } from '../QuizStorageManager';
import { getQuizzes } from '../../api/quiz';

const quizStorage = {
  time: 0,
  currentQuizIndex: 0,
  initialized: false,
  quizzes: [
    {
      type: 'multiple' as const,
      difficulty: 'easy' as const,
      category: 'any',
      question: 'question',
      answers: ['incorrect', 'correct', 'incorrect', 'incorrect'],
      correctAnswerIndex: 1,
      selectedAnswerIndex: 1,
    },
  ],
};

const getQuizStorage = (quiz: Partial<QuizWithInformation>) => ({
  ...quizStorage,
  quizzes: [
    {
      ...quizStorage.quizzes[0],
      ...quiz,
    },
  ],
});

describe('Quiz storage manager', () => {
  test('initialize method return correctly value with exist localStorage', async () => {
    jest.spyOn(global.Storage.prototype, 'getItem').mockReturnValueOnce(JSON.stringify(quizStorage));

    const singleton = new QuizStorageManager();
    const result = await singleton.initialize();

    expect(getQuizzes).toBeCalledTimes(0);
    expect(result).toMatchObject(quizStorage);
    expect(singleton.initialize).toBeTruthy();
  });

  test('initialize method return correctly value with not exist localStorage', async () => {
    jest.spyOn(global.Storage.prototype, 'getItem').mockReturnValueOnce(null);

    const singleton = new QuizStorageManager();
    const result = await singleton.initialize();

    expect(getQuizzes).toBeCalledTimes(1);
    expect(result).toMatchObject({
      time: 0,
      currentQuizIndex: 0,
      quizzes: [
        {
          type: 'multiple',
          difficulty: 'easy',
          category: 'any',
          question: 'question',
          answers: ['incorrect', 'correct', 'incorrect', 'incorrect'],
          correctAnswerIndex: 1,
        },
      ],
    });
    expect(singleton.initialize).toBeTruthy();
  });

  test('setQuizzes method call listners and update localStorage', () => {
    const mockSubscriber = jest.fn();
    const mockSetItem = jest
      .spyOn(global.Storage.prototype, 'setItem')
      .mockImplementation((key: string, value: any) => void 0);

    const singleton = new QuizStorageManager();

    singleton.subscribe(mockSubscriber);

    const quizzesValue = [] as QuizWithInformation[];

    singleton.setQuizzes(quizzesValue);

    expect(mockSubscriber).toBeCalledTimes(1);
    expect(mockSetItem).toBeCalledWith(
      QUIZ_STORAGE_NAME,
      JSON.stringify({
        time: 0,
        currentQuizIndex: 0,
        initialized: false,
        quizzes: quizzesValue,
      })
    );
  });

  test('setCurrentQuizIndex method call listners and update localStorage', () => {
    const mockSubscriber = jest.fn();
    const mockSetItem = jest
      .spyOn(global.Storage.prototype, 'setItem')
      .mockImplementation((key: string, value: any) => void 0);

    const singleton = new QuizStorageManager();

    singleton.subscribe(mockSubscriber);

    const quizIndexValue = 1;

    singleton.setCurrentQuizIndex(quizIndexValue);

    expect(mockSubscriber).toBeCalledTimes(1);
    expect(mockSetItem).toBeCalledWith(
      QUIZ_STORAGE_NAME,
      JSON.stringify({
        time: 0,
        currentQuizIndex: quizIndexValue,
        initialized: false,
      })
    );
  });

  test('setSelectedAnswerIndex method call listners and update localStorage', () => {
    const mockSubscriber = jest.fn();
    const mockSetItem = jest
      .spyOn(global.Storage.prototype, 'setItem')
      .mockImplementation((key: string, value: any) => void 0);

    const singleton = new QuizStorageManager();

    singleton.subscribe(mockSubscriber);

    singleton.setQuizzes(quizStorage.quizzes);

    const answerIndexValue = 2;

    singleton.setSelectedAnswerIndex(0, answerIndexValue);

    expect(mockSubscriber).toBeCalledTimes(2);
    expect(mockSetItem).lastCalledWith(
      QUIZ_STORAGE_NAME,
      JSON.stringify(getQuizStorage({ selectedAnswerIndex: answerIndexValue }))
    );
  });

  test('setTimeWithoutStateChange method not call listners and update localStorage', () => {
    const mockSubscriber = jest.fn();
    const mockSetItem = jest
      .spyOn(global.Storage.prototype, 'setItem')
      .mockImplementation((key: string, value: any) => void 0);

    const singleton = new QuizStorageManager();

    singleton.subscribe(mockSubscriber);

    const timeValue = 1;

    singleton.setTimeWithoutStateChange(timeValue);

    expect(mockSubscriber).toBeCalledTimes(0);
    expect(mockSetItem).toBeCalledWith(
      QUIZ_STORAGE_NAME,
      JSON.stringify({
        time: timeValue,
        currentQuizIndex: 0,
        initialized: false,
      })
    );
  });
});
