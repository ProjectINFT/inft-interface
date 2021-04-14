import React, { useState } from 'react';
import './index.less';

const Creator = () => {
  return (
    <div className="creator">
      <p className="creator__title title_3">Creator:</p>
      <div className="creator__container vertical_center_flex">
        <div className="creator__container__avatar-container">
          <img
            src={require('../../../public/images/brawse/creator.png')}
            alt=""
            className="creator__container__avatar"
          />
          <img
            src={require('../../../public/svgs/confirm.svg')}
            alt=""
            className="creator__container__avatar-confirm"
          />
        </div>
        <span className="title_3 creator__container__name">Indrani Mitra</span>
      </div>
    </div>
  );
};

export default Creator;
