import { db } from "@vercel/postgres";
import { Product } from "./definitions";

const client = await db.connect();

async function getTrendingProducts(): Promise<Product[]> {
  try {
    const data = await client.sql`
            SELECT * FROM products
            LIMIT 4;
        `;
    return data.rows as Product[];
  } catch (error) {
    console.error("Error fetching trending products:", error);
    throw new Error("Failed to fetch trending products");
  }
}

export { getTrendingProducts };
