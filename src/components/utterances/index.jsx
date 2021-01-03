import React, { useContext, useEffect } from 'react';
import './index.scss';
import { THEME } from '../../constants';
import ThemeContext from '../../contexts/theme';

const src = 'https://utteranc.es/client.js';
const branch = 'master';
const DARK_THEME = 'photon-dark';
const LIGHT_THEME = 'github-light';

export const Utterances = ({ repo }) => {
  const rootElm = React.createRef();
  const { state } = useContext(ThemeContext);

  useEffect(() => {
    while (rootElm.current.hasChildNodes()) {
      rootElm.current.removeChild(rootElm.current.firstChild);
    }

    const isDarkTheme = state?.theme === THEME.DARK;
    const utterances = document.createElement('script');
    const utterancesConfig = {
      src,
      repo,
      branch,
      theme: isDarkTheme ? DARK_THEME : LIGHT_THEME,
      label: 'comment',
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    };

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });
    rootElm.current.appendChild(utterances);
  }, [state]);

  return <div className="utterances" ref={rootElm} />;
};
