import style from "../MobileNav/style.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hamburger from "../Hamburger";
import { useState } from "react";

type linksType = {
  name: string;
  path: string;
};

interface MobileNavProps {
  links: linksType[];
}

export const MobileNav = ({ links }: MobileNavProps) => {
  const router = usePathname();
  const [isOpen, setOpening] = useState<boolean>(false);

  return (
    <div className="flex justify-end md:hidden">
      <div
        className="z-10"
        onClick={() => {
          setOpening((prev) => (!prev ? true : false));
        }}
      >
        <Hamburger isOpen={isOpen} />
      </div>
      <div
        className={
          style.mob_nav__ovelay + ` ${style[isOpen ? "opened" : "closed"]}`
        }
      ></div>
      <nav
        className={
          "bg-dark_light " +
          style.mob_nav +
          ` ${style[isOpen ? "opened" : "closed"]}`
        }
      >
        <ul className="flex font-poppins text-lg flex flex-col items-start">
          {links.map((el, index) => {
            return (
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  setOpening(false);
                }}
                className="inline-block text-left mt-10"
                key={index}
              >
                <Link
                  className={
                    router === el.path
                      ? "text-white mx-7"
                      : "text-gray-300 mx-7  hover:text-white transition"
                  }
                  href={el.path}
                >
                  {el.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
