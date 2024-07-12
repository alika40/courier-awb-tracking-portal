'use client';

// import Image from 'next/image';
import { UpdateAwb, DeleteAwb } from '@/app/ui/dashboard/buttons';
import { awbs } from '@/app/lib/placeholder-data';
import { STATUS } from '@/app/lib/constants';
import { Schedule, Done, LocalShipping } from '@mui/icons-material';
import clsx from 'clsx';
import SearchAWB from '../searches/search-awb';
import PaginationAWB from '../paginations/pagination-awb';
import { roboto } from '../../fonts';
import { useState } from 'react';
import {
  fetchAwbPages,
  fetchFilteredAwbs,
  fetchFilteredCustomers,
} from '@/app/lib/data';
import { TD, TH } from './table-extensions';

const AwbStatus = ({ status }: { status: string }) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-slate-300 text-slate-700': status === STATUS.DOCUMENTED,
          'bg-rose-500 text-white': status === STATUS.PENDING,
          'bg-green-500 text-white': status === STATUS.DELIVERED,
        },
      )}
    >
      {status === STATUS.DOCUMENTED ? (
        <>
          {STATUS.DOCUMENTED}
          <Schedule
            sx={{ fontSize: '20px' }}
            className="ml-1 w-4 text-slate-700"
          />
        </>
      ) : null}
      {status === STATUS.PENDING ? (
        <>
          {STATUS.PENDING}
          <LocalShipping
            sx={{ fontSize: '20px' }}
            className="ml-1 w-4 text-white"
          />
        </>
      ) : null}
      {status === STATUS.DELIVERED ? (
        <>
          {STATUS.DELIVERED}
          <Done sx={{ fontSize: '20px' }} className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
};

export async function AwbTable(/*{
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}*/) {
  const [query, setQueryTerm] = useState<string>('');
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // const totalPages = await fetchAwbPages(query);
  // const awbs = await fetchFilteredAwbs(query, currentPage);

  // const filterdAwbs = query
  //   ? awbs
  //       .filter((awb) => !awb.customer_id)
  //       .filter((awb) => (!query ? awb : awb.awb_num === query))
  //   : awbs;

  return (
    <>
      <div className="rounded-lg bg-gray-100 p-2 md:max-w-[1000px]">
        <div className=" overflow-x-auto overflow-y-auto">
          {/* max-h-[600px] */}
          <table className="relative hidden min-w-full md:table">
            <caption className="caption-top">
              <div className="mb-4 mt-4 flex w-full justify-center">
                <h3
                  className={clsx(
                    roboto.className,
                    'flex text-lg font-bold text-gray-500 underline underline-offset-4 md:text-xl',
                  )}
                >
                  Table 2: Individual Customers' AWBs
                </h3>
              </div>
              <div className="mb-2 flex w-full justify-center md:w-[50%]">
                <SearchAWB handleSearchTerm={setQueryTerm} queryTerm={query} />
              </div>
            </caption>
            <thead className="sticky top-0 rounded-lg bg-pink-300 text-left text-sm font-normal">
              <tr className="[&:first-child>th:first-child]:rounded-tl-lg [&:first-child>th:last-child]:rounded-tr-lg">
                <TH className="border-r">Sender</TH>
                <TH className="border-r">Item Description</TH>
                <TH className="border-r">Receiver's Address</TH>
                <TH className="border-r">Destination</TH>
                <TH className="border-r">AWB No.</TH>
                <TH className="border-r">Issued Date</TH>
                <TH className="border-r">Status</TH>
                {/* <TH className="border-r">Remark</TH> */}
                <TH className="border-r">Receiver</TH>
                <TH className="border-r">Delivered To</TH>
                <TH className="border-r">Delivery Date</TH>
                <TH className="border-r">Delivery Time</TH>
                <TH className="relative">
                  <span className="sr-only">Edit</span>
                </TH>
                <TH className="relative">
                  <span>Actions</span>
                </TH>
              </tr>
            </thead>
            <tbody className="z-0">
              {awbs?.map((awb) => (
                <tr
                  key={awb.id}
                  className="w-full border-b bg-white py-3 text-sm odd:bg-pink-50 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  {/* <TD className="border-r sm:pl-6">{awb.id}</TD> */}
                  <TD className="border-r">{awb.sender}</TD>
                  <TD className="border-r">{awb.item_description}</TD>
                  <TD className="border-r">{awb.receiver_address}</TD>
                  <TD className="border-r">{awb.destination}</TD>
                  <TD className="border-r">{awb.awb_num}</TD>
                  <TD className="border-r">
                    {/* formatDateToLocal(awb.issue_date) */ awb.created_at}
                  </TD>
                  <TD className="border-r">
                    <AwbStatus status={awb.status} />
                  </TD>
                  {/* <td className="text-md border-r px-3 py-3 font-bold">
                    {awb.remark}
                  </td> */}
                  <TD className="border-r">{awb.receiver}</TD>
                  <TD className="border-r">{awb.delivered_to}</TD>
                  <TD className="border-r">
                    {/* formatDateToLocal(awb.issue_date) */ awb.delivery_date}
                  </TD>
                  <TD className="border-r">{awb.delivery_time}</TD>
                  <TD>{''}</TD>
                  <TD>
                    <div className="flex justify-end gap-3">
                      <UpdateAwb id={awb.id} />
                      <DeleteAwb id={awb.id} />
                    </div>
                  </TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-2 flex w-full justify-center">
        <PaginationAWB totalPages={100} />
      </div>
    </>
  );
}
