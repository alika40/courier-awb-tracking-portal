'use client';

import { Customer } from '@/app/lib/definitions';
import { CreateCustomerAccUpdate } from '@/app/lib/actions/dashboard/actionManager';
import { useFormState } from 'react-dom';
import { ACTION } from '@/app/lib/constants';
import CustomerForm from './customer-form';

export default function EditCustomerForm({ customer }: { customer: Customer }) {
  // const updateInvoiceWithId = updateInvoice.bind(null, airWayBill.id);
  // const [state, dispatch] = useFormState(updateInvoiceWithId, initialState);
  const updateCustomerWithId = CreateCustomerAccUpdate.bind(
    null,
    customer.customer_id,
  );
  const [state, dispatch] = useFormState(updateCustomerWithId, undefined);

  return (
    <CustomerForm
      customer={customer}
      state={state}
      dispatch={dispatch}
      btnText={`${ACTION.EDIT}`}
    />
  );
}
