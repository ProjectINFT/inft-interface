import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Form, Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import IconUnlink from '../../public/svgs/unlink.svg';
import { NotificationContainer } from '@/components/notification';
import Input from '@/components/input';
import './account.less';

const Account = () => {
  const showModal = () => {
    Modal.confirm({
      title: 'Disconnect from your MetaMask wallet?',
      icon: <ExclamationCircleOutlined style={{ color: '#4D91FF' }} />,
      className: 'common-modal-confirm',
      content:
        'After the connection is disconnected, normal transactions cannot be performed, and the wallet needs to be re-linked',
      okText: 'Sure',
      cancelText: 'Cancel',
      centered: true,
      maskClosable: true,
      keyboard: true,
    });
  };
  return (
    <div className="account">
      <Header />
      <div className="account__wrapper">
        <h1 className="title_1">My Account Settings</h1>
        <div className="account__setting">
          <div className="account__avator">
            <img src="" alt="" />
          </div>
          <div className="account__form">
            <Form>
              <Form.Item name="username">
                <p className="body_2">WALLET ADDRESS</p>
                <div className="account__form-item">
                  <Input
                    style={{ height: 42, marginTop: 8, borderRadius: 4 }}
                    value="0x8298b4adfc02ed2431a2a95c8e754bc8be7e3f7f"
                    disabled
                  />
                  <img src={IconUnlink} alt="" onClick={showModal} />
                </div>
              </Form.Item>
              <Form.Item>
                <p className="body_2">EMAIL</p>
                <Input
                  style={{ height: 42, marginTop: 8, borderRadius: 4 }}
                  placeholder="Please enter your usual email"
                />
              </Form.Item>
              <Form.Item>
                <p className="body_2">USERNAME</p>
                <Input
                  style={{ height: 42, marginTop: 8, borderRadius: 4 }}
                  placeholder="A lowercase username for your account"
                />
              </Form.Item>
              <p className="node_1_bold">
                Make sure to save your wallet details. You'll need them for
                accessing the site, and we can't help you recover them. Clicking
                "Save" will ask you to verify your wallet address.
              </p>
              <Button className="account__form-btn">Save</Button>
            </Form>
          </div>
        </div>
        <NotificationContainer />
      </div>

      <Footer />
    </div>
  );
};

export default Account;
