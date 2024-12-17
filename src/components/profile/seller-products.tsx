import { getSellerProducts } from "@/library/data";
import { getUserFromSession } from "@/library/session";
import Products from "../util/getProducts";
import Link from "next/link";

export default async function GetSellerProducts() {
  const session = getUserFromSession();
  const products = await getSellerProducts((await session).user.userid);
  return (
    <section>
      <div className="flex flex-row justify-between">
        <h1>Your Products</h1>
        <Link href={`/profile/products/addProduct`}>Add Product</Link>
      </div>
      <Products products={products} />
    </section>
  );
}
