import React, { useContext } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Input from '@/components/input';
import Quantity from '@/components/quantity';
import Divider from '@/components/divider';
import Button from '@/components/button';
import { Select, Collapse } from 'antd';
import { UserAgent, UAContext } from '@quentin-sommer/react-useragent';

const { Panel } = Collapse;
const { Option } = Select;

import './settlement.less';

const Settlement = () => {
  const uaResults = useContext(UAContext).uaResults as UAResults;
  const isMobile = uaResults.mobile;
  return (
    <div className="settlement">
      <Header />
      <div className="settlement__wrapper">
        <h1 className="title_1">Make an offer</h1>
        <div className="settlement__content">
          <div className="settlement__img-wrapper">
            <img
              src={require('../../public/images/brawse/category-test.png')}
              alt=""
              className="settlement__img"
            />
            <UserAgent mobile>
              <div className="settlement__img-info">
                <h2 className="title_2 settlement__info-title">
                  Ukiyo-e tale: The creative circle
                </h2>
                <p className="body_1">Indrani Mitra</p>
              </div>
            </UserAgent>
          </div>

          <div className="settlement__info">
            <UserAgent computer>
              <h2 className="title_2 settlement__info-title">
                Ukiyo-e tale: The creative circle
              </h2>
              <p className="body_1">Indrani Mitra</p>
            </UserAgent>

            <Divider top={32} opacity="1" />
            <div className="settlement__offer-price">
              <div className="settlement__offer-price-item settlement__offer-price-item-offer">
                <p className="body_2">My Offer</p>
                <Input suffix="ETH" />
              </div>
              <div className="settlement__offer-price-item">
                <p className="body_2">Quantity</p>
                <Quantity />
              </div>
            </div>
            <div className="settlement__offer-price ">
              <div className="settlement__offer-price-item settlement__offer-price-item-offer settlement__offer-price_expiration">
                <p className="body_2">My Offer</p>
                <Select
                  defaultValue="7"
                  style={{ width: isMobile ? '100%' : 436 }}
                >
                  <Option value="7">in 7 days</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
            </div>

            <p className="note_1">
              * Your offer will expire after 0:00 this time, unless you cancel
              the offer first.
            </p>
            <div className="settlement__confirm">
              <div className="settlement__confirm-wrapper">
                <h4 className="title_4">Total offer amount</h4>
                <h1 className="title_1">0.23 ETH</h1>
                <Button fullWidth={isMobile} buttonType="primary">
                  CONFIRM OFFER
                </Button>
              </div>
              <Collapse defaultActiveKey="1">
                <Panel header="Instructions" key="1">
                  <p>111</p>
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settlement;
