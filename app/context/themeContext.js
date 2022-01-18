import React, { useReducer } from 'react';
import { createContext } from 'react';
import { lightTheme, themeReducer } from './themeReducer';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

  const setDarkTheme = () => {
    dispatch({ type: 'set_light_theme' });
    console.log('set dark theme');
  };

  const setLightTheme = () => {
    dispatch({ type: 'set_dark_theme' });
    console.log('set light theme');
  };

  return (
    <ThemeContext.Provider
      value={{
        setDarkTheme,
        setLightTheme,
        theme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
