'use client';

import { useTheme } from '@mui/material/styles';
import {
  ChevronLeft,
  ChevronRight,
  Logout,
  AddBusiness,
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
  // {
  //   name: 'Customers',
  //   href: '/dashboard/customers',
  //   target: '_self',
  //   icon: <AddBusiness sx={{ fontSize: '20px' }} />,
  //   color: '#831843',
  // },
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
interface DrawerStatePlus extends DrawerState {
  actionDispatch?: () => void;
}

export const DashboardDrawerContent = ({
  open,
  setOpen,
  actionDispatch,
}: DrawerStatePlus) => {
  const theme = useTheme();
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ fontSize: '20px' }}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List className="w-full rounded-lg bg-white">
          <div className="mb-2 flex flex-col items-center bg-pink-900 p-4">
            <AppLogo className="text-2xl md:text-8xl">
              <h2
                className={`whitespace-nowrap text-2xl font-bold text-white md:text-8xl`}
              >
                <span className="text-slate-400">e</span>
                <span className=" text-pink-600">X</span>
                <span className="text-slate-400">L</span>
              </h2>
              <h3
                className={`${lusitana.className} -mt-[6px] text-center text-sm font-semibold text-slate-400 md:text-base`}
              >
                XL Express & Logistics LTD.
              </h3>
            </AppLogo>
          </div>
          {linkItems.map((item, index) => (
            <NavLinks
              key={item.name}
              item={item}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </List>

        <div className="h-auto w-full grow rounded-md bg-white"></div>

        <form action={actionDispatch}>
          <button
            // onMouseOver={() => setOpen(true)}
            // onMouseOut={handleDrawerClose}
            className="text-medium ml-2 flex h-[48px] w-full grow items-center justify-start gap-2 rounded-l-md bg-gray-100 p-3 font-medium text-gray-600 hover:bg-pink-50 hover:text-pink-900 md:h-[56px] md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <Logout
              sx={{ fontSize: '20px' }}
              className="ml-3 mr-5 w-6 text-pink-900"
            />
            <div className="font-semibold">Sign Out</div>
          </button>
        </form>
      </Drawer>
    </>
  );
};
