'use client';

import { CustomerField } from '@/app/lib/definitions';
import { createAwb } from '@/app/lib/actions/dashboard/actionManager';
import { useFormState } from 'react-dom';
import Form from './form';
import { ACTION } from '@/app/lib/constants';

export default function CreateAwbForm({
  customers,
}: {
  customers: CustomerField[];
}) {
  const [state, dispatch] = useFormState(createAwb, undefined);

  return (
    <Form
      customers={customers}
      state={state}
      dispatch={dispatch}
      btnText={ACTION.CREATE}
    />
  );
}
