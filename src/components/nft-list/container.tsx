import React, { useState } from 'react';
import './index.less';
import NftItem from './nft-item';

interface INftContainerProps {
  collections: Array<any>;
}

const NftContainer: React.FC<INftContainerProps> = ({ collections }) => {
  let list: any[] = [];

  collections?.filter(item => {
    if(item.image_url && list.length < 9) {
      list.push(item)
    }
  })
  return (
    <div className="nft-container">
      {
        list.map((item, index) => {
          return  <NftItem className="nft-container__item" key={index} value={item} />
        })
      }
    </div>
  );
};

export default NftContainer;
