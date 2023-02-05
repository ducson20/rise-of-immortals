import * as React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Box } from '@mui/material';

import Search from '@/assets/guide/svg/search.svg';

import classNames from 'classnames/bind';
import styles from './SearchNFTs.module.scss';

const cx = classNames.bind(styles);

export interface ISearchNFTsProps {}

export default function SearchNFTs(props: ISearchNFTsProps) {
  return (
    <Box component="form" sx={{ mb: '64px' }}>
      <SearchInput
        type="text"
        id="search"
        name="search"
        placeholder="Search"
        leftIcon={
          <Box component="div" className={cx('search__icon-search-bar')}>
            <LazyLoadImage effect="blur" src={Search} alt="search" />
          </Box>
        }
      />
    </Box>
  );
}

export interface ISearchInputProps {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  type?: string;
  value?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  registerField?: any;
}

function SearchInput({
  leftIcon,
  rightIcon,
  type = 'text',
  value,
  id,
  name,
  placeholder,
  className = 'regular',
  registerField,
  ...restProps
}: ISearchInputProps) {
  return (
    <Box component="div" className={cx('search-input-item')}>
      <input
        type={type}
        value={value}
        id={id}
        name={name}
        placeholder=" "
        className="classes"
        {...registerField}
        {...restProps}
      />
      <span className={cx('search-input-item__label-left-icon')}>{leftIcon}</span>
      <label htmlFor={id} className={cx('search-input-item__placeholder')}>
        {placeholder}
      </label>
      <span className={cx('search-input-item__label-right-icon')}>{rightIcon}</span>
    </Box>
  );
}
