import { db } from "@vercel/postgres";
import { Product } from "./definitions";

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

async function getProductDetails(id:number) {
  const data = await client.sql`
  SELECT * FROM products WHERE productid = ${id}`;
  return data.rows[0];
}

export { getProducts, getCategories, getProductDetails };
