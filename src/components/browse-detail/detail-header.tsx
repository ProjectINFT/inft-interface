import React, { useState } from 'react';
import './index.less';
import iconOwners from '../../../public/svgs/owners.svg';
import iconPeople from '../../../public/svgs/people.svg';
import iconTotal from '../../../public/svgs/toal.svg';
import { UserAgent, UAContext } from '@quentin-sommer/react-useragent';

const mySubTiltle = [
  {
    key: 'owners',
    icon: iconOwners,
    text: '2 owners',
  },
  {
    key: 'total',
    icon: iconTotal,
    text: '15 Toal',
  },
  {
    key: 'people',
    icon: iconPeople,
    text: 'Nicolas Castell',
  },
];

const DetalHeader = () => {
  return (
    <div className="detail-header">
      <div className="detail-header__title-container between_flex">
        <h1 className="detail-header__title title_1">
          Ukiyo-e tale: The creative circle
        </h1>
        <UserAgent computer>
          <div className="detail-header__title-icon">
            <img src={require('../../../public/svgs/refresh.svg')} alt="" />
            <img src={require('../../../public/svgs/share.svg')} alt="" />
          </div>
        </UserAgent>
      </div>
      <div className="detail-header__subtitle display_flex">
        {mySubTiltle.map((item, index) => {
          return (
            <div
              className="detail-header__subtitle-item center_flex"
              key={item?.key}
            >
              <img src={item?.icon} alt="" />
              <span className="note_1 detail-header__subtitle-text">
                {item?.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetalHeader;
