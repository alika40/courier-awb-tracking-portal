'use client';

// import { useState, useEffect, ChangeEvent } from 'react';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
// import { useDebouncedCallback } from 'use-debounce';
import {
  StatusInTransitRemarks,
  DeliveryDetails,
  StatusCheckDocumented,
  StatusCheckOthers,
  // AccountTypeSelect,
  CorporateAccountSelect,
} from './create-form-helper';
import { CustomerField, AWBInputData, State } from '@/app/lib/definitions';
// import CustomSnackbar from '../../snackbar';
import { useCreateAwbFormReducer } from './customHooks/useCreateAwbForm';
import { ErrorState } from '../error-state';
import { useAccountTypeSelectReducer } from './customHooks/useAccountType';
import { ACTION } from '@/app/lib/constants';
// import { ERROR_MESSAGE } from '@/app/lib/constants';

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
  let defaultDate = '';

  const {
    inputToggleDisplay,
    showDeliveryField,
    showStatusTextareaField,
    hideAllDisplayFields,
  } = useCreateAwbFormReducer(awb!!);

  // const { accountTypeSelect, handleAcctTypeSelect } =
  //   useAccountTypeSelectReducer(btnText, awb!!);

  //const handleClick = () => {
  // Handles 'CustomSnackbar' click
  // setOpen(() => true);
  //};

  /*
  const removeObjProps = (propName: string, state: State) => {
    delete state.errors[propName];
    console.log(state);
    return JSON.stringify(state.errors) === '{}'
      ? { ...state, massage: null }
      : state;
  };

  const addObjProps = (propName: string, state: State) => {
    const newState = {
      ...state,
      errors: { ...state.errors, [propName]: [`${ERROR_MESSAGE[propName]}`] },
    };
    console.log(newState);
    return newState;
  };

  const trackErrorState = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const getInputValue = e.target.value;
      const getInputName = e.target.name;
      const isError = JSON.stringify(state.errors) === '{}';
      //only run if there's an error
      setIsErrorState(() => {
        if (!isError) {
          return getInputValue.trim()
            ? removeObjProps(getInputName, state)
            : addObjProps(getInputName, state);
        }
        return state;
      });
    },
    1000,
  );*/

  // useEffect(() => {
  // window.onbeforeunload = () => true;
  // return () => {
  //   window.onbeforeunload = null;
  // };
  // setIsErrorState(() => state);
  // }, []);

  if (btnText === ACTION.EDIT) {
    defaultDate = new Date(awb!!.due_date).toISOString().substring(0, 10);
  }

  return (
    <form action={dispatch}>
      {/* Account Type */}
      {/* <AccountTypeSelect
        accountTypeSelect={accountTypeSelect}
        handleAcctTypeSelect={handleAcctTypeSelect}
      /> */}

      <div className="rounded-md bg-gray-50 p-2 md:p-6">
        {/* Customer Name */}
        {/* {accountTypeSelect.account.corp && ( */}
        <CorporateAccountSelect
          customers={customers}
          state={state}
          awb={awb}
          btnText={btnText}
        />
        {/* )} */}

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
                // onChange={(e) => trackErrorState(e)}
                defaultValue={awb && awb.awb_num}
                placeholder="Enter Air Way Bill Number"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm font-medium text-gray-500 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:pl-6 md:text-base md:tracking-wider"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
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
                // onChange={(e) => trackErrorState(e)}
                placeholder="Sender's Name"
                className="md:text-md peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm font-medium text-gray-500 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:pl-6 md:text-base md:tracking-wider"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
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
                className="md:text-md peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm font-medium text-gray-500 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:pl-6 md:text-base md:tracking-wider"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
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
                className="md:text-md peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm font-medium text-gray-500 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:pl-6 md:text-base md:tracking-wider"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
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
                className="md:text-medium peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm font-medium text-gray-500 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:pl-6 md:text-base md:tracking-wider"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
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
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm text-gray-500 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:pl-6 md:text-base md:font-medium md:tracking-wider"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
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
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3 shadow-sm">
            <div className="md:flex-stretch flex flex-col gap-4 md:grid md:grid-flow-col md:gap-6">
              <div className="flex items-center">
                <label
                  htmlFor="due_date"
                  className="mr-1 flex items-center whitespace-nowrap rounded-md bg-gray-100 px-3 py-1.5 text-sm font-bold text-gray-600 md:text-base md:font-semibold"
                >
                  Due Date:
                </label>
                <input
                  id="due_date"
                  name="due_date"
                  type="date"
                  autoComplete="bday"
                  defaultValue={defaultDate}
                  className="w-full rounded-md border border-gray-200 py-2 pl-4 text-sm font-medium text-gray-500 shadow-sm hover:shadow-none focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:pl-6 md:text-base md:tracking-wider"
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="weight"
                  className="mr-1 flex items-center rounded-md bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-600 md:text-base md:font-bold"
                >
                  Weight:
                </label>
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  step="0.5"
                  placeholder="eg, 5kg"
                  defaultValue={awb && awb.weight}
                  className="w-full rounded-md border border-gray-200 py-2 pl-4 text-sm font-medium text-gray-500 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:pl-6 md:text-base"
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
