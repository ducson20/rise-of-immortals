import { Container, Grid, Box, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ArrowForwardIos } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, EffectFade, Navigation, Pagination, Parallax } from 'swiper';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { GButton } from '@/components/base';
import FAQ from '@/components/about-us/FAQ';

import Hero01 from '@/assets/about-us/hero-01.png';
import Hero02 from '@/assets/about-us/hero-02.png';
import Map from '@/assets/about-us/map.png';
import Character01 from '@/assets/images/character-01.png';
import Marketplace from '@/assets/about-us/marketplace.png';
import Zeus from '@/assets/about-us/zeus.png';
import Hades from '@/assets/about-us/hades.png';
import Poseidon from '@/assets/about-us/poseidon.png';
import HeroGroupNews from '@/assets/about-us/hero-group-news.png';
import Level01 from '@/assets/about-us/level-01.png';
import Level02 from '@/assets/about-us/level-02.png';
import Level03 from '@/assets/about-us/level-03.png';
import Level04 from '@/assets/about-us/level-04.png';
import Level05 from '@/assets/about-us/level-05.png';

import Responsibility from '@/assets/about-us/svg/responsibility.svg';
import Independence from '@/assets/about-us/svg/independence.svg';
import Quality from '@/assets/about-us/svg/quality.svg';
import Learning from '@/assets/about-us/svg/learning.svg';
import ArrowLeftDotGray from '@/assets/about-us/svg/arrow-left-dot-gray.svg';

import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';
import './AboutUs.scss';

const cx = classNames.bind(styles);

export interface IAboutUsProps {}

export default function AboutUs(props: IAboutUsProps) {
  return (
    <>
      <Container maxWidth={false} className={cx('about-us__container')}>
        <Container
          className={cx('about-us__wrapper')}
          maxWidth="lg"
          sx={{ position: 'relative', pt: 9, zIndex: 1 }}
          disableGutters={true}
        >
          {/* SECTION MOBILE - WELCOME TO RISE OF IMMORTALS */}
          <Box component="section" display={{ xs: 'flex', lg: 'none' }}>
            <Swiper
              key="about-us-swiper-banner"
              grabCursor
              slidesPerView={1}
              loop
              navigation
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
              breakpoints={{
                0: { slidesPerView: 1 },
              }}
              className="about-us__swiper-hero"
            >
              <SwiperSlide>
                <Box component="div">
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mb: '20px' }}
                  >
                    <Typography
                      component="h2"
                      sx={{
                        mb: '32px',
                        mr: '6px',
                        fontSize: '2.6rem',
                        lineHeight: '3rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                        flex: '0.6',
                      }}
                    >
                      Welcome to <br /> Rise of
                      <br /> Immortals
                    </Typography>

                    <Box
                      component="div"
                      className={cx('about-us__icon-hero-01')}
                      sx={{ flex: '1' }}
                    >
                      <LazyLoadImage effect="blur" src={Hero01} alt="hero-01" />
                    </Box>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Box component="div" sx={{ flex: '0.6', mr: '6px' }}>
                      <Typography
                        component="h2"
                        sx={{
                          mb: '12px',
                          fontSize: '1.6rem',
                          lineHeight: '2rem',
                          fontWeight: '600',
                          color: 'var(--white)',
                        }}
                      >
                        Rise of Immortals:
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          mb: '20px',
                          fontSize: '1.4rem',
                          lineHeight: '1.8rem',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        AAA hero-based strategy game powered by NFTs on the Ethereum blockchain.
                      </Typography>
                    </Box>
                    <Box component="div" sx={{ flex: '1' }}>
                      <Typography
                        component="h2"
                        sx={{
                          mb: '12px',
                          fontSize: '1.6rem',
                          lineHeight: '2rem',
                          fontWeight: '600',
                          color: 'var(--white)',
                        }}
                      >
                        Introduction:
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          mb: '20px',
                          fontSize: '1.4rem',
                          lineHeight: '1.8rem',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        Rise of Immortals is an online massive multiplayer blockchain-integrated
                        strategy game where players use their village and army units to grow
                        stronger and conquer other players to earn cryptocurrency.
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          mb: '20px',
                          fontSize: '1.4rem',
                          lineHeight: '1.8rem',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        Players earn thru various in-game activities such as completing challenges,
                        winning a village attack, successful village defense, removing obstacles,
                        wagered matches, collaborating bases with clan mates or in-game friends,
                        staking, and most of all, achieving the highest rank on the leader boards.
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box component="div">
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mb: '20px' }}
                  >
                    <Typography
                      component="h2"
                      sx={{
                        flex: '0.6',
                        mb: '32px',
                        mr: '6px',
                        fontSize: '2.6rem',
                        lineHeight: '3rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      Welcome to <br /> Rise of Immortals
                    </Typography>
                    <Box
                      component="div"
                      className={cx('about-us__icon-hero-02')}
                      sx={{ flex: '1' }}
                    >
                      <LazyLoadImage effect="blur" src={Hero02} alt="hero-02" />
                    </Box>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Box component="div" sx={{ flex: '0.6', mr: '6px' }}>
                      <Typography
                        component="h2"
                        sx={{
                          mb: '12px',
                          fontSize: '1.6rem',
                          lineHeight: '2rem',
                          fontWeight: '600',
                          color: 'var(--white)',
                        }}
                      >
                        Basic:
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          mb: '20px',
                          fontSize: '1.4rem',
                          lineHeight: '1.8rem',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        The game starts with Ancient Greece and evolves to Worldwide as players
                        progress.
                      </Typography>
                    </Box>
                    <Box component="div" sx={{ flex: '1', mt: '32px' }}>
                      <Typography
                        component="p"
                        sx={{
                          mb: '20px',
                          fontSize: '1.4rem',
                          lineHeight: '1.8rem',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        As the Village Chief, the objective is to expand the village and upskill
                        your army by using in-game resources gained from pillaging other players'
                        villages.
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          mb: '20px',
                          fontSize: '1.4rem',
                          lineHeight: '1.8rem',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        There are three main resources: Gold, Elixir, and Sapphire with Sapphire
                        (SAP) as the main resource for every micro transaction.
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          mb: '20px',
                          fontSize: '1.4rem',
                          lineHeight: '1.8rem',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        SAP's use cases are TownHall/Hero/Statue NFT upgrades; Gold, Elixir, Skins &
                        decoration purchases and speeding up upgrades.
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>

          {/* SECTION WEB - WELCOME TO RISE OF IMMORTALS */}
          <Box component="div" display={{ xs: 'none', lg: 'flex' }}>
            <Swiper
              key="about-us-swiper-banner"
              slidesPerView={1}
              grabCursor
              loop
              navigation
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
              className="about-us__swiper-hero"
            >
              <SwiperSlide>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Box component="div">
                    <Typography
                      component="h2"
                      sx={{
                        mb: '32px',
                        fontSize: '4rem',
                        lineHeight: '4.4rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      Welcome to <br /> Rise of Immortals
                    </Typography>
                    <Typography
                      component="h2"
                      sx={{
                        mb: '12px',
                        fontSize: '1.6rem',
                        lineHeight: '2rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      Rise of Immortals:
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        mb: '20px',
                        fontSize: '1.4rem',
                        lineHeight: '1.8rem',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      AAA hero-based strategy game powered by NFTs on the Ethereum blockchain.
                    </Typography>
                    <Typography
                      component="h2"
                      sx={{
                        mb: '12px',
                        fontSize: '1.6rem',
                        lineHeight: '2rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      Introduction:
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        mb: '20px',
                        fontSize: '1.4rem',
                        lineHeight: '1.8rem',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      Rise of Immortals is an online massive multiplayer blockchain-integrated
                      strategy game where players use their village and army units to grow stronger
                      and conquer other players to earn cryptocurrency.Players earn thru various
                      in-game activities such as completing challenges, winning a village attack,
                      successful village defense, removing obstacles, wagered matches, collaborating
                      bases with clan mates or in-game friends, staking, and most of all, achieving
                      the highest rank on the leaderboards.
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        mb: '20px',
                        fontSize: '1.4rem',
                        lineHeight: '1.8rem',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      Players earn thru various in-game activities such as completing challenges,
                      winning a village attack, successful village defense, removing obstacles,
                      wagered matches, collaborating bases with clan mates or in-game friends,
                      staking, and most of all, achieving the highest rank on the leader boards.
                    </Typography>
                  </Box>
                  <Box component="div">
                    <Box component="div" className={cx('about-us__icon-hero-01')}>
                      <LazyLoadImage effect="blur" src={Hero01} alt="hero-01" />
                    </Box>
                  </Box>
                </Stack>
              </SwiperSlide>
              <SwiperSlide>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Box component="div" className={cx('about-us__icon-hero-02')} sx={{ mr: '10px' }}>
                    <LazyLoadImage effect="blur" src={Hero02} alt="hero-02" />
                  </Box>
                  <Box component="div">
                    <Typography
                      component="h2"
                      sx={{
                        mb: '32px',
                        fontSize: '4rem',
                        lineHeight: '4.4rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      Welcome to <br /> Rise of Immortals
                    </Typography>
                    <Typography
                      component="h2"
                      sx={{
                        mb: '12px',
                        fontSize: '1.6rem',
                        lineHeight: '2rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      Basics:
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        mb: '20px',
                        fontSize: '1.4rem',
                        lineHeight: '1.8rem',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      The game starts with Ancient Greece and evolves to Worldwide as players
                      progress.
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        mb: '20px',
                        fontSize: '1.4rem',
                        lineHeight: '1.8rem',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      As the Village Chief, the objective is to expand the village and upskill your
                      army by using in-game resources gained from pillaging other players' villages.
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        mb: '20px',
                        fontSize: '1.4rem',
                        lineHeight: '1.8rem',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      There are three main resources: Gold, Elixir, and Sapphire with Sapphire (SAP)
                      as the main resource for every micro transaction.
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        mb: '20px',
                        fontSize: '1.4rem',
                        lineHeight: '1.8rem',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      SAP's use cases are TownHall/Hero/Statue NFT upgrades; Gold, Elixir, Skins &
                      decoration purchases and speeding up upgrades.
                    </Typography>
                  </Box>
                </Stack>
              </SwiperSlide>
            </Swiper>
          </Box>

          <Box
            component="section"
            className={cx('about-us__background-01')}
            mb={{ xs: '460px', md: '200px' }}
          >
            <Typography
              component="h2"
              fontSize={{ xs: '2.6rem', md: '4rem' }}
              lineHeight={{ xs: '3rem', md: '4.4rem' }}
              textAlign={{ xs: 'center', md: 'end' }}
              pr={{ md: '180px' }}
              sx={{
                mb: '20px',
                pt: '40px',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              What We Believe In?
            </Typography>
            <Grid className={cx('about-us__hero-items')} container spacing={2}>
              <Grid item md={3} xs={6}>
                <Box
                  component="div"
                  className={cx('about-us__icon-responsibility', 'about-us__hero-item')}
                >
                  <LazyLoadImage effect="blur" src={Responsibility} alt="responsibility" />
                  <Typography
                    component="h2"
                    sx={{
                      p: '66px 20px 0 20px',
                      mb: '12px',
                      textAlign: 'center',
                      fontSize: '1.8rem',
                      lineHeight: '2.2rem',
                      fontWeight: '600',
                      color: 'var(--white)',
                    }}
                  >
                    Responsibility
                  </Typography>
                  <Typography
                    component="p"
                    px={{ xs: '10px', md: '26px' }}
                    sx={{
                      mb: '20px',
                      textAlign: 'center',
                      fontSize: '1.4rem',
                      lineHeight: '1.8rem',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    Own your project, collaborate and share. See an issue? Speak up. We’re all in
                    this together.
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={3} xs={6}>
                <Box
                  component="div"
                  className={cx('about-us__icon-independence', 'about-us__hero-item')}
                >
                  <LazyLoadImage effect="blur" src={Independence} alt="independence" />
                  <Typography
                    component="h2"
                    sx={{
                      p: '66px 20px 0 20px',
                      mb: '12px',
                      textAlign: 'center',
                      fontSize: '1.8rem',
                      lineHeight: '2.2rem',
                      fontWeight: '600',
                      color: 'var(--white)',
                    }}
                  >
                    Independence
                  </Typography>
                  <Typography
                    component="p"
                    px={{ xs: '10px', md: '26px' }}
                    sx={{
                      mb: '20px',
                      textAlign: 'center',
                      fontSize: '1.4rem',
                      lineHeight: '1.8rem',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    You decide how you can have the biggest impact, and then you do it.
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={3} xs={6}>
                <Box
                  component="div"
                  className={cx('about-us__icon-quality', 'about-us__hero-item')}
                >
                  <LazyLoadImage effect="blur" src={Quality} alt="quality" />
                  <Typography
                    component="h2"
                    sx={{
                      p: '66px 20px 0 20px',
                      mb: '12px',
                      textAlign: 'center',
                      fontSize: '1.8rem',
                      lineHeight: '2.2rem',
                      fontWeight: '600',
                      color: 'var(--white)',
                    }}
                  >
                    Quality
                  </Typography>
                  <Typography
                    component="p"
                    px={{ xs: '10px', md: '26px' }}
                    sx={{
                      mb: '20px',
                      textAlign: 'center',
                      fontSize: '1.4rem',
                      lineHeight: '1.8rem',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    You decide how you can have the biggest impact, and then you do it.
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={3} xs={6}>
                <Box
                  component="div"
                  className={cx('about-us__icon-learning', 'about-us__hero-item')}
                >
                  <LazyLoadImage effect="blur" src={Learning} alt="learning" />
                  <Typography
                    component="h2"
                    sx={{
                      p: '66px 20px 0 20px',
                      mb: '12px',
                      textAlign: 'center',
                      fontSize: '1.8rem',
                      lineHeight: '2.2rem',
                      fontWeight: '600',
                      color: 'var(--white)',
                    }}
                  >
                    Learning
                  </Typography>
                  <Typography
                    component="p"
                    px={{ xs: '10px', md: '26px' }}
                    sx={{
                      mb: '20px',
                      textAlign: 'center',
                      fontSize: '1.4rem',
                      lineHeight: '1.8rem',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    For us, quality comes from learning, and learning comes from failing. In order
                    to learn faster, we fail faster.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* SECTION - WHY YOU MIGHT LOVE IT HERE */}
          <Box component="section">
            <Stack
              direction={{ xs: 'column', md: 'row-reverse' }}
              justifyContent="space-between"
              alignItems="center"
              mb={{ xs: '60px', md: '100px' }}
            >
              <Box component="div" sx={{ flex: '1' }}>
                <Typography
                  component="h2"
                  textAlign={{ xs: 'center', md: 'start' }}
                  fontSize={{ xs: '2.6rem', md: '4rem' }}
                  lineHeight={{ xs: '3rem', md: '4.4rem' }}
                  sx={{
                    mb: '32px',
                    fontWeight: '600',
                    color: 'var(--white)',
                    flex: '0.6',
                  }}
                >
                  Why You Might Love It Here
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  textAlign={{ xs: 'center', md: 'start' }}
                  sx={{
                    mb: '20px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  We work to create new, innovative, memorable experiences that no player has ever
                  played before. We believe games have the power to bring people around the world
                  closer together. This is why we strive to design games that stimulate a broad and
                  diverse community of players and broaden the audience for smaller “niche” game
                  concepts.
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  textAlign={{ xs: 'center', md: 'start' }}
                  sx={{
                    mb: '20px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  If you indulge in evaluating, talking, playing, and making games together with a
                  diverse community, Rise of Immortals is the game for you. We've built works of
                  independent, unique, and consistent visuals with the freedom to do what we think
                  is best for our players and the company as a whole.
                </Typography>
                <NavLink to="/our-team">
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: '20px',
                      fontWeight: '300',
                      color: 'var(--yellow-01)',
                      cursor: 'pointer',
                    }}
                  >
                    Read more
                    <ArrowForwardIos
                      htmlColor="var(--yellow-01)"
                      sx={{ width: '14px', ml: '6px', pt: '2px' }}
                    />
                  </Typography>
                </NavLink>
              </Box>
              <Box
                component="div"
                className={cx('about-us__icon-map')}
                mr={{ flex: '1', md: '60px' }}
              >
                <LazyLoadImage effect="blur" src={Map} alt="map" />
              </Box>
            </Stack>
          </Box>

          {/* SECTION - VISION */}
          <Box component="section" display={{ xs: 'block', sm: 'none' }} sx={{ mb: '40px' }}>
            <Box
              component="div"
              sx={{
                position: 'relative',
                width: '100%',
                p: '32px 14px',
                bgcolor: 'var(--gray-03)',
                borderRadius: '26px',
              }}
            >
              <Typography
                component="p"
                sx={{
                  textAlign: 'center',
                  fontSize: '1.4rem',
                  lineHeight: '1.8rem',
                  fontWeight: '500',
                  color: 'var(--white)',
                }}
              >
                Are you ready to be part of our success or you'll just ignore this once in a
                lifetime opportunity and get left behind?
              </Typography>
              <Typography
                component="p"
                sx={{
                  position: 'absolute',
                  top: '-10%',
                  left: '4%',
                  fontSize: '3.6rem',
                  lineHeight: '4rem',
                  fontWeight: '600',
                  color: 'var(--white)',
                  transform: 'rotate(180deg) skewX(-15deg)',
                }}
              >
                "
              </Typography>
              <Typography
                component="p"
                sx={{
                  position: 'absolute',
                  bottom: '10%',
                  right: '3%',
                  fontSize: '3.6rem',
                  lineHeight: '4rem',
                  fontWeight: '600',
                  color: 'var(--white)',
                  transform: 'rotate(180deg) skewX(-15deg)',
                }}
              >
                "
              </Typography>
            </Box>

            <Box
              component="div"
              className={cx('about-us__icon-character01')}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '16px' }}
            >
              <LazyLoadImage effect="blur" src={Character01} alt="character-01" />
            </Box>

            <Typography
              component="h2"
              textAlign={{ xs: 'center', md: 'start' }}
              fontSize={{ xs: '2.6rem', md: '4rem' }}
              lineHeight={{ xs: '3rem', md: '4.4rem' }}
              sx={{
                mb: '32px',
                textAlign: 'center',
                fontSize: '2.6rem',
                lineHeight: '3rem',
                fontWeight: '600',
                color: 'var(--white)',
                flex: '0.6',
              }}
            >
              Vision
            </Typography>
            <Swiper
              key="about-us-swiper-vision"
              slidesPerView={1}
              grabCursor
              loop
              navigation
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
              breakpoints={{
                0: { slidesPerView: 1 },
              }}
              className="about-us__swiper-vision"
            >
              <SwiperSlide>
                <Box
                  component="div"
                  sx={{
                    width: '90%',
                    m: 'auto',
                    p: '20px',
                    borderRadius: '12px',
                    background: 'var(--gray-10)',
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      mb: '20px',
                      textAlign: 'center',
                      fontSize: '1.4rem',
                      lineHeight: '1.8rem',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    RISE of IMMORTALS aims to catch the wave to follow the trends of tomorrow and do
                    the right thing about P2E games.
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      textAlign: 'center',
                      fontSize: '1.4rem',
                      lineHeight: '1.8rem',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    We aim to stick with our name and IMMORTALIZE our game to co-exist with other
                    big names inside and outside the crypto world.
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="div"
                  sx={{
                    width: '90%',
                    m: 'auto',
                    p: '20px',
                    borderRadius: '12px',
                    background: 'var(--gray-10)',
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      mb: '20px',
                      textAlign: 'center',
                      fontSize: '1.4rem',
                      lineHeight: '1.8rem',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    RISE of IMMORTALS aims to catch the wave to follow the trends of tomorrow and do
                    the right thing about P2E games.
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      textAlign: 'center',
                      fontSize: '1.4rem',
                      lineHeight: '1.8rem',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    We aim to stick with our name and IMMORTALIZE our game to co-exist with other
                    big names inside and outside the crypto world.
                  </Typography>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>

          {/* SECTION - MARKETPLACE */}
          <Box component="section">
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems="center"
              mb={{ xs: '60px', md: '100px' }}
            >
              <Box component="div" sx={{ flex: '1' }}>
                <Typography
                  component="h2"
                  textAlign={{ xs: 'center', md: 'start' }}
                  fontSize={{ xs: '2.6rem', md: '4rem' }}
                  lineHeight={{ xs: '3rem', md: '4.4rem' }}
                  sx={{
                    mb: '32px',
                    fontWeight: '600',
                    color: 'var(--white)',
                    flex: '0.6',
                  }}
                >
                  Marketplace
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  textAlign={{ xs: 'center', md: 'start' }}
                  sx={{
                    mb: '20px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  RISE OF IMMORTALS marketplace is designed to provide a smooth, beginner-friendly,
                  and seamless experience. The one-stop-shop Marketplace.
                </Typography>
                <Typography
                  component="p"
                  display={{ xs: 'none', md: 'block' }}
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  textAlign={{ xs: 'center', md: 'start' }}
                  sx={{
                    mb: '20px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  RISE OF IMMORTALS marketplace can be accessed within the game to allow users to
                  seamlessly transition from the game itself directly to the marketplace to buy and
                  sell NFTs or just to scan the marketplace for any NFTs. Players can purchase
                  Heroes, Villages, Statues, and Temple NFTs with a few clicks, and immediately
                  begin using those NFTs in the game after the transaction has been processed.
                </Typography>
                <Typography
                  component="p"
                  display={{ xs: 'none', md: 'block' }}
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  textAlign={{ xs: 'center', md: 'start' }}
                  sx={{
                    mb: '20px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  The game's marketplace implements a cutting-edge NFT exchange algorithm with an
                  easy-to-use NFT rental technology developed specifically for RISE OF IMMORTALS
                  Villages.
                </Typography>
                <Typography
                  component="p"
                  display={{ xs: 'none', md: 'block' }}
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  textAlign={{ xs: 'center', md: 'start' }}
                  sx={{
                    mb: '20px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  You can Buy and sell Heroes, Lands/Villages, Statues, and Temples with the IMS
                  token as the main medium of exchange.
                </Typography>
                <Typography
                  component="p"
                  display={{ xs: 'none', md: 'block' }}
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  textAlign={{ xs: 'center', md: 'start' }}
                  sx={{
                    mb: '20px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Rent your Villages for SAP tokens via our "Village Cloning" technology allowing
                  Village NFT owners to mint a duplicate Village to rent without risking ownership
                  of the original Village NFTs.
                </Typography>
                <Typography
                  component="p"
                  display={{ xs: 'none', md: 'block' }}
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  textAlign={{ xs: 'center', md: 'start' }}
                  sx={{
                    mb: '20px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Find Village partners on the marketplace or in-game, allowing you to repurpose
                  your own NFT into a passive-income generating technique.
                </Typography>
                <Typography
                  component="p"
                  display={{ xs: 'flex', md: 'none' }}
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                  sx={{
                    alignItems: 'center',
                    mb: '20px',
                    fontWeight: '300',
                    color: 'var(--yellow-01)',
                    cursor: 'pointer',
                  }}
                >
                  Read more
                  <ArrowForwardIos
                    htmlColor="var(--yellow-01)"
                    sx={{ width: '14px', ml: '6px', pt: '2px' }}
                  />
                </Typography>
              </Box>
              <Box
                component="div"
                className={cx('about-us__icon-marketplace')}
                ml={{ md: '60px' }}
                mr={{ flex: '1' }}
              >
                <LazyLoadImage effect="blur" src={Marketplace} alt="marketplace" />
              </Box>
            </Stack>
          </Box>

          {/* SECTION - MARKETPLACE */}
          <Box
            component="section"
            className={cx('about-us__building')}
            display={{ xs: 'none', md: 'block' }}
            sx={{ mb: '100px' }}
          >
            <Box component="div" sx={{ pt: '40px', mb: '50px' }}>
              <Typography
                component="h2"
                sx={{
                  mb: '32px',
                  textAlign: 'center',
                  fontSize: '4rem',
                  lineHeight: '4.4rem',
                  fontWeight: '600',
                  color: 'var(--white)',
                  flex: '0.6',
                }}
              >
                Building Advancement
              </Typography>
              <Typography
                component="p"
                maxWidth={{ md: '380px' }}
                sx={{
                  margin: 'auto',
                  textAlign: 'center',
                  fontSize: '1.4rem',
                  fontWeight: '300',
                  lineHeight: '1.8rem',
                  color: 'var(--gray-01)',
                }}
              >
                Upgrades on buildings help unlock more content which will arm your village with more
                sophisticated troops and defenses.
              </Typography>
            </Box>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Box component="div" className={cx('about-us__icon-level-01')}>
                <LazyLoadImage effect="blur" src={Level01} alt="level-01" />
                <Typography
                  component="p"
                  sx={{
                    mt: '20px',
                    textAlign: 'center',
                    fontSize: '1.4rem',
                    lineHeight: '1.8rem',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Clan Castle <br /> Level 1
                </Typography>
              </Box>
              <Box
                component="div"
                className={cx('about-us__icon-arrow-left-dot-gray')}
                sx={{ px: '26px' }}
              >
                <LazyLoadImage effect="blur" src={ArrowLeftDotGray} alt="arrow-left-dot-gray" />
              </Box>
              <Box component="div" className={cx('about-us__icon-level-02')}>
                <LazyLoadImage effect="blur" src={Level02} alt="level-02" />
                <Typography
                  component="p"
                  sx={{
                    mt: '20px',
                    textAlign: 'center',
                    fontSize: '1.4rem',
                    lineHeight: '1.8rem',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Clan Castle <br /> Level 2
                </Typography>
              </Box>
              <Box
                component="div"
                className={cx('about-us__icon-arrow-left-dot-gray')}
                sx={{ px: '26px' }}
              >
                <LazyLoadImage effect="blur" src={ArrowLeftDotGray} alt="arrow-left-dot-gray" />
              </Box>
              <Box component="div" className={cx('about-us__icon-level-03')}>
                <LazyLoadImage effect="blur" src={Level03} alt="level-03" />
                <Typography
                  component="p"
                  sx={{
                    mt: '20px',
                    textAlign: 'center',
                    fontSize: '1.4rem',
                    lineHeight: '1.8rem',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Clan Castle <br /> Level 3
                </Typography>
              </Box>
              <Box
                component="div"
                className={cx('about-us__icon-arrow-left-dot-gray')}
                sx={{ px: '26px' }}
              >
                <LazyLoadImage effect="blur" src={ArrowLeftDotGray} alt="arrow-left-dot-gray" />
              </Box>
              <Box component="div" className={cx('about-us__icon-level-04')}>
                <LazyLoadImage effect="blur" src={Level04} alt="level-04" />
                <Typography
                  component="p"
                  sx={{
                    mt: '20px',
                    textAlign: 'center',
                    fontSize: '1.4rem',
                    lineHeight: '1.8rem',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Clan Castle <br /> Level 4
                </Typography>
              </Box>
              <Box
                component="div"
                className={cx('about-us__icon-arrow-left-dot-gray')}
                sx={{ px: '26px' }}
              >
                <LazyLoadImage effect="blur" src={ArrowLeftDotGray} alt="arrow-left-dot-gray" />
              </Box>
              <Box component="div" className={cx('about-us__icon-level-05')}>
                <LazyLoadImage effect="blur" src={Level05} alt="level-05" />
                <Typography
                  component="p"
                  sx={{
                    mt: '20px',
                    textAlign: 'center',
                    fontSize: '1.4rem',
                    lineHeight: '1.8rem',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Clan Castle <br /> Level 5
                </Typography>
              </Box>
            </Stack>
            <NavLink to="/guide">
              <Typography
                component="p"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: '10px',
                  fontSize: '1.4rem',
                  lineHeight: '1.8rem',
                  fontWeight: '300',
                  color: 'var(--yellow-01)',
                  cursor: 'pointer',
                }}
              >
                Read more
                <ArrowForwardIos
                  htmlColor="var(--yellow-01)"
                  sx={{ width: '14px', ml: '6px', pt: '2px' }}
                />
              </Typography>
            </NavLink>
          </Box>

          {/* SECTION - THE PANTHEON */}
          <Box component="section" mb={{ xs: '60px', md: '100px' }}>
            <Box component="div" sx={{ flex: '1' }}>
              <Typography
                component="h2"
                fontSize={{ xs: '2.6rem', md: '4rem' }}
                lineHeight={{ xs: '3rem', md: '4.4rem' }}
                sx={{
                  mb: '32px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: 'var(--white)',
                  flex: '0.6',
                }}
              >
                The Pantheon
              </Typography>
              <Typography
                component="p"
                fontSize={{ xs: '1.4rem' }}
                lineHeight={{ xs: '1.8rem' }}
                maxWidth={{ md: '800px' }}
                sx={{
                  margin: 'auto',
                  textAlign: 'center',
                  fontWeight: '300',
                  color: 'var(--gray-01)',
                }}
              >
                Heroes are one of the main NFTs of the game. They help in attacking other villages
                and also in defending your own village. Upgrade your NFTs using SAPPHIRE (SAP)
                making them stronger as well as increasing their market value. Village upgrades like
                Statues also use SAP as the main resource. Statues help enhance your village’s
                performance.
              </Typography>
            </Box>

            <Box
              component="div"
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px' }}
            >
              <NavLink to="/guide">
                <GButton color="primary-01" size="large-long">
                  Explore
                </GButton>
              </NavLink>
            </Box>
            <Box component="div" sx={{ mt: '46px' }}>
              <Swiper
                key="about-us-swiper-pantheon"
                loop
                grabCursor
                navigation
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                parallax={true}
                modules={[EffectFade, Navigation, Pagination, Parallax]}
                breakpoints={{
                  0: { slidesPerView: 2 },
                  900: { slidesPerView: 3 },
                }}
                //  onActiveIndexChange={}
                className="about-us__swiper-pantheon"
              >
                <SwiperSlide>
                  <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    width={{ xs: '156px', sm: '240px', md: '300px' }}
                    sx={{
                      pt: '10px',
                      borderRadius: '16px',
                      background: 'var(--gray-03)',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    <Box component="div" className={cx('about-us__icon-zeus')}>
                      <LazyLoadImage effect="blur" src={Zeus} alt="zeus" />
                    </Box>
                    <Typography
                      component="h2"
                      sx={{
                        mb: '12px',
                        textAlign: 'center',
                        fontSize: '1.8rem',
                        lineHeight: '2.2rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      Zeus
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        mb: '20px',
                        textAlign: 'center',
                        fontSize: '1.4rem',
                        lineHeight: '1.8rem',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      God of All Gods
                    </Typography>
                    <Box component="div" sx={{ mb: '20px' }}>
                      <GButton color="dark">Coming Soon</GButton>
                    </Box>
                  </Stack>
                </SwiperSlide>
                <SwiperSlide>
                  <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    width={{ xs: '156px', sm: '240px', md: '300px' }}
                    sx={{
                      pt: '10px',
                      borderRadius: '16px',
                      background: 'var(--gray-03)',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    <Box component="div" className={cx('about-us__icon-hades')}>
                      <LazyLoadImage effect="blur" src={Hades} alt="hades" />
                    </Box>
                    <Typography
                      component="h2"
                      sx={{
                        mb: '12px',
                        textAlign: 'center',
                        fontSize: '1.8rem',
                        lineHeight: '2.2rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      Hades
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        mb: '20px',
                        textAlign: 'center',
                        fontSize: '1.4rem',
                        lineHeight: '1.8rem',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      God of the Underworld
                    </Typography>
                    <Box component="div" sx={{ mb: '20px' }}>
                      <GButton color="dark">Coming Soon</GButton>
                    </Box>
                  </Stack>
                </SwiperSlide>
                <SwiperSlide>
                  <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    width={{ xs: '156px', sm: '240px', md: '300px' }}
                    sx={{
                      pt: '10px',
                      borderRadius: '16px',
                      background: 'var(--gray-03)',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    <Box component="div" className={cx('about-us__icon-poseidon')}>
                      <LazyLoadImage effect="blur" src={Poseidon} alt="poseidon" />
                    </Box>
                    <Typography
                      component="h2"
                      sx={{
                        mb: '12px',
                        textAlign: 'center',
                        fontSize: '1.8rem',
                        lineHeight: '2.2rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      Poseidon
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        mb: '20px',
                        textAlign: 'center',
                        fontSize: '1.4rem',
                        lineHeight: '1.8rem',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      The God of the SEA
                    </Typography>
                    <Box component="div" sx={{ mb: '20px' }}>
                      <GButton color="dark">Coming Soon</GButton>
                    </Box>
                  </Stack>
                </SwiperSlide>
              </Swiper>
            </Box>
          </Box>

          {/* SECTION - FAQ */}
          <Box component="section" display={{ xs: 'none', md: 'block' }}>
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
            <FAQ />
          </Box>

          {/* SECTION - NEW */}
          <Box component="section">
            <Typography
              component="h2"
              fontSize={{ xs: '2.6rem', md: '4rem' }}
              lineHeight={{ xs: '3rem', md: '4.4rem' }}
              sx={{
                mb: '42px',
                textAlign: 'center',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              News
            </Typography>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box component="div" sx={{ flex: '1', mb: '20px', width: '100%' }}>
                <Swiper
                  key="about-us-swiper-news"
                  grabCursor
                  loop
                  effect={'creative'}
                  navigation
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: ['-120%', 0, -500],
                    },
                    next: {
                      shadow: true,
                      translate: ['120%', 0, -500],
                    },
                  }}
                  modules={[EffectCreative, Navigation]}
                  className="about-us__swiper-news"
                >
                  <SwiperSlide>
                    <Box component="div" className={cx('about-us__icon-hero-group-news')}>
                      <LazyLoadImage effect="blur" src={HeroGroupNews} alt="hero-group-news" />
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box component="div" className={cx('about-us__icon-hero-group-news')}>
                      <LazyLoadImage effect="blur" src={HeroGroupNews} alt="hero-group-news" />
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box component="div" className={cx('about-us__icon-hero-group-news')}>
                      <LazyLoadImage effect="blur" src={HeroGroupNews} alt="hero-group-news" />
                    </Box>
                  </SwiperSlide>
                </Swiper>
              </Box>
              <Box component="div" sx={{ flex: '1' }}>
                <Box component="div" sx={{ mb: '20px' }}>
                  <GButton color="primary-01">New in Rise of Immortals</GButton>
                </Box>
                <Typography
                  component="p"
                  textAlign={{ xs: 'center', md: 'start' }}
                  fontSize={{ xs: '2.6rem', md: '4rem' }}
                  lineHeight={{ xs: '3rem', md: '4.4rem' }}
                  sx={{
                    mb: '16px',
                    fontWeight: '400',
                    color: 'var(--white)',
                  }}
                >
                  COMING SOON
                </Typography>
                <Typography
                  component="p"
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: '20px',
                    fontWeight: '300',
                    color: 'var(--yellow-01)',
                    cursor: 'pointer',
                  }}
                >
                  Read more
                  <ArrowForwardIos
                    htmlColor="var(--yellow-01)"
                    sx={{ width: '14px', ml: '6px', pt: '2px' }}
                  />
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Container>
    </>
  );
}
