'use client';

import { QUIZ_RESULT_STORAGE_NAME, QuizStorage } from '@/pages/quiz/state-manager/QuizStorageManager';
import { validate } from '@/pages/quiz/state-manager/QuizStorageValidator';
import { useEffect, useState } from 'react';

type QuizResults = Required<Pick<QuizStorage, 'time' | 'quizzes'>> & {
  correctAnswerCount: number;
  incorrectAnswerCount: number;
};

export const useQuizResults = () => {
  const [results, setResults] = useState<QuizResults>();
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const { time, quizzes } = validate(localStorage.getItem(QUIZ_RESULT_STORAGE_NAME) ?? '');

      const correctAnswerCount = quizzes.reduce((total, { correctAnswerIndex, selectedAnswerIndex }) => {
        return total + Number(correctAnswerIndex === selectedAnswerIndex);
      }, 0);

      setResults({
        time,
        quizzes,
        correctAnswerCount,
        incorrectAnswerCount: quizzes.length - correctAnswerCount,
      });
    } catch (e) {
      setError(true);
    }
  }, []);

  return { results, error };
};
