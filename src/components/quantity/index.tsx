import React from 'react';
import cn from 'classnames';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './index.less';
interface IInputProps {
  style?: any;
  value?: any;
  className?: string;
}

const Quantity: React.FC<IInputProps> = props => {
  const { style, value, className } = props;
  return (
    <div className={cn('quantity-component', className)}>
      <div className="quantity-component__action">
        <MinusOutlined style={{ color: '#5E6372' }} />
      </div>
      <input type="number" />
      <div className="quantity-component__action">
        <PlusOutlined style={{ color: '#5E6372' }} />
      </div>
    </div>
  );
};

export default Quantity;
