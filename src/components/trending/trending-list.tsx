import { getTrendingProducts } from "@/library/data";
import layer from "/public/other/layer.jpg";
import addtocart from "/public/cart/addtocart.svg";
import Image from "next/image";
import { zillaSlab } from "@/app/fonts/fonts";
import { ImageType } from "@/library/definitions";

const imageTypecCart: ImageType = {
  Icon: addtocart,
  alt: "Add to cart",
};
const imageTypeLayer: ImageType = {
  Icon: layer,
  alt: "Add to cart",
};
export default async function TrendingProducts() {
  const trendingProducts = await getTrendingProducts();
  console.log(trendingProducts);

  return (
    <div
      className={`${zillaSlab.className} antialiased font-light bg-[#FBF8F0]`}
    >
      <div className="text-center flex flex-col gap-4 pt-10">
        <h3 className="font-light">TRENDING</h3>
        <h4 className="font-bold">Shop our Popular HandCrafted Items</h4>
      </div>
      <div className="flex justify-evenly mb-20">
        {trendingProducts.map((product) => (
          <div key={product.productId} className="flex flex-col gap-4">
            <Image
              src={product.imageurl}
              alt={product.name}
              width={290}
              height={290}
              className="border"
            />
            <div className="flex justify-between font-bold">
              <h5>{product.name}</h5>
              <p className="">${product.price}</p>
            </div>
            <button className="text-center w-full">
              <Image src={imageTypecCart.Icon} alt={imageTypecCart.alt} />
            </button>
          </div>
        ))}
      </div>
      <div className="max-w-[1280px] m-auto">
        <Image src={imageTypeLayer.Icon} alt={imageTypeLayer.alt} />
      </div>
    </div>
  );
}
