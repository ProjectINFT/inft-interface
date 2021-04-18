import React, {useState} from 'react';
import './index.less';
import DetalHeader from './detail-header';
import Creator from './creator';
import Description from './description';
import Price from './price';
import DetailButton from './detail-button';
import {UserAgent, UAContext} from '@quentin-sommer/react-useragent';

const DetailContainer = (props: any) => {
  let {token = {}} = props
  return (
    <div className="detail">
      <UserAgent mobile>
        <DetalHeader token={token} />
      </UserAgent>
      <img
        src={token.image_url}
        alt=""
        className="detail__banner"
      />

      <div className="detail__container">
        <UserAgent computer>
          <DetalHeader token={token} />
        </UserAgent>
        <Creator token={token} />
        <Description token={token} />
        <Price token={token} />
        <DetailButton token={token} />
      </div>
    </div>
  );
};

export default DetailContainer;
