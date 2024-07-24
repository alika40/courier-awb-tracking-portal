import { sql } from '@vercel/postgres';
import {
  User,
  AWB,
  Customer,
  AWBTable,
  AWBInputData,
  CustomerField,
  TrackAwbNum,
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { STATUS } from './constants';

/*
export async function fetchAwbs() {
  noStore();
  try {
    const data = await sql<AWB>`
      SELECT
        awbs.id,
        awbs.awb_num,
        awbs.sender,
        awbs.receiver,
        awbs.receiver_address,
        awbs.destination,
        awbs.item_description,
        awbs.created_at,
        awbs.due_date,
        awbs.status,
        awbs.weight,
        awbs.remark,
        awbs.delivered_to,
        awbs.delivery_date,
        awbs.delivery_time
      FROM awbs
      ORDER BY awbs.created_at DESC
      LIMIT 10`;

    // const latestAwbs = data.rows.map((awb) => ({
    //   ...awb,
    //   amount: formatCurrency(awb.amount),
    // }));
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest awbs.');
  }
}*/

export async function fetchAwbCardData(customer_id: string) {
  noStore();
  try {
    const awbCountPromise = sql`SELECT COUNT(*) FROM awbs WHERE awbs.customer_id = ${customer_id} AND awbs.created_at BETWEEN NOW() - INTERVAL '1 MONTH' AND NOW()`;
    const awbsStatusPendingPromise = sql`SELECT
        SUM(CASE WHEN status = ${STATUS.PENDING} THEN 1 ELSE 0 END) AS "Pending"
        FROM awbs
        WHERE awbs.customer_id = ${customer_id} AND awbs.created_at BETWEEN NOW() - INTERVAL '1 MONTH' AND NOW()`;
    const awbsOverDuePromise = sql`SELECT
        SUM(CASE WHEN status = ${STATUS.PENDING} THEN 1 ELSE 0 END) AS "over_due"
        FROM awbs
        WHERE awbs.due_date >= NOW() AND awbs.customer_id = ${customer_id}`;

    const data = await Promise.all([
      awbCountPromise,
      awbsStatusPendingPromise,
      awbsOverDuePromise,
    ]);

    const numberOfAwbs = Number(data[0].rows[0].count ?? '0');
    const totalPendingAwbs = Number(data[1].rows[0].pending ?? '0');
    const numberOfOverDueAwbs = Number(data[2].rows[0].over_due ?? '0');

    return {
      numberOfAwbs,
      totalPendingAwbs,
      numberOfOverDueAwbs,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 10;

export async function fetchFilteredAwbs(
  customer_id: string,
  query: string,
  currentPage: number,
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    // type, that's, STATUS to be looked at
    const awbs = await sql<AWBTable>`
      SELECT
        customers.name,
        awbs.id,
        awbs.awb_num,
        awbs.sender,
        awbs.receiver,
        awbs.receiver_address,
        awbs.destination,
        awbs.item_description,
        awbs.created_at,
        awbs.due_date,
        awbs.status,
        awbs.weight,
        awbs.remark,
        awbs.delivered_to,
        awbs.delivery_date,
        awbs.delivery_time
      FROM awbs
      JOIN customers ON awbs.customer_id = customers.customer_id
      WHERE
        awbs.customer_id = ${customer_id} AND awbs.awb_num ILIKE ${`%${query}%`}
      ORDER BY awbs.created_at DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    //     awbs.customer_id = ${customer_id} AND
    //     awbs.awb_num ILIKE ${`%${query}%`} OR
    //     awbs.sender ILIKE ${`%${query}%`} OR
    //     awbs.due_date::text ILIKE ${`%${query}%`} OR
    //     awbs.created_at::text ILIKE ${`%${query}%`} OR
    //     awbs.status ILIKE ${`%${query}%`}

    return awbs.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch awbs.');
  }
}

export async function fetchAwbPages(customer_id: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM awbs
    JOIN customers ON awbs.customer_id = customers.customer_id
    WHERE
      awbs.customer_id = ${customer_id}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    // console.log(totalPages, customer_id);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of awbs.');
  }
}

export async function fetchAwbById(id: string) {
  noStore();
  try {
    // type, that's, STATUS to be looked at
    const data = await sql`
        SELECT
        awbs.id,
        awbs.customer_id,
        awbs.awb_num,
        awbs.sender,
        awbs.receiver,
        awbs.receiver_address,
        awbs.destination,
        awbs.item_description,
        awbs.created_at,
        awbs.due_date,
        awbs.status,
        awbs.weight,
        awbs.remark,
        awbs.delivered_to,
        awbs.delivery_date,
        awbs.delivery_time,
        customers.name
      FROM awbs
      JOIN customers ON awbs.customer_id = customers.customer_id
      WHERE
        awbs.id = ${id}
    `;

    const combinedData = data.rows[0];
    const customer = [
      {
        customer_id: combinedData.customer_id,
        name: combinedData.name,
      },
    ] as CustomerField[];
    const awb = combinedData as AWBInputData;

    return { awb, customer };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch awb.');
  }
}

/*
export async function fetchCustomersTable() {
  noStore();
  try {
    const data = await sql<Customer>`
      SELECT
        customer_id,
        name,
        email,
        phone,
        reg_date
      FROM customers
      ORDER BY reg_date ASC
    `;

    return data.rows[0];
  } catch (err) {
    console.error('Database Error:', err);
    // throw new Error('Failed to fetch all customers.');
  }
}*/

export async function fetchCustomersCardData() {
  noStore();
  try {
    const customersCountPromise = sql`SELECT COUNT(*)
        FROM customers`;
    const awbsStatusPendingPromise = sql`SELECT
        SUM(CASE WHEN status = ${STATUS.PENDING} THEN 1 ELSE 0 END) AS "Pending"
        FROM awbs
        WHERE awbs.created_at BETWEEN NOW() - INTERVAL '1 MONTH' AND NOW()`;
    const awbsCountPromise = sql`SELECT COUNT(*)
        FROM customers 
        WHERE customers.reg_date BETWEEN NOW() - INTERVAL '1 MONTH' AND NOW()`;

    const data = await Promise.all([
      awbsCountPromise,
      awbsStatusPendingPromise,
      customersCountPromise,
      ,
    ]);

    const numberOfAwbs = Number(data[0].rows[0].count ?? '0');
    const totalPendingAwbs = Number(data[1].rows[0].pending ?? '0');
    const numberOfCustomers = Number(data[2].rows[0].count ?? '0');

    return {
      numberOfAwbs,
      totalPendingAwbs,
      numberOfCustomers,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function fetchCustomersCreate() {
  noStore();
  try {
    const data = await sql<CustomerField>`
      SELECT
        customer_id,
        name
      FROM customers
    `;

    return data.rows;
  } catch (err) {
    console.error('Database Error:', err);
    // throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchCustomersPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM customers
    WHERE
      customers.name ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of customers.');
  }
}

export async function fetchCustomerById(id: string) {
  try {
    const data = await sql<Customer>`
      SELECT
        customers.customer_id,
        customers.name,
        customers.email,
        customers.phone,
        customers.reg_date
      FROM customers
      WHERE customers.customer_id = ${id}
    `;

    return data.rows[0];
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch a customer.');
  }
}

export async function fetchFilteredCustomers(
  query: string,
  currentPage: number,
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const data = await sql<Customer>`
		SELECT
		  customers.customer_id,
		  customers.name,
		  customers.email,
		  customers.phone,
      customers.reg_date
		FROM customers
		WHERE
		  customers.name ILIKE ${`%${query}%`}
		ORDER BY customers.reg_date ASC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
	  `;

    // const customers = data.rows.map((customer) => ({
    //   ...customer,
    //   total_pending: formatCurrency(customer.total_pending),
    //   total_paid: formatCurrency(customer.total_paid),
    // }));

    return data.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

export async function fetchAwbByAwbNum(awb_num: string) {
  noStore();
  try {
    // type, that's, STATUS to be looked at
    const data = await sql<TrackAwbNum>`
        SELECT
        awbs.sender,
        receiver,
        awbs.status,
        awbs.remark,
        awbs.delivered_to,
        awbs.delivery_date,
        awbs.delivery_time
      FROM awbs
      WHERE
        awbs.awb_num = ${awb_num}
    `;

    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch awb.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
