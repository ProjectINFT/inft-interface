import React, { useContext, useEffect } from 'react';
import { connect, useIntl, getLocale, setLocale, Helmet } from 'umi';
import { Header } from '@/components/header';
import Category from '@/components/category';
import { Banner } from '@/components/banner';
import { AuctionContainer } from '@/components/auction';
import { NftContainer } from '@/components/nft-list';
import { Footer } from '@/components/footer';
import './index.less';
import { UAContext } from '@quentin-sommer/react-useragent';
import axios from 'axios';

const Home = (props: any) => {
  // const { title } = props;
  console.log(props);
  const intl = useIntl();
  const uaResults = useContext(UAContext).uaResults as UAResults;
  const isMobile = uaResults.mobile;

  const index = props?.index;
  const aboutUsItems = [
    {
      title: '12,000,000+ digital items',
      descripe:
        'With support for the ERC721 and ERC1155 standards on Ethereum, our ocean of digital collectibles is growing rapidly.',
    },
    {
      title: '100,000 ETH  in transaction volume',
      descripe:
        'Since January 2018, over 90,000 ETH of trading volume has passed through our smart contracts.',
    },
    {
      title: '700+ asset Types',
      descripe:
        'Dive into dozens of games, art collections, and collectibles — from CryptoSpaceCommanders to Axie Infinity to 0xUniverse.',
    },
  ];

  return (
    <div className="home-page">
      <Header route="home" hideAdvertisement={true} />
      <Category />
      <Banner promotions={index?.promotions?.promotions} />
      <div className="base-width">
        <AuctionContainer tokens={index?.token} />
        <div className="home-page__collection">
          <p>
            <span>NEWEST</span>
            <span> COLLECTIONS</span>
            <img src={require('../../public/images/layer.png')} alt="" />
          </p>
          <a>View All</a>
        </div>
        <NftContainer collections={index?.collections} />
      </div>
      <div className="home-page__aboutUs">
        <div className="home-page__aboutUs-wrapper base-width">
          <img src={require('../../public/images/about-us.png')} alt="" />
          <div className="home-page__aboutUs-left">
            <h2 className="">ABOUT US</h2>
            <h3 className={isMobile ? 'title_4' : 'title_2'}>
              CHINA'S LARGEST MARKET RARE ITEMS
            </h3>
          </div>
          <div className="home-page__aboutUs-right">
            {aboutUsItems.map((item, index) => {
              return (
                <div className="home-page__aboutUs-info" key={`about${index}`}>
                  <h1 className={isMobile ? 'title_3' : 'title_1'}>
                    {item?.title}
                  </h1>
                  <p className={isMobile ? 'note_1' : 'body_2'}>
                    {item.descripe}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
Home.getInitialProps = async (ctx: any) => {
  // { store, isServer, history, match, route }

  if (!ctx.isServer) {
    return;
  }
  const collections = await axios.get(
    'https://api.inft.io/app/collections_index',
  );
  const promotions = await axios.get('https://api.inft.io/app/indexData');
  const token = await axios.get('https://api.inft.io/app/tokens?limit=10');
  // await ctx.store.dispatch({ type: 'test/test' });
  // const { test } = ctx.store.getState();

  // const initialProps = JSON.stringify(response);

  // console.log(initialProps);
  return {
    index: {
      collections: collections.data.data.collections,
      promotions: promotions.data.data,
      token: token.data.data,
    },
  };
};
//@ts-ignore
export default connect(({ index }) => ({ index }))(Home);
