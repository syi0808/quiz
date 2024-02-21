'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { useSeconds } from './useSeconds';
import { QuizStorage, QuizStorageManager, QuizWithInformation } from '../state-manager/QuizStorageManager';

const singleton = new QuizStorageManager();

type QuizStorageHookReturnType = (
  | {
      initialized: false;
      quizzes?: QuizWithInformation[];
    }
  | {
      initialized: true;
      quizzes: QuizWithInformation[];
    }
) &
  Pick<typeof singleton, 'setCurrentQuizIndex' | 'setSelectedAnswerIndex' | 'finishQuiz' | 'initialize'> &
  Pick<QuizStorage, 'currentQuizIndex'>;

export const useQuizStorage = (): QuizStorageHookReturnType => {
  const storage = useSyncExternalStore(
    singleton.subscribe.bind(singleton),
    singleton.getSnapshot.bind(singleton),
    singleton.getServerSnapshot.bind(singleton)
  );

  return {
    initialized: storage.initialized,
    quizzes: storage.quizzes,
    currentQuizIndex: storage.currentQuizIndex,
    initialize: singleton.initialize.bind(singleton),
    setCurrentQuizIndex: singleton.setCurrentQuizIndex.bind(singleton),
    setSelectedAnswerIndex: singleton.setSelectedAnswerIndex.bind(singleton),
    finishQuiz: singleton.finishQuiz.bind(singleton),
  } as QuizStorageHookReturnType;
};

export const useQuizTimer = () => {
  const seconds = useSeconds(singleton.state.time);

  useEffect(() => {
    singleton.setTimeWithoutStateChange(seconds);
  }, [seconds]);

  return seconds;
};
