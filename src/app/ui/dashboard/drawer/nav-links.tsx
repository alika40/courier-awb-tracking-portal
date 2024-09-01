'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import clsx from 'clsx';
import { useContext } from 'react';
import { DashboardContext } from '../dashboard';

type NavItems = {
  item: {
    name: string;
    href: string;
    // target: string;
    icon: JSX.Element;
    color: string;
  };
  // open: boolean;
  // setOpen: Dispatcher<boolean>;
};

export function NavLinks({ item }: NavItems) {
  const { open, setOpen } = useContext(DashboardContext);
  const pathname = usePathname();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  // console.log(matches);

  return (
    <>
      <ListItem
        className={`mb-2 ml-2 rounded-l-md hover:bg-pink-50 dark:hover:bg-pink-300 
          ${clsx(
            pathname === item.href
              ? 'bg-pink-300'
              : 'bg-gray-100 dark:bg-zinc-900',
          )}`}
        disablePadding
        sx={{ display: 'block' }}
      >
        <Link
          href={item.href}
          onClick={() => {
            if (matches) setOpen(false);
          }}
          // target={item.target}
          // onMouseOver={() => setOpen(true)}
          // onMouseOut={() => setOpen(false)}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: item.color,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.name}
              sx={{
                opacity: open ? 1 : 0,
                // fontStyle: 'italic',
                color: item.color,
                fontWeight: 'bold',
              }}
            />
          </ListItemButton>
        </Link>
      </ListItem>
    </>
  );
}
