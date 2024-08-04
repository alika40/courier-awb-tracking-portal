'use client';

import { useState, useEffect } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { drawerWidth, DrawerState } from './drawer-style';
import { AppBarProps } from '@/app/lib/definitions';
import AppLogo from '../../app-logo';
import { APP_THEME } from '@/app/lib/constants';
import { DarkMode, LightMode } from '@mui/icons-material';

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const DashboardDrawerHeader = ({ open, setOpen }: DrawerState) => {
  const initialValue =
    global?.localStorage?.getItem('theme') || APP_THEME.LIGHT;
  const [theme, setTheme] = useState(initialValue);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const themeHandler = (newTheme: string) => {
    if (newTheme === APP_THEME.DARK || newTheme === APP_THEME.LIGHT) {
      setTheme(newTheme);
      global?.localStorage?.setItem('theme', newTheme);
    }
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === APP_THEME.DARK) {
      root.classList.add(APP_THEME.DARK);
      // console.log(root.classList.contains(APP_THEME.DARK), theme);
    } else {
      root.classList.remove(APP_THEME.DARK);
      // console.log(root.classList.contains(APP_THEME.DARK), theme);
    }
  }, [theme]);

  return (
    <AppBar position="fixed" open={open} style={{ background: '#831843' }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 1,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <div className="flex w-full flex-row justify-between">
          <AppLogo className="my-auto text-2xl md:text-3xl"> </AppLogo>
          <div className="my-auto cursor-pointer">
            {theme === APP_THEME.LIGHT ? (
              <DarkMode onClick={() => themeHandler(APP_THEME.DARK)} />
            ) : (
              <LightMode onClick={() => themeHandler(APP_THEME.LIGHT)} />
            )}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
