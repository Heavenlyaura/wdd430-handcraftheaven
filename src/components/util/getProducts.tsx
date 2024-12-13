import { getProducts } from "@/library/data";
import Image from "next/image";
import addToCart from "../../../public/cart/addtocart.svg";

interface ProductsProps {
  limit?: number; // Optional prop for limit
}

export default async function Products({ limit }: ProductsProps) {
  // Fetch the trending products with the limit
  const trendingProducts = await getProducts(limit);
  return (
    <section className="">
      <div className="flex flex-wrap justify-center items-center">
        {trendingProducts.map((product) => (
          <div
            key={product.productId}
            className="w-full sm:w-1/2 lg:w-1/4 px-4 box-border text-center flex flex-col items-center gap-2 p-4"
          >
            <Image
              src={product.imageurl}
              alt={product.name}
              width={290}
              height={290}
              className="border"
            />
            <div>
              <h5 className="text-lg font-semibold">{product.name}</h5>
              <p className="text-sm text-gray-600">${product.price}</p>
            </div>
            <button className="mt-4">
              <Image src={addToCart} alt="Add to cart icon" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
