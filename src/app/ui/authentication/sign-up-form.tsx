'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  Email,
  ArrowRight,
  Key,
  PeopleAlt,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material/';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import AppLogo from '../app-logo';
// import useEmailValidator from '../hooks/useEmailValidator';
import { signup } from '@/app/lib/actions/authentication/actionManager';
import { Button } from '../button';
import { useState } from 'react';
import { IconButton } from '@mui/material';

// Email: user@nextmail.com
// Password: 12345678

export default function SignUpForm() {
  const [state, dispatch] = useFormState(signup, undefined);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState<boolean>(true);
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  // const { setEmail, email, emailValid } = useEmailValidator();

  return (
    <div className="bg-[url('/web-contour.jpg')] bg-cover bg-fixed pb-4 pt-20 md:pb-20 md:pt-40">
      <form
        action={dispatch}
        className="m-auto sm:w-[50%] md:w-[40%] lg:w-[35%]"
      >
        <div className="round-md z-20 flex-1 px-6 pt-6 shadow-none shadow-black sm:bg-gray-100 md:rounded-lg md:pt-6 md:shadow-lg">
          <div className="md:rounded-t-lg md:bg-pink-900 md:py-5">
            <AppLogo className="w-full text-center text-3xl md:text-4xl">
              <h3
                className={`${lusitana.className} -mt-[5px] text-center text-sm font-semibold text-slate-400`}
              >
                XL Express & Logistics LTD.
              </h3>
            </AppLogo>
          </div>

          <h1
            className={`${lusitana.className} mb-2 mt-5 text-center text-2xl font-black text-white md:text-gray-600`}
          >
            Register
          </h1>

          <div className="w-full">
            <div>
              <label
                className="mb-1 mt-3 block text-xs font-medium text-white md:text-base md:text-slate-900"
                htmlFor="first-name"
              >
                First Name
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm font-medium text-gray-500 outline-2 placeholder:italic focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:text-base md:tracking-wider"
                  id="first-name"
                  type="text"
                  name="first-name"
                  placeholder="Enter your first name"
                />
                <PeopleAlt className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-pink-900" />
              </div>
              <div aria-live="polite" aria-atomic="true" id="sign-up-error">
                {state?.errors?.firstName && (
                  <p className="mt-2 text-xs text-red-500 md:text-sm">
                    {state.errors.firstName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                className="mb-1 mt-3 block text-xs font-medium text-white md:text-base md:text-slate-900"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm font-medium text-gray-500 outline-2 placeholder:italic focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:text-base md:tracking-wider"
                  id="last-name"
                  type="text"
                  name="last-name"
                  placeholder="Enter your last name"
                />
                <PeopleAlt className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-pink-900" />
              </div>
              <div aria-live="polite" aria-atomic="true" id="sign-up-error">
                {state?.errors?.lastName && (
                  <p className="mt-2 text-xs text-red-500 md:text-sm">
                    {state.errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                className="mb-1 mt-3 block text-xs font-medium text-white md:text-base md:text-slate-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm font-medium text-gray-500 outline-2 placeholder:italic focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:text-base md:tracking-wider"
                  id="email"
                  type="email"
                  name="email"
                  // value={email}
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                  placeholder="Enter your email address"
                />
                <Email className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-pink-900" />
              </div>
              <div aria-live="polite" aria-atomic="true" id="sign-up-error">
                {state?.errors?.email && (
                  <p className="mt-2 text-xs text-red-500 md:text-sm">
                    {state.errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                className="mb-1 mt-3 block text-xs font-medium text-white md:text-base md:text-slate-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm font-medium text-gray-500 outline-2 placeholder:italic focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:text-base md:tracking-wider"
                  id="password"
                  type={isPasswordVisible ? 'password' : 'text'}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Enter password"
                  autoComplete="password"
                />
                <Key className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-pink-900" />
                <IconButton
                  sx={{ fontSize: '20px' }}
                  className="absolute -top-7 right-3 float-right h-[16px] w-[16px] cursor-pointer text-gray-500 peer-focus:text-pink-900 md:-top-8"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? (
                    <VisibilityOff sx={{ fontSize: '20px' }} />
                  ) : (
                    <Visibility sx={{ fontSize: '20px' }} />
                  )}
                </IconButton>
              </div>

              <div aria-live="polite" aria-atomic="true" id="sign-up-error">
                {state?.errors?.password && (
                  <div className="mt-2 text-xs text-red-500 md:text-sm">
                    {state.errors.password[state.errors.password.length - 1] ===
                    'REQUIRED' ? (
                      // If field is empty
                      <p className="text-xs text-red-500 md:text-sm">
                        Password is required.
                      </p>
                    ) : (
                      // If field is not empty but has other errors
                      <>
                        <p>Password must:</p>
                        <ul>
                          {state.errors.password.map((error) => (
                            <li key={error}>- {error}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label
                className="mb-1 mt-3 block text-xs font-medium text-white md:text-base md:text-slate-900"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm font-medium text-gray-500 outline-2 placeholder:italic focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:text-base md:tracking-wider"
                  id="confirm-password"
                  type={isConfirmPasswordVisible ? 'password' : 'text'}
                  name="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                  autoComplete="confirm-password"
                />
                <Key className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-pink-900" />
                <IconButton
                  className="absolute -top-7 right-3 float-right h-[16px] w-[16px] cursor-pointer text-gray-500 peer-focus:text-pink-900 md:-top-8"
                  onClick={() =>
                    setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                  }
                >
                  {isConfirmPasswordVisible ? (
                    <VisibilityOff sx={{ fontSize: '20px' }} />
                  ) : (
                    <Visibility sx={{ fontSize: '20px' }} />
                  )}
                </IconButton>
              </div>
              <div aria-live="polite" aria-atomic="true" id="sign-up-error">
                {state?.errors?.confirmPassword && (
                  <p className="mt-2 text-xs text-red-500 md:text-sm">
                    {state.errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-row-reverse justify-between gap-4 pb-6 md:mt-12 md:justify-start">
            <div>
              <Button
                pendingText="Submitting..."
                className="rounded-md md:rounded-lg md:text-base"
              >
                Sign up <ArrowRight className="ml-auto h-5 w-5 text-gray-50" />
              </Button>
            </div>
            <Link
              href="/authentication/login"
              className="flex h-10 items-center rounded-md bg-gray-100 px-4 text-sm font-medium text-pink-900 shadow-sm transition-colors hover:bg-gray-200 hover:shadow-none md:rounded-lg md:text-base"
            >
              Log in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
