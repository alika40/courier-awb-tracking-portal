'use client';

import SearchIcon from '@mui/icons-material/Search';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { Button } from '../button';
import clsx from 'clsx';
import { SearchState } from '@/app/lib/definitions';

export const metadata: Metadata = {
  title: 'Search For Air Way Bill',
};

export default function TrackAwbForm({
  state,
  dispatch,
  bg_image_for,
}: {
  state: SearchState;
  dispatch?: (payload: FormData) => void;
  bg_image_for: string;
}) {
  return (
    <div
      className={`flex h-screen flex-col items-center justify-center bg-cover bg-fixed md:h-screen
        ${clsx(
          bg_image_for === 'DASHBOARD'
            ? "bg-white bg-[url('/background-network.jpg')] dark:bg-black"
            : "bg-[url('/delivery_man.jpg')]",
        )}
        `}
    >
      <div
        className={`stroke rounded-sm bg-black bg-opacity-50 p-2 md:rounded-md`}
      >
        <h1
          className={`${lusitana.className} text-2xl font-bold text-pink-600 md:text-6xl md:font-black`}
        >
          Track Your Air Way Bill
        </h1>
      </div>

      <form
        action={dispatch}
        className="mt-4 flex w-[80%] flex-col items-center justify-between md:mt-20 md:w-[50%]"
      >
        <div className="relative flex w-full flex-1 flex-shrink-0">
          <div className="w-full">
            <label htmlFor="awb_num" className="sr-only">
              Search
            </label>
            <input
              id="awb_num"
              name="awb_num"
              className="placeholder:text-1xl peer block h-10 w-full rounded-l-md border border-pink-900 py-[9px] pl-10 text-sm ring-pink-900 placeholder:italic placeholder:text-gray-500 focus:border-pink-900 focus:bg-opacity-50 focus:ring-pink-900 dark:bg-zinc-900 dark:placeholder:text-gray-300 md:h-12 md:rounded-l-lg md:text-2xl md:placeholder:text-2xl"
              placeholder="0001234"
              type="text"
            />

            <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-pink-900 dark:text-gray-300" />
          </div>
          <Button
            type="submit"
            pendingText="Loading..."
            className="flex h-10 items-center rounded-r-md px-2 md:h-12 md:rounded-r-lg md:px-10"
          >
            <div>
              <span className="text-sm md:text-2xl">Track</span>
              {/* <Add className="h-5 md:ml-4" /> */}
            </div>
          </Button>
        </div>
        <div id="awb-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.awb_num &&
            state.errors.awb_num.map((error: string) => (
              <p
                className="mt-2 rounded-md bg-black bg-opacity-50 p-2 text-sm text-red-500 md:text-base"
                key={error}
              >
                {error}
              </p>
            ))}
        </div>
      </form>
    </div>
  );
}
