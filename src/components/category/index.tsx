import React, { useState } from 'react';
import './index.less';
import hot from '../../../public/svgs/hot.svg';
import cn from 'classnames';

const Category = () => {
  const [visible, setVisible] = useState(true);

  const list = [
    {
      name: 'New',
      type: 'hot',
    },
    {
      name: 'Domain Names',
    },
    {
      name: 'Virtual Worlds',
    },
    {
      name: 'Art',
    },

    {
      name: 'Trading Cards',
    },
    {
      name: 'Collectibles',
    },
    {
      name: 'Sports',
    },
    {
      name: 'Utility',
    },
  ];
  return (
    <div className="category">
      {list.map((item, index) => {
        return (
          <div className="category__item" key={`category-${index}`}>
            {item.type && item.type === 'hot' && (
              <img className="category__hot" src={hot} alt="" />
            )}
            <a href="">{item.name}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
