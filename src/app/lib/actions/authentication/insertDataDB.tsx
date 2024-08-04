import { sql } from '@vercel/postgres';
import * as bcrypt from 'bcrypt';

// Insert User data into the database
export const insertUserDataDB = async ({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  const created_at = new Date().toISOString().split('T')[0];
  const hashedPassword = await bcrypt.hash(password, 10);
  // Insert data into the database
  try {
    await sql`
            INSERT INTO users (
                first_name,
                last_name,
                email,
                password,
                created_at
              )
            VALUES (
              ${firstName},
              ${lastName},
              ${email},
              ${hashedPassword}
              ${created_at}
              )
        `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create a User.',
    };
  }
};
