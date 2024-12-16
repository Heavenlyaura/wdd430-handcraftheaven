import Link from "next/link";
import Logo from "../navigation/logo";
import { LogoutButton } from "../navigation/icon-nav";
import ProfileLinks from "./profile-links";
import { cookies } from "next/headers";
import { UserSession } from "@/library/definitions";
import { getSession } from "@/library/session";

export default async function SideNav() {
  const session = await getSession();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-[#ECDFDB] p-4 md:h-40"
        href="/"
      >
        <div className="w-32 md:w-40">Hello, {session.user.firstname}</div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <ProfileLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg[#F9F5EA] hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="w-6">
              <LogoutButton />
            </div>
            <div className="hidden md:block"></div>
          </button>
        </form>
      </div>
    </div>
  );
}
