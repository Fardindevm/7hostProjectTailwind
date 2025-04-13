'use client';

import { useTheme } from '../context/ThemeContext';
import { Sun } from 'lucide-react';

export default function DarkLightButtons() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className={`flex items-center justify-center px-4 py-2 rounded-md transition-colors ${
          isDarkMode 
            ? 'border border-blue-500 text-blue-500 hover:bg-blue-50' 
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? 'O-' : <Sun size={20} />}
      </button>
      
      <button
        type="button"
        className={`flex items-center justify-center rounded-md transition-colors w-11 h-[38px] ${
          isDarkMode 
            ? 'bg-blue-500 text-white hover:bg-blue-600' 
            : 'border border-blue-500 text-blue-500 hover:bg-blue-50'
        }`}
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? 'I' : 'O'}
      </button>
    </div>
  );
}
