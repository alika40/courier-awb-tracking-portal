'use client';

import { CustomerField, AWBInputData } from '@/app/lib/definitions';
import { updateAwb } from '@/app/lib/actions/dashboard/actionManager';
import { useFormState } from 'react-dom';
import Form from './form';
import { ACTION } from '@/app/lib/constants';

export default function EditAwbForm({
  awb,
  customers,
}: {
  awb: AWBInputData;
  customers: CustomerField[];
}) {
  // const updateInvoiceWithId = updateInvoice.bind(null, airWayBill.id);
  // const [state, dispatch] = useFormState(updateInvoiceWithId, initialState);
  const updateAwbWithId = updateAwb.bind(null, awb.id);
  const [state, dispatch] = useFormState(updateAwbWithId, undefined);

  return (
    <Form
      awb={awb}
      customers={customers}
      state={state}
      dispatch={dispatch}
      btnText={ACTION.EDIT}
    />
  );
}
