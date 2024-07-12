'use client';

import { Face2 } from '@mui/icons-material';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-slate-200 md:text-3xl">
      <Face2
        className="text-pink-900"
        sx={{
          fontSize: '48px',
        }}
      />
      <h2 className="mb-5 text-center text-slate-600 md:mt-20">
        Something went wrong!
      </h2>
      <button
        className="mt-4 rounded-md bg-pink-900 px-4 py-2 text-sm text-white transition-colors hover:bg-pink-400 md:text-lg"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
