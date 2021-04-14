import React, { useContext } from 'react';
import './index.less';
import { Button } from 'antd';
import { BannerNft } from '@/components/banner';
import { UserAgent, UAContext } from '@quentin-sommer/react-useragent';
import { getRandomArrayElements } from '@/utils/js-helper';
interface IBannerProps {
  promotions: Array<any>;
}

const Banner: React.FC<IBannerProps> = ({ promotions }) => {
  const uaResults = useContext(UAContext).uaResults as UAResults;
  const isMobile = uaResults.mobile;
  const list = getRandomArrayElements(promotions, 2);
  console.log(list);
  return (
    <div className="banner">
      <div className="banner__container">
        <div className="banner__wrapper">
          <img
            src={require('../../../public/images/banner-core.png')}
            alt=""
            className="banner__core"
          />
          <div className="banner__left">
            <h1 className="banner__title">
              THE LARGEST MARKETPLACE FOR RARE ITEMS
            </h1>
            <p className="body_2 banner__subTitle">
              Buy, sell, discover, and trade limited-edition goods
            </p>
            <Button className="banner__explore">Explore</Button>
          </div>
          <UserAgent computer>
            <div className="banner__right">
              {list?.map((item, index) => {
                return <BannerNft key={index} promotion={item} />;
              })}
            </div>
          </UserAgent>
        </div>
      </div>
      <UserAgent mobile>
        <div className="banner-m__container">
          {list?.map((item, index) => {
            return <BannerNft key={index} promotion={item} />;
          })}
        </div>
      </UserAgent>
    </div>
  );
};

export default Banner;
