'use client';

import { Quiz } from '@/app/quiz/page';
import { useEffect, useSyncExternalStore } from 'react';
import { useSeconds } from './useSeconds';
import { QuizStorageManager } from '../state-manager/QuizStorageManager';

const singleton = new QuizStorageManager();

export const useQuizStorage = (quizzes?: Quiz[]) => {
  const storage = useSyncExternalStore(
    singleton.subscribe.bind(singleton),
    singleton.getSnapshot.bind(singleton),
    singleton.getServerSnapshot.bind(singleton)
  );

  useEffect(() => {
    quizzes && singleton.setQuizzes(quizzes);
  }, [quizzes]);

  return {
    quizzes: (storage?.quizzes ?? quizzes) as Exclude<typeof storage.quizzes, undefined>,
    currentQuizIndex: storage.currentQuizIndex,
    setCurrentQuizIndex: singleton.setCurrentQuizIndex.bind(singleton),
    setSelectedAnswerIndex: singleton.setSelectedAnswerIndex.bind(singleton),
  };
};

export const useQuizTimer = () => {
  const seconds = useSeconds();

  useEffect(() => {
    singleton.setTimeWithoutStateChange(seconds);
  }, [seconds]);

  return seconds;
};
