import React, {useContext, useState, useEffect} from 'react';
import {connect, useIntl, getLocale, setLocale, Helmet, history} from 'umi';
import {Header} from '@/components/header';
import './assets.less';
import {UAContext, UserAgent} from '@quentin-sommer/react-useragent';
import {Input, Select, Drawer} from 'antd';

const {Option} = Select;
// import {SearchOutlined} from '@ant-design/icons';
import {
  Categories,
  Collection,
  SellIn,
  Status,
  CategoryInfo,
  // SellItems,
} from '@/components/browse';
import axios from 'axios';
import {Auction} from '@/components/auction';
// import BigNumber from 'bignumber.js';
import historyPush from '@/utils/historyPush';

const Assets = (props: any) => {
  const query = props.location.query;
  // const intl = useIntl();
  // const uaResults = useContext(UAContext).uaResults as UAResults;
  // const isMobile = uaResults.mobile;
  const [visible, setVisible] = useState(false);
  const [tokens, setTokens] = useState<any[]>([]);
  const [config, setConfig] = useState<any>(null);
  const pageSize = 10
  const [page, setPage] = useState<number>(parseInt(query.page) || 1);
  const [hasNext, setHasNext] = useState<any>(true);

  const onClose = () => {
    setVisible(!visible);
  };
  const filterHeader = (
    <div className="assets-page__filter-header">
      <p className="title_3">clear all</p>
      <p className="title_3">filter</p>
      <p className="title_3">done</p>
    </div>
  );

  function replaceImg(obj: any) {
    for (let i in obj) {
      if (obj.hasOwnProperty(i) && /lh3\.googleusercontent\.com/.test(obj[i])) {
        obj[i] = obj[i].replace('https://lh3.googleusercontent.com/', 'http://myhpb.cn/')
      } else if (typeof obj[i] === 'object') {
        replaceImg(obj[i])
      }
    }
    return obj
  }


  useEffect(() => {
    let offset = (page - 1) * pageSize
    axios.get(`https://api.opensea.io/api/v1/assets?offset=${offset}&limit=${pageSize}`).then(res => {
      const response = res.data.assets;
      if (response) {
        const tokens = response.map((item: any) => {
          item.eth_price = (item.sell_orders[0]?.current_price || 0) / Math.pow(10, 18)
          item = replaceImg(item)
          return item
        })

        if (tokens.length === pageSize) {
          setHasNext(true)
        } else {
          setHasNext(false)
        }

        setTokens(tokens);
        // if (response?.search?.edges) {
        //   const tokens = response?.search?.edges?.map((item: any) => {
        //     if (item?.node?.asset?.imageUrl) {
        //       const decimals =
        //         item?.node?.asset?.orderData?.bestAsk?.paymentAssetQuantity
        //           ?.asset?.decimals;
        //       const quantity = new BigNumber(
        //         item?.node?.asset?.orderData?.bestAsk?.paymentAssetQuantity
        //           ?.quantity || 0,
        //       );
        //       quantity.toNumber();
        //       const price = quantity.shiftedBy(-decimals);
        //       const eth_price = price.toNumber().toFixed(4);
        //       return {
        //         image_url: item?.node?.asset?.imageUrl,
        //         name: item?.node?.asset?.name,
        //         eth_price,
        //       };
        //     }
        //   });
        //   setTokens(tokens);
        // }
      }
    });
  }, [page]);

  return (
    <div className="assets-page">
      <Header hideAdvertisement={true} route="BROWSE" />
      <UserAgent computer>
        <div className="assets-page__wrapper">
          <div className="assets-page__filter">
            <Categories
              categories={config?.categories?.edges}
              onClick={value => {
                historyPush('assets', 'categories', value, query);
              }}
            />
            <Collection
              collections={config?.collections?.edges}
              onClick={value => {
                historyPush('assets', 'collection', value, query);
              }}
            />
            <Status />
            <SellIn payments={config?.paymentAssets?.edges} />
          </div>
          <div className="assets-page__content">
            <div className="assets-page__content-top">
              {/* <CategoryInfo /> */}
              <h1 className="title_1">Explore All Items</h1>
              {/* <Input
                prefix={
                  <SearchOutlined style={{ color: '#343437', opacity: 0.3 }} />
                }
                className="assets-page__content-search"
                placeholder="Search items, collection,and users"
              /> */}
            </div>
            {/* <SellItems /> */}
            <div className="assets-page__content-results">
              <p className="note_1_bold">{tokens.length} Results</p>
              {/* <div className="assets-page__content-select">
                <Select
                  defaultValue="all"
                  dropdownClassName="assets-page-select-dropdown"
                >
                  <Option value="all">All items</Option>
                  <Option value="lucy">Single Items</Option>
                  <Option value="Yiminghe">Bundles</Option>
                </Select>
                <Select
                  defaultValue="all"
                  dropdownClassName="assets-page-select-dropdown"
                >
                  <Option value="all">All items</Option>
                  <Option value="lucy">Highest last sale</Option>
                  <Option value="Yiminghe">Bundles</Option>
                </Select>
              </div> */}
            </div>
            <div className="assets-page__results-list">
              {tokens?.map((item, index) => {
                return item ? <Auction key={index} token={item} query={query} /> : '';
              })}
              {/*<div className="assets-page__results-endItem"></div>
              <div className="assets-page__results-endItem"></div>
              <div className="assets-page__results-endItem"></div>
              <div className="assets-page__results-endItem"></div>*/}
            </div>

            <div className="assets-page__pagination">
              <div className="page" onClick={() => {
                historyPush('assets', 'page', 1, query);
                setPage(1)
                setTokens([]);
              }}>First
              </div>
              {page > 1 && <div className="page" onClick={() => {
                historyPush('assets', 'page', page - 1, query);
                setPage(page - 1)
                setTokens([]);
              }}>Prev</div>}
              <div className="page">{page}</div>
              {hasNext && <div className="page" onClick={() => {
                historyPush('assets', 'page', page + 1, query);
                setPage(page + 1)
                setTokens([]);
              }}>Next</div>}
            </div>
          </div>

        </div>
      </UserAgent>
      <UserAgent mobile>
        <div className="assets-page__m-wrapper">
          <Drawer
            placement="top"
            width="100%"
            height="100%"
            closable={false}
            onClose={onClose}
            visible={visible}
            bodyStyle={{backgroundColor: '#0C0E0D', padding: '0'}}
          >
            <div className="assets-page__m-filter-header">
              <p className="title_3">clear all</p>
              <p className="title_3">filter</p>
              <p className="title_3" onClick={onClose}>
                done
              </p>
            </div>
            <div className="assets-page__m-filter-content">
              {/* <Categories />
              <Collection />
              <Status />
              <SellIn /> */}
            </div>
          </Drawer>
          <div className="title_3 assets-page__m-filter-btn" onClick={onClose}>
            Filter
          </div>
          <CategoryInfo />
          <div className="assets-page__content-select">
            <Select
              defaultValue="all"
              dropdownClassName="assets-page-select-dropdown"
            >
              <Option value="all">All items</Option>
              <Option value="lucy">Highest last sale</Option>
              <Option value="Yiminghe">Bundles</Option>
            </Select>
            <Select
              defaultValue="all"
              dropdownClassName="assets-page-select-dropdown"
            >
              <Option value="all">All items</Option>
              <Option value="lucy">Highest last sale</Option>
              <Option value="Yiminghe">Bundles</Option>
            </Select>
          </div>
        </div>
        <div className="assets-page__results-list">
          {/* <Auction />
          <Auction />
          <Auction />
          <Auction />
          <Auction />
          <Auction />
          <Auction /> */}
          <div className="assets-page__results-endItem"></div>
          <div className="assets-page__results-endItem"></div>
        </div>
      </UserAgent>
    </div>
  );
};
Assets.getInitialProps = async (ctx: any) => {
  // console.log(ctx);
  // { store, isServer, history, match, route }
  if (!ctx.isServer) {
    return;
  }
  await ctx.store.dispatch({type: 'test/test'});
  const {test} = ctx.store.getState();
  return {test};
};
//@ts-ignore
export default connect(({test}) => ({title: test}))(Assets);
