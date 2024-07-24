import { sql } from '@vercel/postgres';
import { Awb } from './validations/validateForm';

// Insert AWB data into the database
export const insertDataDB = async ({
  customer_id,
  awb_num,
  sender,
  receiver,
  receiver_address,
  destination,
  item_description,
  due_date,
  status,
  weight,
  remark,
  delivered_to,
  delivery_date,
  delivery_time,
}: Awb) => {
  const created_at = new Date().toISOString().split('T')[0];
  // const cust_id = customer_id ? customer_id : null;
  const rem = remark ? remark : null;
  const del_to = delivered_to ? delivered_to : null;
  const del_date = delivery_date ? delivery_date : null;
  const del_time = delivery_time ? delivery_time : null;

  // Insert data into the database
  try {
    await sql`
            INSERT INTO awbs (
              customer_id,
              awb_num,
              sender,
              receiver,
              receiver_address,
              destination,
              item_description,
              created_at,
              due_date,
              status,
              weight,
              remark,
              delivered_to,
              delivery_date,
              delivery_time
              )
            VALUES (
              ${customer_id},
              ${awb_num},
              ${sender},
              ${receiver},
              ${receiver_address},
              ${destination},
              ${item_description},
              ${created_at},
              ${due_date},
              ${status},
              ${weight},
              ${rem},
              ${del_to},
              ${del_date},
              ${del_time}
              )
        `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create AWB.',
    };
  }
};

// Update AWB data in the database
export const updateDataDB = async (
  {
    customer_id,
    awb_num,
    sender,
    receiver,
    receiver_address,
    destination,
    item_description,
    due_date,
    status,
    weight,
    remark,
    delivered_to,
    delivery_date,
    delivery_time,
  }: Awb,
  id: string,
) => {
  // Insert data into the database
  try {
    await sql`
    UPDATE awbs
    SET customer_id = ${customer_id},
    awb_num = ${awb_num},
    sender = ${sender},
    receiver = ${receiver},
    receiver_address = ${receiver_address},
    destination = ${destination},
    item_description = ${item_description},
    due_date = ${due_date},
    status = ${status},
    weight = ${weight},
    remark = ${remark},
    delivered_to = ${delivered_to},
    delivery_date = ${delivery_date},
    delivery_time = ${delivery_time}
    WHERE id = ${id}
  `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update AWB.',
    };
  }
};

// Insert customer data into the database
export const insertCustomerDataDB = async ({
  customer_name,
  phone_num,
  email_address,
}: {
  customer_name: string;
  phone_num: string;
  email_address?: string;
}) => {
  const created_at = new Date().toISOString().split('T')[0];
  const email = email_address ? email_address : null;
  // Insert data into the database
  try {
    await sql`
            INSERT INTO customers (
              name,
              email,
              phone,
              reg_date
              )
            VALUES (
              ${customer_name},
              ${email},
              ${phone_num},
              ${created_at}
              )
        `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create a Customer.',
    };
  }
};

// Update customer data into the database
export const updateCustomerDataDB = async (
  {
    customer_name,
    phone_num,
    email_address,
  }: {
    customer_name: string;
    phone_num: string;
    email_address?: string;
  },
  id: string,
) => {
  // Insert data into the database
  try {
    await sql`
            UPDATE customers
              SET name = ${customer_name},
                  email = ${email_address},
                  phone = ${phone_num}
              WHERE customer_id = ${id}
        `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update a Customer.',
    };
  }
};
