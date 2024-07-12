import Form from '@/app/ui/dashboard/awb/edit-form';
import Breadcrumbs from '@/app/ui/dashboard/breadcrumbs';
// import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { awbs, customers } from '@/app/lib/placeholder-data';
import { fetchAwbById, fetchCorporateCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Edit Page',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  // const parsedId = parseInt(id);
  // const [airWayBill, customers] = await Promise.all([fetchAwbById(id), fetchCorporateCustomers(),]);
  const filteredAwb = awbs.filter((awb) => awb.id === id);
  const customerName = customers.filter(
    (customer) => customer.customer_id === filteredAwb[0].customer_id,
  );
  // console.log(filteredAwb[0], 'HERE');

  if (!filteredAwb[0]) notFound();
  const name = filteredAwb[0].customer_id ? customerName[0].name : 'AWB';

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: name, href: '/dashboard' },
          {
            label: 'Edit Air Way Bill',
            href: `/dashboard/awb/edit/${id}`,
            active: true,
          },
        ]}
      />
      <Form awb={filteredAwb[0]} customers={customers} />
    </main>
  );
}
