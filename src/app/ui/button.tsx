'use client';

import { Delete } from '@mui/icons-material';
import { CircularProgress, Tooltip } from '@mui/material';
import clsx from 'clsx';
import { MouseEvent } from 'react';
import { useFormStatus } from 'react-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  pendingText: string;
}

export function Button({
  children,
  className,
  pendingText,
  ...rest
}: ButtonProps) {
  const { pending } = useFormStatus();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <button
      {...rest}
      disabled={pending}
      className={clsx(
        'flex h-10 items-center bg-pink-900 px-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-pink-500 hover:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400 active:bg-pink-200 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      onClick={handleClick}
    >
      {!pending ? (
        children
      ) : (
        <>
          <CircularProgress size={16} className="mr-2" color="inherit" />
          {pendingText}
        </>
      )}
    </button>
  );
}

export function ActionButton() {
  const status = useFormStatus();
  return (
    <Tooltip title="Delete" placement="bottom" arrow>
      <button
        disabled={status.pending}
        className="rounded-md border p-2 hover:bg-gray-100 dark:border-none dark:hover:bg-opacity-50"
      >
        <span className="sr-only">Delete</span>
        {status.pending ? (
          <CircularProgress size={16} className="w-4 text-pink-900" />
        ) : (
          <Delete sx={{ fontSize: '20px' }} className="w-4 text-pink-900" />
        )}
      </button>
    </Tooltip>
  );
}
