import { Quiz } from '@/_pages/quiz/api/quiz';
import {
  QUIZ_RESULT_STORAGE_NAME,
  QUIZ_STORAGE_NAME,
  QuizStorage,
  QuizWithInformation,
} from '@/_pages/quiz/state-manager/QuizStorageManager';
import { ExternalStore } from '@/shared/utils/class';

const initialState: QuizStorage = {
  time: 0,
  currentQuizIndex: 0,
  initialized: true,
  quizzes: [
    {
      answers: ['True', 'False'],
      category: 'category',
      difficulty: 'easy',
      type: 'boolean',
      question: 'question',
      correctAnswerIndex: 0,
    },
  ],
};

export class MockQuizStorageManager extends ExternalStore<QuizStorage> {
  constructor() {
    super({ ...initialState });
  }

  initialize = jest.fn((initialize = false) => {});

  // @withEmitChange
  setQuizzes(quizzes: Quiz[]) {
    this.state = {
      ...this.state,
      quizzes,
    };

    this.updateLocalstorage(true);
  }

  setCurrentQuizIndex(currentQuizIndex: number) {
    this.state = {
      ...this.state,
      currentQuizIndex,
    };

    this.updateLocalstorage(true);
  }

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
    if (emitChange) {
      this.emitChange();
    }
  }

  getServerSnapshot() {
    return initialState;
  }
}
