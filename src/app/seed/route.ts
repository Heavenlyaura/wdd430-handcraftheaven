import { db } from "@vercel/postgres";
import { products } from "@/library/placeholders";
import bcrypt from "bcrypt";

const client = await db.connect();

async function seedProducts() {
  try {
    // Ensure the Products table exists
    await client.sql`
      CREATE TABLE IF NOT EXISTS products (
        productid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        sellerid UUID NOT NULL,
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
    userid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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

async function seedReviews() {
  // Create the reviews table if it doesn't exist
  await client.sql`
  CREATE TABLE IF NOT EXISTS reviews (
    reviewid UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- UUID primary key
    productid UUID NOT NULL, -- Foreign key to the products table
    userid UUID NOT NULL, -- Foreign key to the users table
    rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5), -- Rating between 1 and 5
    review TEXT, -- The review content
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto-set when the row is created
    FOREIGN KEY (productid) REFERENCES products(productid) ON DELETE CASCADE, -- Cascade delete for products
    FOREIGN KEY (userid) REFERENCES users(userid) ON DELETE CASCADE -- Cascade delete for users
  );
`;

  // Insert a review into the reviews table
  const insertedReview = await client.sql`
    INSERT INTO reviews (productid, userid, rating, review)
    VALUES (
      '77bf3435-8adf-4fc7-8273-69a1030b00ed', 
      '42840d04-2c33-4a0f-a24e-c7f4cb3f99f5',
      5, -- Rating
      'I think I like the design ' -- Review text
    )
    ON CONFLICT (reviewid) DO NOTHING
    RETURNING *; -- Return the inserted rows
  `;

  return insertedReview.rows;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    // await seedUsers();
    // await seedProducts();
    await seedReviews();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    console.log(error);
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
