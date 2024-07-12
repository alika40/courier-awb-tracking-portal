'use client';

import { ACTION, ERROR_MESSAGE, STATUS } from '@/app/lib/constants';
import { AWB, AWBInputData, CustomerField, State } from '@/app/lib/definitions';
import {
  Schedule,
  Done,
  LocalShipping,
  BusinessCenterOutlined,
  Person,
  VerifiedUserRounded,
  Person2,
  PeopleAltRounded,
} from '@mui/icons-material';
import clsx from 'clsx';
import { ACCOUNT_TYPE } from '@/app/lib/constants';
import CustomSnackbar from '../../snackbar';
import { ChangeEvent, useState } from 'react';
import { ErrorState } from '../error-state';
import { AccountType } from './customHooks/useAccountType';

export const StatusInTransitRemarks = ({ awb }: { awb: AWBInputData }) => (
  <>
    <div className="mt-4">
      <label htmlFor="remark" className=" block text-sm font-bold md:text-lg">
        Remarks <span className="italic text-gray-400">(Optional):</span>
      </label>
      <textarea
        className="mt-1 block w-full rounded-md border-gray-200 py-2 pl-2 text-sm text-gray-500 placeholder:italic placeholder:text-gray-400 focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:w-[50%] md:text-base md:font-medium md:tracking-wider"
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
}) => (
  <>
    {/* Delivery Details */}
    <fieldset className="mt-12">
      <legend className="mb-2 block text-sm font-bold md:text-lg">
        Delivery Details:
      </legend>
      <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3 shadow-sm">
        <div className="sm:flex-stretch flex flex-col gap-4 sm:grid sm:grid-flow-col sm:gap-6">
          <div className="flex items-center">
            <label
              htmlFor="delivered_to"
              className="mr-1 flex items-center whitespace-nowrap rounded-md bg-gray-100 px-3 py-1.5 text-sm font-bold text-gray-600"
            >
              Delivered To:
            </label>
            <input
              id="delivered_to"
              name="delivered_to"
              type="text"
              placeholder="Enter Receiver's Name"
              defaultValue={awb && awb.delivered_to}
              className="w-full rounded-md border border-gray-200 py-2 pl-2 text-sm text-gray-500 shadow-sm placeholder:italic placeholder:text-gray-300 hover:shadow-none focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:text-base md:font-medium md:tracking-wider"
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="delivery_date"
              className="mr-1 flex items-center whitespace-nowrap rounded-md bg-gray-100 px-3 py-1.5 text-sm font-bold text-gray-600"
            >
              Delivery Date:
            </label>
            <input
              id="delivery_date"
              name="delivery_date"
              type="date"
              autoComplete="day"
              defaultValue={awb && awb.delivery_date}
              className="w-full rounded-md border border-gray-200 py-2 pl-2 text-sm text-gray-500 shadow-sm hover:shadow-none focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:text-base md:font-medium md:tracking-wider"
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="delivery_time"
              className="mr-1 flex items-center whitespace-nowrap rounded-md bg-gray-100 px-3 py-1.5 text-sm font-bold text-gray-600"
            >
              Delivery Time:
            </label>
            <input
              id="delivery_time"
              name="delivery_time"
              type="time"
              defaultValue={awb && awb.delivery_time}
              className="w-full rounded-md border border-gray-200 py-2 pl-2 text-sm text-gray-500 shadow-sm hover:shadow-none focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900 md:text-base md:font-medium md:tracking-wider"
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

/*
export const AccountTypeSelect = ({
  accountTypeSelect,
  handleAcctTypeSelect,
}: {
  accountTypeSelect: AccountType;
  handleAcctTypeSelect: () => void;
}) => {
  const [open, setOpen] = useState<boolean>(false); // Snackbar Error Message
  const isDisabledCorp =
    accountTypeSelect.isDisabled.corporateDisabled &&
    accountTypeSelect.isDisabled.action === ACTION.EDIT;

  const isDisabledInd =
    accountTypeSelect.isDisabled.individualDisabled &&
    accountTypeSelect.isDisabled.action === ACTION.EDIT;

  const handleClick = () => {
    // Handles 'CustomSnackbar' click
    setOpen(() => true);
  };

  return (
    <>
      <fieldset className="mb-4 mt-4 md:mb-6 md:mt-12">
        <legend className="md:text-medium mb-2 block text-sm font-bold md:text-lg">
          Account Type:
        </legend>
        <div className="flex flex-col gap-3 md:flex-row md:gap-6">
          <div className="flex items-center">
            <input
              id="corporate"
              name="account_type"
              type="radio"
              value={ACCOUNT_TYPE.CORPORATE}
              defaultChecked={accountTypeSelect.account.corp}
              disabled={isDisabledCorp}
              onChange={() => {
                handleClick();
                handleAcctTypeSelect();
              }}
              className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-pink-900 focus:ring-2 focus:ring-pink-300 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <label
              htmlFor="corporate"
              aria-disabled={isDisabledCorp}
              className={`ml-2 flex items-center gap-1 rounded-full bg-rose-500 px-2 py-1 text-xs font-medium text-white md:text-sm
              ${clsx(isDisabledCorp ? 'aria-disabled:cursor-not-allowed aria-disabled:bg-opacity-40 aria-disabled:opacity-70' : 'cursor-pointer')}`}
            >
              <BusinessCenterOutlined sx={{ fontSize: '20px' }} />
              {ACCOUNT_TYPE.CORPORATE}
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="individual"
              name="account_type"
              type="radio"
              value={ACCOUNT_TYPE.INDIVIDUAL}
              defaultChecked={accountTypeSelect.account.ind}
              disabled={isDisabledInd}
              onChange={() => {
                handleClick();
                handleAcctTypeSelect();
              }}
              className="h-4 w-4 cursor-pointer border-gray-300  bg-gray-100 text-pink-900 focus:ring-2 focus:ring-pink-300 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <label
              htmlFor="individual"
              aria-disabled={isDisabledInd}
              className={`ml-2 flex items-center gap-1 rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white md:text-sm
              ${clsx(isDisabledInd ? 'aria-disabled:cursor-not-allowed aria-disabled:bg-opacity-40 aria-disabled:opacity-70' : 'cursor-pointer')}`}
            >
              <Person sx={{ fontSize: '20px' }} /> {ACCOUNT_TYPE.INDIVIDUAL}
            </label>
          </div>
        </div>
      </fieldset>

      <CustomSnackbar
        message={`WARNING: Can't be changed once account is created!`}
        open={open}
        setOpen={setOpen}
        autoHideDuration={null}
      />
    </>
  );
};*/

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
  let initialValue = '';
  if (ACTION.EDIT === btnText) {
    if (awb && awb.customer_id) {
      initialValue = customers.filter(
        (customer) => customer.customer_id === awb.customer_id,
      )[0].name;
    }
  }

  const [customerName, setCustomerName] = useState<string | undefined>(
    initialValue,
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCustomerName(event.target.value as string);
  };

  console.log(customerName, ';;;', initialValue);

  return (
    <div className="mb-4 md:mb-6">
      <label
        htmlFor="customer"
        className="mb-2 block text-sm font-bold md:text-lg"
      >
        Choose customer:
      </label>
      <div className="relative">
        <select
          // disabled={true}
          id="customer"
          name="customer_id"
          className="md:text-md peer col-start-1 row-start-1 block w-full cursor-pointer appearance-none rounded-md border-gray-200 py-2 pl-10 text-sm font-medium shadow-sm hover:shadow-none focus:border-pink-900 focus:opacity-50 focus:ring-2 focus:ring-pink-900"
          // defaultValue={customerName}
          defaultValue={awb && awb.customer_id}
          aria-describedby="awb-error"
          onChange={handleChange}
        >
          <option
            className="italic text-gray-500 outline-2 md:text-base md:font-medium"
            value=""
            disabled
          >
            --Select a Customer--
          </option>
          {customers.map((customer) => (
            <option
              key={customer.customer_id}
              value={customer.customer_id}
              className="sm:text-md pl-4 text-sm text-gray-500 md:pl-6 md:text-base md:font-medium md:tracking-wider"
            >
              {customer.name}
            </option>
          ))}
        </select>
        <PeopleAltRounded className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
      </div>
      {/* Manage Error Component */}
      {/* {state.errors?.customer_id && (
        <ErrorState inputName={state.errors.customer_id} />
      )} */}
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
