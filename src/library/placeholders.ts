const products = [
  {
    productId: 1,
    sellerId: 1,
    name: "Handmade Mug",
    description: "A beautiful handmade ceramic mug.",
    price: 15.99,
    category: "Ceramics",
    imageUrl: "https://example.com/mug.jpg",
  },
  {
    productId: 2,
    sellerId: 1,
    name: "Knitted Scarf",
    description: "A cozy knitted scarf.",
    price: 20.0,
    category: "Accessories",
    imageUrl: "https://example.com/scarf.jpg",
  },
  {
    productId: 3,
    sellerId: 2,
    name: "Wooden Coasters",
    description: "Handcrafted wooden coasters, perfect for any table.",
    price: 12.5,
    category: "Home Decor",
    imageUrl: "https://example.com/coasters.jpg",
  },
  {
    productId: 4,
    sellerId: 2,
    name: "Embroidered Pillow",
    description: "A soft pillow with beautiful embroidered designs.",
    price: 25.99,
    category: "Textiles",
    imageUrl: "https://example.com/pillow.jpg",
  },
  {
    productId: 5,
    sellerId: 3,
    name: "Leather Wallet",
    description: "A durable, handmade leather wallet.",
    price: 30.0,
    category: "Accessories",
    imageUrl: "https://example.com/wallet.jpg",
  },
  {
    productId: 6,
    sellerId: 3,
    name: "Canvas Painting",
    description: "A stunning canvas painting for your living space.",
    price: 100.0,
    category: "Art",
    imageUrl: "https://example.com/painting.jpg",
  },
  {
    productId: 7,
    sellerId: 4,
    name: "Beaded Necklace",
    description: "A colorful, hand-beaded necklace.",
    price: 18.75,
    category: "Jewelry",
    imageUrl: "https://example.com/necklace.jpg",
  },
  {
    productId: 8,
    sellerId: 4,
    name: "Wool Blanket",
    description: "A warm, handcrafted wool blanket.",
    price: 45.0,
    category: "Textiles",
    imageUrl: "https://example.com/blanket.jpg",
  },
  {
    productId: 9,
    sellerId: 5,
    name: "Clay Pot",
    description: "An elegant clay pot for your plants.",
    price: 22.0,
    category: "Ceramics",
    imageUrl: "https://example.com/claypot.jpg",
  },
  {
    productId: 10,
    sellerId: 5,
    name: "Macramé Wall Hanging",
    description: "A stylish macramé wall hanging for your home.",
    price: 35.0,
    category: "Home Decor",
    imageUrl: "https://example.com/macrame.jpg",
  },
];

const users = [
  {
    userId: 1,
    name: "Alice Smith",
    email: "alice@example.com",
    password: "hashed_password1",
    role: "seller", // Linked to Handmade Mug and Knitted Scarf
  },
  {
    userId: 2,
    name: "Bob Johnson",
    email: "bob@example.com",
    password: "hashed_password2",
    role: "seller", // Linked to Wooden Coasters and Embroidered Pillow
  },
  {
    userId: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    password: "hashed_password3",
    role: "seller", // Linked to Leather Wallet and Canvas Painting
  },
  {
    userId: 4,
    name: "Diana White",
    email: "diana@example.com",
    password: "hashed_password4",
    role: "seller", // Linked to Beaded Necklace and Wool Blanket
  },
  {
    userId: 5,
    name: "Ethan Green",
    email: "ethan@example.com",
    password: "hashed_password5",
    role: "seller", // Linked to Clay Pot and Macramé Wall Hanging
  },
  {
    userId: 6,
    name: "Fiona Blue",
    email: "fiona@example.com",
    password: "hashed_password6",
    role: "buyer", // Buyer for sample orders
  },
  {
    userId: 7,
    name: "George Red",
    email: "george@example.com",
    password: "hashed_password7",
    role: "buyer", // Buyer for sample orders
  },
  {
    userId: 8,
    name: "Hannah Gray",
    email: "hannah@example.com",
    password: "hashed_password8",
    role: "buyer", // Buyer for sample orders
  },
];

export { products, users };
