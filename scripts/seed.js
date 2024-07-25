const { db } = require('@vercel/postgres');
const {
  awbs,
  customers,
  STATUS,
  users,
} = require('../src/app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    // await client.sql`DROP TABLE users CASCADE`;
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, first_name, last_name, email, password)
        VALUES (${user.id}, ${user.first_name}, ${user.last_name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedAWBs(client) {
  try {
    // await client.sql`DROP TABLE awbs CASCADE`; 
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`; 
    
    // await client.sql`CREATE TYPE status AS ENUM (
    //   ${STATUS.DOCUMENTED}, 
    //   ${STATUS.PENDING}, 
    //   ${STATUS.DELIVERED}
    //   )`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS awbs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    customer_id UUID NOT NULL,
    awb_num VARCHAR(100) NOT NULL,
    sender VARCHAR(100) NOT NULL,
    receiver VARCHAR(100) NOT NULL,
    receiver_address VARCHAR(225) NOT NULL,
    destination VARCHAR(100) NOT NULL,
    item_description VARCHAR(225) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    due_date DATE NOT NULL,
    status VARCHAR(100) NOT NULL,
    weight REAL NOT NULL CHECK(weight >= 0.5),
    remark VARCHAR(225),
    delivered_to VARCHAR(100),
    delivery_date DATE,
    delivery_time TIME,
    CONSTRAINT fk_customer
      FOREIGN KEY(customer_id) 
        REFERENCES customers(customer_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
  );
`;

    console.log(`Created "awbs" table`);

    // Insert data into the "awbs" table
    const insertedAwbs = await Promise.all(
      awbs.map(
        (awb) => client.sql`
        INSERT INTO awbs (
          id,
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
          ${awb.id},
          ${awb.customer_id},
          ${awb.awb_num},
          ${awb.sender},
          ${awb.receiver},
          ${awb.receiver_address},
          ${awb.destination},
          ${awb.item_description},
          ${awb.created_at},
          ${awb.due_date},
          ${awb.status},
          ${awb.weight},
          ${awb.remark},
          ${awb.delivered_to},
          ${awb.delivery_date},
          ${awb.delivery_time}
          )
        ON CONFLICT (id) DO NOTHING;
      `
      ),
    );

    console.log(`Seeded ${insertedAwbs.length} awbs`);

    return {
      createTable,
      awbs: insertedAwbs,
    };
  } catch (error) {
    console.error('Error seeding awbs:', error);
    throw error;
  }
}

async function seedCustomers(client) {
  try {
    // await client.sql`DROP TABLE customers CASCADE`; 
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        customer_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255),
        phone VARCHAR(25) NOT NULL,
        reg_date TIMESTAMP NOT NULL
      );
    `;

    console.log(`Created "customers" table`);

    // Insert data into the "customers" table
    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (
          customer_id,
          name,
          email, 
          phone,
          reg_date
          )
        VALUES (
          ${customer.customer_id},
          ${customer.name},
          ${customer.email},
          ${customer.phone},
          ${customer.reg_date}
          )
        ON CONFLICT (customer_id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedCustomers.length} customers`);

    return {
      createTable,
      customers: insertedCustomers,
    };
  } catch (error) {
    console.error('Error seeding customers:', error);
    throw error;
  }
}


async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedCustomers(client);
  await seedAWBs(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
