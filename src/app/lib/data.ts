import { sql } from '@vercel/postgres';
import { User, AWB, Customer } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { STATUS } from './constants';

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
      WHERE customer_id = customers.id
      ORDER BY awbs.date DESC
      LIMIT 20`;

    // const latestAwbs = data.rows.map((awb) => ({
    //   ...awb,
    //   amount: formatCurrency(awb.amount),
    // }));
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest awbs.');
  }
}

export async function fetchCardData() {
  noStore();
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const awbCountPromise = sql`SELECT COUNT(*) FROM awbs`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const awbsStatusPendingPromise = sql`SELECT
        SUM(CASE WHEN status = ${STATUS.PENDING} THEN 1 ELSE 0 END) AS "pending"
        FROM awbs
        WHERE awbs.created_at BETWEEN NOW() - INTERVAL '1 MONTH' AND NOW()`;

    const data = await Promise.all([
      awbCountPromise,
      customerCountPromise,
      awbsStatusPendingPromise,
    ]);

    const numberOfAwbs = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPendingAwbs = Number(data[2].rows[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfAwbs,
      totalPendingAwbs,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredAwbs(query: string, currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    // type, that's, STATUS to be looked at
    const awbs = await sql<AWB>`
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
      WHERE
        awbs.customer_id = customers.id AND
        awbs.awb_num ILIKE ${`%${query}%`} OR
        awbs.sender ILIKE ${`%${query}%`} OR
        awbs.due_date::text ILIKE ${`%${query}%`} OR
        awbs.created_at::text ILIKE ${`%${query}%`} OR
        awbs.status ILIKE ${`%${query}%`}
      ORDER BY awbs.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return awbs.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch awbs.');
  }
}

export async function fetchAwbPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM awbs
    WHERE
      awbs.customer_id = customers.id AND
      awbs.awb_num ILIKE ${`%${query}%`} OR
      awbs.sender ILIKE ${`%${query}%`} OR
      awbs.due_date::text ILIKE ${`%${query}%`} OR
      awbs.created_at::text ILIKE ${`%${query}%`} OR
      awbs.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
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
      WHERE awbs.id = ${id};
    `;

    // const invoice = data.rows.map((invoice) => ({
    //   ...invoice,
    //   // Convert amount from cents to dollars
    //   amount: invoice.amount / 100,
    // }));

    // return invoice[0];
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch awb.');
  }
}

export async function fetchCorporateCustomers() {
  try {
    const data = await sql<Customer>`
      SELECT
        customer_id,
        name,
        email,
        phone,
        reg_date
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
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
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
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
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.phone,
      customers.reg_date
		FROM customers
		WHERE
		  customers.name ILIKE ${`%${query}%`}
		ORDER BY customers.name ASC
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

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
