import Form from '@/app/ui/dashboard/awb/edit-form';
import Breadcrumbs from '@/app/ui/dashboard/breadcrumbs';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchAwbById } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Edit AWB Page',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const { awb, customer } = await fetchAwbById(id);
  // customer: CustomerField[] = [] => An array with a single customer being returned

  if (!awb) notFound();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: customer[0].name, href: '/dashboard' },
          {
            label: 'Edit Air Way Bill',
            href: `/dashboard/awb/edit/${id}`,
            active: true,
          },
        ]}
      />
      <Form awb={awb} customers={customer} />
    </main>
  );
}
