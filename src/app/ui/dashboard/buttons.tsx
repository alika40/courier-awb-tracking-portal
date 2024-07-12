import { Edit, Delete, VisibilityRounded } from '@mui/icons-material';
import Link from 'next/link';
// import { deleteInvoice } from '@/app/lib/actions';

export function UpdateCustomer({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/customers/edit/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <Edit className="w-5 text-pink-900" />
    </Link>
  );
}

export function ViewCustomerDetails({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/customers/details/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <VisibilityRounded className="w-5 text-pink-900" />
    </Link>
  );
}

export function DeleteCustomer({ id }: { id: string }) {
  // const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <form>
      {' '}
      {/** action={deleteInvoiceWithId} */}
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <Delete className="w-4 text-pink-900" />
      </button>
    </form>
  );
}

export function UpdateAwb({ id }: { id: string }) {
  // console.log(id);
  return (
    <Link
      href={`/dashboard/awb/edit/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <Edit className="w-5 text-pink-900" />
    </Link>
  );
}

export function DeleteAwb({ id }: { id: string }) {
  // const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <form>
      {/* action={deleteInvoiceWithId} */}
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <Delete className="w-4 text-pink-900" />
      </button>
    </form>
  );
}
