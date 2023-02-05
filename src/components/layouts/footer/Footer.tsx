import { NavLink } from 'react-router-dom';

import { Box, Typography, Container } from '@mui/material';
import classNames from 'classnames/bind';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import AppPlatform from '@/components/app-platform';
import IconList from '@/components/icon-list';
import FooterItem from './FooterItem';
import Logo from '@/assets/images/logo.png';

import { footerItems } from '@/dummy';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <Box
      component="footer"
      borderTop={{ xs: '1.5px solid var(--gray-07)', md: 'none' }}
      sx={{
        bgcolor: 'var(--background-footer)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          component="div"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          px={{ md: '30px' }}
          sx={{ display: 'flex', alignItems: 'center', mb: '36px', pt: '36px' }}
        >
          <Box component="div">
            <Typography
              component="h2"
              textAlign={{ xs: 'center', md: 'start' }}
              sx={{
                mb: '6px',
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
          <Box
            component="div"
            display={{ xs: 'none', md: 'flex' }}
            sx={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <AppPlatform />
          </Box>
        </Box>
        <Box
          component="div"
          display={{ xs: 'none', md: 'block' }}
          sx={{ width: '100%', mb: '40px', borderTop: '1.5px solid var(--gray-07)' }}
        />
        <Box
          component="div"
          flexDirection={{ xs: 'column', md: 'row' }}
          px={{ xs: '30px' }}
          pb={{ xs: '40px', md: '100px' }}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box component="div" display={{ xs: 'none', md: 'flex' }}>
            {footerItems?.map((item) => (
              <FooterItem key={item?.id} footerItem={item} />
            ))}
          </Box>
          <Box
            component="div"
            display={{ xs: 'flex', md: 'none' }}
            sx={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
          >
            <Box component="div">
              {[footerItems[0], footerItems[2]]?.map((item) => (
                <FooterItem key={item?.id} footerItem={item} />
              ))}
            </Box>
            <Box component="div">
              {[footerItems[1], footerItems[3]]?.map((item) => (
                <FooterItem key={item?.id} footerItem={item} />
              ))}
            </Box>
          </Box>
          <Box component="div" display={{ xs: 'none', md: 'inline-block' }}>
            <Box
              component="div"
              className={cx('footer__icon-logo')}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: '12px' }}
            >
              <NavLink to="/">
                <LazyLoadImage effect="blur" src={Logo} alt="logo" />
              </NavLink>
            </Box>
            <Typography
              component="p"
              sx={{
                textAlign: 'center',
                fontWeight: '100',
                fontSize: '1.4rem',
                lineHeight: '1.8rem',
                color: 'var(--white)',
              }}
            >
              @ Copyright CG3D Studio
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box
        component="div"
        display={{ xs: 'flex', md: 'none' }}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          p: '20px 30px 10px 30px',
          borderTop: '1.5px solid var(--gray-07)',
        }}
      >
        <Box
          component="div"
          className={cx('footer__icon-logo')}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: '12px' }}
        >
          <NavLink to="/">
            <LazyLoadImage effect="blur" src={Logo} alt="logo" />
          </NavLink>
        </Box>
        <Typography
          component="p"
          sx={{
            textAlign: 'center',
            fontWeight: '300',
            fontSize: '1.4rem',
            lineHeight: '1.8rem',
            color: 'var(--white)',
          }}
        >
          @ Copyright CG3D Studio
        </Typography>
      </Box>
    </Box>
  );
}
