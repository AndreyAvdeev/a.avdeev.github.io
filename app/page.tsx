"use client";

import style from "./styles/style.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

import meIcon from "@/public/me.webp";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex h-max items-center justify-center sm:h-screen px-4 mt-20 mb-28 sm:mt-0 sm:mb-0">
      <div className="grid grid-cols-1 items-center justify-items-center w-11/12 m-auto max-w-7xl py-[15%] lg:py-0 lg:grid-cols-[0.8fr,1fr]">
        <div className="rounded-full bg-gray-500 shadow-[0px_0px_50px_rgba(0,0,0,0.8)] h-80 w-80 flex items-center justify-center mb-6 lg:mb-0">
          <Image src={meIcon} alt="logo" height={290} width={290} />
        </div>
        <div className="flex flex-col pr-0 md:w-50 lg:w-100 xl:w-30 text-center lg:text-left lg:pr-10">
          <div className="flex justify-center lg:justify-start">
          <p className={style.typewriter + ' font-poppins text-lg text-gray-300'}>
            FullStack developer
          </p>
          </div>
          <h1 className="text-white text-7xl mt-4">Andrey Avdeev</h1>
          <p className="text-white text-lg mt-4">
            Hi! &#128075;, I am Fullstack developer with 6 years of experience
            in designing, developing front-end web applications and mobile apps
            in the financial industry with 2 years in backend development.
          </p>
          <div className="mt-8 lg:mt-4 max-[420px]:flex-col max-[640px]:flex max-[640px]:justify-evenly">
            <button
              className="bg-gray-400 text-white py-2 px-10 rounded-full border-2 border-solid border-[#D5D5D5] hover:border-blue cursor-pointer transition"
              onClick={() => router.push("/portfolio")}
            >
              Portfolio
            </button>
            <button
              className="bg-gray-400 text-white py-2 px-10 ml-0 max-[420px]:mt-6 sm:ml-5 rounded-full border-2 border-solid border-[#D5D5D5] hover:border-blue cursor-pointer transition"
              onClick={() => router.push("/contacts")}
            >
              Contacts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
