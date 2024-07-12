import Breadcrumbs from '@/app/ui/dashboard/breadcrumbs';
// import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { awbs, customers } from '@/app/lib/placeholder-data';
import { AwbTable } from '@/app/ui/dashboard/tables/awb-table';
import { Suspense } from 'react';
import { AWBsTableSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';

export const metadata: Metadata = {
  title: 'Edit Page',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  // const [airWayBill, customers] = await Promise.all([fetchInvoiceById(id),fetchCustomers(),]);
  const customer = customers.filter((customer) => customer.customer_id === id);
  const filterdAwbs = awbs.filter(
    (awb) => awb && awb.customer_id === customer[0].customer_id,
  );

  if (!customer[0]) notFound();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customer', href: '/dashboard' },
          {
            label: `${customer[0].name}`,
            href: `/dashboard/customers/details/${id}`,
            active: true,
          },
        ]}
      />
      {/* <AwbTable awbs={filterdAwbs} /> */}
      {/* <AwbTable /> */}
      <div className="flex flex-col items-center justify-center gap-y-7 divide-y-4 divide-dotted divide-gray-300 md:gap-y-14">
        <div className="mx-auto w-full">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>
        <div className="hidden w-full justify-center pt-14 md:flex">
          <div>
            <Suspense
              key={'query' + 'currentPage'}
              fallback={<AWBsTableSkeleton />}
            >
              <AwbTable />
            </Suspense>
          </div>
        </div>
        <div className="block w-full pt-4 text-center font-semibold md:hidden">
          Login to PC for better User Experience{' '}
        </div>
      </div>
    </main>
  );
}
