import React, { useState } from 'react';
import './index.less';
import DetalHeader from './detail-header';
import Creator from './creator';
import Description from './description';
import Price from './price';
import DetailButton from './detail-button';
import { UserAgent, UAContext } from '@quentin-sommer/react-useragent';

const DetailContainer = () => {
  return (
    <div className="detail">
      <UserAgent mobile>
        <DetalHeader />
      </UserAgent>
      <img
        src={require('../../../public/images/brawse/category-test.png')}
        alt=""
        className="detail__banner"
      />

      <div className="detail__container">
        <UserAgent computer>
          <DetalHeader />
        </UserAgent>
        <Creator />
        <Description />
        <Price />
        <DetailButton />
      </div>
    </div>
  );
};

export default DetailContainer;
