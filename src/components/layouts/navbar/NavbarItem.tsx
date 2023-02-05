import { useLocation } from 'react-router-dom';
import { Stack, Box, ListItemText, Typography, ListItemTextProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { NAV_ITEMS } from '@/constants';

export interface IItem {
  id?: number;
  name?: string;
  isSoon?: boolean;
  icon?: any;
  subItem?: boolean;
  description?: string;
  isActive?: boolean;
  isLink?: boolean;
  path?: string;
}

export interface INavbarItemProps {
  item: IItem;
  title?: string;
  isActiveLink?: boolean;
  cx?: any;
}

export default function NavbarItem({ item, title, isActiveLink, cx }: INavbarItemProps) {
  const location = useLocation();

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      minHeight={{
        md: '70px',
      }}
      px={{ md: '10px' }}
      sx={{
        borderRadius: '8px',
        background: location?.pathname === item?.path && isActiveLink ? 'var(--yellow)' : '',
        transition: 'all 0.6 linear',
        opacity: item?.isActive ? '1' : '0.6',
        cursor: item?.isActive ? 'pointer' : 'not-allowed',
        '@media all and (hover: hover)': {
          '&:hover': {
            background: title !== NAV_ITEMS.allMenu && item?.isActive ? 'var(--yellow)' : '',
          },
        },
      }}
    >
      <Box
        component="div"
        className={cx('navbar__icon-mobile')}
        flex={{ md: '0.2' }}
        mr={{ xs: item?.icon && '20px', md: item?.icon && '10px' }}
        sx={{
          display: item?.icon ? 'flex' : 'none',
        }}
      >
        <LazyLoadImage effect="blur" src={item?.icon} alt="hero" />
      </Box>
      <Box component="div" flex={{ md: '1' }}>
        <ListItemTextCustom
          primary={item?.name}
          className={cx('navbar__mobile-item')}
          item={item}
        />
        <Typography
          component="p"
          sx={{
            fontSize: '1.2rem',
            lineHeight: '1.6rem',
            fontWeight: '400',
            color: 'var(--white)',
          }}
        >
          {item?.description}
        </Typography>
      </Box>
    </Stack>
  );
}

const ListItemTextCustom = styled(ListItemText)<ListItemTextProps & { item: IItem }>(({ item }) =>
  item?.isSoon
    ? {
        m: '0',
        '&::after': {
          content: '"Soon"',
          position: 'absolute',
          top: '16%',
          left:
            item?.name === NAV_ITEMS.ecoSystem
              ? '24%'
              : item?.name === NAV_ITEMS.marketplace
              ? '28%'
              : item?.name === NAV_ITEMS.game
              ? '10%'
              : '',
          padding: ' 0 8px',
          borderRadius: '2px',
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.4rem',
          lineHeight: '0.8rem',
          color: 'var(--yellow)',
          background: 'var(--red)',

          '@media all and (min-width: 600px)': {
            left:
              item?.name === 'Ecosystems'
                ? '12%'
                : item?.name === 'Marketplace'
                ? '14%'
                : item?.name === 'Game'
                ? '5%'
                : '',
          },
        },
        '&:hover': {
          '&::after': {
            opacity: 1,
          },
        },
      }
    : {}
);
