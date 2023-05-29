"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "../MobileNav/MobileNav";

export default function Navbar() {
  const router = usePathname();

  const nav = [
    { name: "Home", path: "/" },
    { name: "Frontend skills", path: "/skills-front" },
    { name: "Backend skills", path: "/skills-back" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contacts", path: "/contacts" },
  ];

  return (
    <div className="z-20">
    <nav className="hidden lg:block">
      <ul className="flex font-poppins text-lg">
        {nav.map((el, index) => {
          return (
            <li className="inline-block text-center" key={index}>
              <Link className={router === el.path ? 'text-white mx-7' : 'text-gray-300 mx-7  hover:text-white transition'} href={el.path}>{el.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
        <MobileNav links={nav}/>
    </div>
  );
}
