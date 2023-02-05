import { Container, Box, Stack, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import FAQ from '@/components/about-us/FAQ';
import Character02 from '@/assets/images/character-02.png';
import classNames from 'classnames/bind';
import styles from './FAQ.module.scss';

const cx = classNames.bind(styles);

export interface IOurTeamProps {}

export default function FAQView(props: IOurTeamProps) {
  return (
    <Container maxWidth={false} className={cx('faq__container')}>
      <Container
        className={cx('faq__wrapper')}
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1 }}
        disableGutters={true}
      >
        {/* SECTION - FAQ */}
        <Box component="section" sx={{ mt: '50px' }}>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Typography
              component="h2"
              sx={{
                mb: '42px',
                textAlign: 'center',
                fontSize: '4rem',
                lineHeight: '4.4rem',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              FAQ
            </Typography>
            <Box component="div" className={cx('faq__icon-character-02')} sx={{ mb: '32px' }}>
              <LazyLoadImage effect="blur" src={Character02} alt="character-02" />
            </Box>
          </Stack>
          <FAQ />
        </Box>
      </Container>
    </Container>
  );
}
