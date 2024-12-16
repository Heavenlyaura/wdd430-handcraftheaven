import { getSellerProducts } from "@/library/data";
import { getSession } from "@/library/session";

export default async function GetSellerProducts() {
  const session = getSession();
  console.log((await session).user.userid);
  const products = await getSellerProducts((await session).user.userid);
  console.log(products);

  return <h2>Seller Products</h2>;
}
