import React, {useState,} from 'react';
import './index.less';
import {Modal, Button, Input} from 'antd';
import {UserAgent} from '@quentin-sommer/react-useragent';
import ErrorModal from './error-modal';
import {OpenSeaPort, Network} from 'opensea-js';

const DetailButton = (props: any) => {
  let {token = {}} = props
  let {price = {}} = token
  let order = token
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

  const connectWallet = () => {
    const win: any = window
    if (!win.ethereum) {
      return
    }

    win.ethereum.request({method: 'eth_requestAccounts'}).then((res: any) => {
      let accountAddress = res[0]
      let web3Provider = typeof web3 !== 'undefined'
        ? win.web3.currentProvider
        : new Web3.providers.HttpProvider('https://mainnet.infura.io')

      let seaport = new OpenSeaPort(web3Provider, {
        networkName: Network.Main,
        apiKey: '8808fca8725c4fcf833424c18d0d3baa'
      })

      seaport.fulfillOrder({order, accountAddress}).then(hash => {
        console.log(hash);
      })
    })
  }


  return (
    <div className="detail-button">
      {/*<UseWalletProvider*/}
      {/*  chainId={1}*/}
      {/*  connectors={{*/}
      {/*    // walletconnect: {rpcUrl: 'https://mainnet.eth.aragon.network/'}, // sushi url*/}
      {/*    // walletconnect: {rpcUrl: 'https://mainnet.infura.io'},// opensea url*/}
      {/*    // This is how connectors get configured*/}
      {/*    // portis: {dAppId: 'my-dapp-id-123-xyz'},*/}
      {/*    // portis: {dAppId: '8808fca8725c4fcf833424c18d0d3baa'},*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <App />*/}
      {/*</UseWalletProvider>*/}
      <div>
        <Button className="detail__buy" onClick={() => {
          showModal('purchase')
        }}>
          Buy Now
        </Button>
        <Button className="detail__offer" onClick={() => {
          showModal('makeOffer')
        }}>
          Make Offer
        </Button>
      </div>
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
                src={token.asset?.imageUrl}
                alt=""
              />
              <h2 className="title_2 browe-model__left__title">
                {token.asset?.name}
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
                  <img src={price.imageUrl} alt="" />
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
            <Button className="detail__buy Purchase mobile_button_width" onClick={connectWallet}>
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
