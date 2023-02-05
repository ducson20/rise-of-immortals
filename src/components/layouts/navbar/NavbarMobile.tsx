import { memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Box, List, ListItem, Typography, ListItemProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Logo from '@/assets/images/logo.png';
import ArrowLeftMobile from '@/assets/images/svg/arrow-left-mobile.svg';
import ArrowRightMobile from '@/assets/images/svg/arrow-right-mobile.svg';

import IconList from '@/components/icon-list';

import NavbarItem, { IItem } from './NavbarItem';
import { NAV_ITEMS } from '@/constants';

export interface INavbarMobileProps {
  title: string;
  items: IItem[];
  changeMenuTab?: ((allMenu: string) => void) | any;
  clickSubMenuItem?: ((event: React.MouseEvent<HTMLElement>) => void) | any;
  cx?: any;
}

function NavbarMobile({ title, items, changeMenuTab, clickSubMenuItem, cx }: INavbarMobileProps) {
  const location = useLocation();

  return (
    <>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: '10px',
          fontSize: '2.6rem',
          lineHeight: '3rem',
          fontWeight: '600',
          color: 'var(--white)',
        }}
        onClick={() => title !== NAV_ITEMS.allMenu && changeMenuTab(NAV_ITEMS.allMenu)}
      >
        {(title === NAV_ITEMS.about ||
          title === NAV_ITEMS.explore ||
          title === NAV_ITEMS.token ||
          title === NAV_ITEMS.more) && (
          <Box component="div" className={cx('navbar__icon-mobile-arrow')}>
            <LazyLoadImage effect="blur" src={ArrowLeftMobile} alt="arrow-left-mobile" />
          </Box>
        )}
        {title}
      </Typography>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-soon',
          alignItems: 'center',
          mb: '32px',
        }}
      >
        {items.map((item) => {
          if (item?.path) {
            return (
              <NavLink
                key={item.id}
                to={
                  item?.isLink && item?.path.includes('http')
                    ? item?.name === 'Whitepaper'
                      ? '/white-paper'
                      : '/game-deck'
                    : String(item?.path)
                }
                style={({ isActive }) =>
                  title !== NAV_ITEMS.allMenu
                    ? {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        borderRadius: '8px',
                        background:
                          location?.pathname === item?.path && isActive ? 'var(--yellow)' : '',
                      }
                    : {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                      }
                }
                onClick={(event: React.MouseEvent<HTMLElement>) =>
                  !item?.subItem && clickSubMenuItem(event)
                }
                target={item?.isLink ? '_blank' : ''}
                rel={item?.isLink ? 'noreferrer' : ''}
              >
                <ListItemCustom
                  title={title}
                  onClick={() => NAV_ITEMS.allMenu === title && changeMenuTab(item?.name)}
                >
                  <NavbarItem item={item} cx={cx} />
                  {item?.subItem && (
                    <Box component="div" className={cx('navbar__icon-mobile-arrow')}>
                      <LazyLoadImage
                        effect="blur"
                        src={ArrowRightMobile}
                        alt="arrow-right-mobile"
                      />
                    </Box>
                  )}
                </ListItemCustom>
              </NavLink>
            );
          } else {
            return (
              <Box
                key={item.id}
                component="a"
                href="#"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <ListItemCustom
                  title={title}
                  onClick={() => NAV_ITEMS.allMenu === title && changeMenuTab(item?.name)}
                >
                  <NavbarItem item={item} cx={cx} />
                  {item?.subItem && (
                    <Box component="div" className={cx('navbar__icon-mobile-arrow')}>
                      <LazyLoadImage
                        effect="blur"
                        src={ArrowRightMobile}
                        alt="arrow-right-mobile"
                      />
                    </Box>
                  )}
                </ListItemCustom>
              </Box>
            );
          }
        })}
      </List>
      <Box
        component="div"
        className={cx('navbar__icon-logo')}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: '6px' }}
      >
        <NavLink to="/" onClick={(event: React.MouseEvent<HTMLElement>) => clickSubMenuItem(event)}>
          <LazyLoadImage effect="blur" src={Logo} alt="logo" />
        </NavLink>
      </Box>
      <Typography
        component="p"
        sx={{
          mb: '20px',
          textAlign: 'center',
          fontWeight: '100',
          fontSize: '1.4rem',
          lineHeight: '1.8rem',
          color: 'var(--white)',
        }}
      >
        @ Copyright CG3D Studio
      </Typography>
      <Typography
        component="h2"
        sx={{
          mb: '6px',
          textAlign: 'center',
          fontWeight: '400',
          fontSize: '1.4rem',
          lineHeight: '1.8rem',
          color: 'var(--white)',
        }}
      >
        Follow Rise of Immortals on
      </Typography>
      <IconList />
    </>
  );
}

const ListItemCustom = styled(ListItem)<ListItemProps & { title: string }>(({ title }) => ({
  display: title === NAV_ITEMS.allMenu ? 'flex' : '',
  justifyContent: title === NAV_ITEMS.allMenu ? 'space-between' : '',
  alignItems: title === NAV_ITEMS.allMenu ? 'center' : 'center',
  minHeight: title === NAV_ITEMS.allMenu ? '' : '80px',
  padding: `10px ${title === NAV_ITEMS.allMenu ? 0 : '10px'}`,
  borderRadius: title === NAV_ITEMS.allMenu ? '' : '8px',
  borderBottom: title === NAV_ITEMS.allMenu ? '1px solid var(--white)' : '',
}));

export default memo(NavbarMobile);
