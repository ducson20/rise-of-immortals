import { Container, Box, Stack, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { GButton } from '@/components/base';

import Database from '@/assets/stacking/svg/database.svg';
import Play from '@/assets/stacking/svg/play.svg';

import Hero from '@/assets/stacking/hero.png';
import Land from '@/assets/stacking/land.png';
import Landscape from '@/assets/stacking/landscape.png';
import Statue from '@/assets/stacking/statue.png';

import classNames from 'classnames/bind';
import styles from './Stacking.module.scss';

const cx = classNames.bind(styles);

export interface IStackingProps {}

export default function IStacking(props: IStackingProps) {
  return (
    <Container maxWidth={false} className={cx('stacking__container')}>
      <Container
        className={cx('stacking__wrapper')}
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1 }}
        disableGutters={true}
      >
        {/* SECTION - OWN YOUR OLYMPUS LAND NFTs */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="center"
          alignItems="center"
          className={cx('stacking__background-01')}
          mt={{ xs: '60px', md: '140px' }}
          mb={{ xs: '60px', md: '100px' }}
        >
          <Box component="div" sx={{ flex: 1, mb: '50px' }}>
            <Typography
              component="h2"
              fontSize={{ xs: '2.6rem', md: '4rem' }}
              lineHeight={{ xs: '3.2rem', md: '4.6rem' }}
              sx={{
                mb: '16px',
                textAlign: 'center',
                fontWeight: '600',
                color: 'var(--white)',
                flex: '0.6',
              }}
            >
              OWN YOUR <Box component="br" display={{ xs: 'block', md: 'none' }} /> OLYMPUS
              <Box component="br" display={{ xs: 'none', md: 'block' }} /> LAND NFTs
            </Typography>
            <Typography
              component="p"
              maxWidth={{ xs: '300px', sm: '350px', md: '400px' }}
              sx={{
                margin: 'auto',
                textAlign: 'center',
                fontSize: '1.4rem',
                lineHeight: '1.8rem',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              Own your Land, Hero and Statue NFTs which can be played in the game once Rise of
              Immortals is launched.
            </Typography>
            <Box
              component="div"
              display={{ xs: 'none', md: 'flex' }}
              sx={{ justifyContent: 'center', alignItems: 'center', mt: '32px' }}
            >
              <GButton color="dark" size="large">
                Owning Tutorial
              </GButton>
            </Box>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              display={{ xs: 'flex', md: 'none' }}
              sx={{ mt: '32px' }}
            >
              <Box component="div" mr={{ xs: '12px', md: '16px' }}>
                <GButton
                  color="simple"
                  leftIcon={
                    <Box component="div" sx={{ display: 'flex', mr: '10px' }}>
                      <LazyLoadImage effect="blur" src={Database} alt="database" />
                    </Box>
                  }
                >
                  View Pools
                </GButton>
              </Box>
              <Box component="div">
                <GButton
                  color="dark"
                  leftIcon={
                    <Box component="div" sx={{ display: 'flex', mr: '10px' }}>
                      <LazyLoadImage effect="blur" src={Play} alt="play" />
                    </Box>
                  }
                >
                  Owning Tutorial
                </GButton>
              </Box>
            </Stack>
          </Box>
          <Box component="div" className={cx('stacking__icon-landscape')} mb={{ md: '100px' }}>
            <LazyLoadImage effect="blur" src={Landscape} alt="landscape" />
          </Box>
        </Stack>

        {/* SECTION - LAND STACKING REWARDS NOW AVAILABLE */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          p={{ xs: '30px', md: '40px 60px' }}
          sx={{ borderRadius: '20px', background: 'var(--gray-03)' }}
          mb={{ xs: '60px', md: '100px' }}
        >
          <Box component="div">
            <Typography
              component="h2"
              textAlign={{ xs: 'center', md: 'start' }}
              sx={{
                mb: '16px',
                fontSize: '1.8rem',
                lineHeight: '2.2rem',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              Land Staking Rewards Now Available
            </Typography>
            <Typography
              component="p"
              textAlign={{ xs: 'center', md: 'start' }}
              sx={{
                margin: 'auto',
                fontSize: '1.4rem',
                lineHeight: '1.8rem',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              Stake your Land NFTs to earn passive rewards.
            </Typography>
          </Box>
          <Box component="div" mt={{ xs: '32px', md: '0' }}>
            <GButton color="dark" size="large">
              Stake Land
            </GButton>
          </Box>
        </Stack>
        <Box component="div" display={{ xs: 'block', md: 'none' }}>
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              mb: '100px',
              borderRadius: '20px',
              background: 'linear-gradient(180deg, #707070 0%, #7A9656 83.65%)',
            }}
          >
            <Box component="div" sx={{ p: '26px' }} className={cx('stacking__icon-land')}>
              <LazyLoadImage effect="blur" src={Land} alt="land" />
            </Box>
            <Typography
              component="h2"
              sx={{
                mb: '12px',
                textAlign: 'center',
                fontSize: '3rem',
                lineHeight: '3.4rem',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              Land NFTs
            </Typography>
            <Typography
              component="p"
              sx={{
                px: '40px',
                mb: '30px',
                textAlign: 'center',
                fontSize: '1.6rem',
                lineHeight: '2.2rem',
                fontWeight: '300',
                color: 'var(--white)',
              }}
            >
              Land NFTs – Land is the primary NFT asset in Rise of Immortals. It is the primary
              requirement in building a village and training an army.
            </Typography>
            <Box
              component="div"
              position={{ md: 'absolute' }}
              top={{ md: '59.5%' }}
              right={{ md: '2%' }}
              sx={{ mb: '30px' }}
            >
              <GButton color="dark" size="large">
                Coming Soon
              </GButton>
            </Box>
          </Stack>
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              mb: '100px',
              borderRadius: '20px',
              background: 'linear-gradient(to left, #514007 0%, #FFC700 100%);',
            }}
          >
            <Box component="div" sx={{ p: '26px' }} className={cx('stacking__icon-hero')}>
              <LazyLoadImage effect="blur" src={Hero} alt="hero" />
            </Box>
            <Typography
              component="h2"
              sx={{
                mb: '12px',
                textAlign: 'center',
                fontSize: '3rem',
                lineHeight: '3.4rem',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              Hero NFTs
            </Typography>
            <Typography
              component="p"
              sx={{
                px: '40px',
                mb: '30px',
                textAlign: 'center',
                fontSize: '1.6rem',
                lineHeight: '2.2rem',
                fontWeight: '300',
                color: 'var(--white)',
              }}
            >
              Hero NFTs – Heroes are super-troops that support your army in offensive fights and
              help protect your village from assaults.
            </Typography>
            <Box
              component="div"
              position={{ md: 'absolute' }}
              top={{ md: '59.5%' }}
              right={{ md: '2%' }}
              sx={{ mb: '30px' }}
            >
              <GButton color="dark" size="large">
                Coming Soon
              </GButton>
            </Box>
          </Stack>
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              borderRadius: '20px',
              background: 'linear-gradient(to left, #CCE7FF 0%, #112536 100%);',
            }}
          >
            <Box component="div" sx={{ p: '26px' }} className={cx('stacking__icon-statue')}>
              <LazyLoadImage effect="blur" src={Statue} alt="statue" />
            </Box>
            <Typography
              component="h2"
              sx={{
                mb: '12px',
                textAlign: 'center',
                fontSize: '3rem',
                lineHeight: '3.4rem',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              Statue NFTs
            </Typography>
            <Typography
              component="p"
              sx={{
                px: '40px',
                mb: '30px',
                textAlign: 'center',
                fontSize: '1.6rem',
                lineHeight: '2.2rem',
                fontWeight: '300',
                color: 'var(--white)',
              }}
            >
              Statue NFTs – Statues enhance the efficiency of your settlement by giving your troops
              and resources beneficial boosts.
            </Typography>
            <Box
              component="div"
              position={{ md: 'absolute' }}
              top={{ md: '59.5%' }}
              right={{ md: '2%' }}
              sx={{ mb: '30px' }}
            >
              <GButton color="dark" size="large">
                Coming Soon
              </GButton>
            </Box>
          </Stack>
        </Box>

        {/* SECTION WEB - LAND STACKING REWARDS NOW AVAILABLE */}
        <Box component="div" display={{ xs: 'none', md: 'block' }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            position={{ md: 'relative' }}
            sx={{ mb: '50px', height: '420px' }}
          >
            <Box
              component="div"
              sx={{
                borderRadius: '20px',
                background: 'linear-gradient(180deg, #707070 0%, #7A9656 83.65%)',
              }}
            >
              <Box component="div" sx={{ p: '30px' }} className={cx('stacking__icon-land')}>
                <LazyLoadImage effect="blur" src={Land} alt="land" />
              </Box>
              <Typography
                component="h2"
                sx={{
                  mb: '30px',
                  textAlign: 'center',
                  fontSize: '3rem',
                  lineHeight: '3.4rem',
                  fontWeight: '600',
                  color: 'var(--white)',
                }}
              >
                Land NFTs
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{ p: '40px', borderRadius: '0 20px 20px 0', background: 'var(--purple-03)' }}
            >
              <Typography
                component="p"
                sx={{
                  fontSize: '1.8rem',
                  lineHeight: '2.4rem',
                  fontWeight: '300',
                  color: 'var(--white)',
                }}
              >
                Land NFTs – Land is the primary NFT asset in Rise of Immortals. It is the primary
                requirement in building a village and training an army.
              </Typography>
            </Box>
            <Box
              component="div"
              position={{ md: 'absolute' }}
              top={{ md: '59.5%' }}
              right={{ md: '2%' }}
            >
              <GButton color="dark" size="large">
                Coming Soon
              </GButton>
            </Box>
          </Stack>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            position={{ md: 'relative' }}
            sx={{ mb: '50px', height: '420px' }}
          >
            <Box
              component="div"
              sx={{
                borderRadius: '20px',
                background: 'linear-gradient(to left, #CCE7FF 0%, #112536 100%);',
              }}
            >
              <Box component="div" sx={{ p: '30px' }} className={cx('stacking__icon-hero')}>
                <LazyLoadImage effect="blur" src={Hero} alt="hero" />
              </Box>
              <Typography
                component="h2"
                sx={{
                  mb: '30px',
                  textAlign: 'center',
                  fontSize: '3rem',
                  lineHeight: '3.4rem',
                  fontWeight: '600',
                  color: 'var(--white)',
                }}
              >
                Hero NFTs
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{ p: '40px', borderRadius: '0 20px 20px 0', background: 'var(--purple-03)' }}
            >
              <Typography
                component="p"
                sx={{
                  fontSize: '1.8rem',
                  lineHeight: '2.4rem',
                  fontWeight: '300',
                  color: 'var(--white)',
                }}
              >
                Hero NFTs – Heroes are super-troops that support your army in offensive fights and
                help protect your village from assaults.
              </Typography>
            </Box>
            <Box
              component="div"
              position={{ md: 'absolute' }}
              top={{ md: '59.5%' }}
              right={{ md: '2%' }}
            >
              <GButton color="dark" size="large">
                Coming Soon
              </GButton>
            </Box>
          </Stack>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            position={{ md: 'relative' }}
            sx={{ height: '420px' }}
          >
            <Box
              component="div"
              sx={{
                borderRadius: '20px',
                background: 'linear-gradient(to left, #514007 0%, #FFC700 100%);',
              }}
            >
              <Box component="div" sx={{ p: '30px' }} className={cx('stacking__icon-statue')}>
                <LazyLoadImage effect="blur" src={Statue} alt="statue" />
              </Box>
              <Typography
                component="h2"
                sx={{
                  mb: '30px',
                  textAlign: 'center',
                  fontSize: '3rem',
                  lineHeight: '3.4rem',
                  fontWeight: '600',
                  color: 'var(--white)',
                }}
              >
                Statue NFTs
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{ p: '40px', borderRadius: '0 20px 20px 0', background: 'var(--purple-03)' }}
            >
              <Typography
                component="p"
                sx={{
                  fontSize: '1.8rem',
                  lineHeight: '2.4rem',
                  fontWeight: '300',
                  color: 'var(--white)',
                }}
              >
                Statue NFTs – Statues enhance the efficiency of your settlement by giving your
                troops and resources beneficial boosts.
              </Typography>
            </Box>
            <Box
              component="div"
              position={{ md: 'absolute' }}
              top={{ md: '59.5%' }}
              right={{ md: '2%' }}
            >
              <GButton color="dark" size="large">
                Coming Soon
              </GButton>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Container>
  );
}
