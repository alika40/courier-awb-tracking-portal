import { useState } from 'react';
import { Customer, CustomerState } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '../../button';
import { formatPhoneNumber } from '@/app/lib/utils';
import { ErrorState } from '../error-state';

export default function CustomerForm({
  customer,
  state,
  dispatch,
  btnText,
}: {
  customer?: Customer;
  state: CustomerState;
  dispatch?: (payload: FormData) => void;
  btnText: String;
}) {
  const initialValue = customer ? (customer.phone ? customer.phone : '') : '';
  const [phoneNum, setPhoneNum] = useState(initialValue);

  const formatPhoneNum = (value: string) => {
    setPhoneNum(() => formatPhoneNumber(value));
  };

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 dark:bg-zinc-900 dark:text-slate-400 md:p-6">
        {/* Customer Name */}
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="customer_name"
            className="mb-2 block text-sm font-bold md:text-lg"
          >
            Corporate Customer Name:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="customer_name"
                name="customer_name"
                type="text"
                defaultValue={customer && customer.name}
                placeholder="Enter Company's Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm font-medium text-gray-600 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:bg-opacity-50 focus:ring-2 focus:ring-pink-900 dark:bg-zinc-700 dark:text-slate-200 md:pl-6 md:text-lg md:font-bold md:tracking-wider"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
            {/* Manage Error Component */}
            {state?.errors?.customer_name && (
              <ErrorState inputName={state.errors.customer_name} />
            )}
          </div>
        </div>

        {/* Email Address */}
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="email_address"
            className="mb-2 block text-sm font-bold md:text-lg"
          >
            Email <span className="italic text-gray-400">(Optional):</span>
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email_address"
                name="email_address"
                type="email"
                defaultValue={customer && customer.email}
                placeholder="Enter Email Address"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm font-medium text-gray-600 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:bg-opacity-50 focus:ring-2 focus:ring-pink-900 dark:bg-zinc-700 dark:text-slate-200 md:pl-6 md:text-lg md:font-bold md:tracking-wider"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        {/* Phone Number */}
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="phone_num"
            className="mb-2 block text-sm font-bold md:text-lg"
          >
            Phone Number:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="phone_num"
                name="phone_num"
                type="tel"
                value={phoneNum}
                onChange={(e) => formatPhoneNum(e.target.value)}
                // defaultValue={customer && customer.phone}
                placeholder="080 6006 3003"
                maxLength={13}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm font-medium text-gray-600 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:bg-opacity-50 focus:ring-2 focus:ring-pink-900 dark:bg-zinc-700 dark:text-slate-200 md:pl-6 md:text-base md:font-bold md:tracking-wider"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
            {/* Manage Error Component */}
            {state?.errors?.phone_num && (
              <ErrorState inputName={state.errors.phone_num} />
            )}
          </div>
        </div>
      </div>

      <div className="mb-6 mt-12 flex justify-end gap-4">
        <Link
          href="/dashboard"
          className="flex h-10 items-center rounded-md bg-gray-100 px-4 text-sm font-medium text-gray-600 shadow-sm transition-colors hover:bg-gray-200 hover:shadow-none md:rounded-lg md:text-base md:font-bold"
        >
          Cancel
        </Link>
        <Button
          className="rounded-md md:rounded-lg md:text-base"
          type="submit"
          pendingText="Processing..."
        >
          {btnText}
        </Button>
      </div>
    </form>
  );
}
