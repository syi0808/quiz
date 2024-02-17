'use client';

import { Quiz } from '@/app/quiz/page';
import * as t from 'io-ts';
import { isLeft } from 'fp-ts/lib/Either';

type QuizWithInformation = Quiz & {
  selectedAnswer?: string;
};

interface QuizStorage {
  time: number;
  currentQuizIndex: number;
  quizzes?: QuizWithInformation[];
}

const QuizStorage = t.type({
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
        selectedAnswer: t.string,
      }),
    ])
  ),
});

export class QuizStorageManager {
  state: QuizStorage = {
    time: 0,
    currentQuizIndex: 0,
  };
  listeners: (() => void)[] = [];

  constructor() {
    console.log('ASd');
    const quizStorage = localStorage.getItem('quiz_storage');

    try {
      const decoded = QuizStorage.decode(JSON.parse(quizStorage ?? ''));

      if (!isLeft(decoded)) {
        type QuizStorageT = t.TypeOf<typeof QuizStorage>;
        const decodedQuizStorage: QuizStorageT = decoded.right;

        this.state = {
          ...this.state,
          ...decodedQuizStorage,
        };
      }
    } catch (e) {}
  }

  // @withEmitChange
  setQuizzes(quizzes: Quiz[]) {
    this.state = {
      ...this.state,
      quizzes,
    };

    this.emitChange();
  }

  // @withEmitChange
  setCurrentQuizIndex(currentQuizIndex: number) {
    this.state = {
      ...this.state,
      currentQuizIndex,
    };

    this.emitChange();
  }

  setTimeWithoutStateChange(time: number) {
    this.state = {
      ...this.state,
      time,
    };
  }

  emitChange() {
    for (let listener of this.listeners) {
      listener();
    }
  }

  subscribe(listener: () => void) {
    this.listeners = [...this.listeners, listener];

    return () => (this.listeners = this.listeners.filter((l) => l !== listener));
  }

  getSnapshot() {
    return this.state;
  }
}

// TODO: Typescript + Babel 이슈로 decorator 제거 및 stylex에서 swc나 webpack 해결방안이 나오면 babel 들어내고 decorator 추가
// function withEmitChange(_target: QuizStorageManager, _propertyKey: string, descriptor: PropertyDescriptor) {
//   const originMethod = descriptor.value;

//   descriptor.value = function (...args: unknown[]) {
//     originMethod.apply(this, ...args);
//     (this as QuizStorageManager).emitChange();
//   };
// }
