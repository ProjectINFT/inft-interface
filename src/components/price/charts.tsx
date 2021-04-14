import React, { useContext } from 'react';
import './index.less';
import { UserAgent, UAContext } from '@quentin-sommer/react-useragent';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Select } from 'antd';
const { Option } = Select;

const Charts = (props: HighchartsReact.Props) => {
  const uaResults = useContext(UAContext).uaResults as UAResults;
  const isMobile = uaResults.mobile;
  const options: Highcharts.Options = {
    chart: {
      height: isMobile ? 168 : 170,
      width: isMobile ? 321 : 796,
      backgroundColor: 'none',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: ['10/15', '10/16', '10/17', '10/18', '10/19'],
    },
    yAxis: {
      type: 'linear',
      lineWidth: 1,
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, 'rgba(60, 119, 244, 0.15)'],
            [1, 'rgba(60, 119, 244, 0)'],
          ],
        },
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: 'price',
        type: 'column',
        data: [2, 4, 6, 4, 2],
        color: '#4199F7',
        pointWidth: 10,
      },
      {
        type: 'area',
        name: 'price',
        data: [2, 4, 6, 7, 8],
        color: '#4199F7',
        marker: {
          enabled: false,
        },
      },
    ],
  };
  return (
    <div className="charts-container">
      <div className="charts-container__header between_flex">
        <h3 className="title_3 vertical_center_flex">
          <img src={require('../../../public/svgs/price-history.svg')} alt="" />{' '}
          Price History
        </h3>
        <div className="charts-container__header__select">
          <Select defaultValue="all">
            <Option value="all">All item</Option>
            <Option value="test">test</Option>
          </Select>
        </div>
      </div>
      <div className="charts-container__subtitle">
        <p className="charts-container__subtitle__title note_1">
          All Time Avg. Price
        </p>
        <p className="charts-container__subtitle__price vertical_center_flex">
          <img src={require('../../../public/svgs/eht.svg')} alt="" />
          <span className="title_3 charts-container__subtitle__price-eth">
            5.016848 ETH
          </span>
        </p>
      </div>

      <div className="price-charts">
        <HighchartsReact highcharts={Highcharts} options={options} {...props} />
      </div>
    </div>
  );
};

export default Charts;
