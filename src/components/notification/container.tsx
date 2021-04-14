import React, { useState } from 'react';
import Notification from './notification';
import Divider from '@/components/divider';
import Input from '@/components/input';

const NotificationContainer = () => {
  const [visible, setVisible] = useState(true);
  const notifications = [
    {
      title: 'Items Sold',
      des: 'When someone purchases one of your items',
    },
    {
      title: 'Owned Asset Updates',
      des:
        'When a significant update occurs for one of the items you have purchased on iNFT',
    },
    {
      title: 'Bid Activity',
      des: 'When someone bids on one of your items',
    },
    {
      title: 'Price Change',
      des: 'When an item you made an offer on changes in price',
    },
    {
      title: 'Outbid',
      des: 'When an offer you placed is exceeded by another user',
    },
    {
      title: 'Referral Successful',
      des: 'When an item you referred is purchased',
    },
    {
      title: 'Auction Expiration',
      des: 'When a Dutch auction you created ends',
    },
    {
      title: 'Successful Purchase',
      des: 'When you successfully buy an item',
    },
    {
      title: 'iNFT Newsletter',
      des: 'Occasional updates from the OpenSea team',
    },
  ];
  return (
    <div className="notification-container">
      {/* <Notification  /> */}
      <Notification
        title="Notification Settings"
        des="Select which notifications you'd like to receive"
        checked={visible}
        className="notification-container__setting"
        onChange={() => {
          setVisible(!visible);
        }}
      />
      <Divider top={20} opacity="1" />
      {visible && (
        <>
          {notifications.map((item, index) => {
            return (
              <Notification
                title={item.title}
                des={item.des}
                checked={true}
                className="notification-container__item"
              />
            );
          })}
          <Divider />
          <Notification
            title="Threshold notification"
            des="Receive notifications only when you receive offers above this threshold."
            checked={true}
          />
          <Input style={{ width: 244, marginTop: 16 }} suffix="ETH" />
        </>
      )}
    </div>
  );
};

export default NotificationContainer;
