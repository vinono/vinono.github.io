'use client';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function UnifiedToggle() {
  const { i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <button className="w-10 h-10 rounded-lg flex items-center justify-center text-xl" title="Theme">
          <span className="opacity-50">○</span>
        </button>
        <button className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium" title="Language">
          <span className="opacity-50">--</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {/* Theme Toggle - Single Icon */}
      <button
        onClick={toggleTheme}
        className="w-10 h-10 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center group relative overflow-hidden"
        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div className="relative w-6 h-6">
          {/* Sun Icon */}
          <svg
            className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${
              theme === 'dark'
                ? 'rotate-90 scale-0 opacity-0'
                : 'rotate-0 scale-100 opacity-100'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>

          {/* Moon Icon */}
          <svg
            className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${
              theme === 'dark'
                ? 'rotate-0 scale-100 opacity-100'
                : '-rotate-90 scale-0 opacity-0'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </div>
      </button>

      {/* Language Toggle - Single Icon */}
      <button
        onClick={changeLanguage}
        className="w-10 h-10 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center group relative overflow-hidden"
        title={i18n.language === 'zh' ? 'Switch to English' : '切换到中文'}
        aria-label={i18n.language === 'zh' ? 'Switch to English' : '切换到中文'}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Chinese */}
          <span
            className={`absolute text-sm font-bold transition-all duration-500 ${
              i18n.language === 'zh'
                ? 'translate-y-0 opacity-100 scale-100'
                : '-translate-y-6 opacity-0 scale-75'
            }`}
          >
            中
          </span>

          {/* English */}
          <span
            className={`absolute text-sm font-bold transition-all duration-500 ${
              i18n.language === 'en'
                ? 'translate-y-0 opacity-100 scale-100'
                : 'translate-y-6 opacity-0 scale-75'
            }`}
          >
            EN
          </span>
        </div>
      </button>
    </div>
  );
}