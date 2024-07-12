import { fetchAwbPages } from '@/app/lib/data';
import CardWrapper from '@/app/ui/dashboard/cards';
import PaginationCustomer from '@/app/ui/dashboard/paginations/pagination-customer';
import { CustomersTable } from '@/app/ui/dashboard/tables/customer-table';
import { lusitana } from '@/app/ui/fonts';
import { CardsSkeleton, CustomersTableSkeleton } from '@/app/ui/skeletons';
import clsx from 'clsx';
import { Suspense } from 'react';

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  // const totalPages = await fetchAwbPages(query);
  return (
    <>
      <div className="mb-5 mt-4 flex justify-start md:mb-10">
        <h1
          className={clsx(
            lusitana.className,
            'flex text-xl font-black text-pink-900 underline underline-offset-8 md:text-2xl',
          )}
        >
          DASHBOARD
        </h1>
      </div>
      {/* <DashboardContents /> */}

      <div className="flex flex-col items-center justify-center gap-y-7 divide-y-4 divide-dotted divide-gray-300 md:gap-y-14">
        <div className="mx-auto w-full">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>
        <div className="hidden w-full justify-center pt-14 md:flex">
          <div>
            <Suspense
              key={query + currentPage}
              fallback={<CustomersTableSkeleton />}
            >
              <CustomersTable query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-2 flex w-full justify-center">
              <PaginationCustomer totalPages={120} />
            </div>
          </div>
        </div>
        {/* <div className="hidden w-full justify-center pt-14 md:flex">
          <div>
            <Suspense
              key={'query' + 'currentPage'}
              fallback={<AWBsTableSkeleton />}
            >
              <AwbTable />
            </Suspense>
          </div>
        </div> */}
        <div className="block w-full pt-4 text-center font-semibold md:hidden">
          Login to PC for better User Experience
        </div>
      </div>
    </>
  );
};

export default Page;
