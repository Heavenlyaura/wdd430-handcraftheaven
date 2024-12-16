import GetSellerProducts from "@/components/profile/seller-products";
import { getSession } from "@/library/session";

export default async function MyProducts() {
  const session = await getSession();
  console.log(session.user.role);
  return (
    <section>
      <GetSellerProducts />
    </section>
  );
}
