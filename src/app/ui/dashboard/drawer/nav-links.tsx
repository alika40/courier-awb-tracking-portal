'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Dispatcher } from '@/app/lib/definitions';
// import Divider from '@mui/material/Divider';
// import { lusitana, roboto } from '../../fonts';

type NavItems = {
  item: {
    name: string;
    href: string;
    // target: string;
    icon: JSX.Element;
    color: string;
  };
  open: boolean;
  setOpen: Dispatcher<boolean>;
};

export function NavLinks({ item, open, setOpen }: NavItems) {
  const pathname = usePathname();

  return (
    <>
      <ListItem
        className="mb-2 ml-2 rounded-l-md bg-gray-100 hover:bg-pink-50"
        disablePadding
        sx={{ display: 'block' }}
      >
        <Link
          href={item.href}
          // target={item.target}
          // onMouseOver={() => setOpen(true)}
          // onMouseOut={() => setOpen(false)}
        >
          <ListItemButton
            // className="hover:text-pink-900"
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              background: pathname === item.href ? '#fce7f3' : '',
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
                // fontStyle: "italic",
                color: pathname === item.href ? item.color : '',
              }}
            />
          </ListItemButton>
        </Link>
      </ListItem>
    </>
  );
}

/*
export const SignOutButton = ({ open }: { open: boolean }) => (
  <>
    <ListItem
      className="hover:bg-pink-50"
      disablePadding
      sx={{ display: 'block' }}
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
            color: '#831843',
          }}
        >
          <Logout
            sx={{ fontSize: '20px' }}
            className="mr-6 w-6 text-pink-900"
          />
        </ListItemIcon>
        <ListItemText
          className="hover:text-pink-900"
          primary="Sign Out"
          sx={{
            opacity: open ? 1 : 0,
          }}
        />
      </ListItemButton>
    </ListItem>
  </>
);*/
