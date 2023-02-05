import { Container, Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { GButton } from '@/components/base';

import classNames from 'classnames/bind';
import styles from './404Page.module.scss';
const cx = classNames.bind(styles);

export interface INotFoundProps {}

export default function NotFound(props: INotFoundProps) {
  return (
    <Container maxWidth={false} className={cx('not-found__container')}>
      <Container
        className={cx('not-found__wrapper')}
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1 }}
        disableGutters={true}
      >
        <Box
          component="section"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh',
            mb: '32px',
          }}
        >
          <Typography
            fontSize={{ xs: '8rem', md: '10rem' }}
            lineHeight={{ xs: '8.4rem', md: '10.4rem' }}
            sx={{
              mb: '32px',
              fontWeight: '600',
              textAlign: 'center',
              color: 'var(--white)',
            }}
          >
            404
          </Typography>
          <Box component="div">
            <NavLink to="/">
              <GButton color="primary" size="regular-long">
                Go To Home Page
              </GButton>
            </NavLink>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
