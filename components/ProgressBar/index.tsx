"use client";

import { useEffect, useState } from "react";
import style from "../ProgressBar/style.module.css";

interface progressProps {
  title: string | "";
  percent: number;
}

export default function ProgressBar({ title, percent }: progressProps) {
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
        <h1 className="text-white font-bold text-lg">{title}</h1>
        <p className="text-gray-200 text-sm">{progress + "%"}</p>
      </div>
      <div className="w-full relative h-3 border-2 border-solid border-gray-400 mt-1 rounded-full">
        <div className={style.progress} style={{ width: progress + "%" }}></div>
      </div>
    </div>
  );
}
