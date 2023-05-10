import Image from "next/image";

import meIcon from "@/public/me.png";

export default function Page() {
  return (
    <div className="pt-16 px-4">
      <div className="grid grid-cols-[0.8fr,1fr] items-center justify-items-center w-11/12 m-auto max-w-7xl">
        <div className="rounded-full bg-gray-500 shadow-[0px_0px_50px_rgba(0,0,0,0.8)] h-96 w-96 flex items-center justify-center">
          <Image src={meIcon} alt="logo" height={350} width={350} />
        </div>
        <div className="pr-10 md:w-50 lg:w-100 xl:w-30">
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
          <div className="mt-4">
            <button className="bg-gray-400 py-3 px-5 rounded-full border border-solid  border-[#D5D5D5] hover:border border-solid	border-blue cursor-pointer transition">
              Portfolio
            </button>
            <button className="bg-gray-400 py-3 px-5 ml-5 border  border-solid  border-[#D5D5D5] rounded-full hover:border border-solid	border-blue cursor-pointer transition">
              Contacts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
