import React, { createContext, ReactNodeArray, useState } from 'react';
import { THEME } from '../constants';
import * as Storage from '../utils/storage';
import * as Dom from '../utils/dom';
import { getTheme } from '../components/theme-switch';

interface IThemeContextValue {
  state: {
    theme: string;
  };
  actions: {
    [key: string]: any;
  };
}

const DefaultValue: IThemeContextValue = {
  state: {
    theme: 'light',
  },
  actions: {
    setTheme: () => {},
  },
};

const ThemeContext = createContext<IThemeContextValue>(DefaultValue);

const ThemeProvider: React.FC<{ children: ReactNodeArray }> = ({ children }) => {
  const [theme, setTheme] = useState('');

  const value: IThemeContextValue = {
    state: { theme },
    actions: { setTheme },
  };
  return (
    <ThemeContext.Provider value={{ state: value.state, actions: value.actions }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeConsumer = ThemeContext.Consumer;

export { ThemeProvider, ThemeConsumer };
export default ThemeContext;
