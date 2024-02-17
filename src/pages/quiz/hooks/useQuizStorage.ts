'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { useSeconds } from './useSeconds';
import { QuizStorageManager } from '../state-manager/QuizStorageManager';

const singleton = new QuizStorageManager();

export const useQuizStorage = () => {
  const storage = useSyncExternalStore(
    singleton.subscribe.bind(singleton),
    singleton.getSnapshot.bind(singleton),
    singleton.getServerSnapshot.bind(singleton)
  );

  return {
    quizzes: storage.quizzes,
    currentQuizIndex: storage.currentQuizIndex,
    setCurrentQuizIndex: singleton.setCurrentQuizIndex.bind(singleton),
    setSelectedAnswerIndex: singleton.setSelectedAnswerIndex.bind(singleton),
    initialized: storage.initialized,
  };
};

export const useQuizTimer = () => {
  const seconds = useSeconds(singleton.state.time);

  useEffect(() => {
    singleton.setTimeWithoutStateChange(seconds);
  }, [seconds]);

  return seconds;
};
