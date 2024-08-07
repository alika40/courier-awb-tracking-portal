'use client';

import { useState, useEffect } from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';
import { APP_THEME } from '@/app/lib/constants';

const ThemeSwitcher = () => {
  const initialValue =
    global?.localStorage?.getItem('theme') || APP_THEME.LIGHT;
  const [theme, setTheme] = useState(initialValue);

  const themeHandler = (newTheme: string) => {
    if (newTheme === APP_THEME.DARK || newTheme === APP_THEME.LIGHT) {
      setTheme(newTheme);
      global?.localStorage?.setItem('theme', newTheme);
    }
  };

  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, this Fixes Hydration Mismatch Problem
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // useEffect(() => {
  //   const root = window.document.documentElement;
  //   if (theme === APP_THEME.DARK) {
  //     root.classList.add(APP_THEME.DARK);
  //   } else {
  //     root.classList.remove(APP_THEME.DARK);
  //   }
  // }, [theme]);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const root = window.document.documentElement;
    theme === APP_THEME.DARK
      ? root.classList.add(APP_THEME.DARK)
      : root.classList.remove(APP_THEME.DARK);

    return (
      <>
        {theme === APP_THEME.LIGHT ? (
          <DarkMode onClick={() => themeHandler(APP_THEME.DARK)} />
        ) : (
          <LightMode onClick={() => themeHandler(APP_THEME.LIGHT)} />
        )}
      </>
    );
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
