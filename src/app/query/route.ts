import { db } from "@vercel/postgres";

const client = await db.connect();

async function listUsers() {
  const data = await client.sql`
    SELECT * FROM users`;
  return data.rows;
}
async function listproducts() {
  const data = await client.sql`
    SELECT * FROM products`;
  return data.rows;
}

async function getCategories() {
  const data = await client.sql`
  SELECT category FROM products`;
  return data.rows;
}
async function getReviews() {
  const data = await client.sql`
  SELECT * FROM reviews`;
  return data.rows;
}

export async function GET() {
  try {
    return Response.json(await getReviews());
  } catch (error) {
    console.error(error)
    return Response.json({ error });
  }
}
