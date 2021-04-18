import React, {useState} from 'react';
import './index.less';
import AuctionLoader from './auction-loader';
import {UserAgent} from '@quentin-sommer/react-useragent';
import historyPush from "@/utils/historyPush";

interface IAuction {
  token: any;
  query: any;
}

const Auction: React.FC<IAuction> = ({token, query}) => {
  return (
    <div className="auction"
         onClick={() => {
           historyPush('assets', 'address', token, query);
         }}
    >
      <div className="auction__img">
        {token?.image_url ? (
          <img src={token?.image_url} alt="" />
        ) : (
          <AuctionLoader />
        )}
      </div>
      <div className="auction__info">
        <div className="auction__title">{token?.name}</div>
        <div className="auction__price">
          <UserAgent computer>
            <p className="auction__price-name">price</p>
            <p className="auction__price-value">{token?.eth_price}</p>
          </UserAgent>
          <UserAgent mobile>
            <p className="auction__price-value">{token?.eth_price}</p>
            <p className="auction__price-name">price</p>
          </UserAgent>
        </div>
      </div>
    </div>
  );
};

export default Auction;
