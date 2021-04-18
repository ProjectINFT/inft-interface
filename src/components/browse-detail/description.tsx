import React, {useState} from 'react';
import './index.less';

const Description = (props: any) => {
  let {token = {}} = props
  return (
    <div className="description">
      <h3 className="description__title title_3">Description:</h3>
      <p className="description__desc body_2">{token.description}</p>
      <div className="description__btn__container">
        <span className="description__btn__item body_2">#Fartproof.crypto</span>
        <span className="description__btn__item body_2">#Standard</span>
      </div>
    </div>
  );
};

export default Description;
