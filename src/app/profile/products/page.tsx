import GetSellerProducts from "@/components/profile/seller-products";
import { getUserFromSession } from "@/library/session";

export default async function MyProducts() {
  const session = await getUserFromSession();
  return (
    <section>
      <GetSellerProducts />
    </section>
  );
}
