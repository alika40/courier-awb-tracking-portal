import { z } from 'zod';
import { Awb } from '../validations/validateForm';
import { updateDataDB } from '../insertDataDB';

export const updateAwbStatusDelivered = (
  validatedFields: z.SafeParseSuccess<Awb>,
  id: string,
) => {
  // const date = new Date().toISOString().split('T')[0];

  // Prepare data for insertion into the database
  // const {
  //   customer_id,
  //   awb_num,
  //   sender,
  //   receiver,
  //   receiver_address,
  //   destination,
  //   item_description,
  //   due_date,
  //   status,
  //   weight,
  //   delivered_to,
  //   delivery_date,
  //   delivery_time,
  // } = validatedFields.data;

  console.log(validatedFields.data, '::::', !validatedFields.success);
  updateDataDB(validatedFields.data, id);
};

/*export const updateAwbIndividualStatusDelivered = (
  validatedFields: z.SafeParseSuccess<Awb>,
  id: string,
) => {
  // const date = new Date().toISOString().split('T')[0];

  // Prepare data for insertion into the database
  // const {
  //   awb_num,
  //   sender,
  //   receiver,
  //   receiver_address,
  //   destination,
  //   item_description,
  //   due_date,
  //   status,
  //   weight,
  //   delivered_to,
  //   delivery_date,
  //   delivery_time,
  // } = validatedFields.data;

  console.log(validatedFields.data, '::::', !validatedFields.success);
  updateDataDB(validatedFields.data, id);
};*/
