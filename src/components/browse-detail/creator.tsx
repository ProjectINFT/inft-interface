import React, {useState} from 'react';
import './index.less';

const Creator = (props: any) => {
  let {token = {}} = props
  return (
    <div className="creator">
      <p className="creator__title title_3">Creator:</p>
      <div className="creator__container vertical_center_flex">
        <div className="creator__container__avatar-container">
          <img
            src={token.takerAccount?.profile_img_url}
            alt=""
            className="creator__container__avatar"
          />
          <img
            src={require('../../../public/svgs/confirm.svg')}
            alt=""
            className="creator__container__avatar-confirm"
          />
        </div>
        <span className="title_3 creator__container__name">{token.takerAccount?.user?.username}</span>
      </div>
    </div>
  );
};

export default Creator;
