'use server';

import { FormStateAuth, FormStateAuth2 } from '@/app/lib/definitions';
import {
  SigninFormSchema,
  SignupFormSchema,
} from '../authentication/validateform';
import { signIn, signOut } from '../../../../../auth';
import { AuthError } from 'next-auth';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

export async function authenticate(
  prevState: FormStateAuth2,
  formData: FormData,
) {
  // 1. Validate form fields
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { message: 'Invalid credentials.' };
        default:
          return { message: 'Something went wrong.' };
      }
    }
    throw error;
  }
}

export async function signup(state: FormStateAuth, formData: FormData) {
  // 1. Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    firstName: formData.get('first-name'),
    lastName: formData.get('last-name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirm-password'),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user..
  // 2. Prepare data for insertion into database
  const { firstName, lastName, email, password } = validatedFields.data;
  console.log(validatedFields.data);
  // e.g. Hash the user's password before storing it
  //   const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Insert the user into the database or call an Auth Library's API
  /*const data = await db
    .insert(users)
    .values({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    })
    .returning({ id: users.id });

  const user = data[0];

  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    };
  }*/
}

export const handleSignOut = async () => {
  console.log('HERE');
  await signOut();
};
