import { useState } from 'react';
import classNames from 'classnames/bind';
import { Box } from '@mui/material';
import { PlayCircleOutline, PauseCircleOutline } from '@mui/icons-material';
import Poster from '@/assets/images/poster-01.png';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

export interface IVideoProps {
  src: string;
  type: string;
}

export default function Video({ src, type }: IVideoProps) {
  const [isShowPlayIcon, setIsShowPlayIcon] = useState<boolean>(true);
  const [isShowPauseIcon, setIsShowPauseIcon] = useState<boolean>(false);

  const pauseVideoControls = () => {
    setIsShowPlayIcon(true);
    setIsShowPauseIcon(false);
  };

  const playVideoControls = () => {
    setIsShowPlayIcon(false);
    setIsShowPauseIcon(true);
    setTimeout(() => {
      setIsShowPauseIcon(false);
    }, 100);
  };
  return (
    <Box
      component="div"
      width={{ xs: 226, sm: 310, md: 350 }}
      height={{ xs: 226, sm: 310, md: 350 }}
      mt={{ xs: '56px', md: '58px' }}
      sx={{
        position: 'relative',
        borderRadius: '80px',
        transition: 'all 0.6s linear',
        opacity: '1',
        '&:hover': {
          opacity: '0.8',
        },
      }}
    >
      <Box
        component="div"
        width={{ xs: 50, sm: 70 }}
        height={{ xs: 50, sm: 70 }}
        top={{ xs: '30%', sm: '36%', md: '36%' }}
        display={{ xs: 'none', md: 'block' }}
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%)',
        }}
      >
        {isShowPlayIcon && (
          <PlayCircleOutline
            sx={{
              color: 'var(--white)',
              width: '100%',
              height: '100%',
              transition: 'all 1s linear',
            }}
          />
        )}
        {isShowPauseIcon && (
          <PauseCircleOutline
            sx={{
              color: 'var(--white)',
              width: '100%',
              height: '100%',
              transition: 'all 1s linear',
            }}
          />
        )}
      </Box>
      <video
        width="100%"
        controls
        poster={Poster}
        onPause={pauseVideoControls}
        onPlay={playVideoControls}
        className={cx('video')}
      >
        <source src={src} type={type} />
      </video>
    </Box>
  );
}
