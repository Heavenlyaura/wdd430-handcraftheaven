const products = [
  {
    sellerId: "c72b3f64-c242-4ed7-94d6-7837a25aecc4",
    name: "Handmade Earrings",
    description:
      "The product, “Handmade Earrings,” is a pair of elegant, handcrafted earrings that showcase intricate design and artistry. Perfect for adding a unique touch to any outfit. View the product",
    price: 15.99,
    category: "Jewelry",
    imageUrl: "/productImages/Earring.jpg", // First image URL
  },
  {
    sellerId: "c72b3f64-c242-4ed7-94d6-7837a25aecc4",
    name: "Handbag",
    description:
      "The product, “Handbag,” is a stylish and functional handcrafted accessory, perfect for everyday use or special occasions.",
    price: 20.0,
    category: "Bags",
    imageUrl: "/productImages/handbag.jpg", // Updated to first image URL
  },
  {
    sellerId: "c72b3f64-c242-4ed7-94d6-7837a25aecc4",
    name: "Oak Chair",
    description:
      "The product, “Oak Chair,” is a beautifully handcrafted wooden chair, combining durability and elegance to enhance any space.",
    price: 12.5,
    category: "Furniture",
    imageUrl: "/productImages/oakchair.jpg", // Updated to first image URL
  },
  {
    sellerId: "c72b3f64-c242-4ed7-94d6-7837a25aecc4",
    name: "Ark Drawer",
    description:
      "The product, “Ark Drawer,” is a meticulously crafted wooden drawer, offering both style and functionality for organizing your space.",
    price: 25.99,
    category: "Furniture",
    imageUrl: "/productImages/arkDrawer.jpg", // Updated to first image URL
  },
  {
    sellerId: "c72b3f64-c242-4ed7-94d6-7837a25aecc4",
    name: "Wooden Chair",
    description:
      "The product, “Wooden Chair,” is a sturdy and beautifully crafted wooden chair, designed to provide both comfort and style for your home.",
    price: 30.0,
    category: "Furniture",
    imageUrl: "/productImages/woodenChair.jpg", // Updated to first image URL
  },
  {
    sellerId: "c72b3f64-c242-4ed7-94d6-7837a25aecc4",
    name: "Knitted Mat",
    description:
      "The product, “Knitted Mat,” is a beautifully crafted mat that combines comfort and style, perfect for adding a cozy touch to any room.",
    price: 100.0,
    category: "Art",
    imageUrl: "/productImages/knittedMat.jpg", // Updated to first image URL
  },
  {
    sellerId: "c72b3f64-c242-4ed7-94d6-7837a25aecc4",
    name: "Diamond Necklace",
    description:
      "The product, “Diamond Necklace,” is a stunning piece of jewelry featuring a delicate design, perfect for adding elegance to any outfit.",
    price: 18.75,
    category: "Jewelry",
    imageUrl: "/productImages/diamondChain.jpg", // Updated to first image URL
  },
  {
    sellerId: "c72b3f64-c242-4ed7-94d6-7837a25aecc4",
    name: "Tool Set",
    description:
      "The product, “Tool Set,” is a comprehensive collection of essential tools, designed for tackling a variety of DIY projects with ease.",
    price: 45.0,
    category: "Textiles",
    imageUrl: "/productImages/toolSet.jpg", // Updated to first image URL
  },
  {
    sellerId: "c72b3f64-c242-4ed7-94d6-7837a25aecc4",
    name: "Leather Bag",
    description:
      "The product, “Leather Bag,” is a stylish and durable bag made from high-quality leather, perfect for everyday use.",
    price: 22.0,
    category: "Ceramics",
    imageUrl: "/productImages/leatherBag.jpg", // Updated to first image URL
  },
  {
    sellerId: "c72b3f64-c242-4ed7-94d6-7837a25aecc4",
    name: "Leather Purse",
    description:
      "The product, “Leather Purse,” is a chic, handcrafted leather purse, perfect for carrying your essentials in style.",
    price: 35.0,
    category: "Bags",
    imageUrl: "/productImages/leatherPurse.jpg", // Updated to first image URL
  },
];
const users = [
  {
    name: "Alice Smith",
    email: "alice@example.com",
    password: "hashed_password1",
    role: "seller", // Linked to Handmade Mug and Knitted Scarf
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    password: "hashed_password2",
    role: "seller", // Linked to Wooden Coasters and Embroidered Pillow
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    password: "hashed_password3",
    role: "seller", // Linked to Leather Wallet and Canvas Painting
  },
  {
    name: "Diana White",
    email: "diana@example.com",
    password: "hashed_password4",
    role: "seller", // Linked to Beaded Necklace and Wool Blanket
  },
  {
    name: "Ethan Green",
    email: "ethan@example.com",
    password: "hashed_password5",
    role: "seller", // Linked to Clay Pot and Macramé Wall Hanging
  },
  {
    name: "Fiona Blue",
    email: "fiona@example.com",
    password: "hashed_password6",
    role: "buyer", // Buyer for sample orders
  },
  {
    name: "George Red",
    email: "george@example.com",
    password: "hashed_password7",
    role: "buyer", // Buyer for sample orders
  },
  {
    name: "Hannah Gray",
    email: "hannah@example.com",
    password: "hashed_password8",
    role: "buyer", // Buyer for sample orders
  },
];

export { products, users };
