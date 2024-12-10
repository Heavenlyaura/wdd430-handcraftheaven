import { getTrendingProducts } from "@/library/data";
import layer from "/public/other/layer.jpg";
import addtocart from "/public/cart/addtocart.svg";
import Image from "next/image";
import { zillaSlab } from "@/app/fonts/fonts";
import { ImageType } from "@/library/definitions";
import DisplayWrapedImages from "./wrap-img";

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
      className={`${zillaSlab.className} flex md:flex-col md:gap-8 antialiased md:font-light md:max-w-[1280px] md:mx-auto md:mb-20`}
    >
      <div className="md:text-center md:flex md:flex-col md:gap-4 md:pt-10">
        <h3 className="md:font-light">TRENDING</h3>
        <h4 className="md:font-bold">Shop our Popular HandCrafted Items</h4>
      </div>

      <div className="md:flex md:flex-wrap md:justify-evenly md:mb-20">
        {trendingProducts.map((product) => (
          <div key={product.productId} className="md:flex md:flex-col md:gap-4">
            <Image
              src={product.imageurl}
              alt={product.name}
              width={290}
              height={290}
              className="md:border"
            />
            <div className="md:flex md:justify-between md:font-bold">
              <h5>{product.name}</h5>
              <p>${product.price}</p>
            </div>
            <button className="md:text-center md:w-full">
              <Image src={imageTypecCart.Icon} alt={imageTypecCart.alt} />
            </button>
          </div>
        ))}
      </div>
      <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:mb-20">
        <div className="md:m-auto md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2 md:p-10">
          <Image src={imageTypeLayer.Icon} alt={imageTypeLayer.alt} />
        </div>
        <div className="md:flex md:flex-col md:col-start-1 md:col-end-2 md:row-start-1 md:row-end md:justify-center md:items-center">
          <div className="md:flex md:flex-col md:gap-4 md:text-white md:w-[355px] md:h-[200px] md:p-4">
            <h4 className="md:font-bold md:text-5xl">
              <span className="md:bg-black md:px-2">35%</span> OFF
            </h4>
            <p className="md:text-2xl md:font-bold">
              Get the best for less this Christmas season!🎄
            </p>
            <p>#HEAVENLYAURAEXPERIENCE</p>
          </div>
        </div>
      </div>
      <DisplayWrapedImages />
    </div>
  );
}
