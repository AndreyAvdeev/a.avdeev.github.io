import "./styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my portfolio site",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
