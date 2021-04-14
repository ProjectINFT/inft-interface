import React, { useContext } from 'react';
import { UAContext, UserAgent } from '@quentin-sommer/react-useragent';
import './index.less';
import facebook from '../../../public/svgs/facebook.svg';
import twitter from '../../../public/svgs/twitter.svg';
import linkin from '../../../public/svgs/ins.svg';
import wechat from '../../../public/svgs/wechat.svg';
const Footer = () => {
  const uaResults = useContext(UAContext).uaResults as UAResults;
  const isMobile = uaResults.mobile;
  const socialMedia = [
    {
      icon: <img src={facebook} alt="" />,
    },
    {
      icon: <img src={twitter} alt="" />,
    },
    {
      icon: <img src={linkin} alt="" />,
    },

    {
      icon: <img src={wechat} alt="" />,
    },
  ];

  const links = [
    {
      name: 'Home',
      links: [],
    },
    {
      name: 'My account',
      links: [
        {
          linkName: 'my items',
        },
        {
          linkName: 'my activity',
        },
        {
          linkName: 'my offers',
        },
        {
          linkName: 'my referrals',
        },
        {
          linkName: 'gift items',
        },
      ],
    },
    {
      name: 'Marketplace',
      links: [
        {
          linkName: 'Browse and discover',
        },
        {
          linkName: 'rankings',
        },
        {
          linkName: 'recently sold',
        },
        {
          linkName: 'biggest sales',
        },
        {
          linkName: 'ending soon',
        },
        {
          linkName: 'most viewed',
        },
      ],
    },
    {
      name: 'Company',
      links: [
        {
          linkName: 'about',
        },
        {
          linkName: 'suggestions',
        },
        {
          linkName: 'join the team',
        },
        {
          linkName: 'for developers',
        },
        {
          linkName: 'advertise',
        },
        {
          linkName: 'fAQ',
        },
        {
          linkName: 'blog',
        },
      ],
    },
  ];
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo">
          <img src={require('../../../public/images/logo.png')} alt="" />
        </div>
        <div className="footer__content">
          <div className="footer__info">
            <p className={isMobile ? 'note_2' : 'note_1'}>
              INFT is one of the world's leading digital currency collectibles
              and irreplaceable (NFT) digital asset trading platforms, including
              ERC721 and ERC1155 asset agreements. We are committed to building
              the world's greatest digital asset trading platform, enabling
              digital assets through blockchain technologies and concepts. Use
              mobile terminal, PC terminal, WEB terminal and other terminal
              products to enhance the transaction experience for users, develop
              and create a safe, efficient, valuable transaction ecological
              network
            </p>
            <ul className="footer__socialMedia">
              {socialMedia.map((item, index) => {
                return <li key={`socialMedia${index}`}>{item.icon}</li>;
              })}
            </ul>
          </div>
          <UserAgent computer>
            <div className="footer__links">
              {links.map((item, index) => {
                return (
                  <div className="footer__link" key={`link${index}`}>
                    <h4 className="title_4">{item.name}</h4>
                    <ul className="footer__link-child">
                      {item.links.map((childItem, childIndex) => {
                        return (
                          <li key={`childItem${childIndex}`}>
                            <a className="note_1" href="/">
                              {childItem.linkName}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </UserAgent>
        </div>
      </div>
      <div className="footer__copyright">
        Copy © 2020 All Rights Reserved By inft
      </div>
    </div>
  );
};

export default Footer;
