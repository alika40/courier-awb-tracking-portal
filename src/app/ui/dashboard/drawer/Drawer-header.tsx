'use client';

import { useState, useEffect, useContext } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { drawerWidth } from './drawer-style';
import { AppBarProps } from '@/app/lib/definitions';
import AppLogo from '../../app-logo';
import ThemeSwitcher from '../../hooks/useThemeSwitcher';
import { DashboardContext } from '../dashboard';

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

export const DashboardDrawerHeader = () => {
  const { open, setOpen } = useContext(DashboardContext);

  return (
    <AppBar position="fixed" open={open} style={{ background: '#831843' }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(true)}
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
            <ThemeSwitcher />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
