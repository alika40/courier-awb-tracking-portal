import { z } from 'zod';

const nameValidator = (val: string, ctx: z.RefinementCtx, msg: string) => {
  if (val.trim() === '') {
    ctx.addIssue({
      code: 'custom',
      message: `${msg} name is required.`,
    });
    return z.NEVER;
  }
  if (val.length <= 2) {
    ctx.addIssue({
      code: 'custom',
      message: `${msg} name must be at least 2 characters long.`,
    });
    return z.NEVER;
  }
  return val;
};

export const SignupFormSchema = z
  .object({
    firstName: z
      .string()
      .transform((val, ctx) => nameValidator(val, ctx, 'First')),
    lastName: z
      .string()
      .transform((val, ctx) => nameValidator(val, ctx, 'Last')),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
      .string()
      .min(8, { message: 'be at least 8 characters long.' })
      .regex(/[a-zA-Z]/, { message: 'contain at least one letter.' })
      .regex(/[0-9]/, { message: 'contain at least one number.' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'contain at least one special character.',
      })
      .trim(),
    confirmPassword: z.string(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (!password.trim()) {
      ctx.addIssue({
        message: 'REQUIRED',
        code: 'custom',
        path: ['password'],
      });
      return z.NEVER;
    }
    if (!confirmPassword.trim()) {
      ctx.addIssue({
        message: 'Password confirmation is required. ',
        code: 'custom',
        path: ['confirmPassword'],
      });
      return z.NEVER;
    }
    if (password !== confirmPassword) {
      ctx.addIssue({
        message: 'The passwords did not match',
        code: 'custom',
        path: ['confirmPassword'],
      });
      return z.NEVER;
    }
    return { password, confirmPassword };
  });

export const SigninFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z.string().refine((value) => value.trim() !== '', {
    message: 'Please enter password.',
  }),
});
