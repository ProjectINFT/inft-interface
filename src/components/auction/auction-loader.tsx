import React, { useState } from 'react';
import './index.less';
import loader from '../../../public/svgs/loader.svg';
const AuctionLoader = () => {
  return <div className="auction-loader">
      <img src={loader} alt=""/>
  </div>;
};

export default AuctionLoader;
