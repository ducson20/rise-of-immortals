import { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames/bind';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AppLoading from '@/assets/images/svg/app-loading.svg';
import styles from './LoadingLayout.module.scss';
const cx = classNames.bind(styles);

export interface ILoadingLayoutProps {
  seconds: number;
  children: React.ReactNode;
}

export default function LoadingLayout({ seconds, children }: ILoadingLayoutProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const appLoading = useMemo(() => {
    const delayLoading: number = 4;
    return `${seconds}.${delayLoading}`;
  }, [seconds]);

  useEffect(() => {
    const loadingTime = setTimeout(() => {
      setIsLoading(false);
    }, seconds * 1000);
    return () => clearTimeout(loadingTime);
  }, [seconds]);

  return (
    <>
      {isLoading ? (
        <div className={cx('loading')}>
          <div className={cx('loading__logo')}>
            <LazyLoadImage effect="blur" src={AppLoading} alt="app-loading" />
            <p className={cx('loading__title')}>AAA HERO-BASED STRATEGY GAME</p>
            <div className={cx('loading__bar')}>
              <div
                className={cx('loading__bar-process')}
                style={{ animation: `appLoading ${appLoading}s` }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
