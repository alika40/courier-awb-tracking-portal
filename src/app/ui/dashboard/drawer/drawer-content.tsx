'use client';

import { useTheme } from '@mui/material/styles';
import {
  ChevronLeft,
  ChevronRight,
  Logout,
  DashboardCustomize,
  ManageAccounts,
  Troubleshoot,
  Create,
  Home,
} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

import { Drawer, DrawerState } from './drawer-style';
import { DrawerHeader } from './Drawer-header';
import { NavLinks } from './nav-links';
import AppLogo from '../../app-logo';
import { lusitana } from '../../fonts';
import { useContext } from 'react';
import { DashboardContext } from '../dashboard';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const linkItems = [
  {
    name: 'Home',
    href: '/',
    // href: 'https://google.com',
    // target: '_blank',
    icon: <Home sx={{ fontSize: '20px' }} />,
    color: '#831843',
  },
  {
    name: 'Dashboard',
    href: '/dashboard',
    // target: '_self',
    icon: <DashboardCustomize sx={{ fontSize: '20px' }} />,
    color: '#831843',
  },
  {
    name: 'Add AWB',
    href: '/dashboard/awb/create',
    target: '_self',
    icon: <Create sx={{ fontSize: '20px' }} />,
    color: '#831843',
  },
  {
    name: 'Add Customer',
    href: '/dashboard/customers/create',
    // target: '_self',
    icon: <ManageAccounts sx={{ fontSize: '20px' }} />,
    color: '#831843',
  },
  {
    name: 'Track AWB',
    href: '/tracker',
    // target: '_self',
    icon: <Troubleshoot sx={{ fontSize: '20px' }} />,
    color: '#831843',
  },
];

export const DashboardDrawerContent = ({
  actionDispatch,
}: {
  actionDispatch?: () => void;
}) => {
  const theme = useTheme();
  const { open, setOpen } = useContext(DashboardContext);

  return (
    <Drawer variant="permanent" open={open} elevation={16}>
      <DrawerHeader className="bg-white dark:bg-black">
        <IconButton
          onClick={() => setOpen(false)}
          // onClick={handleDrawerClose}
          sx={{ fontSize: '20px' }}
          className="dark:bg-zinc-900 dark:hover:bg-pink-300"
        >
          {theme.direction === 'rtl' ? (
            <ChevronRight className="text-pink-900" />
          ) : (
            <ChevronLeft className="text-pink-900" />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <List className="w-full bg-white dark:bg-black">
        <div className="mb-2 flex h-20 flex-col items-center bg-white dark:bg-black md:h-36">
          {open ? (
            <AppLogo className="text-center text-2xl md:text-8xl">
              <h3
                className={`${lusitana.className} -mt-[6px] text-center text-sm font-semibold text-slate-400 md:text-base`}
              >
                XL Express & Logistics LTD.
              </h3>
            </AppLogo>
          ) : (
            <div className="ml-4 h-auto w-full grow rounded-l-md bg-gray-100 dark:bg-zinc-900"></div>
          )}
        </div>
        {linkItems.map((item, index) => (
          <NavLinks key={item.name} item={item} />
        ))}
      </List>

      <div className="h-auto w-full grow bg-white dark:bg-black"></div>

      <form action={actionDispatch} className="bg-white dark:bg-black">
        <button
          // onMouseOver={() => setOpen(true)}
          // onMouseOut={handleDrawerClose}
          className="text-medium ml-2 mt-4 flex h-[48px] w-full grow items-center justify-start gap-2 rounded-l-md bg-gray-100 p-3 font-medium text-pink-900 hover:bg-pink-50 dark:bg-zinc-900 dark:hover:bg-pink-400 md:h-[56px] md:flex-none md:justify-start md:p-2 md:px-3 md:font-semibold"
        >
          <Logout
            sx={{ fontSize: '20px' }}
            className="ml-3 mr-5 w-6 text-pink-900"
          />
          <div>Sign Out</div>
        </button>
      </form>
    </Drawer>
  );
};
