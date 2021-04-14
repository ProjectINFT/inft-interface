import React, { useState } from 'react';
import cn from 'classnames';
import './index.less';

interface IButtonProps {
  fullWidth?: boolean;
  loading?: boolean;
  buttonType?: 'primary' | 'default';
}

const Button: React.FC<IButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  const { fullWidth, className, children, loading, buttonType, ...otherProp } = props;

  return (
    <button
      {...otherProp}
      disabled={props.disabled}
      className={cn(
        'inft-button',
        {
          'inft-button--fullWidth': fullWidth,
        },
        {
          'inft-button--primary': buttonType === 'primary',
        },
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
