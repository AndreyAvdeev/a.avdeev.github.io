import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts",
  description: "My contacts",
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
