import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {connect, useIntl, getLocale, setLocale, Helmet} from 'umi';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import {DetailContainer} from '@/components/browse-detail';
import {PriceContainer} from '@/components/price';
import {TradingContainer} from '@/components/trading';
import './index.less';
import {UAContext} from '@quentin-sommer/react-useragent';

const BrowseDetail = (props: {
  match: any;
  title: any, location: any
}) => {

  const {title, location, match} = props;

  const [token, setToken] = useState<any>({});

  useEffect(() => {
    axios.get(`https://api.opensea.io/api/v1/asset/${location.query.address}/${match.params.id}/`).then(res => {
      let token = replaceImg(res.data)
      setToken(token);
    });
  }, []);

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

  const uaResults = useContext(UAContext).uaResults as UAResults;
  const isMobile = uaResults.mobile;
  return (
    <div className="browse-detail">
      <Header />
      <div className="base-width margin-top-40">
        <DetailContainer token={token} />
        <PriceContainer token={token} />
        <TradingContainer token={token} />
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
