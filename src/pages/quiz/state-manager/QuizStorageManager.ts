'use client';

import * as t from 'io-ts';
import { isLeft } from 'fp-ts/lib/Either';
import { ExternalStore } from '@/shared/utils/class';
import { Quiz, getQuizzes } from '../api/quiz';

export type QuizWithInformation = Quiz & {
  selectedAnswerIndex?: number;
};

export type QuizStorage = {
  time: number;
  currentQuizIndex: number;
} & (
  | {
      initialized: false;
      quizzes?: QuizWithInformation[];
    }
  | {
      initialized: true;
      quizzes: QuizWithInformation[];
    }
);

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
        selectedAnswerIndex: t.number,
      }),
    ])
  ),
});

const initialState: QuizStorage = {
  time: 0,
  currentQuizIndex: 0,
  initialized: false,
};

const QUIZ_STORAGE_NAME = 'quiz_storage';
const QUIZ_RESULT_STORAGE_NAME = 'quiz_result_storage';

export class QuizStorageManager extends ExternalStore<QuizStorage> {
  constructor() {
    super({ ...initialState });

    if (typeof window !== 'undefined') {
      this.initialize();
    }
  }

  initialize() {
    const quizStorage = localStorage.getItem(QUIZ_STORAGE_NAME);

    const initializeQuizzes = async () => {
      const quizzes = await getQuizzes(new URLSearchParams(window.location.search));

      this.state = {
        ...this.state,
        quizzes,
        initialized: true,
      };

      this.updateLocalstorage(true);
    };

    try {
      const decoded = QuizStorage.decode(JSON.parse(quizStorage ?? ''));

      if (isLeft(decoded)) {
        initializeQuizzes();
      } else {
        type QuizStorageT = t.TypeOf<typeof QuizStorage>;
        const decodedQuizStorage: QuizStorageT = decoded.right;

        this.state = {
          ...this.state,
          ...decodedQuizStorage,
          initialized: true,
        };
      }
    } catch (e) {
      initializeQuizzes();
    }
  }

  // @withEmitChange
  setQuizzes(quizzes: Quiz[]) {
    this.state = {
      ...this.state,
      quizzes,
    };

    this.updateLocalstorage(true);
  }

  // @withEmitChange
  setCurrentQuizIndex(currentQuizIndex: number) {
    this.state = {
      ...this.state,
      currentQuizIndex,
    };

    this.updateLocalstorage(true);
  }

  // @withEmitChange
  setSelectedAnswerIndex(quizIndex: number, answerIndex: number) {
    this.state = {
      ...this.state,
      quizzes:
        this.state.quizzes?.with(quizIndex, {
          ...this.state.quizzes[quizIndex],
          selectedAnswerIndex: answerIndex,
        }) ?? [],
    };

    this.updateLocalstorage(true);
  }

  finishQuiz() {
    localStorage.setItem(QUIZ_RESULT_STORAGE_NAME, JSON.stringify(this.state));

    this.state = { ...initialState };

    this.updateLocalstorage(true);
  }

  setTimeWithoutStateChange(time: number) {
    this.state = {
      ...this.state,
      time,
    };

    this.updateLocalstorage();
  }

  updateLocalstorage(emitChange: boolean = false) {
    localStorage.setItem(QUIZ_STORAGE_NAME, JSON.stringify(this.state));

    if (emitChange) {
      this.emitChange();
    }
  }

  getServerSnapshot() {
    return initialState;
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
