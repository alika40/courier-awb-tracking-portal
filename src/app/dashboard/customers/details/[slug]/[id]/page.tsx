import Breadcrumbs from '@/app/ui/dashboard/breadcrumbs';
// import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { AwbTable } from '@/app/ui/dashboard/tables/awb-table';
import { Suspense } from 'react';
import { AWBsTableSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import { CardWrapper } from '@/app/ui/dashboard/cards';
import { fetchAwbPages } from '@/app/lib/data';
import PaginationAWB from '@/app/ui/dashboard/paginations/pagination-awb';

export const metadata: Metadata = {
  title: 'Awbs Page',
};

export default async function Page({
  params,
}: {
  params: {
    slug: string;
    id: string;
    query?: string;
    page?: string;
  };
}) {
  const { slug, id } = params;
  const query = params?.query || '';
  const currentPage = Number(params?.page) || 1;

  const stringArr = slug.split('%20');
  let escapedSlug = '';
  for (const str of stringArr) {
    escapedSlug += ' ' + str;
  }

  const totalPages = await fetchAwbPages(id);

  if (!(id && slug)) notFound();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customer', href: '/dashboard' },
          {
            label: `${escapedSlug}`,
            href: `/dashboard/customers/details/${slug}/${id}`,
            active: true,
          },
        ]}
      />
      <div className="flex flex-col items-center justify-center gap-y-7 divide-y-4 divide-dotted divide-gray-300 dark:divide-pink-900 md:gap-y-14">
        <div className="mx-auto w-full">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper customer_id={id} />
          </Suspense>
        </div>
        <div className="hidden w-full justify-center pt-14 md:block">
          <div>
            <Suspense
              key={query + currentPage}
              fallback={<AWBsTableSkeleton />}
            >
              <AwbTable
                customer_id={id}
                query={query}
                currentPage={currentPage}
              />
            </Suspense>
            <div className="mt-2 flex w-full justify-center">
              <PaginationAWB totalPages={totalPages} />
            </div>
          </div>
        </div>
        <div className="block w-full pt-4 text-center font-semibold md:hidden">
          Login to PC for better User Experience{' '}
        </div>
      </div>
    </main>
  );
}
