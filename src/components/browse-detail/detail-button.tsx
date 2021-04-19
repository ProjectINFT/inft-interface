import React, {useState} from 'react';
import './index.less';
import {Modal, Button, Input} from 'antd';
import {UserAgent, UAContext} from '@quentin-sommer/react-useragent';
import ErrorModal from './error-modal';

const DetailButton = (props: any) => {
  let {token = {}} = props
  let {price = {}} = token
  const [purchaseVisible, setPurchaseVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [type, setType] = useState('make');
  const showModal = (type: string) => {
    setPurchaseVisible(true);
    setType(type);
  };

  const handleCancel = () => {
    setPurchaseVisible(false);
  };
  const toggleError = (bollean: boolean) => {
    setErrorVisible(bollean);
  };
  return (
    <div className="detail-button">
      <Button className="detail__buy" onClick={() => showModal('purchase')}>
        Buy Now
      </Button>
      <Button className="detail__offer" onClick={() => showModal('makeOffer')}>
        Make Offer
      </Button>
      {/* Purchase */}
      <Modal
        className="browse-model"
        visible={purchaseVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="display_flex">
          <UserAgent computer>
            <div className="browe-model__left">
              <img
                src={token.image_url}
                alt=""
              />
              <h2 className="title_2 browe-model__left__title">
                {token.name}
              </h2>
              {/*<div className="between_flex browe-model__left__subtitle">
                <span className="body_1">Indrani Mitra</span>
                <span className="body_1">Edition of 1</span>
              </div>*/}
            </div>
          </UserAgent>

          <div className="browe-model__right">
            <h2 className="title_2">
              {type == 'purchase' ? 'Payment Method' : 'Offer Method'}
            </h2>
            <div className="note_1 browe-model__right__desc">
              We will use your digital wallet to complete this purchase. You
              will need to confirm your purchase with your digital wallet.
            </div>

            {type === 'purchase' ? (
              <>
                <p className="note_1">Payment Amount:</p>
                <div className="browe-model__right__price center_flex">
                  <img src={price.image_url} alt="" />
                  <span className="number_1 browe-model__right__number">
                    {price.price} {price.symbol}
                  </span>
                </div>
              </>
            ) : (
              <>
                {/*<p className="note_1">
                  Your offer must be at least: Ξ {price.price}.
                </p>*/}
                <div className="browe-model__right__price">
                  <Input addonAfter={price.symbol} placeholder={`Offer amount in ${price.name}`} />
                </div>
              </>
            )}
            <Button className="detail__buy Purchase mobile_button_width">
              Purchase
            </Button>
          </div>
        </div>
      </Modal>
      <Modal
        className="browse-model error-model"
        visible={errorVisible}
        onCancel={() => toggleError(false)}
        footer={null}
      >
        <ErrorModal />
      </Modal>
    </div>
  );
};

export default DetailButton;
