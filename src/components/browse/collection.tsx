import React, { useState } from 'react';
import CommonCollapse from '@/components/collapse';
import iconCollection from '../../../public/svgs/collection.svg';
import iconArt from '../../../public/svgs/art.svg';
import iconSearch from '../../../public/svgs/search.svg';
import { Input } from 'antd';
import './index.less';

interface ICategoriesProps {
  collections: any;
  onClick?: (collection: string) => void;
}

const Collection: React.FC<ICategoriesProps> = ({ collections, onClick }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const header = (
    <div className="categories-header">
      <img src={iconCollection} alt="" />
      <p>Collection</p>
    </div>
  );
  const collectionPrefix = (
    <img className="collection-header" src={iconSearch} alt="" />
  );
  return (
    <div className="categories collection">
      <CommonCollapse header={header}>
        <div className="collection__wrapper">
          <Input
            prefix={collectionPrefix}
            placeholder="Filter collections"
          ></Input>
          <div className="collection__results">
            {collections?.map((item: any, index: number) => {
              return (
                <div className="collection__item" key={index} onClick={() => {
                  if(onClick) onClick(item?.node?.slug)
                }}>
                  <img src={item?.node?.imageUrl} alt="" />
                  <p className="title_4">{item?.node?.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </CommonCollapse>
    </div>
  );
};

export default Collection;
