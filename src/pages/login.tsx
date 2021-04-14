import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './login.less';
const Login = () => {
  return (
    <div className="login">
      <Header />
      <div className="login__wrapper">
        <h1 className="title_1">Sign in to your wallet.</h1>
        <img
          className="login__metamask-logo"
          src={require('../../public/images/metamask.png')}
          alt=""
        />
        <p className="body_2">
          Your wallet, powered by <a href="">MetaMask</a>, will be used to
          securely store your digital goods and cryptocurrencies.
        </p>
        <div className="title_3 login__buyNow" >Buy Now</div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
