import { db } from "@vercel/postgres";
import { products } from "@/library/placeholders";
import bcrypt from "bcrypt";

const client = await db.connect();

async function seedProducts() {
  try {
    // Ensure the Products table exists
    await client.sql`
      CREATE TABLE IF NOT EXISTS products (
        productId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        sellerId VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        category VARCHAR(50),
        imageUrl TEXT
      );
    `;

    // Insert product data
    const insertedProducts = await Promise.all(
      products.map(async (product) => {
        return client.sql`
          INSERT INTO products (sellerId, name, description, price, category, imageUrl)
          VALUES (${product.sellerId}, ${product.name}, ${product.description}, ${product.price}, ${product.category}, ${product.imageUrl})
          ON CONFLICT (productId) DO NOTHING;
        `;
      })
    );

    return insertedProducts;
  } catch (error) {
    console.error("Error seeding products:", error);
  }
}

async function seedUsers() {
  const data = await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
    userId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('seller', 'buyer'))
    );
  `;

  //   users.map(async (user) => {
  //     const hashedPassword = await bcrypt.hash(user.password, 10);
  //     return client.sql`
  //       INSERT INTO users (name, email, password, role)
  //       VALUES (${user.name}, ${user.email},${hashedPassword}, ${user.role})
  //       ON CONFLICT (userId) DO NOTHING;
  //     `;
  //   })
  // );

  return data;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    // await seedUsers();
    await seedProducts();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    console.log(error);
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
