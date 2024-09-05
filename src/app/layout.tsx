import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/sections/Nav";
import Footer from "@/sections/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import BackGround from "@/sections/BackGround";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crytal-Aura",
  description: "We provide some crystal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <body className={inter.className}>
        <SmoothScroll>
          <Nav />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
