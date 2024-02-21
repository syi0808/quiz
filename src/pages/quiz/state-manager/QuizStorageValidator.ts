import { isLeft } from 'fp-ts/lib/Either';
import * as t from 'io-ts';

export const QuizStorage = t.type({
  time: t.number,
  currentQuizIndex: t.number,
  quizzes: t.array(
    t.intersection([
      t.type({
        type: t.union([t.literal('multiple'), t.literal('boolean')]),
        difficulty: t.union([t.literal('easy'), t.literal('medium'), t.literal('hard')]),
        category: t.string,
        question: t.string,
        answers: t.array(t.string),
        correctAnswerIndex: t.number,
      }),
      t.partial({
        selectedAnswerIndex: t.number,
      }),
    ])
  ),
});

export function validate(quizStorageString: string) {
  const decoded = QuizStorage.decode(JSON.parse(quizStorageString));

  if (isLeft(decoded)) {
    throw Error('JSON format is not valid in quiz storage.');
  } else {
    type QuizStorageT = t.TypeOf<typeof QuizStorage>;
    const decodedQuizStorage: QuizStorageT = decoded.right;

    return decodedQuizStorage;
  }
}
