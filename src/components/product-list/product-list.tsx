import Products from "../util/getProducts";
import Categories from "./categories";
import { getCategories, getProducts } from "@/library/data";
import { Category } from "@/library/definitions";

export default async function ProductListing({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  console.log( searchParams.category);
  const allProducts = await getProducts();
  const categoriesData: Category[] =
    (await getCategories()) as unknown as Category[];
  return (
    <section>
      <Categories categories={categoriesData} />
      <Products products={allProducts} />
    </section>
  );
}
