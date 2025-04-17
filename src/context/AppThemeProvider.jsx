import React, { useEffect } from 'react';
import { ThemeProvider, THEMES, useTheme } from './ThemeContext';

/**
 * Component that sets a default theme for the entire application
 * and provides access to the ThemeContext
 */
export const AppThemeProvider = ({ children, defaultTheme = THEMES.GRADIENT }) => {
  return (
    <ThemeProvider>
      <ThemeInitializer defaultTheme={defaultTheme} />
      {children}
    </ThemeProvider>
  );
};

/**
 * Helper component that sets the initial theme
 */
const ThemeInitializer = ({ defaultTheme }) => {
  const { changeTheme } = useTheme();
  
  useEffect(() => {
    changeTheme(defaultTheme);
  }, [defaultTheme, changeTheme]);
  
  return null;
};

export default AppThemeProvider; 