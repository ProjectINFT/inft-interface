import React, { useState } from 'react';
import './index.less';
import cn from 'classnames';
import iconActivity from '../../../public/svgs/ac-activity.svg';
import iconItems from '../../../public/svgs/ac-items.svg';
import iconOffer from '../../../public/svgs/ac-offer.svg';
import iconSell from '../../../public/svgs/ac-sell.svg';
import iconSetting from '../../../public/svgs/ac-setting.svg';
import iconStation from '../../../public/svgs/ac-station.svg';
import iconTransfer from '../../../public/svgs/ac-transfer.svg';
const myMenu = [
  {
    key: 'My Items',
    icon: iconItems,
  },
  {
    key: 'My Activity',
    icon: iconActivity,
  },
  {
    key: 'My Offers',
    icon: iconOffer,
  },
  {
    key: 'W-ETH Station',
    icon: iconStation,
  },
];

const exMenu = [
  {
    key: 'Sell',
    icon: iconSell,
  },
  {
    key: 'Transfer',
    icon: iconTransfer,
  },
];
const settingMenu = [
  {
    key: 'Account Settings',
    icon: iconSetting,
  },
];

const HeaderAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header-account">
      <div
        className="header-account__current"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p>Account</p>
      </div>
      {isOpen && (
        <div className="header-account__dropdown">
          <ul className="header-account__menu">
            {myMenu.map((item, index) => {
              return (
                <li
                  className="header-account__menu-item"
                  key={`myMenu-${index}`}
                >
                  <img src={item?.icon} alt="" />
                  <p>{item.key}</p>
                </li>
              );
            })}
          </ul>
          <ul className="header-account__menu">
            {exMenu.map((item, index) => {
              return (
                <li
                  className="header-account__menu-item"
                  key={`exMenu-${index}`}
                >
                  <img src={item?.icon} alt="" />
                  <p>{item.key}</p>
                </li>
              );
            })}
          </ul>
          <ul className="header-account__menu">
            {settingMenu.map((item, index) => {
              return (
                <li
                  className="header-account__menu-item"
                  key={`settingMenu-${index}`}
                >
                  <img src={item?.icon} alt="" />
                  <p>{item.key}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderAccount;
