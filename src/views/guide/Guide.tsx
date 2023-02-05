import { Container, Box, Stack, Typography, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { villageBuildingItems, villageDefenderItems, trapsItems } from '@/dummy';

import SearchNFTs from '@/components/guide/SearchNFTs';

import classNames from 'classnames/bind';
import styles from './Guide.module.scss';
import './Guide.scss';

const cx = classNames.bind(styles);

export interface IOurTeamProps {}

export default function OurTeam(props: IOurTeamProps) {
  return (
    <Container maxWidth={false} className={cx('guide__container')}>
      <Container
        className={cx('guide__wrapper')}
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1 }}
        disableGutters={true}
      >
        {/* SECTION - WHY YOU MIGHT LOVE IT HERE */}
        <Box component="section" pt={{ xs: '60px', md: '100px' }}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography
              component="h2"
              fontSize={{ xs: '3.6rem', md: '4rem' }}
              lineHeight={{ xs: '4rem', md: '4.4rem' }}
              sx={{ mb: '32px', textAlign: 'center', fontWeight: '600', color: 'var(--white)' }}
            >
              Concept Artists
            </Typography>
            <Typography
              component="p"
              fontSize={{ xs: '1.4rem' }}
              lineHeight={{ xs: '1.8rem' }}
              sx={{
                maxWidth: '780px',
                mb: '20px',
                textAlign: 'center',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              Welcome to an ad-free, mobile-friendly, and multi-lingual database for Rise of
              Immortals. Our database is composed of a vast and unique collection of army troops and
              defense systems. All of the data is pulled directly from the game files. So, stay
              tuned and always be up to date with our new game updates! Upgrades on buildings help
              unlock more content which will arm your village with more sophisticated troops and
              defenses.
            </Typography>
          </Stack>

          <Box
            component="div"
            sx={{
              position: 'relative',
              maxWidth: '440px',
              mx: 'auto',
              mb: '32px',
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
              This is not the complete version, it is for beta only. We will update with better and
              complete versions soon.
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
          <SearchNFTs />
        </Box>

        <NFTsItems title="Village Building" items={villageBuildingItems} />
        <NFTsItems title="Village Defenders" items={villageDefenderItems} />
        <NFTsItems title="Traps" items={trapsItems} />
        <NFTsItems title="Heroes" items={[]} />
        <NFTsItems title="Troops" items={[]} />
        <NFTsItems title="Spells" items={[]} />
        <NFTsItems title="Obstacles" items={[]} />
        <NFTsItems title="Scenery" items={[]} />
      </Container>
    </Container>
  );
}

export interface INFTsItems {
  items?: INFTsItem[] | [];
  title: string;
}

export const NFTsItems = ({ items, title }: INFTsItems) => {
  return (
    <Box component="section" sx={{ mb: '64px' }}>
      <Box component="div">
        <Typography
          component="h2"
          fontSize={{ xs: '2.6rem', md: '4rem' }}
          lineHeight={{ xs: '3rem', md: '4.4rem' }}
          sx={{
            flex: '1',
            mb: '32px',
            fontWeight: '600',
            color: 'var(--white)',
          }}
        >
          {title}
        </Typography>
        {items?.length === 0 ? (
          <Typography
            fontSize={{ xs: '5.6rem', md: '6rem' }}
            lineHeight={{ xs: '6rem', md: '6.4rem' }}
            sx={{
              fontWeight: '300',
              fontStyle: 'italic',
              textAlign: 'center',
              color: 'var(--white)',
            }}
          >
            COMING SOON
          </Typography>
        ) : (
          <Swiper
            key="guide-swiper"
            grabCursor
            loop
            navigation
            modules={[EffectFade, Navigation]}
            breakpoints={{
              0: { slidesPerView: 1 },
            }}
            className="guide__swiper"
          >
            <SwiperSlide>
              <Grid className={cx('guide__search-items')} container spacing={3}>
                {items?.map((item) => (
                  <Grid key={item?.id} item xs={3} md={2}>
                    <NFTsItem img={item?.img} alt={item?.alt} name={item?.name} />
                  </Grid>
                ))}
                <Grid item xs={3} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography
                    fontSize={{ xs: '2rem', md: '3rem' }}
                    lineHeight={{ xs: '2.4rem', md: '3.4rem' }}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      pt: '20px',
                      fontWeight: '400',
                      fontStyle: 'italic',
                      textAlign: 'center',
                      color: 'var(--white)',
                    }}
                  >
                    AND MORE...
                  </Typography>
                </Grid>
              </Grid>
            </SwiperSlide>
          </Swiper>
        )}
      </Box>
    </Box>
  );
};

export interface INFTsItem {
  id?: number;
  img: string;
  alt: string;
  name: string;
}

export function NFTsItem({ img, alt, name }: INFTsItem) {
  return (
    <Stack flexDirection="column" justifyContent="center" alignItems="center">
      <Box
        component="div"
        className={cx('search-input__icon-item-img')}
        sx={{ mb: '10px', pr: name === 'Archer Machine' ? '34px' : '0' }}
      >
        <LazyLoadImage effect="blur" src={img} alt={alt} />
      </Box>
      <Typography
        component="p"
        fontSize={{ xs: '1.4rem' }}
        lineHeight={{ xs: '1.8rem' }}
        sx={{
          textAlign: 'center',
          fontWeight: '300',
          color: 'var(--gray-01)',
        }}
      >
        {name}
      </Typography>
    </Stack>
  );
}
