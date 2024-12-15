import { db } from "@vercel/postgres";

const client = await db.connect();

async function listUsers() {
  const data = await client.sql`
    SELECT * FROM products`;
  return data.rows;
}

async function getCategories() {
  const data = await client.sql`
  SELECT category FROM products`;
  return data.rows;
}

export async function GET() {
  try {
    return Response.json(await listUsers());
  } catch (error) {
    return Response.json({ error });
  }
}
