import { z } from 'zod';
import { ERROR_MESSAGE, STATUS } from '../../../constants';

/* Property shared by extending the class */
export const FormSchema = z.object({
  id: z.number(),
  customer_id: z.string().refine((value) => value.trim() !== '', {
    message: ERROR_MESSAGE.customer_id,
  }),
  awb_num: z.string().refine((value) => value.trim() !== '', {
    message: ERROR_MESSAGE.awb_num,
  }),
  sender: z.string().refine((value) => value.trim() !== '', {
    message: ERROR_MESSAGE.sender,
  }),
  receiver: z.string().refine((value) => value.trim() !== '', {
    message: ERROR_MESSAGE.receiver,
  }),
  receiver_address: z.string().refine((value) => value.trim() !== '', {
    message: ERROR_MESSAGE.receiver_address,
  }),
  destination: z.string().refine((value) => value.trim() !== '', {
    message: ERROR_MESSAGE.destination,
  }),
  item_description: z.string().refine((value) => value.trim() !== '', {
    message: ERROR_MESSAGE.item_description,
  }),
  weight: z.coerce.number().gt(0, { message: ERROR_MESSAGE.weight }),
  issue_date: z.string(),
  due_date: z.coerce.string().refine((value) => value.trim() !== '', {
    message: ERROR_MESSAGE.due_date,
  }),
  status: z.enum([STATUS.DOCUMENTED, STATUS.PENDING, STATUS.DELIVERED], {
    invalid_type_error: ERROR_MESSAGE.status,
  }),
});

export type Awb = {
  customer_id: string;
  status: string;
  awb_num: string;
  sender: string;
  receiver: string;
  receiver_address: string;
  destination: string;
  item_description: string;
  weight: number;
  remark?: string;
  due_date: string;
  delivered_to?: string;
  delivery_date?: string;
  delivery_time?: string;
};

//*******************************************************************START */
// For AWB search form
const FormTrackSchema = z.object({
  awb_num: z.string().refine((value) => value.trim() !== '', {
    message: ERROR_MESSAGE.awb_num_track,
  }),
});

export const validatedFieldsFormTrack = (formData: FormData) => {
  // Validate form using Zod
  const validatedFields = FormTrackSchema.safeParse({
    awb_num: formData.get('awb_num'),
  });

  return validatedFields;
};
//*******************************************************************END */

//*******************************************************************START */
/* Customer Create and Update form Error validation */
const CusFormSchema = z.object({
  id: z.number(),
  customer_name: z.string().refine((value) => value.trim() !== '', {
    message: ERROR_MESSAGE.customer_name,
  }),
  email_address: z.string().optional(),
  phone_num: z.string().refine((value) => value.trim() !== '', {
    message: ERROR_MESSAGE.phone_num,
  }),
});

const CustomerFormSchema = CusFormSchema.omit({ id: true });

export const validatedFieldCustomer = (formData: FormData) => {
  // Validate form using Zod
  const validatedFields = CustomerFormSchema.safeParse({
    customer_name: formData.get('customer_name'),
    email_address: formData.get('email_address'),
    phone_num: formData.get('phone_num'),
  });

  return validatedFields;
};

// export const validatedFieldCustomerUpdate = (formData: FormData) => {
//   // Validate form using Zod
//   const validatedFields = CustomerFormSchema.safeParse({
//     account_type: formData.get('account_type'),
//     customer_name: formData.get('customer_name'),
//     email_address: formData.get('email_address'),
//     phone_num: formData.get('phone_num'),
//   });

//   return validatedFields;
// };
//*******************************************************************END */
