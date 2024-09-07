'use client';

import { trackAwbAdmin } from '@/app/lib/actions/dashboard/actionManager';
import { useFormState } from 'react-dom';
import Form from '../form';

export default function TrackAWBFormAdmin() {
  const [state, dispatch] = useFormState(trackAwbAdmin, undefined);

  return <Form state={state} dispatch={dispatch} bg_image_for="DASHBOARD" />;
}
