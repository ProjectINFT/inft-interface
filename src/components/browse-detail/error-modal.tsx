import React, { useState } from 'react';
import './index.less';
import { Button } from 'antd';

const ErrorModal = () => {
  return (
    <div className="error-model__container">
      <img src={require('../../../public/images/error.png')} alt="" />
      <h1 className="title_1">Completing the trade</h1>
      <p className="body_1 error-model__container__desc">
        You don't have enough ETH to make this transaction. Your current wallet
        needs 5.0168 ETH.
      </p>
      <div className="error-model__container__note  center_flex">
        <span className="error-model__container__note__title title_3">
          NOTE :
        </span>
        <span className="error-model__container__note__text">
          You can purchase Ethereum on
        </span>
        <span className="error-model__container__note__subtitle body_1">
          Coinbase.
        </span>
      </div>
      <Button className="detail__buy Purchase mobile_button_width">ok</Button>
    </div>
  );
};

export default ErrorModal;
