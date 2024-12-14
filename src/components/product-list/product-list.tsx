import Products from "../util/getProducts";
import Categories from "./categories";
import { getCategories } from "@/library/data";
import { Category } from "@/library/definitions";

export default async function ProductListing() {
  const categoriesData: Category[] =
    (await getCategories()) as unknown as Category[];
  return (
    <section className="">
      <Categories categories={categoriesData} />
      <Products />
    </section>
  );
}
