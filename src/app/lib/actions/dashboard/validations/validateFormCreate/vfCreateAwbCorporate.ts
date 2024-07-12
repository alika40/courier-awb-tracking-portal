import { z } from 'zod';
import { ERROR_MESSAGE } from '../../../../constants';
import { FormSchema } from '../validateForm';

// Use Zod to update the expected types
const FormSchemaStatusDocumented = FormSchema.omit({
  id: true,
  issue_date: true,
});

export const vfCreateAwbStatusDocumented = (formData: FormData) => {
  // Validate form using Zod
  const validatedFields = FormSchemaStatusDocumented.safeParse({
    customer_id: formData.get('customer_id'),
    awb_num: formData.get('awb_num'),
    sender: formData.get('sender'),
    receiver: formData.get('receiver'),
    receiver_address: formData.get('receiver_address'),
    destination: formData.get('destination'),
    item_description: formData.get('item_description'),
    due_date: formData.get('due_date'),
    status: formData.get('status'),
    weight: formData.get('weight'),
  });

  // console.log(validatedFields.error.flatten().fieldErrors);

  return validatedFields;
};

// Extend form schema to include more form items when 'In Transit/Pending'radio button is checked
const FormSchemaSP = FormSchema.extend({
  remark: z.string().optional(),
});

// Use Zod to update the expected types
const FormSchemaStatusPending = FormSchemaSP.omit({
  id: true,
  issue_date: true,
});

export const vfCreateAwbStatusPending = (formData: FormData) => {
  // Validate form using Zod
  const validatedFields = FormSchemaStatusPending.safeParse({
    customer_id: formData.get('customer_id'),
    awb_num: formData.get('awb_num'),
    sender: formData.get('sender'),
    receiver: formData.get('receiver'),
    receiver_address: formData.get('receiver_address'),
    destination: formData.get('destination'),
    item_description: formData.get('item_description'),
    due_date: formData.get('due_date'),
    status: formData.get('status'),
    weight: formData.get('weight'),
    remark: formData.get('remark'),
  });

  return validatedFields;
};

// Extend form schema to include more form items when 'Delivered'radio button is checked
const FormSchemaSD = FormSchema.extend({
  delivered_to: z.string().refine((value) => value.trim() !== '', {
    message: ERROR_MESSAGE.delivered_to,
  }),
  delivery_date: z /*.coerce*/
    .string()
    .refine((value) => value.trim() !== '', {
      message: ERROR_MESSAGE.delivery_date,
    }),
  delivery_time: z.string().refine((value) => value.trim() !== '', {
    message: ERROR_MESSAGE.delivery_time,
  }),
});

// Use Zod to update the expected types
const FormSchemaStatusDelivered = FormSchemaSD.omit({
  id: true,
  issue_date: true,
});

export const vfCreateAwbStatusDelivered = (formData: FormData) => {
  // Validate form using Zod
  const validatedFields = FormSchemaStatusDelivered.safeParse({
    customer_id: formData.get('customer_id'),
    awb_num: formData.get('awb_num'),
    sender: formData.get('sender'),
    receiver: formData.get('receiver'),
    receiver_address: formData.get('receiver_address'),
    destination: formData.get('destination'),
    item_description: formData.get('item_description'),
    due_date: formData.get('due_date'),
    status: formData.get('status'),
    weight: formData.get('weight'),
    delivered_to: formData.get('delivered_to'),
    delivery_date: formData.get('delivery_date'),
    delivery_time: formData.get('delivery_time'),
  });

  return validatedFields;
};
