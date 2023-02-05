import { Box, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import classNames from 'classnames/bind';

import Ios from '@/assets/images/svg/ios.svg';
import Android from '@/assets/images/svg/android.svg';

import styles from './AppPlatform.module.scss';

const cx = classNames.bind(styles);

export interface IAppPlatformProps {}

export default function AppPlatform(props: IAppPlatformProps) {
  return (
    <>
      <Box
        component="div"
        p={{ xs: '10px', sm: '10px 16px' }}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mr: '18px',
          borderRadius: '8px',
          bgcolor: 'var(--black)',
          border: '1px solid var(--white)',
        }}
      >
        <Box component="div" sx={{ mr: '8px' }} className={cx('app-platform__icon-ios')}>
          <LazyLoadImage effect="blur" src={Ios} alt="ios" />
        </Box>
        <Box component="div">
          <Typography
            component="p"
            fontSize={{ xs: '1rem' }}
            sx={{
              fontWeight: '300',
              color: 'var(--white)',
            }}
          >
            Download on the
          </Typography>
          <Typography
            component="p"
            fontSize={{ xs: '1.4rem' }}
            sx={{
              fontWeight: '400',
              color: 'var(--white)',
            }}
          >
            APP STORE
          </Typography>
        </Box>
      </Box>
      <Box
        component="div"
        p={{ xs: '10px', sm: '10px 16px' }}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '8px',
          bgcolor: 'var(--black)',
          border: '1px solid var(--white)',
        }}
      >
        <Box component="div" sx={{ mr: '8px' }} className={cx('app-platform__icon-ch-play')}>
          <LazyLoadImage effect="blur" src={Android} alt="android" />
        </Box>
        <Box component="div">
          <Typography
            component="p"
            fontSize={{ xs: '1rem' }}
            sx={{
              fontWeight: '300',
              color: 'var(--white)',
            }}
          >
            Download on the
          </Typography>
          <Typography
            component="p"
            fontSize={{ xs: '1.4rem' }}
            sx={{
              fontWeight: '400',
              color: 'var(--white)',
            }}
          >
            CH Play
          </Typography>
        </Box>
      </Box>
    </>
  );
}
