import React from 'react';
import { Input as AntdInput } from 'antd';
import cn from 'classnames';

import './index.less';

interface IInputProps {
  suffix?: React.ReactNode;
  className?: string;
  style?: any;
  value?: any;
  disabled?: boolean;
}

const Input: React.FC<IInputProps &
  React.HTMLAttributes<HTMLInputElement>> = props => {
  const { suffix, className, style, value, disabled, ...otherProps } = props;
  return (
    <AntdInput
      className={cn('inft-input', className)}
      suffix={suffix}
      style={style}
      value={value}
      disabled={disabled}
      {...otherProps}
    />
  );
};

export default Input;
