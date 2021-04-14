import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from 'antd';
import { UserAgent, UAContext } from '@quentin-sommer/react-useragent';
import './payment-sucess.less';

const paymenSuccess = () => {
  return (
    <div className="payment-success">
      <Header hideAdvertisement={true} />
      <div className="payment-success__wrapper">
        <div className="payment-success__wrapper__container">
          <img src={require('../../public/images/success.png')} alt="" />
          <h1 className="title_1">PAYMENT SUCCESSFUL</h1>
          <div className="payment-success__wrapper__desc body_1">
            Congratulations on obtaining this product, you can check the details
            in <span className="tip"> my account</span>
            <UserAgent computer>
              <div className="payment-success__wrapper__desc__circle payment-success__wrapper__desc__circle__left"></div>
              <div className="payment-success__wrapper__desc__circle payment-success__wrapper__desc__circle__right"></div>
            </UserAgent>
          </div>
          <div className="between_flex payment-success__wrapper__price">
            <span className="title_3">Amount Paid</span>
            <span className="number_3">5.0168 ETH</span>
          </div>
          <div className="between_flex payment-success__wrapper__number">
            <span className="title_3">Transaction Number</span>
            <span className="body_1"> 149538292359</span>
          </div>
        </div>
        <Button className="payment-success__back">back to the home</Button>
      </div>
      <Footer />
    </div>
  );
};

export default paymenSuccess;
