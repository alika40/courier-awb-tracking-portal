'use client';

import { Add } from '@mui/icons-material';
import Link from 'next/link';

export function CreateAwb() {
  return (
    <Link
      href="/dashboard/airWayBill/create"
      className="flex h-10 items-center rounded-lg bg-pink-900 px-4 text-sm font-medium text-white transition-colors hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400"
    >
      <span className="hidden md:block">Create AWB</span>{' '}
      <Add className="h-5 text-pink-900 md:ml-4" />
    </Link>
  );
}
