import React from 'react';
import { Switch } from 'antd';
import cn from 'classnames';
import './index.less';

interface INotificationProps {
  title: string;
  des: string;
  className?: string;
  checked: boolean;
  onChange?: () => void;
}

const Notification: React.FC<INotificationProps> = ({
  title,
  des,
  className,
  checked,
  onChange,
}) => {
  return (
    <div className={cn('notification', className)}>
      <div className="notification__info">
        <h3 className="title_3">{title}</h3>
        <p className="body_2">{des}</p>
      </div>
      <Switch
        defaultChecked
        checked={checked}
        className="notification__switch"
        onChange={onChange}
      />
    </div>
  );
};

export default Notification;
