import { describe, expect, test } from '@jest/globals';
import { validate } from '../QuizStorageValidator';

const quizStorage = {
  time: 0,
  currentQuizIndex: 0,
  quizzes: [
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'category',
      question: 'question',
      answers: ['True', 'False'],
      correctAnswerIndex: 1,
      selectedAnswerIndex: 1,
    },
  ],
};

describe('Quiz storage validator', () => {
  test('call callback function with type safe json from correct json string', () => {
    const result = validate(JSON.stringify(quizStorage));

    expect(result).toMatchObject(quizStorage);
  });

  test('throw error with incorrectly params', () => {
    expect(() => {
      validate(JSON.stringify({}));
    }).toThrow(new Error('JSON format is not valid in quiz storage.'));
  });
});
