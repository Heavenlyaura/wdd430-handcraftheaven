import Link from "next/link";
import Logo from "../navigation/logo";
import { LogoutButton } from "../navigation/icon-nav";
import ProfileLinks from "./profile-links";
import SellerLinks from "./seller-links";
import { cookies } from "next/headers";
import { UserSession } from "@/library/definitions";
import { getSession } from "@/library/session";

export default async function SideNav() {
  const session = await getSession();
  const userRole = session?.user?.role;

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-black text-white p-4 md:h-40"
        href="/"
      >
        <div className="w-32 md:w-40">Hello, {session?.user?.firstname}</div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <ProfileLinks />
        {userRole === "seller" && <SellerLinks />}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
