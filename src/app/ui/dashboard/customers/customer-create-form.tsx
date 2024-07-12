'use client';

// import { Customer, CustomerField } from '@/app/lib/models';
import { CreateCustomerAcc } from '@/app/lib/actions/dashboard/actionManager';
import { useFormState } from 'react-dom';
import { ACTION } from '@/app/lib/constants';
import CustomerForm from './customer-form';

export default function CreateCustomerForm(/*{
  customer,
}: {
  customer: Customer;
}*/) {
  const [state, dispatch] = useFormState(CreateCustomerAcc, undefined);

  return (
    <CustomerForm
      //   customer={customer}
      state={state}
      dispatch={dispatch}
      btnText={`${ACTION.CREATE}`}
    />
  );
}
