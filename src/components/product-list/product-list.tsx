import Products from "../util/getProducts";
import Categories from "./categories";
import { getCategories, getProducts } from "@/library/data";
import { Category } from "@/library/definitions";

export default async function ProductListing() {
  const products = await getProducts();
  const categoriesData: Category[] =
    (await getCategories()) as unknown as Category[];

  return (
    <section>
      <Categories categories={categoriesData} />
      <Products products={products} />
    </section>
  );
}
