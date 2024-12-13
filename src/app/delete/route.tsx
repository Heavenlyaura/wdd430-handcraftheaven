import { db } from "@vercel/postgres";

const client = await db.connect();

async function deleteAllProducts() {
  try {
    const result = await client.sql`
        DELETE FROM products`;

    return { message: `${result.rowCount} products deleted successfully.` };
  } catch (error) {
    return { error };
  }
}

export async function GET() {
  try {
    return Response.json(await deleteAllProducts());
  } catch (error) {
    return Response.json({ error });
  }
}
