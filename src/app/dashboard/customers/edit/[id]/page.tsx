import Breadcrumbs from '@/app/ui/dashboard/breadcrumbs';
// import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { customers } from '@/app/lib/placeholder-data';
import EditCustomerForm from '@/app/ui/dashboard/customers/customer-edit-form';

export const metadata: Metadata = {
  title: 'Edit Page',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  //   const parsedId = parseInt(id);
  // const [airWayBill, customers] = await Promise.all([fetchInvoiceById(id),fetchCustomers(),]);
  const customer = customers.filter((customer) => customer.customer_id === id);
  // console.log(filteredAwb[0], 'HERE');

  if (!customers[0]) notFound();

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
      <EditCustomerForm customer={customer[0]} />
    </main>
  );
}
