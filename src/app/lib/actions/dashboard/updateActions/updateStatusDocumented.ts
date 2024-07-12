import { z } from 'zod';
import { Awb } from '../validations/validateForm';
import { updateDataDB } from '../insertDataDB';

export const updateAwbStatusDocumented = (
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
  // } = validatedFields.data;

  // console.log(validatedFields.data, '::::', !validatedFields.success);
  updateDataDB(validatedFields.data, id);
};

/*export const updateAwbIndividualStatusDocumented = (
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
  // } = validatedFields.data;

  // console.log(validatedFields.data, '::::', !validatedFields.success);
  updateDataDB(validatedFields.data, id);
};*/
