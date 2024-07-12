import Form from '@/app/ui/dashboard/awb/create-form';
import Breadcrumbs from '@/app/ui/dashboard/breadcrumbs';
// import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
import { customers } from '@/app/lib/placeholder-data';

export const metadata: Metadata = {
  title: 'Create AWB',
};

export default async function Page() {
  // const customers = await fetchCustomers();
  // throw new Error('There is an error!');

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'AWB', href: '/dashboard' },
          {
            label: 'Create Air Way Bill',
            href: '/dashboard/awb/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
