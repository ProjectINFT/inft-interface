import React, {useState} from 'react';
import './index.less';

const Price = (props: any) => {
  let {token = {}} = props
  let {price = {}} = token
  return (
    <div className="price">
      <p className="price__title title_3">Current price</p>
      <div className="price__detail vertical_center_flex">
        <img src={price.imageUrl} alt="" />
        <span className="number_1 price__detail__number">{price?.price} {price?.symbol}</span>
        <span
          className="note_1 price__detail__usd">≈ $ {price.usd}</span>
      </div>
    </div>
  );
};

export default Price;
