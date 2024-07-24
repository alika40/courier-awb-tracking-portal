import Breadcrumbs from '@/app/ui/dashboard/breadcrumbs';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import EditCustomerForm from '@/app/ui/dashboard/customers/customer-edit-form';
import { fetchCustomerById } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Edit Page',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const customer = await fetchCustomerById(id);

  if (!customer) notFound();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Account', href: '/dashboard' },
          {
            label: "Edit Customer's Details",
            href: `/dashboard/awb/edit/${id}`,
            active: true,
          },
        ]}
      />
      <EditCustomerForm customer={customer} />
    </main>
  );
}
