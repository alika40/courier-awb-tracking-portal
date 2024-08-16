'use client';

import { ERROR_MESSAGE, STATUS } from '@/app/lib/constants';
import { AWBInputData, CustomerField, State } from '@/app/lib/definitions';
import {
  Schedule,
  Done,
  LocalShipping,
  PeopleAltRounded,
} from '@mui/icons-material';
import clsx from 'clsx';
// import CustomSnackbar from '../../snackbar';
import { ErrorState } from '../error-state';

export const StatusInTransitRemarks = ({ awb }: { awb: AWBInputData }) => (
  <>
    <div className="mt-4">
      <label htmlFor="remark" className=" block text-sm font-bold md:text-lg">
        Remarks <span className="italic text-gray-400">(Optional):</span>
      </label>
      <textarea
        className="mt-1 block w-full rounded-md border-gray-200 py-2 pl-2 text-sm text-gray-500 placeholder:italic placeholder:text-gray-400 focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 dark:border-zinc-700 dark:bg-zinc-700 dark:text-slate-200 md:w-[50%] md:pl-6 md:text-base md:font-bold md:tracking-wider"
        rows={3}
        id="remark"
        name="remark"
        spellCheck
        maxLength={160}
        placeholder="Example: Estimated delivery period or location of item"
        defaultValue={awb && awb.remark}
      />
    </div>
  </>
);

export const DeliveryDetails = ({
  awb,
  state,
}: {
  awb: AWBInputData;
  state: State;
}) => {
  let defaultDeliveryDate = '';
  if (awb && awb.delivery_date) {
    defaultDeliveryDate = new Date(awb!!.delivery_date)
      .toISOString()
      .substring(0, 10);
  }

  return (
    <>
      {/* Delivery Details */}
      <fieldset className="mt-12">
        <legend className="mb-2 block text-sm font-bold md:text-lg">
          Delivery Details:
        </legend>
        <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3 shadow-sm dark:border-black dark:bg-black dark:text-slate-400">
          <div className="sm:flex-stretch flex flex-col gap-4 sm:grid sm:grid-flow-col sm:gap-6">
            <div className="flex items-center">
              <label
                htmlFor="delivered_to"
                className="mr-1 flex items-center whitespace-nowrap rounded-md bg-gray-100 px-3 py-1.5 text-sm font-bold text-gray-600 dark:bg-zinc-900 dark:text-slate-400 md:text-base md:font-semibold"
              >
                Delivered To:
              </label>
              <input
                id="delivered_to"
                name="delivered_to"
                type="text"
                placeholder="Enter Receiver's Name"
                defaultValue={awb && awb.delivered_to}
                className="w-full rounded-md border border-gray-200 py-2 pl-4 text-sm font-medium  text-gray-500 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:bg-opacity-50 focus:ring-2 focus:ring-pink-900 dark:border-zinc-700 dark:bg-zinc-700 dark:text-slate-200 md:pl-6 md:text-base md:md:font-bold"
              />
            </div>
            <div className="flex items-center">
              <label
                htmlFor="delivery_date"
                className="mr-1 flex items-center whitespace-nowrap rounded-md bg-gray-100 px-3 py-1.5 text-sm font-bold text-gray-600 dark:bg-zinc-900 dark:text-slate-400 md:text-base md:font-semibold"
              >
                Delivery Date:
              </label>
              <input
                id="delivery_date"
                name="delivery_date"
                type="date"
                autoComplete="day"
                defaultValue={defaultDeliveryDate}
                className="w-full rounded-md border border-gray-200 py-2 pl-4 text-sm font-medium text-gray-500 shadow-sm hover:shadow-none focus:border-pink-900 focus:bg-opacity-50 focus:ring-2 focus:ring-pink-900 dark:border-zinc-700 dark:bg-zinc-700 dark:text-slate-200 md:pl-6 md:text-base md:md:font-bold md:tracking-wider"
              />
            </div>
            <div className="flex items-center">
              <label
                htmlFor="delivery_time"
                className="mr-1 flex items-center whitespace-nowrap rounded-md bg-gray-100 px-3 py-1.5 text-sm font-bold text-gray-600 dark:bg-zinc-900 dark:text-slate-400 md:text-base md:font-semibold"
              >
                Delivery Time:
              </label>
              <input
                id="delivery_time"
                name="delivery_time"
                type="time"
                defaultValue={awb && awb.delivery_time}
                className="w-full rounded-md border border-gray-200 py-2 pl-4 text-sm font-medium text-gray-500 shadow-sm hover:shadow-none focus:border-pink-900 focus:bg-opacity-50 focus:ring-2 focus:ring-pink-900 dark:border-zinc-700 dark:bg-zinc-700 dark:text-slate-200 md:pl-6 md:text-base md:md:font-bold md:tracking-wider"
              />
            </div>
          </div>
        </div>
      </fieldset>
      <div className="md:flex md:flex-row md:justify-between">
        {/* Manage Error Component */}
        {/* Error For whom it's delivered to */}
        {state?.errors?.delivered_to && (
          <ErrorState inputName={state.errors.delivered_to} />
        )}
        {/* Error For delivery date */}
        {state?.errors?.delivery_date && (
          <ErrorState inputName={state.errors.delivery_date} />
        )}
        {/* Error For delivery date */}
        {state?.errors?.delivery_time && (
          <ErrorState inputName={state.errors.delivery_time} />
        )}
      </div>
    </>
  );
};

export const StatusCheckDocumented = ({
  awb,
  statusCheckFunc,
}: {
  awb: AWBInputData;
  statusCheckFunc: () => void;
}) => {
  const isDisabled =
    awb && (awb.status === STATUS.PENDING || awb.status === STATUS.DELIVERED);

  return (
    <div className="flex items-center">
      <input
        id="documented"
        name="status"
        type="radio"
        value={STATUS.DOCUMENTED}
        defaultChecked={awb && awb.status === STATUS.DOCUMENTED}
        disabled={isDisabled}
        onChange={statusCheckFunc}
        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-pink-900 focus:ring-2 focus:ring-pink-300 disabled:cursor-not-allowed disabled:opacity-50"
      />
      <label
        htmlFor="documented"
        aria-disabled={isDisabled}
        className={`ml-2 flex items-center gap-1 rounded-full bg-slate-300 px-2 py-1 text-xs font-medium text-slate-700 md:text-sm
      ${clsx(isDisabled ? 'aria-disabled:cursor-not-allowed aria-disabled:bg-opacity-40 aria-disabled:opacity-70' : 'cursor-pointer')}`}
      >
        <Schedule sx={{ fontSize: '20px' }} /> {STATUS.DOCUMENTED}
      </label>
    </div>
  );
};

export const StatusCheckOthers = ({
  awb,
  showDeliveryField,
  showStatusTextareaField,
}: {
  awb: AWBInputData;
  showDeliveryField: () => void;
  showStatusTextareaField: () => void;
}) => {
  const isDisabled = awb && awb.status === STATUS.DELIVERED;

  return (
    <>
      <div className="flex items-center">
        <input
          id="pending"
          name="status"
          type="radio"
          value={STATUS.PENDING}
          defaultChecked={awb && awb.status === STATUS.PENDING}
          disabled={isDisabled}
          onChange={showStatusTextareaField}
          className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-pink-900 focus:ring-2 focus:ring-pink-300 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <label
          htmlFor="pending"
          aria-disabled={isDisabled}
          className={`ml-2 flex items-center gap-1 rounded-full bg-rose-500 px-2 py-1 text-xs font-medium text-white md:text-sm
        ${clsx(isDisabled ? 'aria-disabled:cursor-not-allowed aria-disabled:bg-opacity-40 aria-disabled:opacity-70' : 'cursor-pointer')}`}
        >
          <LocalShipping sx={{ fontSize: '20px' }} /> {STATUS.PENDING}
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="delivered"
          name="status"
          type="radio"
          value={STATUS.DELIVERED}
          defaultChecked={awb && awb.status === STATUS.DELIVERED}
          onChange={showDeliveryField}
          className="h-4 w-4 cursor-pointer border-gray-300  bg-gray-100 text-pink-900 focus:ring-2 focus:ring-pink-300"
        />
        <label
          htmlFor="delivered"
          className="ml-2 flex cursor-pointer items-center gap-1 rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white md:text-sm"
        >
          <Done sx={{ fontSize: '20px' }} /> {STATUS.DELIVERED}
        </label>
      </div>
    </>
  );
};

export const CorporateAccountSelect = ({
  awb,
  customers,
  state,
  btnText,
}: {
  awb?: AWBInputData;
  customers: CustomerField[];
  state: State;
  btnText: string;
}) => {
  return (
    <div className="mb-4 md:mb-6">
      <label
        htmlFor="customer"
        className="mb-2 block text-sm font-bold dark:text-slate-400 md:text-lg"
      >
        Choose customer:
      </label>
      <div className="relative">
        <select
          id="customer"
          name="customer_id"
          className="peer col-start-1 row-start-1 block w-full cursor-pointer appearance-none rounded-md border-gray-200 py-2 pl-8 text-sm font-medium text-gray-600 shadow-sm hover:shadow-none focus:border-pink-900 focus:ring-2 focus:ring-pink-900 dark:border-black dark:bg-zinc-700 dark:text-slate-200 md:text-base md:font-black"
          defaultValue={awb && awb.customer_id}
          aria-describedby="awb-error"
        >
          <option
            className="italic text-gray-600 outline-2 dark:text-slate-200 md:text-base md:font-black"
            value=""
            disabled
          >
            --Select a Customer--
          </option>
          {customers.map((customer) => (
            <option
              key={customer.customer_id}
              value={customer.customer_id}
              className="sm:text-md peer text-sm text-gray-600 dark:text-slate-200 md:text-base md:font-black md:tracking-wider"
            >
              {customer.name}
            </option>
          ))}
        </select>
        <PeopleAltRounded
          sx={{ fontSize: '18px' }}
          className="pointer-events-none absolute left-2 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-pink-900"
        />
      </div>
      {/* Manage Error Component */}
      <div id="awb-error" aria-live="polite" aria-atomic="true">
        {state?.errors?.customer_id &&
          state?.errors.customer_id.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {ERROR_MESSAGE.customer_id}
            </p>
          ))}
      </div>
    </div>
  );
};
