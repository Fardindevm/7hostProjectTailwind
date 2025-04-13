'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children, initialTheme }) {
  const [isDarkMode, setIsDarkMode] = useState(initialTheme === 'dark');
  const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;

      localStorage.setItem('darkMode', JSON.stringify(newMode));
      document.cookie = `theme=${newMode ? 'dark' : 'light'}; path=/; max-age=31536000`;

      return newMode;
    });
  };

  if (!mounted) return null; 

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
