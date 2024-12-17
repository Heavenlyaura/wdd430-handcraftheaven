import { getProducts } from "@/library/data";
import Products from "../util/getProducts";
import BannerImage from "./banner-img";
import DisplayWrapedImages from "./wrap-img";
import { zillaSlab } from "@/app/fonts/fonts";

export default async function MainSection() {
  const getTrending = await getProducts(4);
  return (
    <main className="mt-20 bg-[#FBF8F0]">
      <div
        className={`${zillaSlab.className} antialiased flex flex-col items-center gap-4 mb-6`}
      >
        <h3>TRENDING</h3>
        <h4 className="font-bold">Shop our Popular HandCrafted Items</h4>
      </div>
      <Products products={getTrending} />
      <BannerImage />
      <DisplayWrapedImages />
    </main>
  );
}
