import React, { useState } from 'react';
import './index.less';
// import AdditionalDetails from './additional-details';
import { UserAgent, UAContext } from '@quentin-sommer/react-useragent';
import IconTrading from '../../../public/svgs/trading-history.svg';
import FromIcon from '../../../public/svgs/Ellipse.svg';
const tradingData = [
  {
    event: 'list',
    price: '5.015848',
    from: 'DANNY',
    formIcon: FromIcon,
    to: 'ACACDE',
    toIcon: FromIcon,
    date: '06/09/2020',
  },
  {
    event: 'list',
    price: '5.015848',
    from: 'DANNY',
    formIcon: FromIcon,
    to: 'ACACDE',
    toIcon: FromIcon,
    date: '06/09/2020',
  },
  {
    event: 'list',
    price: '5.015848',
    from: 'DANNY',
    formIcon: FromIcon,
    to: 'ACACDE',
    toIcon: FromIcon,
    date: '06/09/2020',
  },
  {
    event: 'list',
    price: '5.015848',
    from: 'DANNY',
    formIcon: FromIcon,
    to: 'ACACDE',
    toIcon: FromIcon,
    date: '06/09/2020',
  },
];
const DetailContainer = (props: any) => {
  let {token = {}} = props

  return (
    <div className="trading-container">
      <h1 className="trading-container__title title_1 vertical_center_flex">
        <img src={IconTrading} alt="" />
        Trading History
      </h1>
      <div className="trading-container__table">
        <div className="trading-container__table__thead">
          <p>EVENT</p>
          <p>PRICE</p>
          <p>FROM</p>
          <p>TO</p>
          <p>DATE</p>
        </div>
        {tradingData.map((item, index) => {
          return (
            <div key={`item-${index}`} className="trading-container__table__tr">
              <p>{item?.event}</p>
              <p>
                <UserAgent mobile>
                  <span className="trading-container__table__unit">ETH</span>
                  <br />
                </UserAgent>
                {item?.price}
                <UserAgent computer>
                  <span className="trading-container__table__unit">ETH</span>
                </UserAgent>
              </p>
              <p>
                {item?.formIcon && <img src={item?.formIcon} alt="" />}
                <UserAgent mobile>{item?.formIcon && <br />}</UserAgent>
                {item?.from}
              </p>
              <p>
                {item?.toIcon && <img src={item?.toIcon} alt="" />}
                <UserAgent mobile>{item?.formIcon && <br />}</UserAgent>
                {item?.to}
              </p>
              <p>{item?.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailContainer;
