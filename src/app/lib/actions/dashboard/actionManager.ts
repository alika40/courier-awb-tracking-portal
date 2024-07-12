'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';
// import { awbs } from './placeholder-data';
import { ACCOUNT_TYPE, STATUS } from '../../constants';
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
  createAwbStatusDocumented,
  // createAwbIndividualStatusDocumented,
} from './createActions/createStatusDocumented';
// import {
//   vfCreateAwbIndividualStatusDelivered,
//   vfCreateAwbIndividualStatusDocumented,
//   vfCreateAwbIndividualStatusPending,
// } from './validations/validateFormCreate/vfCreateAwbIndividual';
import {
  createAwbStatusPending,
  // createAwbIndividualStatusPending,
} from './createActions/createStatusPending';
import {
  vfUpdateAwbStatusDelivered,
  vfUpdateAwbStatusDocumented,
  vfUpdateAwbStatusPending,
} from './validations/validateFormUpdate/vfUpdateAwbCorporate';
import {
  updateAwbStatusDocumented,
  // updateAwbIndividualStatusDocumented,
} from './updateActions/updateStatusDocumented';
// import {
//   vfUpdateAwbIndividualStatusDelivered,
//   vfUpdateAwbIndividualStatusDocumented,
//   vfUpdateAwbIndividualStatusPending,
// } from './validations/validateFormUpdate/vfUpdateAwbIndividual';
import {
  updateAwbStatusPending,
  // updateAwbIndividualStatusPending,
} from './updateActions/updateStatusPending';
import {
  updateAwbStatusDelivered,
  // updateAwbIndividualStatusDelivered,
} from './updateActions/updateStatusDelivered';
import {
  createAwbStatusDelivered,
  // createAwbIndividualStatusDelivered,
} from './createActions/createStatusDelivered';

export async function createAwb(prevState: State, formData: FormData) {
  const statusCheck = formData.get('status');
  // const accountType = formData.get('account_type');
  let isValid = true;

  if (statusCheck === STATUS.DOCUMENTED) {
    // if (accountType === ACCOUNT_TYPE.CORPORATE) {
    const validatedFields = vfCreateAwbStatusDocumented(formData);
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create AWB.',
      };
    }
    createAwbStatusDocumented(validatedFields);
    // }

    /*if (accountType === ACCOUNT_TYPE.INDIVIDUAL) {
      const validatedFields = vfCreateAwbIndividualStatusDocumented(formData);
      // If form validation fails, return errors early. Otherwise, continue.
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create AWB.',
        };
      }
      createAwbIndividualStatusDocumented(validatedFields);
    }*/
    isValid = false;
  }

  if (statusCheck === STATUS.PENDING) {
    // if (accountType === ACCOUNT_TYPE.CORPORATE) {
    const validatedFields = vfCreateAwbStatusPending(formData);
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create AWB.',
      };
    }
    createAwbStatusPending(validatedFields);
    // }
    /*if (accountType === ACCOUNT_TYPE.INDIVIDUAL) {
      const validatedFields = vfCreateAwbIndividualStatusPending(formData);
      // If form validation fails, return errors early. Otherwise, continue.
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create AWB.',
        };
      }
      createAwbIndividualStatusPending(validatedFields);
    }*/
    isValid = false;
  }

  if (statusCheck === STATUS.DELIVERED) {
    // if (accountType === ACCOUNT_TYPE.CORPORATE) {
    const validatedFields = vfCreateAwbStatusDelivered(formData);
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create AWB.',
      };
    }
    createAwbStatusDelivered(validatedFields);
    // }
    /*if (accountType === ACCOUNT_TYPE.INDIVIDUAL) {
      const validatedFields = vfCreateAwbIndividualStatusDelivered(formData);
      // If form validation fails, return errors early. Otherwise, continue.
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create AWB.',
        };
      }
      createAwbIndividualStatusDelivered(validatedFields);
    }*/
    isValid = false;
  }

  if (isValid) {
    // Runs if status isn't checked
    /*const validatedFields =
      accountType === ACCOUNT_TYPE.CORPORATE
        ? vfCreateAwbCorporateStatusDocumented(formData)
        : vfCreateAwbIndividualStatusDocumented(formData);*/
    const validatedFields = vfCreateAwbStatusDocumented(formData);
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      // console.log(validatedFields.error.flatten().fieldErrors);
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
  const accountType = formData.get('account_type');
  console.log(statusCheck, '::::', accountType, '::::', id);

  if (statusCheck === STATUS.DOCUMENTED) {
    // if (accountType === ACCOUNT_TYPE.CORPORATE) {
    const validatedFields = vfUpdateAwbStatusDocumented(formData);
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Update AWB.',
      };
    }
    updateAwbStatusDocumented(validatedFields, id);
    // }
    /*if (accountType === ACCOUNT_TYPE.INDIVIDUAL) {
      const validatedFields = vfUpdateAwbIndividualStatusDocumented(formData);
      // If form validation fails, return errors early. Otherwise, continue.
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Update AWB.',
        };
      }
      updateAwbIndividualStatusDocumented(validatedFields, id);
    }*/
  }

  if (statusCheck === STATUS.PENDING) {
    // if (accountType === ACCOUNT_TYPE.CORPORATE) {
    const validatedFields = vfUpdateAwbStatusPending(formData);
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Update AWB.',
      };
    }
    updateAwbStatusPending(validatedFields, id);
    // }
    /*if (accountType === ACCOUNT_TYPE.INDIVIDUAL) {
      const validatedFields = vfUpdateAwbIndividualStatusPending(formData);
      // If form validation fails, return errors early. Otherwise, continue.
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Update AWB.',
        };
      }
      updateAwbIndividualStatusPending(validatedFields, id);
    }*/
  }

  if (statusCheck === STATUS.DELIVERED) {
    // if (accountType === ACCOUNT_TYPE.CORPORATE) {
    const validatedFields = vfUpdateAwbStatusDelivered(formData);
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Update AWB.',
      };
    }
    updateAwbStatusDelivered(validatedFields, id);
    // }
    /*if (accountType === ACCOUNT_TYPE.INDIVIDUAL) {
      const validatedFields = vfUpdateAwbIndividualStatusDelivered(formData);
      // If form validation fails, return errors early. Otherwise, continue.
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Update AWB.',
        };
      }
      updateAwbIndividualStatusDelivered(validatedFields, id);
    }*/
  }

  revalidatePath('/dashboard');
  redirect('/dashboard');
}

export async function trackAwb(prevState: SearchState, formData: FormData) {
  const validatedFields = validatedFieldsFormTrack(formData);

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Enter AWB Number.',
    };
  }

  const awb_num = validatedFields.data.awb_num;

  revalidatePath(`/tracker/${awb_num}/status`);
  redirect(`/tracker/${awb_num}/status`);
}

export async function CreateCustomerAcc(
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

  const date = new Date().toISOString().split('T')[0];

  console.log(validatedFields.data);

  const { customer_name, phone_num, email_address } = validatedFields.data;

  revalidatePath('/dashboard/awb/create');
  redirect('/dashboard/awb/create');
}

export async function CreateCustomerAccUpdate(
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

  console.log(validatedFields.data);

  const { customer_name, phone_num, email_address } = validatedFields.data;

  revalidatePath('/dashboard');
  redirect('/dashboard');
}

/** 
export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
            INSERT INTO invoices (customer_id, amount, status, date)
            VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
        `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  try {
    await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  // throw new Error('Failed to Delete Invoice');
  try {
    // await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}
*/
