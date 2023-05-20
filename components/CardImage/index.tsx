"use client";

import Image from "next/image";
import Link from "next/link";

import style from "../CardImage/style.module.scss";

type elements = {
  title: string;
  link: string;
  target?: string;
};

interface cardImageProps {
  preview: any;
  hoverElements: elements[];
}

export default function CardImage({ preview, hoverElements }: cardImageProps) {
  return (
    <div className={style.card_wrapper + " " + "flex relative"}>
      <div className={style.card + " " + "rounded"}>
        <Image src={preview} alt="logo" />
      </div>
      <div className={style.card_overlay}>
        <div
          className={style["card_overlay-content"]}
        >
          {hoverElements.map((el, index) => {
            return (
              <Link
                key={index}
                className={
                  "bg-gray-400 text-white py-2 px-10 rounded-full border-2 border-solid border-[#D5D5D5] hover:border-blue cursor-pointer transition"
                }
                target={el.target}
                href={el.link}
              >
                {el.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
