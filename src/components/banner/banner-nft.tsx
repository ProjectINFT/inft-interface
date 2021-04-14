import React, { useState } from 'react';
import './index.less';
import { Button } from 'antd';

interface IBannerNftProps {
  promotion: any;
}

const BannerNft: React.FC<IBannerNftProps> = ({ promotion }) => {
  return (
    <div className="banner-nft">
      <img
        className="banner-nft__img"
        src={promotion.promoCardImg}
        alt=""
      />
      <div className="banner-nft__wrapper">
        <h2>{promotion.promoHeader}</h2>
        <p>
          {promotion.promoSubtitle}
        </p>
        <Button className="banner-nft__buyBtn">Buy Now &gt;</Button>
      </div>
    </div>
  );
};

export default BannerNft;
