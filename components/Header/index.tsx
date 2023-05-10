import Image from "next/image";
import Navbar from "../Navbar";

import logoIcon from "@/public/logo.svg";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between pt-7 relative px-4 sm:px-8 lg:px-12">
      <div className="logo">
        <Image src={logoIcon} alt="logo" height={25} width={120} />
      </div>
      <Navbar />
    </header>
  );
}
