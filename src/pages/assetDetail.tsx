import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {connect, useIntl, getLocale, setLocale, Helmet} from 'umi';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import {DetailContainer} from '@/components/browse-detail';
import {PriceContainer} from '@/components/price';
import {TradingContainer} from '@/components/trading';
import './assetDetail.less';
import {UAContext} from '@quentin-sommer/react-useragent';

const BrowseDetail = (props: {
  match: any;
  title: any, location: any
}) => {

  const {title, location, match} = props;

  const [token, setToken] = useState<any>({});

  useEffect(() => {
    axios.get(`https://api.opensea.io/api/v1/asset/${location.query.address}/${location.query.token_id}/`).then(res => {
      let token = replaceImg(res.data)

      let order = token.orders?.[0]
      let currentPrice = order?.current_price || 0
      let {usd_price = 0, symbol = '', decimals = 18, image_url, name} = order?.payment_token_contract || {}
      let dc = Math.pow(10, decimals)
      let price = currentPrice / dc
      let usd = (currentPrice * usd_price / dc).toFixed(2)
      token.price = {
        price,
        usd,
        symbol,
        image_url,
        name
      }
      setToken(token);
    });
  }, []);

  function replaceImg(obj: any) {
    for (let i in obj) {
      if (obj.hasOwnProperty(i) && /lh3\.googleusercontent\.com|storage\.googleapis\.com/.test(obj[i])) {
        obj[i] = 'http://myhpb.cn/proxy?content=' + btoa(obj[i])
      } else if (typeof obj[i] === 'object') {
        replaceImg(obj[i])
      }
    }
    return obj
  }

  const uaResults = useContext(UAContext).uaResults as UAResults;
  const isMobile = uaResults.mobile;
  return (
    <div className="browse-detail">
      <Header />
      <div className="base-width margin-top-40">
        <DetailContainer token={token} />
        {/*<PriceContainer token={token} />*/}
        {/*<TradingContainer token={token} />*/}
      </div>
      <Footer />
    </div>
  );
};
BrowseDetail.getInitialProps = async (ctx: any) => {
  if (!ctx.isServer) {
    return;
  }
  await ctx.store.dispatch({type: 'test/test'});
  const {test} = ctx.store.getState();
  return {test};
};
//@ts-ignore
export default connect(({test}) => ({title: test}))(BrowseDetail);