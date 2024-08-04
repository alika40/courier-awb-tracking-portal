'use client';

import clsx from 'clsx';
import { roboto } from '../../fonts';
import SearchCustomer from '../searches/search-customer';
import { TD, TH } from './table-extensions';
// import { customers } from '@/app/lib/placeholder-data';
import {
  DeleteCustomer,
  UpdateCustomer,
  ViewCustomerDetails,
} from '../buttons';
import { BusinessRounded } from '@mui/icons-material';
import { formatDateToLocal } from '@/app/lib/utils';
import { Customer } from '@/app/lib/definitions';

export const CustomersTable = async ({
  customers,
}: {
  customers: Customer[];
}) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // console.log(query, currentPage); 'Google Inc'
  // const customers = await fetchCorporateCustomers();

  return (
    <div className="flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className=" rounded-lg bg-gray-50 p-2 dark:bg-zinc-900 md:pt-0">
          <table className="hidden min-w-full md:table">
            <caption className="caption-top">
              <div className="mb-4 mt-4 flex w-full justify-center">
                <h3
                  className={clsx(
                    roboto.className,
                    'flex text-lg font-bold text-gray-500 underline underline-offset-4 dark:text-slate-400 md:text-xl',
                  )}
                >
                  Table: Customers
                </h3>
              </div>
              <div className="mb-2 flex w-full justify-center md:w-[50%]">
                <SearchCustomer placeholder="Search for a company......" />
              </div>
            </caption>
            <thead className="sticky top-0 rounded-lg bg-pink-300 text-left text-sm font-normal">
              <tr className="[&:first-child>th:first-child]:rounded-tl-lg [&:first-child>th:last-child]:rounded-tr-lg">
                <TH className="border-r sm:pl-6">Customer</TH>
                <TH className="border-r">Email</TH>
                <TH className="border-r">Phone</TH>
                <TH className="border-r">Date Created</TH>
                <TH className="relative">
                  <span className="sr-only">Edit</span>
                </TH>
                <TH className="relative">
                  <span>Actions</span>
                </TH>
              </tr>
            </thead>
            <tbody className="z-0">
              {customers?.map((customer) => (
                <tr
                  key={customer.customer_id}
                  className="w-full border-b-2 bg-white py-3 text-sm odd:bg-pink-50 last-of-type:border-none dark:border-zinc-900 dark:bg-zinc-800 dark:odd:bg-opacity-50 [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <TD className="border-r-2 dark:border-zinc-900 sm:pl-6">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border-2 border-slate-400 bg-slate-200 p-2 dark:border-pink-900 dark:bg-black">
                        <BusinessRounded className=" text-pink-900" />
                      </span>
                      <p>{customer.name}</p>
                    </div>
                  </TD>
                  <TD className="border-r-2 dark:border-zinc-900">
                    {customer.email}
                  </TD>
                  <TD className="border-r-2 dark:border-zinc-900">
                    {customer.phone}
                  </TD>
                  <TD className="border-r-2 dark:border-zinc-900">
                    {formatDateToLocal(customer.reg_date)}
                  </TD>
                  <TD>{''}</TD>
                  <TD>
                    <div className="flex justify-end gap-3">
                      <UpdateCustomer id={customer.customer_id} />
                      <ViewCustomerDetails
                        id={customer.customer_id}
                        slug={customer.name}
                      />
                      <DeleteCustomer id={customer.customer_id} />
                    </div>
                  </TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
