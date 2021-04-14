import React, { useState } from 'react';
import './index.less';
import cn from 'classnames';
import { useIntl } from 'umi';

interface IHeaderNavbarProps {
  route?: string;
}
// intl.formatMessage({
//   id: 'home',
// })
const HeaderNavbar: React.FC<IHeaderNavbarProps> = ({ route }) => {
  const intl = useIntl();
  const navbar = [
    {
      key: 'HOME',
      href: '/'
    },
    {
      key: 'BROWSE',
      href: '/assets'
    },
    // {
    //   key: 'ACTIVITY',
    // },
    // {
    //   key: 'RANKINGS',
    // },

    // {
    //   key: 'CREATE',
    // },
    {
      key: 'HELP',
    },
    {
      key: 'BLOG',
    },
  ];
  return (
    <div className="header-navbar">
      {navbar.map((item, index) => {
        return (
          <div className="header-navbar__item" key={`navbar-${index}`}>
            <a
              className={cn('header-navbar__href', {
                'header-navbar__href--active': item.key.toLowerCase() === route?.toLowerCase(),
              })}
              href={item?.href}
            >
              {item.key}
            </a>
            {item.key.toLowerCase() === route?.toLowerCase() && <div className="header-navbar__line"></div>}
          </div>
        );
      })}
    </div>
  );
};

export default HeaderNavbar;
