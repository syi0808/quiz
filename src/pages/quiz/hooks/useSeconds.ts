'use client';

import { useEffect, useState } from 'react';

export const useSeconds = (initialSeconds = 0) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = 1000;
    let expected = Date.now() + interval;

    let timerId: ReturnType<typeof setTimeout>;

    const step = () => {
      const diffTime = Date.now() - expected;
      expected += interval;

      setSeconds((prev) => prev + 1);

      timerId = setTimeout(step, Math.max(0, interval - diffTime));
    };

    timerId = setTimeout(step, interval);

    const removeEventListener = addEventListenerInactivePage((isVisible) => {
      clearTimeout(timerId);

      if (isVisible) {
        expected = Date.now() + interval;
        timerId = setTimeout(step, interval);
      }
    });

    return () => void (clearTimeout(timerId), removeEventListener());
  }, []);

  return seconds;
};

function addEventListenerInactivePage(callback: (isVisible: boolean) => void) {
  const onChangeActivation = () => {
    if (document.visibilityState === 'hidden') callback(false);
    else callback(true);
  };

  document.addEventListener('visibilitychange', onChangeActivation);

  const removeEventListeners = () => {
    document.removeEventListener('visibilitychange', onChangeActivation);
  };

  return removeEventListeners;
}
