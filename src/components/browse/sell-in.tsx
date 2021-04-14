import React, { useEffect, useState } from 'react';
import CommonCollapse from '@/components/collapse';
import iconSellIn from '../../../public/svgs/sale-in.svg';
import iconArt from '../../../public/svgs/art.svg';
import iconSearch from '../../../public/svgs/search.svg';
import { Checkbox, Input } from 'antd';
import './index.less';
interface ICategoriesProps {
  payments: any;
}
const SellIn: React.FC<ICategoriesProps> = ({ payments }) => {
  const [options, setOptions] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    const res = payments?.map((item: any) => {
      return {
        symbol: item?.node?.asset?.symbol,
        id: item?.node?.asset?.id,
      };
    });
    setOptions(res);
  }, [payments]);

  const handleChange = (value: string) => {
    const filterResult = options.filter((item: any) => {
      return item?.symbol.indexOf(value.toUpperCase()) > -1;
    });
    setFilterOptions(filterResult);
  };

  const header = (
    <div className="categories-header">
      <img src={iconSellIn} alt="" />
      <p>On Sale In</p>
    </div>
  );
  const collectionPrefix = (
    <img className="collection-header" src={iconSearch} alt="" />
  );

  const results = filterOptions?.length > 0 ? filterOptions : options;
  return (
    <div className="categories collection">
      <CommonCollapse header={header} defaultActiveKey="1">
        <div className="collection__wrapper">
          <Input
            prefix={collectionPrefix}
            placeholder="Filter"
            onChange={e => {
              handleChange(e.target.value);
            }}
          ></Input>
          <div className="sellin-results">
            {results?.map((item: any, index: number) => {
              return <Checkbox key={`sellin${index}`}>{item?.symbol}</Checkbox>;
            })}
          </div>
        </div>
      </CommonCollapse>
    </div>
  );
};

export default SellIn;
