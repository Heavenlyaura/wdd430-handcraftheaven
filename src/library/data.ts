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

export { getProducts };
