import { db } from "@vercel/postgres";
import { Product } from "./definitions";
import { UserRegisterData } from "./definitions";
import { use } from "react";

const client = await db.connect();

async function getProducts(limit?: number): Promise<Product[]> {
  try {
    let query = `
      SELECT * FROM products
    `;
    if (limit !== undefined && limit > 0) {
      query += ` LIMIT ${limit}`;
    }
    const data = await client.query(query);
    return data.rows as Product[];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}

async function getCategories() {
  const data = await client.sql`
    SELECT DISTINCT category FROM products`;
  return data.rows;
}

async function getProductDetails(id: string) {
  console.log(id);
  const data = await client.sql`
  SELECT * FROM products WHERE productid = ${id}`;
  return data.rows[0];
}

async function createUser(user: UserRegisterData, hashedPassword: string) {
  const data = await client.sql`
  INSERT INTO users (firstname, lastname, email, password, role)
  VALUES (${user.firstname}, ${user.lastname}, ${user.email}, ${hashedPassword}, ${user.role})
  `;
  // console.log(data)
  return data.rows;
}

export async function getEmail(email: string) {
  const data = await client.sql`
  SELECT email FROM users WHERE email = ${email}`;

  return data.rowCount;
}

export { getProducts, getCategories, getProductDetails, createUser };
