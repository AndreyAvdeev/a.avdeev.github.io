"use client";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Navbar from "../Navbar";
import logoIcon from "@/public/logo.svg";

export default function Header() {
  const router = useRouter();
  return (
    <header className="bg-dark z-10 fixed w-full top-0 flex flex-row items-center justify-between py-4 px-4 sm:px-8 lg:px-12">
      <div className="hover:cursor-pointer z-20">
        <Image
          src={logoIcon}
          alt="logo"
          onClick={() => router.push("/")}
          width={125}
        />
      </div>
      <Navbar />
    </header>
  );
}
