import Products from "../util/getProducts";
import BannerImage from "./banner-img";
import DisplayWrapedImages from "./wrap-img";
import { zillaSlab } from "@/app/fonts/fonts";

export default function MainSection() {
  return (
    <main className="mt-20">
      <div
        className={`${zillaSlab.className} antialiased flex flex-col items-center gap-4 mb-6`}
      >
        <h3>TRENDING</h3>
        <h4 className="font-bold">Shop our Popular HandCrafted Items</h4>
      </div>
      <Products limit={4} />
      <BannerImage />
      <DisplayWrapedImages />
    </main>
  );
}
