import { Box } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { socialIconsItems } from '@/dummy';

import classNames from 'classnames/bind';
import styles from './IconList.module.scss';
const cx = classNames.bind(styles);

export interface IIconListProps {}

export default function IconList(props: IIconListProps) {
  return (
    <Box
      component="div"
      mb={{ xs: '20px', md: '0' }}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      {socialIconsItems.map((item) => (
        <a key={item?.id} href={item?.link} target="_blank" rel="noopener noreferrer">
          <Box component="div" className={cx('icon', `icon__${item?.alt}`)}>
            <LazyLoadImage effect="blur" src={item?.icon} alt={item?.alt} />
          </Box>
        </a>
      ))}
    </Box>
  );
}
