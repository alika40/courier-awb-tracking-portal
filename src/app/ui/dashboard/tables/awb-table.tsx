'use client';

// import Image from 'next/image';
import { UpdateAwb, DeleteAwb } from '@/app/ui/dashboard/buttons';
import { awbs } from '@/app/lib/placeholder-data';
import { STATUS } from '@/app/lib/constants';
import { Schedule, Done, LocalShipping } from '@mui/icons-material';
import clsx from 'clsx';
import SearchAWB from '../searches/search-awb';
import { roboto } from '../../fonts';
import { TD, TH } from './table-extensions';
import { AWBTable } from '@/app/lib/definitions';
import { formatDateToLocal, formatTimeToLocal } from '@/app/lib/utils';

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
          <Schedule sx={{ fontSize: '16px' }} className="ml-1 text-slate-700" />
        </>
      ) : null}
      {status === STATUS.PENDING ? (
        <>
          {STATUS.PENDING}
          <LocalShipping
            sx={{ fontSize: '16px' }}
            className="ml-1 text-white"
          />
        </>
      ) : null}
      {status === STATUS.DELIVERED ? (
        <>
          {STATUS.DELIVERED}
          <Done sx={{ fontSize: '16px' }} className="ml-1 text-white" />
        </>
      ) : null}
    </span>
  );
};

export async function AwbTable({
  awbs,
  customer_id,
  query,
  currentPage,
}: {
  awbs: AWBTable[];
  customer_id: string;
  query: string;
  currentPage: number;
}) {
  // const [query, setQueryTerm] = useState<string>('');
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  // const filterdAwbs = query
  //   ? awbs
  //       .filter((awb) => !awb.customer_id)
  //       .filter((awb) => (!query ? awb : awb.awb_num === query))
  //   : awbs;

  return (
    <>
      <div className="flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 dark:bg-zinc-900 md:pt-0">
            <table className="hidden min-w-full md:table">
              <caption className="caption-top">
                <div className="mb-4 mt-4 flex w-full justify-center">
                  <h3
                    className={clsx(
                      roboto.className,
                      'flex text-lg font-bold text-gray-500 underline underline-offset-4 dark:text-slate-400 md:text-xl',
                    )}
                  >
                    Table 2: Individual Customers' AWBs
                  </h3>
                </div>
                <div className="mb-2 flex w-full justify-center md:w-[50%]">
                  <SearchAWB placeholder="Search for AWB, Status, ..." />
                  {/* <SearchAWB
                    handleSearchTerm={setQueryTerm}
                    queryTerm={query}
                  /> */}
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
                  <TH className="border-r">
                    <div>Status &</div>
                    <div>Due date</div>
                  </TH>
                  {/* <TH className="border-r">Remark</TH> */}
                  <TH className="border-r">Receiver</TH>
                  <TH className="border-r">Delivered To</TH>
                  <TH className="border-r">
                    <div>Delivery</div>
                    <div> Date & Time</div>
                  </TH>
                  {/* <TH className="border-r">Delivery Time</TH> */}
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
                    className="w-full border-b-2 bg-white py-3 text-sm odd:bg-pink-50 last-of-type:border-none dark:border-zinc-900 dark:bg-zinc-800 dark:odd:bg-opacity-50 [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    {/* <TD className="border-r sm:pl-6">{awb.id}</TD> */}
                    <TD className="border-r-2 dark:border-zinc-900">
                      {awb.sender}
                    </TD>
                    <TD className="border-r-2 dark:border-zinc-900">
                      {awb.item_description}
                    </TD>
                    <TD className="border-r-2 dark:border-zinc-900">
                      {awb.receiver_address}
                    </TD>
                    <TD className="border-r-2 dark:border-zinc-900">
                      {awb.destination}
                    </TD>
                    <TD className="border-r-2 dark:border-zinc-900">
                      {awb.awb_num}
                    </TD>
                    <TD className="border-r-2 dark:border-zinc-900">
                      {formatDateToLocal(awb.created_at)}
                    </TD>
                    <TD className="border-r-2 dark:border-zinc-900">
                      <AwbStatus status={awb.status} />
                      <div className="mt-1 font-light text-gray-700 dark:text-white">
                        {formatDateToLocal(awb.due_date)}
                      </div>
                    </TD>
                    {/* <td className="text-md border-r px-3 py-3 font-bold">
                    {awb.remark}
                  </td> */}
                    <TD className="border-r-2 dark:border-zinc-900">
                      {awb.receiver}
                    </TD>
                    <TD className="border-r-2 dark:border-zinc-900">
                      {awb.delivered_to && awb.delivered_to}
                    </TD>
                    <TD className="border-r-2 dark:border-zinc-900">
                      <div>
                        {awb.delivery_date
                          ? formatDateToLocal(awb.delivery_date)
                          : ''}
                      </div>
                      <div>
                        {awb.delivery_time
                          ? formatTimeToLocal(awb.delivery_time)
                          : ''}
                      </div>
                    </TD>
                    <TD>{''}</TD>
                    <TD>
                      <div className="flex justify-start gap-3">
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
      </div>
    </>
  );
}
