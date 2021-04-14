import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Form, Button, Modal, Input } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import IconUnlink from '../../public/svgs/unlink.svg';
import { NotificationContainer } from '@/components/notification';
import Divider from '@/components/divider';
import { SearchOutlined } from '@ant-design/icons';
import './my-items.less';

const MyItems = () => {
  return (
    <div className="myItems">
      <Header />
      <div className="myItems__wrapper">
        <h1 className="title_1">My Items</h1>
        <p className="body_2">
          The matching items you bought are in your wallet
        </p>
        <Divider opacity="1" />
        <div className="myItems__filter">
          <Input
            prefix={
              <SearchOutlined style={{ color: '#343437', opacity: 0.3 }} />
            }
            className="myItems__content-search"
            placeholder="Search items, collection,and users"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyItems;
