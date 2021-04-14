import React, { useState } from 'react';
import './index.less';
import iconAuction from '../../../public/svgs/auction.svg';
import Auction from './auction';
import { Button } from 'antd';

interface IAuctionContainerProps {
  tokens: Array<any>;
}

const AuctionContainer: React.FC<IAuctionContainerProps> = ({ tokens }) => {
  let list: any[] = [];
  tokens?.filter(item => {
    if(item.image_url && list.length < 8) {
      list.push(item)
    }
  })
  console.log(list);
  return (
    <div className="auction-container">
      <div className="auction-container__title">
        <img src={iconAuction} alt="" />
        <h1 className="title_1">Live In Auction</h1>
      </div>
      <div className="auction-container__wrapper">
        {
          list.map((item, index) => {
            return  <Auction key={index} token={item} />
          })
        }
      
      </div>
      <div className="auction-container__footer">
        <div className="auction-container__line"></div>
        <div className="auction-container__go-shop-wrapper">
          <Button className="auction-container__go-shop">Go To Shop</Button>
        </div>
      </div>
    </div>
  );
};

export default AuctionContainer;
