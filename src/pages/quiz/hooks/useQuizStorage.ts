'use client';

import { Quiz } from '@/app/quiz/page';
import { useEffect, useSyncExternalStore } from 'react';
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

class QuizStorageManager {
  state: QuizStorage = {
    time: 0,
    currentQuizIndex: 0,
  };
  #listeners: (() => void)[] = [];

  constructor() {
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

  setQuizzes(quizzes: Quiz[]) {
    this.state = {
      ...this.state,
      quizzes,
    };

    this.emitChange();
  }

  emitChange() {
    for (let listener of this.#listeners) {
      listener();
    }
  }

  subscribe(listener: () => void) {
    this.#listeners = [...this.#listeners, listener];

    return () => (this.#listeners = this.#listeners.filter((l) => l !== listener));
  }

  getSnapshot() {
    return this.state;
  }
}

const singleton = new QuizStorageManager();

export const useQuizStorage = (quizzes: Quiz[]) => {
  const storage = useSyncExternalStore(singleton.subscribe.bind(singleton), singleton.getSnapshot.bind(singleton));

  useEffect(() => {
    singleton.setQuizzes(quizzes);
  }, [quizzes]);

  return {
    quiz: (storage?.quizzes ?? quizzes)[storage.currentQuizIndex],
  };
};

export const useQuizTimer = () => {};
