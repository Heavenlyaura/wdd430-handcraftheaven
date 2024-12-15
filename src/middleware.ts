import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./library/session";

const protectedRoutes = ["/profile"];
const publicRoutes = ["/login", "/register"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  console.log("path: ", path);

  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  const cookie = (await cookies()).get("session")?.value;

  if (cookie) {
    try {
      const session = await decrypt(cookie);
      if (isProtectedRoute && !session?.user) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
      }

      if (isPublicRoute && session?.user) {
        return NextResponse.redirect(new URL("/", req.nextUrl));
      }
    } catch (error) {
      console.error("Error decrypting session cookie:", error);
    }
  } else {
    console.log("No session cookie found.");
  }

  return NextResponse.next();
}
