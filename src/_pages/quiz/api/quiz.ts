import * as t from 'io-ts';
import { isLeft } from 'fp-ts/lib/Either';
import { getRandomInterger } from '@/shared/utils/random';

const QuizResponse = t.array(
  t.type({
    type: t.union([t.literal('multiple'), t.literal('boolean')]),
    difficulty: t.union([t.literal('easy'), t.literal('medium'), t.literal('hard')]),
    category: t.string,
    question: t.string,
    correctAnswer: t.string,
    incorrectAnswers: t.array(t.string),
  })
);

export interface Quiz {
  type: 'multiple' | 'boolean';
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  question: string;
  answers: string[];
  correctAnswerIndex: number;
}

export const getQuizzes = async (searchParams: URLSearchParams) => {
  const res = await fetch(`/api/quiz?${searchParams.toString()}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const results = await res.json();

  const decoded = QuizResponse.decode(results);

  if (isLeft(decoded)) {
    throw Error('It seems like there was an issue with the response from the Quiz API.');
  }

  type QuizReponseT = t.TypeOf<typeof QuizResponse>;
  const computedQuizResults = (results as QuizReponseT).map((result) => {
    const { incorrectAnswers, correctAnswer, ...camelCaseResult } = result;
    const randomCorrectAnswerIndex = getRandomInterger(0, incorrectAnswers.length);

    return {
      ...camelCaseResult,
      correctAnswerIndex: randomCorrectAnswerIndex,
      answers: incorrectAnswers.toSpliced(randomCorrectAnswerIndex, 0, correctAnswer),
    };
  }) as Quiz[];

  return computedQuizResults;
};
