import { z } from 'zod';
import { Awb } from '../validations/validateForm';
import { insertDataDB } from '../insertDataDB';

export const createAwbStatusPending = (
  validatedFields: z.SafeParseSuccess<Awb>,
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

  console.log(validatedFields.data, '::::', !validatedFields.success);
  insertDataDB(validatedFields.data);
};

/*export const createAwbIndividualStatusPending = (
  validatedFields: z.SafeParseSuccess<Awb>,
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
  insertDataDB(validatedFields.data);
};*/
