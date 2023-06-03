"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import style from "../ProgressBar/style.module.css";

interface progressProps {
  title: string | "";
  percent: number;
  icon?: string;
}

export default function ProgressBar({ title, percent, icon }: progressProps) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < percent) {
        setProgress((prev) => prev + 1);
      } else {
        clearInterval(timer);
        return progress;
      }
    }, 5);
    return () => clearInterval(timer);
  }, [progress]);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div className="flex items-center ">
          {icon && (
            <Image className="mr-2" src={icon} alt={title} width={18} height={18} />
          )}
          <h1 className="text-white font-bold text-lg">{title}</h1>
        </div>
        <p className="text-gray-200 text-sm">{progress + "%"}</p>
      </div>
      <div className="w-full flex items-center h-4 border-2 border-solid border-gray-400 mt-1 rounded-full">
        <div className={style.progress} style={{ width: progress + "%" }}></div>
      </div>
    </div>
  );
}
