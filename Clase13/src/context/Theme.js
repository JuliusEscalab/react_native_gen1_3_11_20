import React, {useContext, useState} from 'react';
import {Platform, StatusBar} from 'react-native';
import colors from '../config/colors';

export const ThemeContext = React.createContext();

const lightTheme = {
  backgroundColor: colors.white,
  textColor: colors.black,
};

const darkTheme = {
  backgroundColor: colors.black,
  textColor: colors.white,
};

const Theme = ({children}) => {
  const [darkModeEnabled, updateDarkModeEnabled] = useState(false);
  const [mainTheme, updateMainTheme] = useState(lightTheme);

  const toggleDarkMode = () => {
    const theme = !darkModeEnabled ? darkTheme : lightTheme;
    const statusBarStyle = !darkModeEnabled ? 'light-content' : 'dark-content';

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(colors.red);
    }

    StatusBar.setBarStyle(statusBarStyle);
    updateMainTheme(theme);
    updateDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <ThemeContext.Provider
      value={{
        mainTheme,
        darkModeEnabled,
        toggleDarkMode,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      'useTheme necesita ser usado dentro de ThemeContext.Provider',
    );
  }

  return context;
};
