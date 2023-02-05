import React from 'react';
import classNames from 'classnames/bind';
import styles from './GButton.module.scss';

const cx = classNames.bind(styles);

export interface IGButtonProps {
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  color?:
    | 'primary'
    | 'primary-01'
    | 'secondary'
    | 'danger'
    | 'light'
    | 'dark'
    | 'simple'
    | undefined;
  size?: string;
  disabled?: boolean;
  onClick?: any;
}

export default function GButton({
  children,
  leftIcon,
  rightIcon,
  type = 'button',
  color = 'primary',
  size = 'regular',
  disabled = false,
  onClick,
  ...rest
}: IGButtonProps) {
  return (
    <button
      type={type}
      className={cx('btn', [`btn--${color}`, `btn__size--${size}`])}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
