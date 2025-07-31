import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ThemeContext = createContext(null);

// Create the provider component
export const ThemeProvider = ({ children }) => {
  // State to hold the current theme. 
  // It checks user's system preference first, otherwise defaults to 'light'.
  const [theme, setTheme] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Effect to apply the theme class to the body
  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};