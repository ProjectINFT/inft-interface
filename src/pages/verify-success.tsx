import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from 'antd';
import './login.less';

const VerifySuccess = () => {
  return (
    <div className="verify-success">
      <Header hideAdvertisement={true} />
      <div className="verify-success__wrapper">
        <img src={require('../../public/images/success.png')} alt="" />
        <h1 className="title_1">Your email has been verified!</h1>
        <Button className="verify-success__back">back to the home</Button>
      </div>
      <Footer />
    </div>
  );
};

export default VerifySuccess;
