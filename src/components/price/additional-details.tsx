import React, { useState } from 'react';
import './index.less';
import { UserAgent, UAContext } from '@quentin-sommer/react-useragent';

const additionalData = [
  {
    title: '3400 x 3400 px, PNG (14.6 MB)',
    subTitle: '',
  },
  {
    title: 'This is a signed and limited edition digital creation.',
    subTitle: 'What does this mean?',
  },
  {
    title: "You're purchasing the full non-commerical rights to this creation.",
    subTitle: 'Learn more.',
  },
  {
    title: 'All sales are final.',
    subTitle: '',
  },
];
const AdditionalDetail = () => {
  return (
    <div className="additional-container">
      <h3 className="additional-container__title title_3">
        Additional Details:
      </h3>
      <ul className="additional-container__detail">
        {additionalData.map((item, index) => {
          return (
            <li className="additional-container__item" key={`item-${index}`}>
              <p className="additional-container__item__title note_1 vertical_center_flex ">
                <span className="additional-container__item__circle"></span>
                {item?.title}
              </p>
              <p className="additional-container__item__subtitle note_3">
                {item?.subTitle}
              </p>
            </li>
          );
        })}
      </ul>
      <a href="#" className="additional-container__more-button note_1">
        See more details, upon purchase...
      </a>
    </div>
  );
};

export default AdditionalDetail;
