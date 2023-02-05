import { useCallback, forwardRef, useRef, useImperativeHandle } from 'react';
import classNames from 'classnames/bind';
import { Box } from '@mui/material';
import styles from './GInput.module.scss';

const cx = classNames.bind(styles);
export interface GInputRef {
  blurInput: () => void;
}

export interface IGInputProps {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  type?: string;
  value?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  registerField?: any;
  onChange?: () => void;
  style?: any;
}

export const GInput = forwardRef<GInputRef, IGInputProps>(
  (
    {
      leftIcon,
      rightIcon,
      type = 'text',
      value,
      id,
      name,
      placeholder,
      className = 'regular',
      registerField,
      onChange,
      style,
      ...restProps
    }: IGInputProps,
    ref
  ) => {
    const inputRef = useRef<any>();

    const blurInput = useCallback(() => {}, [inputRef]);

    useImperativeHandle(ref, () => ({
      blurInput,
    }));

    return (
      <Box component="div" className={cx('input-item')}>
        <input
          ref={(e) => {
            // email.ref(e);
            inputRef.current = e; // you can still assign to ref
          }}
          type={type}
          value={value}
          id={id}
          name={name}
          placeholder=" "
          {...registerField}
          {...restProps}
          style={style}
          onChange={onChange}
        />
        <span className={cx('input-item__label-left-icon')}>{leftIcon}</span>
        <label htmlFor={id} className={cx('input-item__placeholder')}>
          {placeholder}
        </label>
        <span className={cx('input-item__label-right-icon')}>{rightIcon}</span>
      </Box>
    );
  }
);

export default GInput;
