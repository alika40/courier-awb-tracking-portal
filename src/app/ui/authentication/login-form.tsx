'use client';

import { lusitana } from '@/app/ui/fonts';
import { useState } from 'react';
import {
  Email,
  Person,
  ArrowRight,
  Key,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material/';
import { IconButton } from '@mui/material';
import { Button } from '../button';
import { useFormState } from 'react-dom';
import { authenticate } from '@/app/lib/actions/authentication/actionManager';
import Link from 'next/link';
import AppLogo from '../app-logo';

// Email: user@nextmail.com
// Password: 123456

export default function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div className="bg-[url('/web-contour.jpg')] bg-cover bg-fixed pb-4 pt-8 md:pb-20 md:pt-40">
      <form
        action={dispatch}
        className="m-auto sm:w-[50%] md:w-[40%] lg:w-[35%]"
      >
        <div className="round-md z-20 flex-1 px-6 pb-6 pt-6 shadow-none shadow-slate-950 sm:bg-gray-100 md:rounded-lg md:pt-6 md:shadow-lg">
          <div className="round-t-md md:rounded-t-lg md:bg-pink-900 md:py-5">
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
            Log In
          </h1>
          <div className="w-full">
            <div>
              <label
                className="mb-1 mt-3 block text-xs font-medium text-white md:text-base md:text-gray-600"
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
                  placeholder="Enter your email address"
                />
                <Email className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-pink-900" />
              </div>

              <div aria-live="polite" aria-atomic="true" id="sign-up-error">
                {errorMessage?.errors?.email && (
                  <p className="mt-2 text-xs text-red-500 md:text-sm">
                    {errorMessage.errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                className="mb-1 mt-3 block text-xs font-medium text-white md:text-base md:text-gray-600"
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
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
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
            </div>

            <div aria-live="polite" aria-atomic="true" id="sign-up-error">
              {errorMessage?.errors?.password && (
                <p className="mt-2 text-xs text-red-500 md:text-sm">
                  {errorMessage.errors.password}
                </p>
              )}
            </div>
          </div>

          {errorMessage?.message && (
            <>
              <div
                className="m-auto mt-2 flex w-full items-center justify-center space-x-1 rounded-md bg-red-100 p-4 md:mt-6 md:w-[50%] md:rounded-sm"
                aria-live="polite"
                aria-atomic="true"
                id="login-error"
              >
                <Person className="h-5 w-5 text-red-500" />
                <p className="mt-2 text-sm text-red-500">
                  {errorMessage.message}
                </p>
              </div>
            </>
          )}

          <div className="mt-6 flex flex-row-reverse justify-between gap-4 md:justify-start">
            <div>
              <Button
                className="w-full rounded-md md:rounded-lg md:text-base"
                pendingText="Authencating..."
              >
                Log in <ArrowRight className="text-whte ml-auto h-5 w-5" />
              </Button>
            </div>
            <Link
              href="/authentication/sign-up"
              className="flex h-10 items-center rounded-md bg-gray-100 px-4 text-sm font-medium text-pink-900 shadow-sm transition-colors hover:bg-gray-200 hover:shadow-none md:rounded-lg md:text-base"
            >
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
