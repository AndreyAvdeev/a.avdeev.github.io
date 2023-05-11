import Image from "next/image";
import Navbar from "../Navbar";

import logoIcon from "@/public/logo.svg";

export default function Header() {
  return (
    <header className="bg-dark z-10	fixed w-full top-0 flex flex-row items-center justify-between py-6 px-4 sm:px-8 lg:px-12">
      <div className="logo">
        <Image src={logoIcon} alt="logo" height={25} width={120} />
      </div>
      <Navbar />
    </header>
  );
}
