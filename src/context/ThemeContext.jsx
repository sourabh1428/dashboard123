import React, { createContext, useContext, useState } from 'react';
import { motion } from 'framer-motion';

// Available theme options
export const THEMES = {
  DEFAULT: 'default',
  DARK: 'dark',
  PURPLE: 'purple',
  GRADIENT: 'gradient'
};

// Theme definitions with their respective styles
const themeStyles = {
  [THEMES.DEFAULT]: {
    background: 'bg-gradient-to-b from-black via-gray-900 to-purple-900/20',
    text: 'text-white',
    card: 'bg-gray-900/50 backdrop-blur-sm border border-gray-800',
    cardHover: 'hover:border-purple-500/30',
    button: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700',
    secondaryButton: 'bg-gray-800 hover:bg-gray-700',
    highlight: 'text-purple-400'
  },
  [THEMES.DARK]: {
    background: 'bg-gradient-to-b from-black via-gray-950 to-gray-900',
    text: 'text-white',
    card: 'bg-gray-950/70 backdrop-blur-sm border border-gray-800',
    cardHover: 'hover:border-gray-600',
    button: 'bg-gray-800 hover:bg-gray-700',
    secondaryButton: 'bg-transparent border border-gray-700 hover:bg-gray-800',
    highlight: 'text-blue-400'
  },
  [THEMES.PURPLE]: {
    background: 'bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-900',
    text: 'text-white',
    card: 'bg-purple-900/40 backdrop-blur-sm border border-purple-800/30',
    cardHover: 'hover:border-purple-500',
    button: 'bg-purple-700 hover:bg-purple-600',
    secondaryButton: 'bg-indigo-900/50 hover:bg-indigo-800',
    highlight: 'text-purple-300'
  },
  [THEMES.GRADIENT]: {
    background: 'bg-gradient-to-br from-gray-900 via-purple-900/30 to-black',
    text: 'text-white',
    card: 'bg-white/10 backdrop-blur-lg border border-white/10',
    cardHover: 'hover:border-purple-500/30',
    button: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700',
    secondaryButton: 'bg-white/10 hover:bg-white/20',
    highlight: 'text-indigo-300'
  }
};

// Create context
const ThemeContext = createContext();

// Hook for accessing theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Animated background component based on theme
const ThemedBackground = ({ theme }) => {
  const currentTheme = themeStyles[theme] || themeStyles[THEMES.DEFAULT];
  
  return (
    <motion.div
      className={`fixed inset-0 -z-10 ${currentTheme.background}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-soft-light" />
      
      {/* Animated gradients */}
      {theme === THEMES.GRADIENT && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-3xl"
              style={{
                width: `${Math.random() * 30 + 10}rem`,
                height: `${Math.random() * 30 + 10}rem`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
                scale: [1, Math.random() * 0.3 + 0.8, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.DEFAULT);
  
  // Change theme to a new value
  const changeTheme = (newTheme) => {
    if (themeStyles[newTheme]) {
      setTheme(newTheme);
    } else {
      console.warn(`Theme "${newTheme}" not found, using default instead`);
      setTheme(THEMES.DEFAULT);
    }
  };
  
  // Get styles for current theme
  const getStyles = () => themeStyles[theme] || themeStyles[THEMES.DEFAULT];
  
  return (
    <ThemeContext.Provider value={{ theme, changeTheme, getStyles }}>
      <ThemedBackground theme={theme} />
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext; 