"use client";

import Image from "next/image";
import ProgressBar from "@/components/ProgressBar";

import homeIcon from "@/public/home.svg";
import monitorIcon from "@/public/monitor.svg";
import penIcon from "@/public/pen.svg";

export default function Contacts() {
  return (
    <section className="py-20">
      <div className="my-2 border-t-2 border-b-2 bg-dark_light border-solid border-gray-400">
        <h1 className="text-white font-bold text-5xl text-left py-10 px-4 sm:px-8 lg:px-12">
          Contact me
        </h1>
      </div>
      <div className="grid grid-cols-2 mx-20 my-6 ">
        <article></article>
      </div>
    </section>
  );
}
