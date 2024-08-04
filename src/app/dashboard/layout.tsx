'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from '../lib/definitions';
import { DashboardDrawer } from '../ui/dashboard/drawer/drawer';
import {
  DashboardDrawerHeader,
  DrawerHeader,
} from '../ui/dashboard/drawer/Drawer-header';
import Footer from '../ui/footer';

export default function DashboardLayout({ children }: ReactNode) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <DashboardDrawerHeader open={open} setOpen={setOpen} />
        <DashboardDrawer open={open} setOpen={setOpen} />
        <Box
          component="div"
          className="flex min-h-screen w-full flex-col bg-white dark:bg-black"
        >
          <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
            <DrawerHeader />
            <div className="mb-10 mt-5 px-4 md:mb-20 md:mt-10 md:px-10">
              {children}
            </div>
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}
