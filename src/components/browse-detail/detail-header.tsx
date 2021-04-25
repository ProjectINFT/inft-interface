import React, {useState} from 'react';
import './index.less';
import iconOwners from '../../../public/svgs/owners.svg';
import iconPeople from '../../../public/svgs/people.svg';
import iconTotal from '../../../public/svgs/toal.svg';
import {UserAgent, UAContext} from '@quentin-sommer/react-useragent';

const mySubTiltle = [
  // {
  //   key: 'owners',
  //   icon: iconOwners,
  //   text: '{n} Top Owners',
  // },
  // {
  //   key: 'total',
  //   icon: iconTotal,
  //   text: '{n} Toal',
  // },
  // {
  //   key: 'people',
  //   icon: iconPeople,
  //   text: '{n} Castell',
  // },
];

const DetalHeader = (props: any) => {
  let {token = {}} = props
  let subTitleCount: any[] = [0, 0, 0]

  if (token.name) {
    document.title = token.name
  }

  subTitleCount[0] = token.top_ownerships?.length || 0;

  return (
    <div className="detail-header">
      <div className="detail-header__title-container between_flex">
        <h1 className="detail-header__title title_1">
          {token.asset?.name}
        </h1>
        {/*<UserAgent computer>*/}
        {/*  <div className="detail-header__title-icon">*/}
        {/*    <img src={require('../../../public/svgs/refresh.svg')} alt="" />*/}
        {/*    <img src={require('../../../public/svgs/share.svg')} alt="" />*/}
        {/*  </div>*/}
        {/*</UserAgent>*/}
      </div>
      {/*<div className="detail-header__subtitle display_flex">*/}
      {/*  {mySubTiltle.map((item, index) => {*/}
      {/*    return (*/}
      {/*      <div*/}
      {/*        className="detail-header__subtitle-item center_flex"*/}
      {/*        key={item?.key}*/}
      {/*      >*/}
      {/*        <img src={item?.icon} alt="" />*/}
      {/*        <span className="note_1 detail-header__subtitle-text">*/}
      {/*          {item?.text.replace('{n}', subTitleCount[index])}*/}
      {/*        </span>*/}
      {/*      </div>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</div>*/}
    </div>
  );
};

export default DetalHeader;
