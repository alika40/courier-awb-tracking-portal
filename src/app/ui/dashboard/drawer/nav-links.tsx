'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Dispatcher } from '@/app/lib/definitions';
import clsx from 'clsx';
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
          // onClick={() => setOpen(false)}
          // target={item.target}
          // onMouseOver={() => setOpen(true)}
          // onMouseOut={() => setOpen(false)}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              // background: pathname === item.href ? '#fce7f3' : '',
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
              // className="text-blue-600 md:font-black"
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
