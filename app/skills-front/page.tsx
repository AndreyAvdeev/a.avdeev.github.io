"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import homeIcon from "@/public/home.svg";
import monitorIcon from "@/public/monitor.svg";
import penIcon from "@/public/pen.svg";

export default function FrontSkills() {
  return (
    <section className="pt-20">
      <div className="my-2 border-t-2 border-b-2 bg-dark_light border-solid border-gray-400">
        <h1 className="text-white font-bold text-5xl text-left py-10 px-4 sm:px-8 lg:px-12">
          Frontend skills
        </h1>
      </div>
      <div className="grid grid-cols-2 mx-20 my-6 ">
        <article>
          <h2 className="text-white font-bold text-2xl text-left">
            Co dělám ?
          </h2>
          <div className="h-0.5 bg-gray-450 w-24 before:content-[''] before:block before:h-0.5 before:w-10 before:bg-blue"></div>
          <div className="flex my-8 mr-8">
            <div className="flex mr-4">
              <Image
                className="self-start"
                src={penIcon}
                alt="logo"
                height={72}
                width={72}
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">UI / UX Design</h3>
              <p className="text-gray-200 leading-7 mt-2">
                Je obecně známou věcí, že člověk bývá při zkoumání grafického
                návrhu rozptylován okolním textem, pokud mu dává nějaký smysl.
                Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text
                vhodnou bezvýznamovou alternativou
              </p>
            </div>
          </div>
          <div className="flex my-8 mr-8">
            <div className="flex mr-4">
              <Image
                className="self-start"
                src={monitorIcon}
                alt="logo"
                height={82}
                width={82}
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">
                HTML, CSS, JavaScript
              </h3>
              <p className="text-gray-200 leading-7 mt-2">
                Je obecně známou věcí, že člověk bývá při zkoumání grafického
                návrhu rozptylován okolním textem, pokud mu dává nějaký smysl.
                Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text
                vhodnou bezvýznamovou alternativou
              </p>
            </div>
          </div>
          <div className="flex my-8 mr-8">
            <div className="flex mr-4">
              <Image
                className="self-start"
                src={homeIcon}
                alt="logo"
                height={82}
                width={82}
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">
                Sass, Green Sock, React
              </h3>
              <p className="text-gray-200 leading-7 mt-2 mb-6">
                Je obecně známou věcí, že člověk bývá při zkoumání grafického
                návrhu rozptylován okolním textem, pokud mu dává nějaký smysl.
                Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text
                vhodnou bezvýznamovou alternativou
              </p>
            </div>
          </div>
        </article>
        <article>
          <h2 className="text-white font-bold text-2xl text-left">
            Coding Skills
          </h2>
          <div className="h-0.5 bg-gray-450 w-16 before:content-[''] before:block before:h-0.5 before:w-7 before:bg-blue"></div>
          <div className="flex my-8 mr-8">
       
          </div>
        </article>
      </div>
    </section>
  );
}
