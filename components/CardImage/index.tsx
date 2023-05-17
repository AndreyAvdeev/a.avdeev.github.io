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
  const { src } = preview?.default;
  return (
    <div
      className={
        style.card_wrapper +
        " " +
        "h-52 flex relative mt-1 border-gray-400 mt-1"
      }
    >
      <div
        className={style.card + " " + "rounded"}
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className={style.card_overlay}>
        <div className={style["card_overlay-content"]}>
          {hoverElements.map((el, index) => {
            return (
              <Link className={'text-white mx-7 hover:text-gray-300 transition'} target={el.target} href={el.link}>{el.title}</Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
