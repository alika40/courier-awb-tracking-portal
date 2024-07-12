'use client';

import { createTheme } from '@mui/material/styles';
import { roboto } from './app/ui/fonts';

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: { main: '#e91e63', contrastText: '#fff' },
    secondary: { main: '#03a9f4', contrastText: '#fff' },
    info: { main: '#000000', contrastText: '#fff' },
    warning: { main: '#e9e9e9', contrastText: '#fff' },
  },
});

export default theme;
