import React from 'react';
import type { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';
import './globals.css';
// import Link from 'next/link';
import { ReactNode } from './lib/definitions';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

export const metadata: Metadata = {
  title: {
    template: '%s | eXL Tracking Portal',
    default: 'eXL Tracking Portal',
  },
  description: 'Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({ children }: ReactNode) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} bg-white antialiased`}>
        {/* 
        Use the options prop to override the default cache options—for example,
        the code snippet below shows how to change the 
        CSS key to css (the default is mui): <AppRouterCacheProvider options={{ key: 'css' }}>
         */}
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
