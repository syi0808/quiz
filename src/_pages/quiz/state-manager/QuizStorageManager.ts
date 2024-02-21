'use client';

import { ExternalStore } from '@/shared/utils/class';
import { Quiz, getQuizzes } from '../api/quiz';
import { validate } from './QuizStorageValidator';

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

const initialState: QuizStorage = {
  time: 0,
  currentQuizIndex: 0,
  initialized: false,
};

export const QUIZ_STORAGE_NAME = 'quiz_storage';
export const QUIZ_RESULT_STORAGE_NAME = 'quiz_result_storage';

export class QuizStorageManager extends ExternalStore<QuizStorage> {
  constructor() {
    super({ ...initialState });
  }

  async initialize() {
    const quizStorage = localStorage.getItem(QUIZ_STORAGE_NAME);

    const initializeQuizzes = async () => {
      const quizzes = await getQuizzes(new URLSearchParams(window.location.search));
      const nextState = {
        ...this.state,
        quizzes,
        initialized: true,
      };

      this.state = {
        ...nextState,
      };

      this.updateLocalstorage(true);

      return nextState;
    };

    try {
      if (!quizStorage) throw new Error(`storage ${QUIZ_STORAGE_NAME} is null.`);

      const decodedQuizStorage = validate(quizStorage);

      this.state = {
        ...this.state,
        ...decodedQuizStorage,
        initialized: true,
      };

      this.updateLocalstorage(true);

      return decodedQuizStorage;
    } catch (e) {
      return await initializeQuizzes();
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
