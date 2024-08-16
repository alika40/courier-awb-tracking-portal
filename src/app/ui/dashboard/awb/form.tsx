'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import House from '@mui/icons-material/House';
import LocalShipping from '@mui/icons-material/LocalShipping';
import NumbersTwoTone from '@mui/icons-material/NumbersTwoTone';
import Person from '@mui/icons-material/Person';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// import { useDebouncedCallback } from 'use-debounce';
import {
  StatusInTransitRemarks,
  DeliveryDetails,
  StatusCheckDocumented,
  StatusCheckOthers,
  CorporateAccountSelect,
} from './create-form-helper';
import { CustomerField, AWBInputData, State } from '@/app/lib/definitions';
// import CustomSnackbar from '../../snackbar';
import { useCreateAwbFormReducer } from '../../hooks/useCreateAwbForm';
import { ErrorState } from '../error-state';
import { ACTION } from '@/app/lib/constants';

export default function Form({
  awb,
  customers,
  state,
  dispatch,
  btnText,
}: {
  awb?: AWBInputData;
  customers: CustomerField[];
  state: State;
  dispatch?: (payload: FormData) => void;
  btnText: string;
}) {
  // const [open, setOpen] = useState<boolean>(false); // Snackbar Error Message
  // const [isErrorState, setIsErrorState] = useState<State>(state);
  const style = useTheme();
  const matches = useMediaQuery(style.breakpoints.up('sm'));
  let defaultDueDate = '';

  const {
    inputToggleDisplay,
    showDeliveryField,
    showStatusTextareaField,
    hideAllDisplayFields,
  } = useCreateAwbFormReducer(awb!!);

  if (btnText === ACTION.EDIT) {
    defaultDueDate = new Date(awb!!.due_date).toISOString().substring(0, 10);
  }

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-2 dark:bg-zinc-900 dark:text-slate-400 md:p-6">
        {/* Customer Name */}
        <CorporateAccountSelect
          customers={customers}
          state={state}
          awb={awb}
          btnText={btnText}
        />

        {/* Air Way Bill Number */}
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="awb_num"
            className="mb-2 block text-sm font-bold md:text-lg"
          >
            AWB No:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="awb_num"
                name="awb_num"
                type="text"
                defaultValue={awb && awb.awb_num}
                placeholder="Enter Air Way Bill Number"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-8 text-sm font-medium text-gray-600 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:bg-opacity-50 focus:ring-2 focus:ring-pink-900 dark:border-zinc-700 dark:bg-zinc-700 dark:text-slate-200  md:text-lg md:font-bold md:tracking-wider"
              />
              <NumbersTwoTone
                sx={{
                  fontSize: matches ? '20px' : '18px',
                }}
                className="pointer-events-none absolute left-2 top-1/2  h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-pink-900"
              />
            </div>
            {/* Manage Error Component */}
            {state?.errors?.awb_num && (
              <ErrorState inputName={state.errors.awb_num} />
            )}
          </div>
        </div>
        {/* Sender's Name */}
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="sender"
            className="mb-2 block text-sm font-bold md:text-lg"
          >
            Sender:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="sender"
                name="sender"
                type="text"
                defaultValue={awb && awb.sender}
                placeholder="Sender's Name"
                className="md:text-md peer block w-full rounded-md border border-gray-200 py-2 pl-8 text-sm font-medium text-gray-600 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:bg-opacity-50 focus:ring-2 focus:ring-pink-900 dark:border-zinc-700 dark:bg-zinc-700 dark:text-slate-200  md:text-lg md:font-bold md:tracking-wider "
              />
              <Person
                sx={{
                  fontSize: matches ? '20px' : '18px',
                }}
                className="pointer-events-none absolute left-2 top-1/2  h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-pink-900"
              />
            </div>
            {/* Manage Error Component */}
            {state?.errors?.sender && (
              <ErrorState inputName={state.errors.sender} />
            )}
          </div>
        </div>
        {/* Receiver's Name */}
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="receiver"
            className="mb-2 block text-sm font-bold md:text-lg"
          >
            Receiver:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="receiver"
                name="receiver"
                type="text"
                defaultValue={awb && awb.receiver}
                placeholder="Enter Receiver's Name"
                className="md:text-md peer block w-full rounded-md border border-gray-200 py-2 pl-8 text-sm font-medium text-gray-600 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:bg-opacity-50 focus:ring-2 focus:ring-pink-900 dark:border-zinc-700 dark:bg-zinc-700 dark:text-slate-200  md:text-lg md:font-bold md:tracking-wider"
              />
              <Person
                sx={{
                  fontSize: matches ? '20px' : '18px',
                }}
                className="pointer-events-none absolute left-2 top-1/2  h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-pink-900"
              />
            </div>
            {/* Manage Error Component */}
            {state?.errors?.receiver && (
              <ErrorState inputName={state.errors.receiver} />
            )}
          </div>
        </div>
        {/* Receiver's Address */}
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="receiver_address"
            className="mb-2 block text-sm font-bold md:text-lg"
          >
            Receiver's Address:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="receiver_address"
                name="receiver_address"
                type="text"
                defaultValue={awb && awb.receiver_address}
                placeholder="Enter Receiver's Address"
                autoComplete="street-address"
                className="md:text-md peer block w-full rounded-md border border-gray-200 py-2 pl-8 text-sm font-medium text-gray-600 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:bg-opacity-50 focus:ring-2 focus:ring-pink-900 dark:border-zinc-700 dark:bg-zinc-700 dark:text-slate-200  md:text-lg md:font-bold md:tracking-wider"
              />
              <House
                sx={{
                  fontSize: matches ? '20px' : '18px',
                }}
                className="pointer-events-none absolute left-2 top-1/2  h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-pink-900"
              />
            </div>
            {/* Manage Error Component */}
            {state?.errors?.receiver_address && (
              <ErrorState inputName={state.errors.receiver_address} />
            )}
          </div>
        </div>
        {/* Destination */}
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="destination"
            className="mb-2 block text-sm font-bold md:text-lg"
          >
            Destination:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="destination"
                name="destination"
                type="text"
                defaultValue={awb && awb.destination}
                placeholder="Enter Destination"
                autoComplete="street-address1"
                className="md:text-medium peer block w-full rounded-md border border-gray-200 py-2 pl-8 text-sm font-medium text-gray-600 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:bg-opacity-50 focus:ring-2 focus:ring-pink-900 dark:border-zinc-700 dark:bg-zinc-700 dark:text-slate-200  md:text-lg md:font-bold md:tracking-wider"
              />
              <LocalShipping
                sx={{
                  fontSize: matches ? '20px' : '18px',
                }}
                className="pointer-events-none absolute left-2 top-1/2  h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-pink-900"
              />
            </div>
            {/* Manage Error Component */}
            {state?.errors?.destination && (
              <ErrorState inputName={state.errors.destination} />
            )}
          </div>
        </div>
        {/* Item Description */}
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="item_description"
            className="mb-2 block text-sm font-bold md:text-lg"
          >
            Item Description:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea
                id="item_description"
                name="item_description"
                maxLength={160}
                spellCheck
                rows={3}
                defaultValue={awb && awb.item_description}
                placeholder="Enter Item Description"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm font-medium text-gray-600 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:bg-opacity-50 focus:ring-2 focus:ring-pink-900 dark:border-zinc-700 dark:bg-zinc-700 dark:text-slate-200 md:pl-6 md:text-lg md:md:font-bold md:tracking-wider"
              />
            </div>
            {/* Manage Error Component */}
            {state?.errors?.item_description && (
              <ErrorState inputName={state.errors.item_description} />
            )}
          </div>
        </div>
        {/* Other Details */}
        <fieldset className="mt-5 md:mt-8">
          <legend className="mb-2 block text-sm font-bold md:text-lg">
            Other Details:
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3 shadow-sm dark:border-black dark:bg-black">
            <div className="md:flex-stretch flex flex-col gap-4 md:grid md:grid-flow-col md:gap-6">
              <div className="flex items-center">
                <label
                  htmlFor="due_date"
                  className="mr-1 flex items-center whitespace-nowrap rounded-md bg-gray-100 px-3 py-1.5 text-sm font-bold text-gray-600 dark:bg-zinc-900 dark:text-slate-400 md:text-base md:font-semibold"
                >
                  Due Date:
                </label>
                <input
                  id="due_date"
                  name="due_date"
                  type="date"
                  autoComplete="bday"
                  defaultValue={defaultDueDate}
                  className="w-full rounded-md border border-gray-200 py-2 pl-4 text-sm font-medium text-gray-500 shadow-sm hover:shadow-none focus:border-pink-900 focus:bg-opacity-50 focus:ring-2 focus:ring-pink-900 dark:border-zinc-700 dark:bg-zinc-700 dark:text-slate-200 md:pl-6 md:text-base md:md:font-bold md:tracking-wider"
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="weight"
                  className="mr-1 flex items-center rounded-md bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-600 dark:bg-zinc-900 dark:text-slate-400 md:text-base md:font-bold"
                >
                  Weight:
                </label>
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  step="0.5"
                  placeholder="5kg"
                  defaultValue={awb && awb.weight}
                  className="w-full rounded-md border border-gray-200 py-2 pl-4 text-sm font-medium  text-gray-500 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:bg-opacity-50 focus:ring-2 focus:ring-pink-900 dark:border-zinc-700 dark:bg-zinc-700 dark:text-slate-200 md:pl-6 md:text-base md:md:font-bold"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <div className="md:flex md:flex-row md:justify-between">
          {/* Manage Error Component */}
          {/* Error For Date */}
          {state?.errors?.due_date && (
            <ErrorState inputName={state.errors.due_date} />
          )}
          {/* Error For Weight */}
          {state?.errors?.weight && (
            <ErrorState inputName={state.errors.weight} />
          )}
        </div>

        {/* AWB Status */}
        <fieldset className="mt-4 md:mt-6">
          <legend className="md:text-medium block text-sm font-bold">
            Status:
          </legend>
          <div className="px-[14px] py-0">
            <div className="flex flex-col gap-3 md:flex-row md:gap-6">
              <StatusCheckDocumented
                awb={awb!!}
                statusCheckFunc={hideAllDisplayFields}
              />
              <StatusCheckOthers
                awb={awb!!}
                showDeliveryField={showDeliveryField}
                showStatusTextareaField={showStatusTextareaField}
              />
            </div>
            <div>
              {(inputToggleDisplay.statusPending ||
                inputToggleDisplay.statusTextarea) && (
                <StatusInTransitRemarks awb={awb!!} />
              )}
            </div>
          </div>
        </fieldset>
        {/* Manage Error Component */}
        {state?.errors?.status && (
          <ErrorState inputName={state.errors.status} />
        )}

        <div>
          {(inputToggleDisplay.statusDelivered ||
            inputToggleDisplay.deliveryfields) && (
            <DeliveryDetails awb={awb!!} state={state} />
          )}
        </div>
      </div>

      {/* Snackbar Message when there is any error */}
      {/* <div id="awb-error" aria-live="polite" aria-atomic="true">
        {state.errors && (
          <CustomSnackbar
            message={state.message!!}
            open={open}
            setOpen={setOpen}
            autoHideDuration={8000}
          />
        )}
      </div> */}
      {state?.message && (
        <>
          <div
            className="m-auto mt-2 flex w-full items-center justify-center rounded-md bg-red-100 p-4 md:mt-6 md:w-[50%] md:rounded-sm"
            id="customer-error"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="text-sm font-bold text-red-500">
              *** {state.message} ***
            </p>
          </div>
        </>
      )}

      <div className="mb-4 mt-6 flex justify-end gap-4 md:mb-8 md:mt-12">
        <Link
          href="/dashboard"
          className="flex h-10 items-center rounded-md bg-gray-100 px-4 text-sm font-medium text-gray-600 shadow-sm transition-colors hover:bg-gray-200 hover:shadow-none md:rounded-lg md:text-base"
        >
          Cancel
        </Link>
        <div
        // onClick={handleClick}
        >
          <Button
            className="rounded-md md:rounded-lg md:text-base"
            type="submit"
            pendingText="Processing..."
          >
            {btnText}
          </Button>
        </div>
      </div>
    </form>
  );
}
