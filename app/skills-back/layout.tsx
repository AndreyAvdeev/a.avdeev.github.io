import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backend skills",
  description: "My Backend skills",
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
