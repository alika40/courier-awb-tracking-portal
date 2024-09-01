'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { STATUS } from '../../constants';
import { CustomerState, SearchState, State } from '../../definitions';
import {
  validatedFieldCustomer,
  validatedFieldsFormTrack,
} from './validations/validateForm';
import {
  vfCreateAwbStatusDelivered,
  vfCreateAwbStatusDocumented,
  vfCreateAwbStatusPending,
} from './validations/validateFormCreate/vfCreateAwbCorporate';
import {
  vfUpdateAwbStatusDelivered,
  vfUpdateAwbStatusDocumented,
  vfUpdateAwbStatusPending,
} from './validations/validateFormUpdate/vfUpdateAwbCorporate';
import {
  insertCustomerDataDB,
  insertDataDB,
  updateCustomerDataDB,
  updateDataDB,
} from './insertDataDB';

export async function createAwb(prevState: State, formData: FormData) {
  const statusCheck = formData.get('status');
  let isValid = true;

  if (statusCheck === STATUS.DOCUMENTED) {
    const validatedFields = vfCreateAwbStatusDocumented(formData);
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create AWB.',
      };
    }
    insertDataDB(validatedFields.data);
    isValid = false;
  }

  if (statusCheck === STATUS.PENDING) {
    const validatedFields = vfCreateAwbStatusPending(formData);
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create AWB.',
      };
    }
    insertDataDB(validatedFields.data);
    isValid = false;
  }

  if (statusCheck === STATUS.DELIVERED) {
    const validatedFields = vfCreateAwbStatusDelivered(formData);
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create AWB.',
      };
    }
    insertDataDB(validatedFields.data);
    isValid = false;
  }

  if (isValid) {
    // Runs if status isn't checked
    const validatedFields = vfCreateAwbStatusDocumented(formData);
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create AWB.',
      };
    }
    revalidatePath('/dashboard');
    redirect('/dashboard');
  } else {
    // Runs if validation is successful
    revalidatePath('/dashboard');
    redirect('/dashboard');
  }
}

export async function updateAwb(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const statusCheck = formData.get('status');

  if (statusCheck === STATUS.DOCUMENTED) {
    const validatedFields = vfUpdateAwbStatusDocumented(formData);
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Update AWB.',
      };
    }
    // updateAwbStatusDocumented(validatedFields, id);
    updateDataDB(validatedFields.data, id);
  }

  if (statusCheck === STATUS.PENDING) {
    const validatedFields = vfUpdateAwbStatusPending(formData);
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Update AWB.',
      };
    }
    // updateAwbStatusPending(validatedFields, id);
    updateDataDB(validatedFields.data, id);
  }

  if (statusCheck === STATUS.DELIVERED) {
    const validatedFields = vfUpdateAwbStatusDelivered(formData);
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Update AWB.',
      };
    }
    // updateAwbStatusDelivered(validatedFields, id);
    updateDataDB(validatedFields.data, id);
  }

  revalidatePath('/dashboard');
  redirect('/dashboard');
}

export async function deleteAwb(id: string) {
  // throw new Error('Failed to Delete Invoice');
  try {
    await sql`DELETE FROM awbs WHERE id = ${id}`;
    revalidatePath('/dashboard');
  } catch (error) {
    return { message: 'Database Error: Failed to Delete AWB.' };
  }
}

export async function createCustomerAcc(
  prevState: CustomerState,
  formData: FormData,
) {
  const validatedFields = validatedFieldCustomer(formData);

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Account.',
    };
  }
  // const { customer_name, phone_num, email_address } = validatedFields.data;
  insertCustomerDataDB(validatedFields.data);

  revalidatePath('/dashboard/awb/create');
  redirect('/dashboard/awb/create');
}

export async function updateCustomerAcc(
  id: string,
  prevState: CustomerState,
  formData: FormData,
) {
  const validatedFields = validatedFieldCustomer(formData);

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Account.',
    };
  }
  // const { customer_name, phone_num, email_address } = validatedFields.data;
  updateCustomerDataDB(validatedFields.data, id);

  revalidatePath('/dashboard');
  redirect('/dashboard');
}

export async function deleteCustomer(id: string) {
  // throw new Error('Failed to Delete Invoice');
  try {
    await sql`DELETE FROM customers WHERE customer_id = ${id}`;
    revalidatePath('/dashboard');
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Dustomer.' };
  }
}

export async function trackAwbAdmin(
  prevState: SearchState,
  formData: FormData,
) {
  const validatedFields = validatedFieldsFormTrack(formData);

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Enter AWB Number.',
    };
  }

  const awb_num = validatedFields.data.awb_num;

  revalidatePath(`/dashboard/tracker/${awb_num}/status`);
  redirect(`/dashboard/tracker/${awb_num}/status`);
}
