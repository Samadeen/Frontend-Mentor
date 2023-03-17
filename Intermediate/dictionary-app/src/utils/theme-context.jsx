import { createContext, useState } from 'react';
import usePrefersColorScheme from 'use-prefers-color-scheme';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const prefersColorScheme = usePrefersColorScheme();
  const [theme, setTheme] = useState(prefersColorScheme);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
