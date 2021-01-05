import React, { useContext, useEffect, useState } from 'react';
import './index.scss';
import { THEME } from '../../constants';
import ThemeContext from '../../contexts/theme';
import classNames from 'classnames';
import Lottie from 'react-lottie';
import loadingAnimationData from 'content/assets/lotties/refresh.json';

import * as Dom from '../../utils/dom';

const src = 'https://utteranc.es/client.js';
const branch = 'master';
const DARK_THEME = 'photon-dark';
const LIGHT_THEME = 'github-light';

export const Utterances = ({ repo }) => {
  const lightElmRef = React.createRef();
  const darkElmRef = React.createRef();

  const { state } = useContext(ThemeContext);

  useEffect(() => {
    const lightElm = document.createElement('script');
    const darkElm = document.createElement('script');
    const utterancesConfig = {
      src,
      repo,
      branch,
      label: 'comment',
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    };
    lightElm.setAttribute('theme', LIGHT_THEME);
    darkElm.setAttribute('theme', DARK_THEME);

    Object.keys(utterancesConfig).forEach(configKey => {
      lightElm.setAttribute(configKey, utterancesConfig[configKey]);
      darkElm.setAttribute(configKey, utterancesConfig[configKey]);
    });

    lightElmRef.current.appendChild(lightElm);
    darkElmRef.current.appendChild(darkElm);
  }, []);

  return (
    <>
      <div className={classNames({ hidden: state?.theme === THEME.LIGHT })} ref={darkElmRef} />
      <div className={classNames({ hidden: state?.theme === THEME.DARK })} ref={lightElmRef} />
    </>
  );
};
