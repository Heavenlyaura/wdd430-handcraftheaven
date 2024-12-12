import { getTrendingProducts } from "@/library/data";
import { products } from "@/library/placeholders";
import Image from "next/image";
import addToCart from "../../../public/cart/addtocart.svg";
import layerImg from "../../../public/other/layer.jpg";
import { zillaSlab } from "@/app/fonts/fonts";

export default async function TrendingProducts() {
  const trendingProducts = await getTrendingProducts();
  return (
    <section className="relative top-28 bg-[#F9F5EA]">
      <div
        className={`${zillaSlab.className} antialiased flex flex-col items-center gap-4`}
      >
        <h3>TRENDING</h3>
        <h4 className="font-bold">Shop our Popular HandCrafted Items</h4>
      </div>

      {/* Trending Products */}

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
