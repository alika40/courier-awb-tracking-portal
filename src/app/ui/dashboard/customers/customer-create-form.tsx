'use client';

import { createCustomerAcc } from '@/app/lib/actions/dashboard/actionManager';
import { useFormState } from 'react-dom';
import { ACTION } from '@/app/lib/constants';
import CustomerForm from './customer-form';

export default function CreateCustomerForm() {
  const [state, dispatch] = useFormState(createCustomerAcc, undefined);

  return (
    <CustomerForm
      //   customer={customer}
      state={state}
      dispatch={dispatch}
      btnText={`${ACTION.CREATE}`}
    />
  );
}
