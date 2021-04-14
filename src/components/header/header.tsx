import React, { useState, useEffect } from 'react';
import { UserAgent } from '@quentin-sommer/react-useragent';
import './index.less';
import IconMenu from '../../../public/svgs/menu.svg';
import {
  HeaderAdvertisement,
  HeaderNavbar,
  HeaderLanguage,
  HeaderAccount,
} from '@/components/header';
import { Drawer, Collapse } from 'antd';
const { Panel } = Collapse;
const text = 'comming soon';

interface IHeaderProps {
  hideAdvertisement?: boolean;
  route?: string;
}

const Header: React.FC<IHeaderProps> = ({ hideAdvertisement, route }) => {
  const [visible, setVisible] = useState(false);
  const [navbar, setNavbar] = useState<any[]>([
    {
      key: 'Home',
      active: true,
    },
    {
      key: 'BROWSE',
    },
    {
      key: 'ACTIVITY',
    },
    {
      key: 'RANKINGS',
    },
    {
      key: 'CREATE',
      child: [
        {
          link: 'comming soon',
        },
      ],
    },
    {
      key: 'HELP',
    },
    {
      key: 'BLOG',
    },
    {
      key: 'English',
    },
    {
      key: 'Account',
      child: [],
    },
  ]);


  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="header">
      <UserAgent mobile>
        <div className="header-m">
          <img
            className="header-m__logo"
            src={require('../../../public/images/logo.png')}
            alt=""
          />
          <img
            className="header-m__menu"
            src={IconMenu}
            alt=""
            onClick={showDrawer}
          />
          <Drawer
            placement="right"
            width={300}
            closable={false}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ backgroundColor: '#0C0E0D', padding: '8px 16px' }}
          >
            {navbar.map((item, index) => {
              return (
                <div className="title_4 header-m__nav" key={`nav${index}`}>
                  {item?.child ? (
                    <Collapse ghost expandIconPosition="right">
                      <Panel header={item.key} key="1">
                        {item?.child.map((childItem: any, childIndex: string) => {
                          return (
                            <p key={`childIndex${childIndex}`}>
                              {childItem.link}
                            </p>
                          );
                        })}
                      </Panel>
                    </Collapse>
                  ) : (
                    item.key
                  )}
                </div>
              );
            })}
          </Drawer>
        </div>
      </UserAgent>
      {!hideAdvertisement && <HeaderAdvertisement />}
      <UserAgent computer>
        <div className="header__wrapper">
          <img
            className="header__logo"
            src={require('../../../public/images/logo.png')}
            alt=""
          />
          <HeaderNavbar route={route} />
          <div className="header__right">
            <HeaderLanguage />
            <HeaderAccount />
          </div>
        </div>
      </UserAgent>
    </div>
  );
};

export default Header;
