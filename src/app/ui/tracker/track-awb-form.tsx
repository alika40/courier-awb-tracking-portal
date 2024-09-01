'use client';

import { useFormState } from 'react-dom';
import Form from './form';
import { trackAwbCustomer } from '@/app/lib/actions/tracker/actionManager';

export default function TrackAWBForm() {
  const [state, dispatch] = useFormState(trackAwbCustomer, undefined);

  return <Form state={state} dispatch={dispatch} bg_image_for="USER" />;
}
