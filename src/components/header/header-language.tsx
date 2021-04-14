import React, { useState } from 'react';
import { useIntl, getLocale, setLocale } from 'umi';
import './index.less';
import cn from 'classnames';
import triangle from '../../../public/svgs/triangle.svg';
const menu = [
  {
    key: 'English',
    value: 'en-US',
  },
  {
    key: '简体中文',
    value: 'zh-CN',
  },
];
const changeLangs = (langs: string) => {
  // // false 不刷新页面
  setLocale(langs, false);
};

const getCurrentLang = () => {
  const lang = getLocale();
  return menu.find(item => {
    return item.value === lang;
  });
};

const HeaderLanguage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const intl = useIntl();
  return (
    <div className="header-language">
      <div
        className="header-language__current"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p>{getCurrentLang()?.key}</p>
        <img src={triangle} alt="" />
      </div>
      {isOpen && (
        <ul className="header-language__menu">
          {menu.map((item, index) => {
            return (
              <li
                className="header-language__menu-item"
                onClick={() => {
                  changeLangs(item.value);
                  setIsOpen(false);
                }}
                key={index}
              >
                {item.key}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default HeaderLanguage;
