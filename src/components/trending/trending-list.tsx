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
      <div className="flex flex-wrap justify-evenly mb-20">
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
      <div className="grid grid-cols-2 grid-rows-1 ">
        <div className="max-w-[1180px] m-auto col-start-1 col-end-3 row-start-1 row-end-2">
          <Image src={imageTypeLayer.Icon} alt={imageTypeLayer.alt} />
        </div>
        <div className="flex flex-col fred col-start-1 col-end-2 row-start-1 row-end justify-center items-center">
          <div className="flex flex-col gap-4 text-white w-[355px] h-[200px] p-4">
            <h4 className="font-bold text-5xl">
              <span className="bg-black px-2">35%</span> OFF
            </h4>
            <p className="text-2xl font-bold">
              Get the best for less this Christmas season!🎄
            </p>
            <p>#HEAVENLYAURAEXPERIENCE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
