import {history} from 'umi';
import _ from 'lodash';

type ParamterType =
  | 'categories'
  | 'collection'
  | 'page'
  | 'address'
  | 'token_id'
  | 'status'
  | 'paymentAssets'
  | 'lang';
type LanguageType = 'zh' | 'en';

type QueryType = {
  categories?: string;
  collection?: string;
  page?: string;
  address?: string;
  token_id?: string;
  status?: string;
  paymentAssets?: string;
  lang?: LanguageType;
};

const historyPush = (
  pathname: string,
  paramter: ParamterType,
  value: any,
  query: QueryType,
  lang?: LanguageType,
) => {
  if (!value || !paramter) {
    return;
  }

  if (paramter === 'categories') {
    history.push({
      pathname: `/${pathname}`,
      query: {
        ...query,
        categories: value,
      },
    });
  }

  if (paramter === 'lang') {
    history.push({
      pathname: `/${pathname}`,
      query: {
        ...query,
        lang: value,
      },
    });
  }
  if (paramter === 'page') {
    history.push({
      pathname: `/${pathname}`,
      query: {
        ...query,
        page: value,
      },
    });
  }
  if (paramter === 'address') {
    history.push({
      pathname: `/${pathname}`,
      query: {
        address: value.asset_contract.address,
        token_id: value.token_id,
      },
    });
  }

  if (paramter === 'collection') {
    if (query.collection) {
      let qc = query.collection;
      let qcArr = qc.split('_');
      let qr = _.uniq([...qcArr, value]);
      history.push({
        pathname: `/${pathname}`,
        query: {
          ...query,
          collection: qr.join('_'),
        },
      });
    } else {
      history.push({
        pathname: `/${pathname}`,
        query: {
          ...query,
          collection: value,
        },
      });
    }
  }
  if (paramter === 'status') {
    if (query.status) {
      let qc = query.status;
      let qcArr = qc.split('_');
      let qr = _.uniq([...qcArr, value]);
      history.push({
        pathname: `/${pathname}`,
        query: {
          ...query,
          status: qr.join('_'),
        },
      });
    } else {
      history.push({
        pathname: `/${pathname}`,
        query: {
          ...query,
          status: value,
        },
      });
    }
  }
  if (paramter === 'paymentAssets') {
    if (query.paymentAssets) {
      let qc = query.paymentAssets;
      let qcArr = qc.split('_');
      let qr = _.uniq([...qcArr, value]);
      history.push({
        pathname: `/${pathname}`,
        query: {
          ...query,
          paymentAssets: qr.join('_'),
        },
      });
    } else {
      history.push({
        pathname: `/${pathname}`,
        query: {
          ...query,
          paymentAssets: value,
        },
      });
    }
  }
};

export default historyPush;
