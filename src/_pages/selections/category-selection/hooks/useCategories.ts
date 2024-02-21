import { sleep } from '@/shared/utils/async';
import { useEffect, useState } from 'react';

interface Category {
  label: string;
  value: string;
}

// React query를 가져와서 쓰기엔 필요한 기능이 너무 라이트하기 때문에 비슷한 인터페이스로 hooks 구현
export const useCategories = () => {
  const [data, setData] = useState<Category[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        // 로딩화면 깜빡거림 방지를 위해 최소 로딩시간 추가
        const [res] = await Promise.all([
          fetch('/api/category', {
            headers: {
              'Content-Type': 'application/json',
            },
          }),
          sleep(1000),
        ]);

        setData(await res.json());
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    data,
  };
};
