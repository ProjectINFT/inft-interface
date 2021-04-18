import React, {useState} from 'react';
import './index.less';

const Price = (props: any) => {
  let {token} = props
  return (
    <div className="price">
      <p className="price__title title_3">Current price</p>
      <div className="price__detail vertical_center_flex">
        <img src={require('../../../public/svgs/eht.svg')} alt="" />
        <span className="number_1 price__detail__number">5.016848 ETH</span>
        <span className="note_1 price__detail__usd">≈ 32.23 USD</span>
      </div>
    </div>
  );
};

export default Price;
