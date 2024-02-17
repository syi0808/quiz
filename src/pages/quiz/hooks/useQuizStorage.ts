'use client';

import { Quiz } from '@/app/quiz/page';
import { useEffect, useSyncExternalStore } from 'react';
import { useSeconds } from './useSeconds';
import { QuizStorageManager } from '../state-manager/QuizStorageManager';

const singleton = new QuizStorageManager();

export const useQuizStorage = (quizzes: Quiz[]) => {
  const storage = useSyncExternalStore(singleton.subscribe.bind(singleton), singleton.getSnapshot.bind(singleton));

  useEffect(() => {
    singleton.setQuizzes(quizzes);
  }, [quizzes]);

  return {
    quizzes: storage?.quizzes ?? quizzes,
    currentQuizIndex: storage.currentQuizIndex,
    setCurrentQuizIndex: singleton.setCurrentQuizIndex,
  };
};

export const useQuizTimer = () => {
  const seconds = useSeconds();

  useEffect(() => {
    singleton.setTimeWithoutStateChange(seconds);
  }, [seconds]);

  return seconds;
};
