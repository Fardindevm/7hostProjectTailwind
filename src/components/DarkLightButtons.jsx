'use client';

import Image from "next/image";
import { useTheme } from '../context/ThemeContext';

export default function DarkLightButtons() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="w-[112px]">
      <button
        aria-label="toggle dark/light mode"
        className="flex gap-[24px] cursor-pointer hover:bg-[#BED0FF]/30 rounded-full duration-200"
        onClick={toggleDarkMode}
      >
        {!isDarkMode ? (
          <>
            <Image 
              src="/svg/Light-mode.svg" 
              width="32" 
              height="32" 
              alt="Light-mode icon" 
            />
            <Image 
              src="/svg/Switch.svg" 
              width="56" 
              height="32" 
              alt="Switch to dark mode icon" 
            />
          </>
        ) : (
          <>
            <Image 
              src="/svg/Light-mode-dark.svg" 
              width="32" 
              height="32" 
              alt="Light-mode icon" 
            />
            <Image 
              src="/svg/Switch-dark.svg" 
              width="56" 
              height="32" 
              alt="Switch to dark mode icon" 
            />
          </>
        )}
      </button>
    </div>
  );
}
