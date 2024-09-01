import { SearchState } from '../../definitions';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { ERROR_MESSAGE } from '../../constants';

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

export async function trackAwbCustomer(
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

  revalidatePath(`/tracker/${awb_num}/status`);
  redirect(`/tracker/${awb_num}/status`);
}
