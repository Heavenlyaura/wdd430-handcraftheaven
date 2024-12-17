import { getSellerProducts } from "@/library/data";
import { getUserFromSession } from "@/library/session";

export default async function GetSellerProducts() {
  const session = getUserFromSession();
  const products = await getSellerProducts((await session).user.userid);
  return <h2>Seller Products</h2>;
}
