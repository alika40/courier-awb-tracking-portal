import { sql } from '@vercel/postgres';
import { z } from 'zod';
import { Awb } from '../validations/validateForm';
import { updateDataDB } from '../insertDataDB';

export const updateAwbStatusPending = (
  validatedFields: z.SafeParseSuccess<Awb>,
  id: string,
) => {
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
  //   remark,
  // } = validatedFields.data;

  // console.log(validatedFields.data, '::::', !validatedFields.success);
  updateDataDB(validatedFields.data, id);
};

/*export const updateAwbIndividualStatusPending = (
  validatedFields: z.SafeParseSuccess<Awb>,
  id: string,
) => {
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
  //   remark,
  // } = validatedFields.data;

  // console.log(validatedFields.data, '::::', !validatedFields.success);
  updateDataDB(validatedFields.data, id);
};*/
