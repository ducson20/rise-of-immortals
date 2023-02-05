import { Container, Box, Stack, Typography, Grid } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { GButton } from '@/components/base';

import Artist from '@/assets/our-team/artists.png';

import { avatarItems } from '@/dummy';

import Space01 from '@/assets/our-team/space-01.png';
import Space02 from '@/assets/our-team/space-02.png';
import Space03 from '@/assets/our-team/space-03.png';
import Advisors from '@/assets/our-team/advisors.png';

import classNames from 'classnames/bind';
import styles from './OurTeam.module.scss';
import './OurTeam.scss';

const cx = classNames.bind(styles);

const avatarItems01 = avatarItems?.filter((item) => item?.id <= 8);
const avatarItems02 = avatarItems?.filter((item) => item?.id > 8 && item?.id <= 15);

export interface IOurTeamProps {}

export default function OurTeam(props: IOurTeamProps) {
  return (
    <Container maxWidth={false} className={cx('our-team__container')}>
      <Container
        className={cx('our-team__wrapper')}
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1 }}
        disableGutters={true}
      >
        {/* SECTION - WHY YOU MIGHT LOVE IT HERE */}
        <Stack
          className={cx('our-team__background-01')}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mb={{ xs: '60px', md: '100px' }}
          mt="32px"
        >
          <Typography
            fontSize={{ xs: '2.5rem', md: '4.8rem' }}
            lineHeight={{ xs: '3rem', md: '5.2rem' }}
            sx={{
              mb: '16px',
              textAlign: 'center',
              fontWeight: '600',
              color: 'var(--white)',
            }}
          >
            WHY YOU MIGHT LOVE IT HERE
          </Typography>
          <Typography
            fontSize={{ xs: '1.6rem', md: '3rem' }}
            lineHeight={{ xs: '2rem', md: '3.4rem' }}
            sx={{
              textAlign: 'center',
              fontWeight: '200',
              color: 'var(--white)',
            }}
          >
            Best teams. Biggest impact. Nothing in your way.
          </Typography>
        </Stack>
        {/* SECTION - OUR TEAM */}
        <Box component="section" mb={{ xs: '60px', md: '100px' }}>
          <Typography
            fontSize={{ xs: '3.6rem', md: '4rem' }}
            lineHeight={{ xs: '4rem', md: '4.4rem' }}
            sx={{ mb: '32px', textAlign: 'center', fontWeight: '600', color: 'var(--white)' }}
          >
            Our Team
          </Typography>
          <Box component="div" display={{ xs: 'none', md: 'block' }}>
            <Swiper
              key="our-team-swiper"
              parallax={true}
              loop
              grabCursor
              navigation
              modules={[EffectFade, Navigation]}
              breakpoints={{
                0: { slidesPerView: 1 },
              }}
              className="our-team__swiper"
            >
              <SwiperSlide>
                <Grid className={cx('our-team__hero-items')} container spacing={2}>
                  {avatarItems01?.map((item) => (
                    <Grid key={item?.id} item xs={6} md={3}>
                      <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                          p: '26px',
                        }}
                      >
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          className={cx('our-team__icon-avatar')}
                          sx={{ mb: '32px' }}
                        >
                          <LazyLoadImage effect="blur" src={item?.avatar} alt={item?.alt} />
                        </Stack>
                        <Typography
                          sx={{
                            mb: '8px',
                            fontSize: '2rem',
                            lineHeight: '2.4rem',
                            fontWeight: '600',
                            color: 'var(--white)',
                          }}
                        >
                          {item?.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '1.6rem',
                            lineHeight: '2rem',
                            fontWeight: '400',
                            color: 'var(--white)',
                          }}
                        >
                          {item?.subName}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid className={cx('our-team__hero-items')} container spacing={2}>
                  {avatarItems02?.map((item) => (
                    <Grid key={item?.id} item xs={6} md={3}>
                      <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                          p: '26px',
                        }}
                      >
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          className={cx('our-team__icon-avatar')}
                          sx={{ mb: '32px' }}
                        >
                          <LazyLoadImage effect="blur" src={item?.avatar} alt={item?.alt} />
                        </Stack>
                        <Typography
                          sx={{
                            mb: '8px',
                            fontSize: '2rem',
                            lineHeight: '2.4rem',
                            fontWeight: '600',
                            color: 'var(--white)',
                          }}
                        >
                          {item?.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '1.6rem',
                            lineHeight: '2rem',
                            fontWeight: '400',
                            color: 'var(--white)',
                          }}
                        >
                          {item?.subName}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </SwiperSlide>
              <SwiperSlide style={{ height: 'auto' }}>
                <Stack direction="row" justifyContent="center" alignItems="center">
                  <Typography
                    fontSize={{ xs: '5.6rem', md: '6rem' }}
                    lineHeight={{ xs: '6rem', md: '6.4rem' }}
                    sx={{
                      textAlign: 'center',
                      fontWeight: '400',
                      fontStyle: 'italic',
                      color: 'var(--white)',
                    }}
                  >
                    AND MORE...
                  </Typography>
                </Stack>
              </SwiperSlide>
            </Swiper>
          </Box>
          <Box component="div" display={{ xs: 'block', md: 'none' }}>
            <Swiper
              key="our-team-swiper"
              loop
              grabCursor
              navigation
              modules={[EffectFade, Navigation]}
              breakpoints={{
                0: { slidesPerView: 1 },
              }}
              className="our-team__swiper"
            >
              <SwiperSlide>
                <Grid className={cx('our-team__hero-items')} container spacing={2}>
                  {[avatarItems01[0], avatarItems01[1], avatarItems01[2], avatarItems01[3]]?.map(
                    (item) => (
                      <Grid key={item?.id} item xs={6} md={3}>
                        <Stack
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            p: '26px',
                          }}
                        >
                          <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            className={cx('our-team__icon-avatar')}
                            sx={{ mb: '32px' }}
                          >
                            <LazyLoadImage effect="blur" src={item?.avatar} alt={item?.alt} />
                          </Stack>
                          <Typography
                            sx={{
                              mb: '8px',
                              fontSize: '2rem',
                              lineHeight: '2.4rem',
                              fontWeight: '600',
                              color: 'var(--white)',
                            }}
                          >
                            {item?.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '1.2rem',
                              lineHeight: '1.6rem',
                              fontWeight: '400',
                              color: 'var(--white)',
                            }}
                          >
                            {item?.subName}
                          </Typography>
                        </Stack>
                      </Grid>
                    )
                  )}
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid className={cx('our-team__hero-items')} container spacing={2}>
                  {[avatarItems01[4], avatarItems01[5], avatarItems01[6], avatarItems01[7]]?.map(
                    (item) => (
                      <Grid key={item?.id} item xs={6} md={3}>
                        <Stack
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ p: '26px' }}
                        >
                          <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            className={cx('our-team__icon-avatar')}
                            sx={{ mb: '32px' }}
                          >
                            <LazyLoadImage effect="blur" src={item?.avatar} alt={item?.alt} />
                          </Stack>
                          <Typography
                            sx={{
                              mb: '8px',
                              fontSize: '2rem',
                              lineHeight: '2.4rem',
                              fontWeight: '600',
                              color: 'var(--white)',
                            }}
                          >
                            {item?.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '1.2rem',
                              lineHeight: '1.6rem',
                              fontWeight: '400',
                              color: 'var(--white)',
                            }}
                          >
                            {item?.subName}
                          </Typography>
                        </Stack>
                      </Grid>
                    )
                  )}
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid className={cx('our-team__hero-items')} container spacing={2}>
                  {[avatarItems02[0], avatarItems02[1], avatarItems02[2], avatarItems02[3]]?.map(
                    (item) => (
                      <Grid key={item?.id} item xs={6} md={3}>
                        <Stack
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            p: '26px',
                          }}
                        >
                          <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            className={cx('our-team__icon-avatar')}
                            sx={{ mb: '32px' }}
                          >
                            <LazyLoadImage effect="blur" src={item?.avatar} alt={item?.alt} />
                          </Stack>
                          <Typography
                            sx={{
                              mb: '8px',
                              fontSize: '2rem',
                              lineHeight: '2.4rem',
                              fontWeight: '600',
                              color: 'var(--white)',
                            }}
                          >
                            {item?.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '1.2rem',
                              lineHeight: '1.6rem',
                              fontWeight: '400',
                              color: 'var(--white)',
                            }}
                          >
                            {item?.subName}
                          </Typography>
                        </Stack>
                      </Grid>
                    )
                  )}
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid className={cx('our-team__hero-items')} container spacing={2}>
                  {[avatarItems02[4], avatarItems02[5], avatarItems02[6]]?.map((item) => (
                    <Grid key={item?.id} item xs={6} md={3}>
                      <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ p: '26px' }}
                      >
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          className={cx('our-team__icon-avatar')}
                          sx={{ mb: '32px' }}
                        >
                          <LazyLoadImage effect="blur" src={item?.avatar} alt={item?.alt} />
                        </Stack>
                        <Typography
                          sx={{
                            mb: '8px',
                            fontSize: '2rem',
                            lineHeight: '2.4rem',
                            fontWeight: '600',
                            color: 'var(--white)',
                          }}
                        >
                          {item?.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '1.2rem',
                            lineHeight: '1.6rem',
                            fontWeight: '400',
                            color: 'var(--white)',
                          }}
                        >
                          {item?.subName}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </SwiperSlide>
              <SwiperSlide style={{ height: 'auto' }}>
                <Stack direction="row" justifyContent="center" alignItems="center">
                  <Typography
                    fontSize={{ xs: '5.6rem', md: '6rem' }}
                    lineHeight={{ xs: '6rem', md: '6.4rem' }}
                    sx={{
                      textAlign: 'center',
                      fontWeight: '400',
                      fontStyle: 'italic',
                      color: 'var(--white)',
                    }}
                  >
                    AND MORE...
                  </Typography>
                </Stack>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>

        {/* Section - OUR ADVISORS */}
        <Box component="section" mb={{ xs: '60px', md: '100px' }}>
          <Typography
            fontSize={{ xs: '3.6rem', md: '4rem' }}
            lineHeight={{ xs: '4rem', md: '4.4rem' }}
            sx={{ mb: '32px', textAlign: 'center', fontWeight: '600', color: 'var(--white)' }}
          >
            Our Advisors
          </Typography>
          <Swiper
            key="our-team-swiper-our-advisors"
            grabCursor
            loop
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={12000}
            modules={[EffectFade, Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1 },
            }}
            className="our-team__swiper-our-advisors"
          >
            <SwiperSlide className="our-team__swiper-our-advisors-item">
              <Box
                minHeight="450px"
                component="div"
                maxWidth="96%"
                sx={{ p: '50px', background: 'var(--gray-12)', borderRadius: '12px' }}
              >
                <Stack
                  direction={{ xs: 'column-reverse', md: 'row' }}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    mr={{ xs: 'none', md: '30px' }}
                    mt={{ xs: '20px', md: 'none' }}
                    fontSize={{ xs: '1.4rem', md: '2rem' }}
                    lineHeight={{ xs: '1.8rem', md: '2.4rem' }}
                    textAlign={{ xs: 'center', md: 'left' }}
                    sx={{
                      fontWeight: '500',
                      color: 'var(--white)',
                    }}
                  >
                    Current CEO of CryptoCup. Advisors for multiple gaming projects like Amazy,
                    Evermoon, and Wirtual. KOL in the many top tier launchpads and VCs such as
                    RedKite&GameFi, Seedify, Daomaker.
                  </Typography>
                  <Stack direction="column" justifyContent="center" alignItems="center">
                    <Box component="div" className={cx('our-team__icon-advisors')}>
                      <LazyLoadImage effect="blur" src={Advisors} alt="advisors" />
                    </Box>
                    <Typography
                      fontSize={{ xs: '1.6rem', md: '2rem' }}
                      lineHeight={{ xs: '2rem', md: '2.4rem' }}
                      sx={{
                        fontWeight: '600',
                        textAlign: 'center',
                        color: 'var(--white)',
                      }}
                    >
                      Sarids Leelakasamelerk
                    </Typography>
                    <Typography
                      fontSize={{ xs: '1.4rem', md: '1.8rem' }}
                      lineHeight={{ xs: '1.8rem', md: '2.2rem' }}
                      sx={{
                        fontWeight: '600',
                        textAlign: 'center',
                        color: 'var(--white)',
                      }}
                    >
                      (Founder & CEO of Crypto Cup)
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide className="our-team__swiper-our-advisors-item">
              <Box
                minHeight="450px"
                component="div"
                maxWidth="96%"
                sx={{ p: '50px', background: 'var(--gray-12)', borderRadius: '12px' }}
              >
                <Stack
                  direction={{ xs: 'column-reverse', md: 'row' }}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    mr={{ xs: 'none', md: '30px' }}
                    mt={{ xs: '20px', md: 'none' }}
                    fontSize={{ xs: '1.4rem', md: '2rem' }}
                    lineHeight={{ xs: '1.8rem', md: '2.4rem' }}
                    textAlign={{ xs: 'center', md: 'left' }}
                    sx={{
                      fontWeight: '500',
                      color: 'var(--white)',
                    }}
                  >
                    B.Sc. in NUS and M.Sc in NTU. Quantitative trader becoming a crypto enthusiast.
                    Advised and incubated several Binance-listed projects including Dego.Finance,
                    Cocos, etc. 3 years experience working as quant strategist and market making
                    trader.
                  </Typography>
                  <Stack direction="column" justifyContent="center" alignItems="center">
                    <Box component="div" className={cx('our-team__icon-advisors')}>
                      <LazyLoadImage effect="blur" src={Advisors} alt="advisors" />
                    </Box>
                    <Typography
                      fontSize={{ xs: '1.6rem', md: '2rem' }}
                      lineHeight={{ xs: '2rem', md: '2.4rem' }}
                      sx={{
                        fontWeight: '600',
                        textAlign: 'center',
                        color: 'var(--white)',
                      }}
                    >
                      Charlie Ng Jincheng
                    </Typography>
                    <Typography
                      fontSize={{ xs: '1.4rem', md: '1.8rem' }}
                      lineHeight={{ xs: '1.8rem', md: '2.2rem' }}
                      sx={{
                        fontWeight: '600',
                        textAlign: 'center',
                        color: 'var(--white)',
                      }}
                    >
                      (Founder of TideGroups)
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
        {/* Section - OUR ADVISORS */}

        <Box component="section" mb={{ xs: '60px', md: '100px' }}>
          <Typography
            fontSize={{ xs: '3.6rem', md: '4rem' }}
            lineHeight={{ xs: '4rem', md: '4.4rem' }}
            sx={{ mb: '32px', textAlign: 'center', fontWeight: '600', color: 'var(--white)' }}
          >
            Concept Artists
          </Typography>
          <Stack
            direction={{ xs: 'column', md: 'row-reverse' }}
            justifyContent={{ xs: 'center', md: 'space-between' }}
            alignItems="center"
          >
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              flex="1"
              sx={{ mb: '32px' }}
            >
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
                We encourage artists to use their talents where they have the most impact. In
                addition to helping us stay small, they may have the opportunity to work on a
                project they weren't originally supposed to work with. Of course, our artists always
                are consulted first and will take an active role in the decision-making processes.
                As part of our main Concept artists, congratulations. We thank you for your
                invaluable contribution. May these contributions pave the way for our game’s
                success.
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
                Your colleagues trust you to do what is best and appropriate for our promising game,
                Rise of Immortals.
              </Typography>
              <Box
                component="div"
                display={{ md: 'flex' }}
                justifyContent={{ md: 'space-between' }}
                alignItems={{ md: 'center' }}
                width={{ md: '100%' }}
              >
                <a href="https://tichvi.artstation.com/" target="_blank" rel="noopener noreferrer">
                  <GButton color="dark">Some of the products we have made.</GButton>
                </a>
              </Box>
            </Stack>
            <Stack direction="column" justifyContent="center" alignItems="center" flex="1">
              <Box component="div" className={cx('our-team__icon-artist')} sx={{ mb: '8px' }}>
                <LazyLoadImage effect="blur" src={Artist} alt="artist" />
              </Box>
              <Typography
                component="p"
                fontSize={{ xs: '1.4rem', md: '1.8rem' }}
                lineHeight={{ xs: '1.8rem', md: '2.2rem' }}
                sx={{
                  textAlign: 'center',
                  fontWeight: '600',
                  color: 'var(--white)',
                }}
              >
                CULU ARTWORK
              </Typography>
            </Stack>
          </Stack>
        </Box>
        {/* Section - THE STORY AT CG3D */}
        <Box component="section">
          <Swiper
            key="our-team-swiper-story"
            slidesPerView={1}
            loop
            grabCursor
            navigation
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="our-team__swiper-story"
          >
            <SwiperSlide>
              <Box component="div">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={{ xs: '50px', sm: '80px' }}
                >
                  <Typography
                    component="h2"
                    fontSize={{ xs: '2.6rem', md: '4rem' }}
                    lineHeight={{ xs: '3rem', md: '4.4rem' }}
                    sx={{
                      flex: '1',
                      fontWeight: '600',
                      color: 'var(--white)',
                    }}
                  >
                    The Story At CG3D
                  </Typography>
                  <Box
                    component="div"
                    className={cx('our-team__icon-space')}
                    sx={{ display: 'flex', justifyContent: 'center', flex: '1' }}
                  >
                    <LazyLoadImage effect="blur" src={Space01} alt="space-01" />
                  </Box>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Box component="div" sx={{ flex: '1' }}>
                    <Box component="div" sx={{ pr: '8px' }}>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '20px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        We believe that fun and beautiful games will become a source of income for
                        anyone, anywhere. Our mission at CG3D Studios is to bring Rise of Immortals,
                        other Blockchain games, and 3D system art at the top for emerging
                        technologies and global adoption. CG3D Studios was founded by people with
                        vast experience in the industry and are comprised of people from different
                        fields of expertise.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '20px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        Our team focuses on work efficiency, and optimum performance while also
                        promoting creativity and growth through a professional working environment.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '20px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        CG3D Studios was established in Vietnam and quickly had members in France
                        and Finland.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '20px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        CG3D Studios was established in Vietnam and quickly had members in France
                        and Finland.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '20px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        First-class Game Design and Development.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        All of our game content is designed and developed from scratch, i.e., from
                        conceptual designs to 3D character modeling and animations. We believe that
                        focusing on the smallest details will help players to have a great
                        experience.
                      </Typography>
                    </Box>
                  </Box>
                  <Box component="div" sx={{ flex: '1' }}>
                    <Box component="div">
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '20px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        Our 3 design criteria: Good image quality, financial balance and
                        crosschain-platform.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '20px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        We built the game around these fundamental values which we believe is the
                        next generation, the next era.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '20px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        The future is already here and it's not just even distributed yet. We need
                        more adventurers, builders, thinkers and missionaries to make it well known
                        around the world.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '20px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        We believe that the best teams are comprised of diverse individuals all
                        working towards a single goal.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '20px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        Our journey won’t be easy. It’s going to be dark. It’ll be cold. But eternal
                        glory and recognition await for those that walk the road with us. At Rise of
                        Immortals you’ll help build things the world has never seen and conduct
                        experiments that blend gaming, economics, and even political science.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        We have been tirelessly building Rise of Immortals and our goal is to make
                        it the #1 Blockchain game. Now it's time to make it one of the best games in
                        the virtual world.
                      </Typography>
                    </Box>
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
                  mb={{ xs: '50px', sm: '80px' }}
                >
                  <Typography
                    fontSize={{ xs: '2.6rem', md: '4rem' }}
                    lineHeight={{ xs: '3rem', md: '4.4rem' }}
                    sx={{
                      flex: '1',
                      fontWeight: '600',
                      color: 'var(--white)',
                    }}
                  >
                    A Graphics <br /> Engineer's Story
                  </Typography>
                  <Box
                    component="div"
                    className={cx('our-team__icon-space')}
                    sx={{ display: 'flex', justifyContent: 'center', flex: '1' }}
                  >
                    <LazyLoadImage effect="blur" src={Space02} alt="space-02" />
                  </Box>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Box component="div" sx={{ flex: '1' }}>
                    <Box component="div" sx={{ pr: '8px' }}>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '20px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        How important is the average daily salary really for an engineer or any
                        other position at Rise of Immortals? If you've ever thought about a career
                        with us, you've probably wondered about it. And for good reason, since you
                        can only match an 'open position' message to an acceptable length.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '20px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        Of course, certain aspects of a job are universal. If you're an engineer,
                        depending on your specialty, you'll be designing databases, developing
                        clients, writing code, and tinkering with curly braces. The same is true
                        here and elsewhere.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '20px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        What makes the job at Rise of Immortals stand out is that no matter what
                        role you've been hired for, you're in those shoes because...
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        • you are an expert at what you do
                        <br />• you don't hesitate to use your unique expertise, and • you are
                        <br />
                        committed to cooperation.
                      </Typography>
                    </Box>
                  </Box>
                  <Box component="div" sx={{ flex: '1' }}>
                    <Box component="div">
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '20px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        What we mean by your manual application is self-explanatory, but what do we
                        mean when we say we're looking for partnership types? In practical terms, we
                        are saying that your team's goals take precedence over individual agendas,
                        that you are never too proud to ask questions, and that you appreciate the
                        importance of helping others. Friendly is essential and sincere respect for
                        your teammates and colleagues is indispensable.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        Here we don't count years at the company when they choose who they listen
                        to. You are trusted from day one to be a complete voice on your team and
                        company, contributing to everyone's success.
                      </Typography>
                    </Box>
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
                  mb={{ xs: '50px', sm: '80px' }}
                >
                  <Typography
                    fontSize={{ xs: '2.6rem', md: '4rem' }}
                    lineHeight={{ xs: '3rem', md: '4.4rem' }}
                    sx={{
                      flex: '1',
                      fontWeight: '600',
                      color: 'var(--white)',
                    }}
                  >
                    Freedom And <br /> Responsibility
                  </Typography>
                  <Box
                    component="div"
                    className={cx('our-team__icon-space')}
                    sx={{ display: 'flex', justifyContent: 'center', flex: '1' }}
                  >
                    <LazyLoadImage effect="blur" src={Space03} alt="space-03" />
                  </Box>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Box component="div" sx={{ flex: '1' }}>
                    <Box component="div" sx={{ pr: '8px' }}>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '20px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        What strikes us most about the people at CG3D Studios is that everyone can
                        contribute to the team's efforts and is strongly encouraged to do so. While
                        we are all experts in our fields, we also have to step out of our comfort
                        zones and work as generalists, which enables us to broaden our understanding
                        of new concepts. Some artists in other studios don’t focus on the smallest
                        of details.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        To avoid situations like this, CG3D Studios meticulously creates even the
                        smallest elements, like shoelaces. In our company, we have two artists on
                        every team who create the individual parts of the game. So rest assured that
                        no details are done haphazardly. Consequently, three programmers on every
                        team share coding chores and collaborate with our designers to provide the
                        finest gaming experience possible.
                      </Typography>
                    </Box>
                  </Box>
                  <Box component="div" sx={{ flex: '1' }}>
                    <Box component="div">
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '20px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        Making the best game to be played in a decade is our major objective. To
                        achieve this, we must have mutual respect for one another and be mindful of
                        what the other team members are working on. Although we consult with
                        everyone’s opinions before making a decision, the team member who is most
                        knowledgeable about the subject at hand always has the final word. For
                        example, we can all make suggestions about the looks of some character, but
                        the artist who created that character always makes the final call.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        On the flip side of freedom, there's always the responsibility that comes
                        with it. In difficult times, everyone still has to pull the same rope, which
                        is not always easy. Individuals and teams are small, so there's no room for
                        people to just stand on the sidelines and wait for someone to tell them what
                        to do. In order to provide clients with the optimal product experience, we
                        must also identify common ground between the approaches of individuals and
                        teams.
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </Container>
  );
}
