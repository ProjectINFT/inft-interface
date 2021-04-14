import React from 'react';
import './index.less';
import IconClean from '../../../public/svgs/clean-grey.svg';
interface ISellItemsProps {
  type: string;
}
const SellItem: React.FC<ISellItemsProps> = ({ type }) => {
  return (
    <div className="sell-item">
      <h4 className="title_4">{type}</h4>
      <img src={IconClean} alt="" />
    </div>
  );
};

const SellItems = () => {
  return (
    <div className="sell-items">
      <SellItem type="BTC" />
      <SellItem type="ETH" />
      <h4 className="title_4 sell-items__clear">Clear All</h4>
    </div>
  );
};

export default SellItems;
