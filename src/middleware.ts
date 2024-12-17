import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./library/session";

const protectedRoutes = ["/profile"];
const roleProtectedRoutes = ["/profile/products"];
const publicRoutes = ["/login", "/register"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isRoleProtectedRoute = roleProtectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = (await cookies()).get("session")?.value;

  try {
    const session = await decrypt(cookie);

    if (isProtectedRoute && !session?.user) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    if (isPublicRoute && session?.user.role) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }

    if (isRoleProtectedRoute && session?.user?.role !== "seller") {
      return NextResponse.redirect(new URL("/profile", req.nextUrl));
    }
  } catch (error) {
    console.error("Error decrypting session cookie:", error);
  }

  return NextResponse.next();
}
