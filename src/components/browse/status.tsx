import React, { useState } from 'react';
import CommonCollapse from '@/components/collapse';
import iconStar from '../../../public/svgs/star.svg';
import './index.less';
const Status = () => {
  const header = (
    <div className="categories-header">
      <img src={iconStar} alt="" />
      <p>Status</p>
    </div>
  );

  const filterStatusItems = [
    {
      label: 'For sale',
    },
    {
      label: 'On auction',
    },
    {
      label: 'New',
    },
    {
      label: 'Has offers',
    },
  ];

  return (
    <div className="categories collection">
      <CommonCollapse header={header} defaultActiveKey="1">
        <div className="status-results">
          {filterStatusItems.map((item, index) => {
            return (
              <div
                className="status-results__item status-results__item--active"
                key={`filterstatus${index}`}
              >
                <p className="title_4">{item?.label}</p>
              </div>
            );
          })}
        </div>
      </CommonCollapse>
    </div>
  );
};

export default Status;
