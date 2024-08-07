import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Dispatch, SetStateAction } from 'react';
// import { STATUS } from './constants';

// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export interface ReactNode {
  children: React.ReactNode;
}

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

// Generic type
export type Dispatcher<S> = Dispatch<SetStateAction<S>>;

// Error State
export type State =
  | {
      errors?: {
        customer_id?: string[];
        awb_num?: string[];
        sender?: string[];
        receiver?: string[];
        receiver_address?: string[];
        destination?: string[];
        item_description?: string[];
        due_date?: string[];
        status?: string[];
        // remark?: string[];
        weight?: string[];
        delivered_to?: string[];
        delivery_date?: string[];
        delivery_time?: string[];
      };
      message?: string;
    }
  | undefined;

// Error State for Customer Create
export type CustomerState =
  | {
      errors?: {
        customer_name?: string[];
        phone_num?: string[];
      };
      message?: string;
    }
  | undefined;

// Error State for awb tracking form
export type SearchState =
  | {
      errors?: {
        awb_num?: string[];
      };
      message?: string;
    }
  | undefined;

// Error state for authentication signup
export type FormStateAuth =
  | {
      errors?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
      };
      message?: string;
    }
  | undefined;

// Error state for authentication login
export type FormStateAuth2 =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  created_at: string;
  // privilege: 'LEVEL-1' | 'LEVEL-2';
  // role: 'ADMINISTRATOR' | 'USER';
}

export type Customer = {
  customer_id: string;
  name: string;
  email?: string;
  phone: string;
  reg_date: string;
};

export type AWB = {
  id: string;
  customer_id: string;
  awb_num: string; // number
  sender: string;
  receiver: string;
  receiver_address: string;
  destination: string;
  item_description: string;
  weight: number; // string
  created_at: string;
  due_date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'Documented' | 'In Transit' | 'Delivered'; // diff btw issue_date and due_date excluding Sat and Sun
  remark: string;
  delivered_to: string;
  delivery_date: string;
  delivery_time: string;
};

export type AWBInputData = {
  id: string;
  customer_id: string;
  awb_num: string; // number
  sender: string;
  receiver: string;
  receiver_address: string;
  destination: string;
  item_description: string;
  weight: number; // string
  created_at: string;
  due_date: string;
  status: string;
  remark?: string;
  delivered_to?: string;
  delivery_date?: string;
  delivery_time?: string;
};

export type AWBTable = {
  customer_name: string;
  id: string;
  customer_id: string;
  awb_num: string; // number
  sender: string;
  receiver: string;
  receiver_address: string;
  destination: string;
  item_description: string;
  weight: number; // string
  created_at: string;
  due_date: string;
  status: string;
  remark?: string;
  delivered_to?: string;
  delivery_date?: string;
  delivery_time?: string;
};

export type TrackAwbNum = {
  sender: string;
  receiver: string;
  status: string;
  remark: string;
  delivered_to: string;
  delivery_date: string;
  delivery_time: string;
};

/*
export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type AirWayBillsTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};*/

export type CustomerField = {
  customer_id: string;
  name: string;
};

// export type AirWayBillForm = {
//   id: string;
//   customer_id: string;
//   amount: number;
//   status: 'pending' | 'paid';
// };
