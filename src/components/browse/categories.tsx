import React, { useState } from 'react';
import CommonCollapse from '@/components/collapse';
import iconCategories from '../../../public/svgs/categories.svg';
import iconArt from '../../../public/svgs/art.svg';
import iconDomin from '../../../public/svgs/domain.svg';
import iconVirtual from '../../../public/svgs/virtual.svg';
import iconTrading from '../../../public/svgs/trading.svg';
import iconCollectibles from '../../../public/svgs/collectibles.svg';
import iconSports from '../../../public/svgs/sports.svg';
import iconUtility from '../../../public/svgs/utility.svg';
import iconClean from '../../../public/svgs/clean.svg';

import './index.less';

interface ICategoriesProps {
  categories: any;
  onClick?: (category: string) => void;
}
const Categories: React.FC<ICategoriesProps> = ({ categories, onClick }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const header = (
    <div className="categories-header">
      <img src={iconCategories} alt="" />
      <p>Categories</p>
    </div>
  );
  const categoryList = [
    {
      name: 'Art',
      slug: 'art',
      icon: iconArt,
    },
    {
      name: 'Domain names',
      slug: 'domain-names',
      icon: iconDomin,
    },
    {
      name: 'Virtual Worlds',
      slug: 'virtual-worlds',
      icon: iconVirtual,
    },
    {
      name: 'Trading cards',
      slug: 'trading-cards',
      icon: iconTrading,
    },
    {
      name: 'Collectibles',
      slug: 'collectibles',
      icon: iconCollectibles,
    },
    {
      name: 'Sports',
      slug: 'sports',
      icon: iconSports,
    },
    {
      name: 'Utiltity',
      slug: 'utility',
      icon: iconUtility,
    },
  ];
  return (
    <div className="categories">
      <CommonCollapse header={header} defaultActiveKey="1">
        {!selectedItem &&
          categoryList.map((item, index) => {
            return (
              <div
                className="categories__item"
                key={`categories${index}`}
                onClick={() => {
                  if (onClick) onClick(item?.slug);
                }}
              >
                <img src={item.icon} alt="" />
                <p className="body_2">{item.name}</p>
              </div>
            );
          })}
        {selectedItem && (
          <div className="categories__selected">
            <div className="categories__selected-wrapper">
              <div className="categories__selected-item">
                <img src={iconArt} alt="" />
                <p>Art</p>
              </div>
              <img
                className="categories__clean"
                src={iconClean}
                alt=""
                onClick={() => {
                  setSelectedItem(null);
                }}
              />
            </div>
          </div>
        )}
      </CommonCollapse>
    </div>
  );
};

export default Categories;
