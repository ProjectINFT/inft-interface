import React, { useState } from 'react';
import { UserAgent } from '@quentin-sommer/react-useragent';
import iconArt from '../../../public/svgs/art.svg';
import activity from '../../../public/svgs/activity.svg';
import medium from '../../../public/svgs/medium.svg';
import shop from '../../../public/svgs/shop.svg';
import telegram from '../../../public/svgs/telegram.svg';
import cateTwitter from '../../../public/svgs/cateTwitter.svg';
import items from '../../../public/svgs/items.svg';
import owner from '../../../public/svgs/owner.svg';
import average from '../../../public/svgs/average.svg';
import traded from '../../../public/svgs/traded.svg';

import './index.less';
const CategoryInfo = () => {
  return (
    <div className="category-info">
      <UserAgent computer>
        <img src={iconArt} alt="" className="category-info__logo" />
        <div className="category-info__results">
          <div className="category-info__results-top">
            <h1 className="title_1">rarible</h1>
            <div className="category-info__medias">
              <div className="category-info__media">
                <img src={activity} alt="" />
              </div>
              <div className="category-info__media">
                <img src={medium} alt="" />
              </div>
              <div className="category-info__media">
                <img src={shop} alt="" />
              </div>
              <div className="category-info__media">
                <img src={telegram} alt="" />
              </div>
              <div className="category-info__media">
                <img src={cateTwitter} alt="" />
              </div>
            </div>
          </div>
          <div className="category-info__amounts">
            <div className="category-info__amount">
              <img src={items} alt="" />
              <p className="note_2">10,054,433,950,096,600 Items</p>
            </div>
            <div className="category-info__amount">
              <img src={owner} alt="" />
              <p className="note_2">14,806 Owners</p>
            </div>
            <div className="category-info__amount">
              <img src={average} alt="" />
              <p className="note_2">0.001 Average</p>
            </div>
            <div className="category-info__amount">
              <img src={traded} alt="" />
              <p className="note_2">20,860.71 Traded</p>
            </div>
          </div>
        </div>
      </UserAgent>
      <UserAgent mobile>
        <div className="category-info__results-top">
          <img src={iconArt} alt="" className="category-info__logo" />
          <h1 className="title_1">rarible</h1>
          <div className="category-info__medias">
            <div className="category-info__media">
              <img src={activity} alt="" />
            </div>
            <div className="category-info__media">
              <img src={medium} alt="" />
            </div>
            <div className="category-info__media">
              <img src={shop} alt="" />
            </div>
            <div className="category-info__media">
              <img src={telegram} alt="" />
            </div>
            <div className="category-info__media">
              <img src={cateTwitter} alt="" />
            </div>
          </div>
        </div>
        <div className="category-info__amounts">
          <div className="category-info__amount">
            <p className="note_2">10,054,433,950,096,600</p>
            <p className="note_2">Items</p>
          </div>
          <div className="category-info__amount">
            <p className="note_2">14,806</p>
            <p className="note_2">Owners</p>
          </div>
          <div className="category-info__amount">
            <p className="note_2">0.001</p>
            <p className="note_2">Average</p>
          </div>
          <div className="category-info__amount">
            <p className="note_2">20,860.71</p>
            <p className="note_2">Traded</p>
          </div>
        </div>
      </UserAgent>
    </div>
  );
};

export default CategoryInfo;
