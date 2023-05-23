import Image from "next/image";
import Navbar from "../Navbar";

import logoIcon from "@/public/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-dark px-4 sm:px-8 lg:px-12 border-t border-solid	border-gray-400">
      <div className="flex flex-row items-center justify-between">
        <div className="pt-3">
          <ul className="flex font-poppins text-lg items-center">
            <li className="inline-block text-center text-gray-300 mx-7 hover:text-white cursor-pointer transition">
              <a href="https://vk.com/id66088016" target="_blank">VK</a>
            </li>
            <li className="inline-block text-center text-gray-300 mx-7 hover:text-white cursor-pointer transition">
              <a href="https://www.facebook.com/andrey.avdeev.5011" target="_blank">Facebook</a>
            </li>
            <li className="inline-block text-center text-gray-300 mx-7 hover:text-white cursor-pointer transition">
              <a href="https://www.linkedin.com/in/andrey-avdeev-236778265" target="_blank">Linkedin</a>
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
