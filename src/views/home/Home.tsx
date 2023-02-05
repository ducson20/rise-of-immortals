import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Stack,
  Container,
  Typography,
  Tooltip,
  TooltipProps,
  tooltipClasses,
} from '@mui/material';
import { styled } from '@mui/system';

import { ErrorOutline } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useForm } from 'react-hook-form';

import { GButton, GInput } from '@/components/base';
import AppPlatform from '@/components/app-platform';
import Video from '@/components/video';
import IconList from '@/components/icon-list';

import SixHead from '@/assets/images/svg/six-head.svg';
import NFTBaseBattlesBackground from '@/assets/images/svg/NFT-based-battles-background.svg';
import Launch from '@/assets/images/svg/launch.svg';
import CalendarBar from '@/assets/images/svg/calendar-bar.svg';
import GameMobile from '@/assets/images/game-mobile.png';
import Hero from '@/assets/images/hero.png';
import Character01 from '@/assets/images/character-01.png';
import Character02 from '@/assets/images/character-02.png';
import Diamond from '@/assets/images/diamond.png';
import ArrowRightDot from '@/assets/images/arrow-right-dot.png';

import ZeusVideo from '@/assets/videos/zeus.mp4';

import { useAppDispatch, useAppSelector } from '@/hooks';

import { sponsorItems } from '@/dummy';

import { layoutActions } from '@/store/feature/layout';
import { isFirstLoadingSelector } from '@/store/selectors';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import './Home.scss';

const cx = classNames.bind(styles);

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);

  const emailInputRef = useRef<any>(null);

  const isFirstLoading = useAppSelector(isFirstLoadingSelector);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    criteriaMode: 'all',
  });

  const onError = (errors: any) => {
    if (errors) {
      setOpen(true);
      const inputElement = document.getElementsByTagName('input')[0];
      inputElement.blur();
    }
  };

  const submitSendMail = (data: { email: string }) => {
    console.log(JSON.stringify(data, null, 2));
    emailInputRef.current.blurInput();
  };
  const onChangeEmail = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isFirstLoading) dispatch(layoutActions.setFirstLoading(false));
  }, [dispatch]);

  return (
    <Container maxWidth={false} className={cx('home__container')}>
      <Container className={cx('home__wrapper')} maxWidth="lg" disableGutters={true}>
        {/* SECTION - AAA HERO-BASED STRATEGY GAME */}
        <Box
          component="section"
          display={{ sm: 'flex' }}
          flexDirection={{ sm: 'row-reverse' }}
          alignItems={{ sm: 'center' }}
          justifyContent={{ sm: 'space-between' }}
          mt={{ sm: '120px' }}
          mb={{ xs: '60px', sm: '90px' }}
        >
          <Box
            component="div"
            flex={{ sm: '1' }}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Box component="div" className={cx('home__icon-hero')} sx={{ mb: '16px' }}>
              <LazyLoadImage effect="blur" src={Hero} alt="hero" />
            </Box>
          </Box>

          <Box component="div" flex={{ sm: '1' }}>
            <Typography
              variant="h1"
              component="h1"
              mb={{ xs: '12px' }}
              textAlign={{ xs: 'center', sm: 'left' }}
              fontSize={{ xs: '2.6rem', sm: '3.8rem', xl: '6rem' }}
              lineHeight={{ xs: '3rem', sm: '4.2rem', xl: '6.4rem' }}
              sx={{
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              AAA HERO-BASED
              <br /> STRATEGY GAME
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              fontSize={{ xs: '1.2rem', sm: '1.4rem', xl: '2rem' }}
              lineHeight={{ xs: '1.4rem', sm: '1.8rem', xl: '2.4rem' }}
              textAlign={{ xs: 'center', sm: 'left' }}
              sx={{
                mb: '20px',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              Powered by NFTs on the Ethereum blockchain
            </Typography>
            <Typography
              component="p"
              textAlign={{ xs: 'center', sm: 'left' }}
              fontSize={{ xs: '1.2rem', sm: '1.4rem', md: '2rem' }}
              lineHeight={{ xs: '1.6rem', sm: '1.8rem', md: '2.4rem' }}
              mb={{ xs: '24px', sm: '50px' }}
              sx={{
                fontWeight: '300',
                color: 'var(--white)',
              }}
            >
              Build your base, expand your army, and earn Sapphire by <br /> conquering enemy bases
              throughout Rise of Immortals.
            </Typography>
            <a
              href="https://discord.com/invite/P3AcE4ywMS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GButton color="primary" size="regular-long">
                Join Discord
              </GButton>
            </a>
          </Box>
        </Box>

        {/* SECTION APP - Earn SAPPHIRE and other IN-GAME RESOURCES */}
        <Box component="section" display={{ xs: 'block', md: 'none' }} sx={{ mb: '60px' }}>
          <Typography
            component="h2"
            textAlign={{ xs: 'left', sm: 'center' }}
            fontSize={{ xs: '2.6rem', md: '2rem' }}
            lineHeight={{ xs: '3rem', md: '2.4rem' }}
            sx={{
              mb: '8px',
              fontWeight: '600',
              color: 'var(--white)',
            }}
          >
            Earn SAPPHIRE and other <br /> IN-GAME RESOURCES
          </Typography>
          <Box
            component="div"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            mb="48px"
          >
            <Box component="div" m={{ sm: 'auto' }}>
              <Typography
                component="p"
                fontSize={{ xs: '1.2rem' }}
                lineHeight={{ xs: '1.6rem' }}
                sx={{
                  mb: '16px',
                  fontWeight: '300',
                  color: 'var(--gray-01)',
                }}
              >
                Earn SAPPHIRE by winning battles, successfully defending your base, completing
                different challenges, climbing your way up on the leaderboards, and many more.
              </Typography>
              <Typography
                component="p"
                fontSize={{ xs: '1.2rem' }}
                lineHeight={{ xs: '1.6rem' }}
                sx={{
                  fontWeight: '300',
                  color: 'var(--gray-01)',
                }}
              >
                Gold, Elixir, and Dark Elixir are additional in-game resources that your heroes and
                troops can steal from opponent's villages.
              </Typography>
            </Box>
            <Box component="div" className={cx('home__icon-diamond')}>
              <LazyLoadImage effect="blur" src={Diamond} alt="diamond" />
            </Box>
          </Box>
          <Box
            component="div"
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <AppPlatform />
          </Box>
        </Box>
        {/* SECTION WEB - Earn SAPPHIRE and other IN-GAME RESOURCES */}
        <Box
          component="section"
          className={cx('home__earn-sapphire')}
          display={{ xs: 'none', md: 'flex' }}
          sx={{ position: 'relative', p: '90px 144px 66px 56px', mb: '90px' }}
        >
          <Box component="div" sx={{ flex: '1.4' }}>
            <Typography
              component="h2"
              className={cx('home__earn-sapphire__title')}
              textAlign="left"
              fontSize={{ xs: '2.6rem', md: '3.6rem' }}
              lineHeight={{ xs: '3rem', md: '4rem' }}
              sx={{
                mb: '16px',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              Earn SAPPHIRE and other <br /> IN-GAME RESOURCES
            </Typography>
            <Box
              component="div"
              sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
            >
              <AppPlatform />
            </Box>
          </Box>
          <Box component="div" sx={{ flex: '1' }}>
            <Typography
              component="p"
              className={cx('home__earn-sapphire__description')}
              sx={{
                mb: '16px',
                fontSize: '1.4rem',
                lineHeight: '1.8rem',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              Earn SAPPHIRE by winning battles, successfully defending your base, completing
              different challenges, climbing your way up on the leaderboards, and many more.
            </Typography>
            <Typography
              component="p"
              className={cx('home__earn-sapphire__description')}
              sx={{
                fontSize: '1.4rem',
                lineHeight: '1.8rem',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              Gold, Elixir, and Dark Elixir are additional in-game resources that your heroes and
              troops can steal from opponent's villages.
            </Typography>
          </Box>
          <Box
            component="div"
            className={cx('home__icon-diamond')}
            sx={{ position: 'absolute', top: '-36%', right: '-6%' }}
          >
            <LazyLoadImage effect="blur" src={Diamond} alt="diamond" />
          </Box>
        </Box>
        {/* SECTION SPONSOR */}
        <Box component="section" sx={{ mb: '60px' }}>
          <Box component="div" mb={{ xs: '60px', md: '100px' }}>
            <Typography
              component="h2"
              fontSize={{ xs: '2.6rem', md: '4rem' }}
              lineHeight={{ xs: '3rem', md: '4.4rem' }}
              sx={{
                mb: '40px',
                textAlign: 'center',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              Sponsor by
            </Typography>
            <Swiper
              key="home-swiper-sponsor"
              grabCursor
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              speed={12000}
              modules={[EffectFade, Autoplay]}
              slidesPerView="auto"
              className="home__swiper-sponsor"
            >
              {sponsorItems?.map((item) => (
                <SwiperSlide key={item?.id} className="home__swiper-sponsor-item">
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    className={cx('home__icon-sponsor')}
                  >
                    <img src={item?.img} alt={item?.img} />
                    {/* <LazyLoadImage effect="blur" src={item?.img} alt={item?.img} /> */}
                  </Stack>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box
            component="div"
            className={cx('home__sponsor__follow')}
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent={{ xs: 'center', md: 'flex-end' }}
            p={{ md: '116px 60px 120px 0' }}
            mb={{ xs: '50px', md: '140px' }}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="div"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                component="h2"
                display={{ xs: 'none', md: 'block' }}
                sx={{
                  mb: '32px',
                  textAlign: 'center',
                  fontSize: '4rem',
                  lineHeight: '4.4rem',
                  fontWeight: '600',
                  color: 'var(--white)',
                }}
              >
                SEE THE LATEST
              </Typography>
              <Typography
                component="p"
                display={{ xs: 'none', md: 'block' }}
                sx={{
                  mb: '20px',
                  fontSize: '1.4rem',
                  lineHeight: '1.8rem',
                  fontWeight: '300',
                  color: 'var(--gray-01)',
                }}
              >
                To stay on top of your game, keep an eye on the in-game News section. <br /> Follow
                us on social media for the latest chatter and sneak peeks on <br /> what the team is
                working on. Don’t be a stranger and join the <br /> conversation
              </Typography>
              <Typography
                component="h2"
                sx={{
                  mb: '6px',
                  textAlign: 'center',
                  fontWeight: '400',
                  fontSize: '1.6rem',
                  lineHeight: '2rem',
                  color: 'var(--white)',
                }}
              >
                Follow Rise of Immortals on
              </Typography>
              <IconList />
            </Box>
          </Box>
          <Box component="div" display={{ xs: 'block', md: 'none' }}>
            <Typography
              component="h2"
              fontSize={{ xs: '2.6rem', md: '4rem' }}
              lineHeight={{ xs: '3rem', md: '4.4rem' }}
              sx={{
                mb: '16px',
                textAlign: 'center',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              See the last
            </Typography>
            <Typography
              component="p"
              maxWidth={{ xs: '88%', sm: 'auto' }}
              m={{ xs: '0 auto' }}
              sx={{
                textAlign: 'center',
                fontSize: '1.4rem',
                lineHeight: '1.8rem',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              To stay on top of your game, keep an eye on the in-game News section. Follow us on
              social media for the latest chatter and sneak peeks on what the team is working on.
              Don’t be a stranger and join the conversation
            </Typography>
          </Box>
        </Box>
        {/* SECTION App - NFT-based Battles: Heroes and Land NFTs - Lead you Clan to the Victory */}
        <Box component="section" display={{ xs: 'block', md: 'none' }} sx={{ mb: '60px' }}>
          <Box
            component="div"
            className={cx('home__hero-and-clan-app')}
            sx={{ position: 'relative', mb: '50px' }}
          >
            <Box
              component="div"
              width={100}
              height={100}
              className={cx('home__icon-six-head')}
              sx={{ position: 'absolute', bottom: '-10%', right: 0 }}
            >
              <LazyLoadImage effect="blur" src={SixHead} alt="six-head" />
            </Box>
          </Box>
          <Box component="div">
            <Typography
              component="h2"
              sx={{
                mb: '16px',
                fontSize: '1.6rem',
                lineHeight: '2rem',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              NFT-based Battles: Heroes <br /> and Land NFTs
            </Typography>
            <Typography
              component="p"
              sx={{
                mb: '42px',
                fontSize: '1.4rem',
                lineHeight: '1.8rem',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              Rise to the top with your NFTs and dominate the Leaderboards. As you climb up the
              Leaderboard and your village improves, the stronger the enemies become. Build and
              upgrade your village, customize and strengthen your troops, and build and improve
              statues to become a strong contender and a force to be reckoned with.
            </Typography>
            <Typography
              component="h2"
              sx={{
                mb: '16px',
                fontSize: '1.4rem',
                lineHeight: '1.8rem',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              Lead you Clan to the Victory
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
              Hero has heard our call! Join the war of the Heroes and conquer this battle through
              Rise of Immortals. Customize your army, build your defense, and crush your opponents.
              Using the power of the Heroes, strike your enemies and forge a legacy by conquering
              their lands and destroying their villages.
            </Typography>
          </Box>
        </Box>
        {/* SECTION Web - NFT-based Battles: Heroes and Land NFTs - Lead you Clan to the Victory */}
        <Box component="section" display={{ xs: 'none', md: 'block' }} sx={{ mb: '178px' }}>
          <Box
            component="div"
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: '150px',
            }}
          >
            <Box component="div" className={cx('home__icon-NFT-based-battles-background')}>
              <LazyLoadImage
                effect="blur"
                src={NFTBaseBattlesBackground}
                alt="NFT-base-battles-background"
              />
            </Box>
            <Box
              component="div"
              p={{ sm: '56px 416px 0px 115px', lg: '56px 538px 0px 230px' }}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                display: 'flex',
              }}
            >
              <Box component="div" sx={{ position: 'relative' }}>
                <Typography
                  component="h2"
                  sx={{
                    mb: '16px',
                    fontSize: '4rem',
                    lineHeight: '4.4rem',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  NFT-based Battles: Heroes and Land NFTs
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: '1.4rem',
                    lineHeight: '1.8rem',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Rise to the top with your NFTs and dominate the Leaderboards. As you climb up the
                  Leaderboard and your village improves, the stronger the enemies become. Build and
                  upgrade your village, customize and strengthen your troops, and build and improve
                  statues to become a strong contender and a force to be reckoned with.
                </Typography>
                <Box
                  component="div"
                  width={380}
                  height={380}
                  sx={{ position: 'absolute', top: '-70%', right: '-93%' }}
                >
                  <LazyLoadImage effect="blur" src={SixHead} alt="six-head" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Box component="div">
              <Typography
                component="h2"
                sx={{
                  mb: '16px',
                  fontSize: '4rem',
                  lineHeight: '4.4rem',
                  fontWeight: '600',
                  color: 'var(--white)',
                }}
              >
                Lead you Clan to the Victory{' '}
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: '1.4rem',
                  lineHeight: '1.8rem',
                  fontWeight: '300',
                  color: 'var(--gray-01)',
                }}
              >
                Hero has heard our call! Join the war of the Heroes and conquer this battle through
                Rise of Immortals. Customize your army, build your defense, and crush your
                opponents. Using the power of the Heroes, strike your enemies and forge a legacy by
                conquering their lands and destroying their villages.
              </Typography>
            </Box>
            <Box component="div" className={cx('home__icon-game-mobile')}>
              <LazyLoadImage effect="blur" src={GameMobile} alt="game-mobile" />
            </Box>
          </Box>
        </Box>
        {/* SECTION - Launch is just the beginning  */}
        <Box component="section">
          <Box component="div" width={{ md: '350px' }} ml={{ md: 'auto' }} mr={{ md: '120px' }}>
            <Typography
              component="h2"
              fontSize={{ xs: '2.6rem', md: '4rem' }}
              lineHeight={{ xs: '3rem', md: '4.4rem' }}
              textAlign={{ xs: 'center', md: 'start' }}
              sx={{
                mb: '16px',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              Launch is just the beginning
            </Typography>
            <Typography
              component="p"
              textAlign={{ xs: 'center', md: 'start' }}
              maxWidth={{ xs: '84%', sm: 'none' }}
              m={{ xs: '0 auto' }}
              sx={{
                fontSize: '1.4rem',
                lineHeight: '1.8rem',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              Rise of Immortals has been constantly evolving to offer more user-friendly, more
              consistent and more fun online experiences for.
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box component="div" className={cx('home__icon-launch')}>
              <LazyLoadImage effect="blur" src={Launch} alt="launch" />
            </Box>
            <Box
              component="div"
              sx={{ overflowX: 'scroll', overflowY: 'hidden' }}
              overflow={{ md: 'hidden' }}
            >
              <Box
                component="div"
                className={cx('home__icon-arrow-right-dot')}
                display={{
                  xs: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  md: 'none',
                }}
                sx={{ mb: '16px' }}
              >
                <LazyLoadImage effect="blur" src={ArrowRightDot} alt="arrow-right-dot" />
              </Box>
              <Box
                component="div"
                sx={{ overflowX: 'scroll', overflowY: 'hidden' }}
                overflow={{ lg: 'hidden' }}
                height={{ xs: 150, md: 210 }}
              >
                <Box
                  component="div"
                  className={cx('home__icon-calendar-bar')}
                  mb={{ xs: '16px', md: '70px' }}
                  display={{ xs: 'block', lg: 'flex' }}
                >
                  <LazyLoadImage effect="blur" src={CalendarBar} alt="calendar-bar" width="100%" />
                </Box>
                <Box
                  component="div"
                  width={{ xs: '865px', lg: 'auto' }}
                  sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      ml: '2.1%',
                      mr: '17px',
                      pl: '6px',
                      height: '68px',
                      border: 'solid hsla(0,0%,100%,.38)',
                      borderWidth: '0 0 0 1px',
                    }}
                  >
                    <Box
                      component="p"
                      sx={{
                        fontSize: '1.6rem',
                        lineHeight: '2rem',
                        fontWeight: '600',
                        color: 'var(--gray-02)',
                      }}
                    >
                      Q1 2022
                    </Box>
                    <Box
                      component="p"
                      sx={{
                        fontSize: '1.3rem',
                        lineHeight: '1.8rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      Game Concept <br /> Released
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    ml={{ xs: '3.3%', lg: '2.14%' }}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      pl: '6px',
                      height: '68px',
                      border: 'solid hsla(0,0%,100%,.38)',
                      borderWidth: '0 0 0 1px',
                    }}
                  >
                    <Box
                      component="p"
                      sx={{
                        fontSize: '1.6rem',
                        lineHeight: '2rem',
                        fontWeight: '600',
                        color: 'var(--gray-02)',
                      }}
                    >
                      Q2 2022
                    </Box>
                    <Box
                      component="p"
                      sx={{
                        fontSize: '1.3rem',
                        lineHeight: '1.8rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      Game Art & Graphics <br /> Released
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    ml={{ xs: '3.3%', lg: '2.14%' }}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      pl: '6px',
                      height: '68px',
                      border: 'solid hsla(0,0%,100%,.38)',
                      borderWidth: '0 0 0 1px',
                    }}
                  >
                    <Box
                      component="p"
                      sx={{
                        fontSize: '1.6rem',
                        lineHeight: '2rem',
                        fontWeight: '600',
                        color: 'var(--gray-02)',
                      }}
                    >
                      Q3 2022
                    </Box>
                    <Box
                      component="p"
                      sx={{
                        fontSize: '1.3rem',
                        lineHeight: '1.8rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      Community Launch
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    ml={{ xs: '3.5%', lg: '2.14%' }}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      pl: '6px',
                      height: '68px',
                      border: 'solid hsla(0,0%,100%,.38)',
                      borderWidth: '0 0 0 1px',
                    }}
                  >
                    <Box
                      component="p"
                      sx={{
                        fontSize: '1.6rem',
                        lineHeight: '2rem',
                        fontWeight: '600',
                        color: 'var(--gray-02)',
                      }}
                    >
                      Q4 2022
                    </Box>
                    <Box
                      component="p"
                      sx={{
                        fontSize: '1.3rem',
                        lineHeight: '1.8rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      Public Beta Launch
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    ml={{ xs: '3.1%', lg: '2.14%' }}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      pl: '6px',
                      height: '68px',
                      border: 'solid hsla(0,0%,100%,.38)',
                      borderWidth: '0 0 0 1px',
                    }}
                  >
                    <Box
                      component="p"
                      sx={{
                        fontSize: '1.6rem',
                        lineHeight: '2rem',
                        fontWeight: '600',
                        color: 'var(--gray-02)',
                      }}
                    >
                      Q1 2023
                    </Box>
                    <Box
                      component="p"
                      sx={{
                        fontSize: '1.3rem',
                        lineHeight: '1.8rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      Game Launch
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    ml={{ xs: '3.16%', lg: '2.14%' }}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      pl: '6px',
                      height: '68px',
                      border: 'solid hsla(0,0%,100%,.38)',
                      borderWidth: '0 0 0 1px',
                    }}
                  >
                    <Box
                      component="p"
                      sx={{
                        fontSize: '1.6rem',
                        lineHeight: '2rem',
                        fontWeight: '600',
                        color: 'var(--gray-02)',
                      }}
                    >
                      Q2 2023
                    </Box>
                    <Box
                      component="p"
                      sx={{
                        fontSize: '1.3rem',
                        lineHeight: '1.8rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      Tournament ESports
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* SECTION  - Video trailer  */}
        <Box component="section" sx={{ mb: '60px' }}>
          <Box component="div" sx={{ mb: '50px' }}>
            <Typography
              component="h2"
              fontSize={{ xs: '2.6rem', md: '4rem' }}
              lineHeight={{ xs: '3rem', md: '4.4rem' }}
              mb={{ md: '20px' }}
              sx={{
                textAlign: 'center',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              Videos
            </Typography>
            <Swiper
              key="video-swiper"
              slidesPerView={2}
              spaceBetween={30}
              loop
              grabCursor
              navigation
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
              breakpoints={{
                0: { slidesPerView: 1 },
                1023: { slidesPerView: 2 },
              }}
              className="home__swiper-header"
            >
              <SwiperSlide>
                <Video src={ZeusVideo} type="video/mp4" />
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="div"
                  width={{ xs: 226, sm: 310, md: 350 }}
                  height={{ xs: 196, sm: 280, md: 320 }}
                  mt={{ xs: '56px', md: '58px' }}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '20px',
                    bgcolor: 'var(--gray-03)',
                  }}
                >
                  <Typography
                    component="h2"
                    fontSize={{ xs: '3rem', md: '6rem' }}
                    sx={{
                      textAlign: 'center',
                      fontStyle: 'italic',
                      fontWeight: '300',
                      color: 'var(--white)',
                    }}
                  >
                    COMMING SOON
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="div"
                  width={{ xs: 226, sm: 310, md: 350 }}
                  height={{ xs: 196, sm: 280, md: 320 }}
                  mt={{ xs: '56px', md: '58px' }}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '20px',
                    bgcolor: 'var(--gray-03)',
                  }}
                >
                  <Typography
                    component="h2"
                    fontSize={{ xs: '3rem', md: '6rem' }}
                    sx={{
                      textAlign: 'center',
                      fontStyle: 'italic',
                      fontWeight: '300',
                      color: 'var(--white)',
                    }}
                  >
                    COMMING SOON
                  </Typography>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
        {/* SECTION  - Vision  */}
        <Box component="section" display={{ xs: 'none', md: 'flex' }} sx={{ mb: '60px' }}>
          <Box
            sx={{
              m: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              maxWidth: '920px',
            }}
          >
            <Box component="div" sx={{ display: 'grid' }}>
              <Swiper
                key="vision-swiper"
                loop
                grabCursor
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="home__swiper-vision"
              >
                <SwiperSlide>
                  <Typography
                    component="h2"
                    sx={{
                      mb: '32px',
                      pr: '8px',
                      fontSize: '4rem',
                      lineHeight: '4.4rem',
                      fontWeight: '600',
                      color: 'var(--white)',
                    }}
                  >
                    Vision
                  </Typography>
                  <Box
                    component="div"
                    sx={{
                      bgcolor: 'var(--gray-03)',
                      borderRadius: '26px',
                      p: '22px 28px 38px 30px',
                    }}
                  >
                    <Typography
                      component="p"
                      sx={{
                        mb: '16px',
                        fontSize: '1.4rem',
                        lineHeight: '1.8rem',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      RISE of IMMORTALS aims to catch the wave to follow the trends of tomorrow and
                      do the right thing about P2E games.
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
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
                  <Typography
                    component="h2"
                    sx={{
                      mb: '32px',
                      pr: '8px',
                      fontSize: '4rem',
                      lineHeight: '4.4rem',
                      fontWeight: '600',
                      color: 'var(--white)',
                    }}
                  >
                    Mission
                  </Typography>
                  <Box
                    component="div"
                    sx={{
                      bgcolor: 'var(--gray-03)',
                      borderRadius: '26px',
                      p: '22px 28px 38px 30px',
                    }}
                  >
                    <Typography
                      component="p"
                      sx={{
                        mb: '16px',
                        fontSize: '1.4rem',
                        lineHeight: '1.8rem',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      We will revolutionize gaming industry and aim to build the best gaming
                      experience to players all over the world.
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        fontSize: '1.4rem',
                        lineHeight: '1.8rem',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      Satisfying your hunger for entertainment, fame and glory while rewarding you
                      generous bounty through crypto industry.
                    </Typography>
                  </Box>
                </SwiperSlide>
              </Swiper>
              <Box
                component="div"
                sx={{
                  position: 'relative',
                  bgcolor: 'var(--gray-03)',
                  borderRadius: '26px',
                  p: '30px',
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    textAlign: 'center',
                    fontSize: '1.4rem',
                    lineHeight: '1.8rem',
                    fontWeight: '600',
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
                    top: '-12%',
                    left: '4%',
                    fontSize: '4.4rem',
                    lineHeight: '4.8rem',
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
                    bottom: '0',
                    right: '3%',
                    fontSize: '4.4rem',
                    lineHeight: '4.8rem',
                    fontWeight: '600',
                    color: 'var(--white)',
                    transform: 'rotate(180deg) skewX(-15deg)',
                  }}
                >
                  "
                </Typography>
              </Box>
            </Box>
            <Box component="div">
              <LazyLoadImage effect="blur" src={Character01} alt="character-01" />
            </Box>
          </Box>
        </Box>
        {/* SECTION  - Pre register to stay up to date  */}
        <Box
          component="section"
          className={cx('home__pre-register')}
          flexDirection={{ xs: 'column', md: 'row' }}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignCenter: 'center',
            pb: '60px',
          }}
        >
          <Box
            component="div"
            display={{ xs: 'none', md: 'block' }}
            sx={{ flex: 1, transform: 'translateY(-20%)' }}
          >
            <LazyLoadImage effect="blur" src={Character02} alt="character-02" />
          </Box>
          <Box
            component="div"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <Typography
              component="h2"
              fontSize={{ xs: '2.6rem', md: '4rem' }}
              lineHeight={{ xs: '3rem', md: '4.4rem' }}
              textAlign={{ xs: 'center' }}
              sx={{
                mb: '10px',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              Pre register to stay up to date
            </Typography>
            <Typography
              component="p"
              fontSize={{ xs: '1.2rem', md: '1.4rem' }}
              lineHeight={{ xs: '1.6rem', md: '1.8rem' }}
              textAlign={{ xs: 'center', md: 'start' }}
              sx={{
                mb: '20px',
                maxWidth: '390px',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              Sign up to our newsletter to receive development updates, token and NFT drops, and
              exclusive promotions.
            </Typography>
            <LightTooltip
              title={
                errors?.email && (
                  <Stack flexDirection="row" alignItems="center">
                    <ErrorOutline sx={{ mr: '4px', fontSize: '2rem', color: '#d63535' }} />
                    {errors.email.message}
                  </Stack>
                )
              }
              placement="bottom-start"
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
            >
              <Box
                component="form"
                width={{ xs: '340px', md: '370px' }}
                onSubmit={handleSubmit(submitSendMail, onError)}
              >
                <GInput
                  ref={emailInputRef}
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  rightIcon={
                    <GButton type="submit" color="danger">
                      Join us now
                    </GButton>
                  }
                  registerField={{
                    ...register('email', {
                      required: `This field is required`,
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please include an '@' in the email address",
                      },
                    }),
                  }}
                  onChange={onChangeEmail}
                />
                {/* {errors?.email && (
                    <>
                      <Box component="div" display={{ xs: 'none', md: 'block' }}>
                        <Notification
                      type="Error"
                      vertical="bottom"
                      horizontal="right"
                      open={isOpen}
                      TransitionComponent={TransitionRightUp}
                      onClose={onClose}
                    >
                      <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ messages }) => {
                          if (messages) {
                            return Object.entries(messages).map(([type, message]) => (
                              <Typography
                                component="p"
                                key={type}
                                sx={{ fontSize: '1.4rem', lineHeight: '1.8rem' }}
                              >
                                {message}
                              </Typography>
                            ));
                          }
                          return null;
                        }}
                      />
                    </Notification>
                      </Box>
                      <Box component="div" display={{ xs: 'block', md: 'none' }}>
                        <Notification
                        type="Error"
                        vertical="top"
                        horizontal="center"
                        open={isOpen}
                        TransitionComponent={TransitionRightUp}
                        onClose={onClose}
                      >
                        <ErrorMessage
                          errors={errors}
                          name="email"
                          render={({ messages }) => {
                            if (messages) {
                              return Object.entries(messages).map(([type, message]) => (
                                <Typography
                                  component="p"
                                  key={type}
                                  sx={{ fontSize: '1.4rem', lineHeight: '1.8rem' }}
                                >
                                  {message}
                                </Typography>
                              ));
                            }
                            return null;
                          }}
                        />
                      </Notification>
                      </Box>
                    </>
                  )} */}
              </Box>
            </LightTooltip>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
    backgroundColor: '#fdeded',
    color: '#5f2120',
    fontSize: 12,
    fontWeight: 500,
  },
}));
