import React from 'react';
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
           if (token?.asset) {
             historyPush('assetDetail', 'address', token, query);
           }
         }}
    >
      <div className="auction__img">
        {token?.asset?.imageUrl ? (
          <img src={token?.asset?.imageUrl} alt="" />
        ) : (
          <AuctionLoader />
        )}
      </div>
      <div className="auction__info">
        <div className="auction__title">{token?.asset?.name}</div>
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
