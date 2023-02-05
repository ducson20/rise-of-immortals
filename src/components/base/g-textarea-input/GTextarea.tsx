import React from 'react';
import classNames from 'classnames/bind';
import { Box } from '@mui/material';
import styles from './GTextarea.module.scss';

const cx = classNames.bind(styles);

export interface IGButtonProps {
  value?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  registerField?: any;
  style?: any;
}

export default function GTextarea({
  value,
  id,
  name,
  placeholder,
  className = 'regular',
  registerField,
  style,
  ...restProps
}: IGButtonProps) {
  return (
    <Box component="div" className={cx('textarea-item')}>
      <textarea
        type="textarea"
        value={value}
        id={id}
        name={name}
        placeholder=" "
        className="classes"
        {...registerField}
        {...restProps}
        style={style}
      />
      <label htmlFor={id} className={cx('textarea-item__placeholder')}>
        {placeholder}
      </label>
    </Box>
  );
}
