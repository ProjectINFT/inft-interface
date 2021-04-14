import React from 'react';
import cn from 'classnames';
import './index.less';

interface IDividerProps {
  opacity?: string;
  className?: string;
  top?: number;
  bottom?: number;
}
const Divider: React.FC<IDividerProps> = ({
  opacity,
  className,
  top,
  bottom,
}) => {
  return (
    <div
      className={cn('divider', className)}
      style={{ opacity: opacity, marginTop: top, marginBottom: bottom }}
    ></div>
  );
};

export default Divider;
