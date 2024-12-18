import { db } from "@vercel/postgres";
import { AddReview, Product, Review, ReviewCount } from "./definitions";
import { UserRegisterData } from "./definitions";
import { use } from "react";
import { User } from "./definitions";
import exp from "constants";
import { getUserFromSession } from "./session";

const client = await db.connect();

async function getProducts(
  limit?: number,
  category?: string
): Promise<Product[]> {
  try {
    let query = `
      SELECT * FROM products
    `;
    if (category) {
      query += ` WHERE category = '${category}' `;
    }
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

// async function getProductDetails(id: string) {
//   const data = await client.sql`
//   SELECT * FROM products WHERE productid = ${id}`;
//   return data.rows[0];
// }

async function getProductDetails(id: string) {
  const data = await client.sql`
  SELECT products.* ,users.firstname, users.lastname 
  FROM products 
  JOIN users ON products.sellerId = users.userId
  WHERE productId = ${id}`;
  return data.rows[0];
}

async function createUser(user: UserRegisterData, hashedPassword: string) {
  const data = await client.sql`
  INSERT INTO users (firstname, lastname, email, password, role)
  VALUES (${user.firstname}, ${user.lastname}, ${user.email}, ${hashedPassword}, ${user.role})
  `;
  return data;
}

export async function getEmail(email: string) {
  const data = await client.sql`
  SELECT userid, firstName, lastname FROM users WHERE email = ${email}`;

  return data;
}

export async function getUser(email: string): Promise<User> {
  const data = await client.sql`
  SELECT * FROM users WHERE email = ${email}`;
  return data.rows[0] as User;
}

export async function getSellerProducts(userId: string) {
  const data = await client.sql`
  SELECT * from products WHERE sellerid = ${userId}`;
  return data.rows as Product[];
}

export async function getReviews(productid: string) {
  const data = await client.sql`
  SELECT * FROM reviews WHERE productid = ${productid}`;

  return data;
}

export async function getAverageReview(
  productid: string
): Promise<ReviewCount> {
  const data = await client.sql`
  SELECT AVG(rating) AS averagerating
  FROM reviews
  WHERE productid = ${productid};`;

  return data.rows[0] as ReviewCount;
}

export async function createReview(review: AddReview) {
  const { user } = await getUserFromSession();
  const data = await client.sql`
    INSERT INTO reviews (productid, userid, rating, review)
    VALUES (${review.productid}, ${user.userid}, ${review.rate}, ${review.review})
    -- RETURNING *;
  `;

  return data.rows;
}
export { getProducts, getCategories, getProductDetails, createUser };
