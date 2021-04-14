import React, { useState } from 'react';
import './index.less';

const Description = () => {
  return (
    <div className="description">
      <h3 className="description__title title_3">Description:</h3>
      <p className="description__desc body_2">
        Page three of the story. Here the artist use the magic pen and overcomes
        all his creative limitations. I've created this piece working on paper
        for the line work and later on digital for the colors. This series is
        one of my favourites since tells a whole story in five images.
      </p>
      <div className="description__btn__container">
        <span className="description__btn__item body_2">#Fartproof.crypto</span>
        <span className="description__btn__item body_2">#Standard</span>
      </div>
    </div>
  );
};

export default Description;
