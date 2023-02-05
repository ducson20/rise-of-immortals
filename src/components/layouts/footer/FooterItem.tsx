import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

interface ISubTitle {
  id: number;
  name: string;
  isActive: boolean;
  path?: string | null;
}

interface IFooterItem {
  id: number;
  title: string;
  subTitleList: ISubTitle[];
}

export interface IFooterItemProps {
  footerItem: IFooterItem;
}

export default function FooterItem({ footerItem }: IFooterItemProps) {
  return (
    <Box key={footerItem.id} component="div" mr={{ md: '100px' }} mb={{ xs: '32px' }}>
      <Typography
        component="h3"
        textAlign={{ xs: 'center', md: 'start' }}
        sx={{
          mb: '16px',
          fontWeight: '700',
          fontSize: '1.8rem',
          lineHeight: '2.2rem',
          color: 'var(--white)',
        }}
      >
        {footerItem.title}
      </Typography>
      {footerItem?.subTitleList?.map((subTitle) => (
        <Typography
          key={subTitle?.id}
          component="p"
          textAlign={{ xs: 'center', md: 'start' }}
          sx={{
            mb: '8px',
            fontWeight: subTitle?.isActive ? '400' : '100',
            fontSize: '1.4rem',
            lineHeight: '1.8rem',
            color: subTitle?.isActive ? 'var(--white)' : 'var(--gray-08)',
            transition: 'all 0.3s linear 0s',
            opacity: '1',
            cursor: subTitle?.isActive ? 'pointer' : 'not-allowed',
            '&:hover': subTitle?.isActive
              ? {
                  color: 'var(--yellow)',
                  opacity: '0.8',
                }
              : {},
          }}
        >
          {subTitle?.path ? (
            <NavLink to={subTitle?.path}>{subTitle?.name}</NavLink>
          ) : (
            subTitle?.name
          )}
        </Typography>
      ))}
    </Box>
  );
}
