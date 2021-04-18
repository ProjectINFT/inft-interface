import React, {useContext} from 'react';
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

  const {title, location,match} = props;

  console.log(location.query.address, match.params.id);

  const uaResults = useContext(UAContext).uaResults as UAResults;
  const isMobile = uaResults.mobile;
  return (
    <div className="browse-detail">
      <Header />
      <div className="base-width margin-top-40">
        <DetailContainer />
        <PriceContainer />
        <TradingContainer />
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
