import {
  fetchCustomersPages,
  fetchUsers,
  fetchFilteredCustomers,
} from '@/app/lib/data';
import CardWrapperCustomers from '@/app/ui/dashboard/cards';
import PaginationCustomer from '@/app/ui/dashboard/paginations/pagination-customer';
import { CustomersTable } from '@/app/ui/dashboard/tables/customer-table';
import { UsersTable } from '@/app/ui/dashboard/tables/user-table';
import { lusitana } from '@/app/ui/fonts';
import {
  CardsSkeleton,
  UsersTableSkeleton,
  CustomersTableSkeleton,
} from '@/app/ui/skeletons';
import { LaptopMac } from '@mui/icons-material';
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

  const totalPages = await fetchCustomersPages(query);
  //  const [totalPages, users, customers] = await Promise.all([
  //    fetchCustomersPages(query),
  //    fetchUsers(),
  //    fetchFilteredCustomers(query, currentPage),
  //  ]);

  return (
    <>
      <div className="mb-5 mt-4 flex justify-start md:mb-10">
        <h1
          className={clsx(
            lusitana.className,
            'flex text-xl font-black uppercase text-pink-900 underline decoration-pink-900 decoration-dotted decoration-2 underline-offset-2 md:text-2xl md:decoration-8 md:underline-offset-8',
          )}
        >
          DASHBOARD
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-7 divide-y-4 divide-dotted divide-gray-300 dark:divide-pink-900 md:gap-y-14">
        <div className="mx-auto w-full">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapperCustomers />
          </Suspense>
        </div>
        <div className="mx-auto w-full justify-center pt-14">
          <Suspense fallback={<UsersTableSkeleton />}>
            <UsersTable />
          </Suspense>
        </div>
        <div className="mx-auto w-full justify-center pt-14">
          <div>
            <Suspense
              key={query + currentPage}
              fallback={<CustomersTableSkeleton />}
            >
              <CustomersTable query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-2 flex w-full justify-center">
              <PaginationCustomer totalPages={totalPages} />
            </div>
          </div>
        </div>
        <div className="mt-4 flex w-full flex-col items-center justify-center pt-4 font-semibold text-gray-950 dark:text-white md:hidden">
          <span className="text-pink-900 [&>svg]:h-28 [&>svg]:w-28">
            <LaptopMac />
          </span>
          <p>Login to PC for better User Experience</p>
        </div>
      </div>
    </>
  );
};

export default Page;
