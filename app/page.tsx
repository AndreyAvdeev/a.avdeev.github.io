"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import meIcon from "@/public/me.png";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="grid grid-cols-1 items-center justify-items-center w-11/12 m-auto max-w-7xl lg:grid-cols-[0.8fr,1fr]">
        <div className="rounded-full bg-gray-500 shadow-[0px_0px_50px_rgba(0,0,0,0.8)] h-80 w-80 flex items-center justify-center mb-6 lg:mb-0">
          <Image src={meIcon} alt="logo" height={290} width={290} />
        </div>
        <div className="flex flex-col  pr-0 md:w-50 lg:w-100 xl:w-30 text-center lg:text-left lg:pr-10">
          <p className="font-poppins text-lg text-gray-300">
            Full Stack Developer
          </p>
          <h1 className="text-white text-7xl mt-4">Andrey Avdeev</h1>
          <p className="text-white text-lg mt-4">
            Potřebujete vytvořit webové stránky ? Při tvorbě webových stránek
            zajišťuji celkový design od návrhu až po realizaci. Perfektní
            technickou stránku zajistišťuji též, aby všechno běželo přesně jak
            má. Kdyby by Vás mé portofilo přípradně zkušenosti zaujaly - napište
            mi !
          </p>
          <div className="mt-8 lg:mt-4">
            <button
              className="bg-gray-400 text-white py-2 px-10 rounded-full border-2 border-solid border-[#D5D5D5] hover:border-blue cursor-pointer transition"
              onClick={() => router.push("/portfolio")}
            >
              Portfolio
            </button>
            <button
              className="bg-gray-400 text-white py-2 px-10 ml-5 rounded-full border-2 border-solid border-[#D5D5D5] hover:border-blue cursor-pointer transition"
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
