import { Metadata } from 'next';
import Breadcrumbs from '@/app/ui/dashboard/breadcrumbs';
import CreateCustomerForm from '@/app/ui/dashboard/customers/customer-create-form';

export const metadata: Metadata = {
  title: 'Create Customer Account',
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Account', href: '/dashboard' },
          {
            label: 'Create Corporate Account',
            href: '/dashboard/customers/create',
            active: true,
          },
        ]}
      />
      <CreateCustomerForm />
    </main>
  );
}
