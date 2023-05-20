"use client";

import { useState, useCallback } from "react";

import Image from "next/image";
import ImageViewer from "react-simple-image-viewer";

import Link from "next/link";

import style from "../CardImage/style.module.scss";

type elements = {
  title: string;
  link?: string;
  target?: string;
};

interface cardImageProps {
  preview: any;
  images?: string[];
  hoverElements: elements[];
}

export default function CardImage({
  preview,
  hoverElements,
  images,
}: cardImageProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <div className={style.card_wrapper + " " + "flex relative"}>
        <div className={style.card + " " + "rounded"}>
          {preview && <Image src={preview} alt="logo" />}
        </div>
        <div className={style.card_overlay}>
          <div className={style["card_overlay-content"]}>
            {hoverElements.map((el, index) => {
              return el.link ? (
                <Link
                  key={index}
                  className={
                    "bg-gray-400 text-white py-2 px-10 rounded-full border-2 border-solid border-[#D5D5D5] hover:border-blue cursor-pointer transition"
                  }
                  target={el.target}
                  href={el.link || "#"}
                  onClick={() => !el.link && openImageViewer(0)}
                >
                  {el.title}
                </Link>
              ) : (
                <a
                  key={index}
                  className={
                    "bg-gray-400 text-white py-2 px-10 rounded-full border-2 border-solid border-[#D5D5D5] hover:border-blue cursor-pointer transition"
                  }
                  onClick={() => !el.link && openImageViewer(0)}
                >
                  {el.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {isViewerOpen && images?.length && (
        <div className="card_preview--wrapper">
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        </div>
      )}
    </>
  );
}
