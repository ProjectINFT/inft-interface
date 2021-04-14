import React, { useState } from 'react';
import './index.less';
import AdditionalDetails from './additional-details';
import Charts from './charts';
import { UserAgent, UAContext } from '@quentin-sommer/react-useragent';

const DetailContainer = () => {
  return (
    <div className="price-container">
      <UserAgent computer>
        <AdditionalDetails />
      </UserAgent>
      <Charts />
      <UserAgent mobile>
        <AdditionalDetails />
      </UserAgent>
    </div>
  );
};

export default DetailContainer;
