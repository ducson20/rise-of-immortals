import { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Box, Container, Stack, List, ListItem, ListItemText } from '@mui/material';
import { HighlightOff } from '@mui/icons-material';
import { useOnClickOutside } from 'usehooks-ts';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Logo from '@/assets/images/logo.png';
import Codepen from '@/assets/images/svg/codepen.svg';
import Toggle from '@/assets/images/svg/toggle.svg';

import { GButton } from '@/components/base';
import NavbarItem from './NavbarItem';
import NavbarMobile from './NavbarMobile';

import { allMenuItems, aboutItems, exploreItems, tokenItems, moreItems } from '@/dummy';
import { NAV_ITEMS, APPLICATION_TYPE } from '@/constants';

import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
const cx = classNames.bind(styles);

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  const location = useLocation();
  const menuDropdownRef = useRef(null);

  // State for mobile
  const [menuTabName, setMenuTabName] = useState<string>(NAV_ITEMS.allMenu);
  const [isShowMenuTab, setIsShowMenuTab] = useState<boolean>(false);

  // State for website
  const [menuItemName, setMenuItemName] = useState<string>('');
  const [isShowMenuDropdown, setIsShowMenuDropdown] = useState<boolean>(false);

  const clickMenuItem = (event: React.MouseEvent<HTMLElement>, applicationType: string) => {
    event.stopPropagation();
    switch (true) {
      case applicationType === APPLICATION_TYPE.website:
        setIsShowMenuDropdown(false);
        break;
      case applicationType === APPLICATION_TYPE.mobile:
        setIsShowMenuTab(false);
        break;
      default:
        break;
    }
  };

  // Mobile
  const toggleMenu = () => {
    setIsShowMenuTab(!isShowMenuTab);
  };

  const changeMenuTab = useCallback(
    (tabName: string) => {
      setMenuTabName(tabName);
    },
    [setMenuTabName]
  );

  const resultSubMenuItemMobile = useMemo(() => {
    switch (true) {
      case NAV_ITEMS.about === menuTabName:
        return (
          <NavbarMobile
            title={NAV_ITEMS.about}
            items={aboutItems}
            changeMenuTab={changeMenuTab}
            clickSubMenuItem={(event: React.MouseEvent<HTMLElement>) =>
              clickMenuItem(event, APPLICATION_TYPE.mobile)
            }
            cx={cx}
          />
        );
      case NAV_ITEMS.explore === menuTabName:
        return (
          <NavbarMobile
            title={NAV_ITEMS.explore}
            items={exploreItems}
            changeMenuTab={changeMenuTab}
            clickSubMenuItem={(event: React.MouseEvent<HTMLElement>) =>
              clickMenuItem(event, APPLICATION_TYPE.mobile)
            }
            cx={cx}
          />
        );
      case NAV_ITEMS.token === menuTabName:
        return (
          <NavbarMobile
            title={NAV_ITEMS.token}
            items={tokenItems}
            changeMenuTab={changeMenuTab}
            clickSubMenuItem={(event: React.MouseEvent<HTMLElement>) =>
              clickMenuItem(event, APPLICATION_TYPE.mobile)
            }
            cx={cx}
          />
        );
      case NAV_ITEMS.more === menuTabName:
        return (
          <NavbarMobile
            title={NAV_ITEMS.more}
            items={moreItems}
            changeMenuTab={changeMenuTab}
            clickSubMenuItem={(event: React.MouseEvent<HTMLElement>) =>
              clickMenuItem(event, APPLICATION_TYPE.mobile)
            }
            cx={cx}
          />
        );
      default:
        return (
          <NavbarMobile
            title={NAV_ITEMS.allMenu}
            items={allMenuItems}
            changeMenuTab={changeMenuTab}
            clickSubMenuItem={(event: React.MouseEvent<HTMLElement>) =>
              clickMenuItem(event, APPLICATION_TYPE.mobile)
            }
            cx={cx}
          />
        );
    }
  }, [menuTabName]);

  // Website
  const clickOutsideMenuDropdown = () => {
    setIsShowMenuDropdown(false);
    if (
      menuItemName === NAV_ITEMS.about ||
      menuItemName === NAV_ITEMS.explore ||
      menuItemName === NAV_ITEMS.token ||
      menuItemName === NAV_ITEMS.more
    ) {
      switch (true) {
        case location.pathname === '/':
          setMenuItemName(NAV_ITEMS.home);
          break;
        case location.pathname === '/eco-system':
          setMenuItemName(NAV_ITEMS.ecoSystem);

          break;
        case location.pathname === '/marketplace':
          setMenuItemName(NAV_ITEMS.marketplace);

          break;
        case location.pathname === '/game':
          setMenuItemName(NAV_ITEMS.game);
          break;
        default:
          break;
      }
    }
  };

  const showMenuDropdown = (itemName: string) => {
    setMenuItemName(itemName);
    setIsShowMenuDropdown(true);
  };

  const filterMenuItems = useMemo(() => {
    return allMenuItems.filter((item) => item?.id !== 8);
  }, []);

  const resultMenuSubItemInMenuDropdown = (item: any) => {
    return item?.isLink && (item?.name === 'Whitepaper' || item?.name === 'Game Deck') ? (
      <NavLink
        key={item.id}
        to={
          item?.name === 'Whitepaper'
            ? '/white-paper'
            : item?.name === 'Game Deck'
            ? '/game-deck'
            : String(item?.path)
        }
        target="_blank"
        rel="noreferrer"
      >
        {({ isActive }) => {
          return <NavbarItem item={item} isActiveLink={isActive} cx={cx} />;
        }}
      </NavLink>
    ) : (
      <NavLink
        key={item.id}
        to={String(item?.path)}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          clickMenuItem(event, APPLICATION_TYPE.website);
        }}
      >
        {({ isActive }) => {
          return <NavbarItem item={item} isActiveLink={isActive} cx={cx} />;
        }}
      </NavLink>
    );
  };

  const resultSubMenuItemWebsite = useMemo(() => {
    switch (true) {
      case NAV_ITEMS.about === menuItemName:
        return <>{aboutItems.map((item) => resultMenuSubItemInMenuDropdown(item))}</>;
      case NAV_ITEMS.explore === menuItemName:
        return <>{exploreItems.map((item) => resultMenuSubItemInMenuDropdown(item))}</>;
      case NAV_ITEMS.token === menuItemName:
        return <>{tokenItems.map((item) => resultMenuSubItemInMenuDropdown(item))}</>;
      case NAV_ITEMS.more === menuItemName:
        return <>{moreItems.map((item) => resultMenuSubItemInMenuDropdown(item))}</>;
      default:
        return <></>;
    }
  }, [menuItemName]);

  useOnClickOutside(menuDropdownRef, clickOutsideMenuDropdown);

  return (
    <>
      {/* NAVBAR WEB */}
      <Box
        component="nav"
        px={{ xs: '16px', lg: '0' }}
        className="fixed top"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bgcolor: 'var(--purple-02)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
        }}
      >
        <Container maxWidth="lg" sx={{ py: 2, m: 'auto' }} disableGutters={true}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <NavLink
              to="/"
              onClick={() => {
                setMenuItemName(NAV_ITEMS.home);
              }}
            >
              <Box
                component="div"
                className={cx('navbar__icon-logo')}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <LazyLoadImage effect="blur" src={Logo} alt="logo" />
              </Box>
            </NavLink>
            <Stack
              display={{ md: 'none' }}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <GButton color="light" size="small">
                <Box
                  component="div"
                  className={cx('navbar__icon-codepen')}
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <LazyLoadImage effect="blur" src={Codepen} alt="codepen" />
                </Box>
              </GButton>
              <GButton color="light" size="small" onClick={toggleMenu}>
                <Box
                  component="div"
                  className={cx('navbar__icon-toggle')}
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <LazyLoadImage effect="blur" src={Toggle} alt="toggle" />
                </Box>
              </GButton>
            </Stack>
            <Box component="div" display={{ xs: 'none', md: 'block' }}>
              <List sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {filterMenuItems.map((item) => (
                  <ListItem
                    key={item?.id}
                    sx={{
                      position: 'relative',
                    }}
                    onClick={() => {
                      showMenuDropdown(item?.name);
                    }}
                  >
                    <ListItemText
                      className={cx('navbar__item', item?.isSoon && 'navbar__item-soon')}
                    >
                      {item?.name === NAV_ITEMS.ecoSystem ||
                      item?.name === NAV_ITEMS.marketplace ||
                      item?.name === NAV_ITEMS.game ? (
                        item?.name
                      ) : item?.name !== NAV_ITEMS.about &&
                        item?.name !== NAV_ITEMS.explore &&
                        item?.name !== NAV_ITEMS.token &&
                        item?.name !== NAV_ITEMS.more ? (
                        <NavLink
                          to={String(item?.path)}
                          style={({ isActive }) =>
                            isActive
                              ? {
                                  color: 'var(--yellow)',
                                }
                              : {}
                          }
                        >
                          {item?.name}
                        </NavLink>
                      ) : (
                        <Box
                          component="span"
                          sx={{
                            color:
                              item?.name === menuItemName
                                ? 'var(--yellow) !important'
                                : 'var(--white)',
                            '&::after': {
                              content: "''",
                              position: 'absolute',
                              top: '44%',
                              marginLeft: '4px',
                              width: '0',
                              height: '0',
                              borderLeft: '4px solid transparent',
                              borderRight: '4px solid transparent',
                              borderTop:
                                item?.name === menuItemName
                                  ? '4px solid var(--yellow) !important'
                                  : '4px solid var(--white)',
                            },
                            '&:hover': {
                              '&::after': {
                                borderTop: '4px solid var(--yellow)',
                                opacity: '0.8',
                              },
                            },
                          }}
                        >
                          {item?.name}
                        </Box>
                      )}
                    </ListItemText>
                    {item?.subItem && item?.name === menuItemName && isShowMenuDropdown && (
                      <Box
                        key={item?.id}
                        ref={menuDropdownRef}
                        component="div"
                        sx={{
                          position: 'absolute',
                          top: '100%',
                          left: '18%',
                          width: '300px',
                          borderRadius: '12px',
                          background: 'var(--gray-09)',
                          transition: 'all 0.3s linear ',
                        }}
                      >
                        {resultSubMenuItemWebsite}
                      </Box>
                    )}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box display={{ xs: 'none', md: 'block' }}>
              <GButton color="primary">Connect To Wallet</GButton>
            </Box>
          </Stack>
        </Container>
      </Box>
      {/* NAVBAR MOBILE */}
      <Box
        component="div"
        display={{ xs: isShowMenuTab ? 'block' : 'none', md: 'none' }}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'var(--overlay)',
          transition: 'all 0.3s linear 0s',
          zIndex: 1000,
        }}
        onClick={toggleMenu}
      ></Box>
      <Box
        component="div"
        display={{ xs: 'block', md: 'none' }}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '80%',
          height: '100%',
          p: '20px 20px 0 20px',
          background: 'var(--background-nav-mobile)',
          backdropFilter: 'blur(8px)',
          transform: isShowMenuTab ? 'translateX(0%)' : 'translateX(-100%)',
          transition: 'all 0.3s linear 0s',
          zIndex: 1001,
          overflow: 'auto',
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: '40px' }}
        >
          <Stack>
            <GButton color="primary">Connect To Wallet</GButton>
          </Stack>
          <Box component="div" onClick={toggleMenu}>
            <HighlightOff sx={{ color: 'var(--white)', width: '36px', height: '36px' }} />
          </Box>
        </Stack>
        <> {resultSubMenuItemMobile}</>
      </Box>
    </>
  );
}
