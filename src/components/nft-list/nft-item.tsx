import React, { useContext } from 'react';
import './index.less';
import cn from 'classnames';
import { UAContext } from '@quentin-sommer/react-useragent';

interface INftProps {
  className?: string;
  value: any;
}
const NftItem: React.FC<INftProps> = ({ className, value }) => {
  const uaResults = useContext(UAContext).uaResults as UAResults;
  const isMobile = uaResults.mobile;
  return (
    <div className={cn('nft-item', className)}>
      <img src={value.image_url} alt="" />
      <div className="nft-item__info">
        <h1 className={isMobile ? 'title_2' : 'title_1'}>{value.name}</h1>
        <p className="note_1">{value.description}</p>
      </div>
    </div>
  );
};

export default NftItem;
