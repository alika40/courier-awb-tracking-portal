import { z } from 'zod';
import { Awb } from '../validations/validateForm';
import { insertDataDB } from '../insertDataDB';

export const createAwbStatusDocumented = (
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
  // } = validatedFields.data;

  console.log(validatedFields.data, '::::', !validatedFields.success);
  insertDataDB(validatedFields.data);
};

/*export const createAwbIndividualStatusDocumented = (
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
  // } = validatedFields.data;

  // console.log(validatedFields.data, '::::', !validatedFields.success);
  insertDataDB(validatedFields.data);
};*/
