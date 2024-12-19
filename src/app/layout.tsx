import type { Metadata } from "next";
import { inter } from "./fonts/fonts";
import "./globals.css";
import NavBar from "@/components/navigation/nav-bar";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased relative text-black`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
