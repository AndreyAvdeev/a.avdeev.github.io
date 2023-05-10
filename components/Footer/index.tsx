import Image from "next/image";
import Navbar from "../Navbar";

import logoIcon from "@/public/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-dark px-4 sm:px-8 lg:px-12 border-t border-solid	border-gray-400 ">
      <div className="flex flex-row items-center justify-between">
        <div className="pt-3">
          <ul className="flex font-poppins text-lg items-center">
            <li className="inline-block text-center text-gray-300 mx-7 hover:text-white cursor-pointer transition">
              <a href="" />
              Facebook
            </li>
            <li className="inline-block text-center text-gray-300 mx-7 hover:text-white cursor-pointer transition">
              <a href="" />
              Instagram
            </li>
            <li className="inline-block text-center text-gray-300 mx-7 hover:text-white cursor-pointer transition">
              <a href="" />
              Youtube
            </li>
          </ul>
        </div>
        <div className="pt-3">
          <p className="text-gray-100">© {new Date().getFullYear()} a.avdeev</p>
        </div>
      </div>
    </footer>
  );
}
