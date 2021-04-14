import React, { useState } from 'react';
import './index.less';
import close from '../../../public/svgs/close.svg';
import cn from 'classnames';
import { UserAgent } from '@quentin-sommer/react-useragent';

const HeaderAdvertisement = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div
      className={cn('header-advertisement', {
        'header-advertisement--hide': !visible,
      })}
    >
      <UserAgent computer>
        <img
          className="header-advertisement__close"
          src={close}
          alt=""
          onClick={() => {
            setVisible(false);
          }}
        />
      </UserAgent>
      <p className="header-advertisement__text">
        🎉 11.11 -11.13 Limited time events, 5% off the whole venue✨
      </p>
    </div>
  );
};

export default HeaderAdvertisement;
