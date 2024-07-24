import {
  deleteAwb,
  deleteCustomer,
} from '@/app/lib/actions/dashboard/actionManager';
import { Edit, Delete, VisibilityRounded } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import Link from 'next/link';
// import { deleteInvoice } from '@/app/lib/actions';

export function UpdateCustomer({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/customers/edit/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <Tooltip title="Update Customer" placement="bottom" arrow>
        <Edit sx={{ fontSize: '20px' }} className="w-4 text-pink-900" />
      </Tooltip>
    </Link>
  );
}

export function ViewCustomerDetails({
  slug,
  id,
}: {
  slug: string;
  id: string;
}) {
  return (
    <Link
      href={`/dashboard/customers/details/${slug}/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <Tooltip title="See Details" placement="bottom" arrow>
        <VisibilityRounded
          sx={{ fontSize: '20px' }}
          className="w-4 text-pink-900"
        />
      </Tooltip>
    </Link>
  );
}

export function DeleteCustomer({ id }: { id: string }) {
  const deleteCustomerWithId = deleteCustomer.bind(null, id);
  return (
    <form action={deleteCustomerWithId}>
      <Tooltip title="Delete" placement="bottom" arrow>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <Delete sx={{ fontSize: '20px' }} className="w-4 text-pink-900" />
        </button>
      </Tooltip>
    </form>
  );
}

export function UpdateAwb({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/awb/edit/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <Tooltip title="Update AWB" placement="bottom" arrow>
        <Edit sx={{ fontSize: '20px' }} className="w-4 text-pink-900" />
      </Tooltip>
    </Link>
  );
}

export function DeleteAwb({ id }: { id: string }) {
  const deleteAwbWithId = deleteAwb.bind(null, id);
  return (
    <form action={deleteAwbWithId}>
      <Tooltip title="Delete" placement="bottom" arrow>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <Delete sx={{ fontSize: '20px' }} className="w-4 text-pink-900" />
        </button>
      </Tooltip>
    </form>
  );
}
