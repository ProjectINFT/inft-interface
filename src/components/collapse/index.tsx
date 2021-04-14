import React, { useState, useEffect } from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;
import './index.less';

interface ICommonCollapseProps {
  children: any;
  header: React.ReactNode;
  key?: string | number;
  defaultActiveKey?: string | number;
}

const CommonCollapse: React.FC<ICommonCollapseProps> = ({
  children,
  header,
  key,
  defaultActiveKey,
}) => {
  const callback = () => {};
  return (
    <div className="common-collapse">
      <Collapse
        onChange={callback}
        expandIconPosition="right"
        defaultActiveKey={defaultActiveKey}
      >
        <Panel header={header} key={key || '1'}>
          {children}
        </Panel>
      </Collapse>
    </div>
  );
};

export default CommonCollapse;
