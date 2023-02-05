import { useState, useEffect } from 'react';

export interface IUseLoadingProps {
  time: number;
}

export function useLoading({ time = 1000 }: IUseLoadingProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadingTime = setTimeout(() => {
      setIsLoading(false);
    }, time);
    return () => clearTimeout(loadingTime);
  }, [time]);

  return { isLoading };
}
