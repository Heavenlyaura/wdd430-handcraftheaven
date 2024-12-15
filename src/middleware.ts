import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./library/session";

const protectedRoutes = ["/profile"];
const publicRoutes = ["/login", "/register"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = (await cookies()).get("session")?.value;

  try {
    const session = await decrypt(cookie);
    console.log("Session", session);
    if (isProtectedRoute && !session?.user) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    if (isPublicRoute && session?.user) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }
  } catch (error) {
    console.error("Error decrypting session cookie:", error);
  }

  return NextResponse.next();
}
