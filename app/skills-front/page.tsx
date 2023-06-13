"use client";

import Image from "next/image";
import ProgressBar from "@/components/ProgressBar";

import crossPlatformIcon from "@/public/crossplatform.svg";
import monitorIcon from "@/public/monitor.svg";
import penIcon from "@/public/pen.svg";

export default function FrontSkills() {
  return (
    <section className="py-20">
      <div className="my-2 border-t-2 border-b-2 bg-dark_light border-solid border-gray-400">
        <h1 className="text-white font-bold text-5xl text-left py-10 px-4 sm:px-8 lg:px-12">
          Frontend skills
        </h1>
      </div>
      <div className="grid grid-cols-1 mx-5 my-8 md:grid-cols-2 md:mx-20">
        <article>
          <h2 className="text-white font-bold text-2xl text-left">
            Experience
          </h2>
          <div className="h-0.5 bg-gray-450 w-24 before:content-[''] before:block before:h-0.5 before:w-10 before:bg-blue"></div>
          <div className="flex my-8 mr-0 md:mr-8">
            <div className="flex mr-3 min-w-[2rem] max-w-[2rem]">
              <Image
                className="self-start max-w-max"
                src={penIcon}
                alt="pen icon"
                height={25}
                width={25}
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">UI / UX Design</h3>
              <p className="text-gray-200 leading-7 mt-2 mr-5">
                Collaborated with the UX/UI design teams to improve the website
                and applications, increasing conversion rates
              </p>
            </div>
          </div>
          <div className="flex my-8 mr-0 md:mr-8">
            <div className="flex mr-3 min-w-[2rem] max-w-[2rem]">
              <Image
                className="self-start max-w-max"
                src={monitorIcon}
                alt="monitor icon"
                height={25}
                width={25}
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">UI Developing</h3>
              <p className="text-gray-200 leading-7 mt-2 mr-5">
                Expertise in frontend developing with JS, TS, Bootstrap,
                Tailwindcss, libraries such as React and Next.js for Web
                applications (trade platforms, CRM).
              </p>
            </div>
          </div>
          <div className="flex my-8 mr-0 md:mr-8">
            <div className="flex mr-3 min-w-[2rem] max-w-[2rem]">
              <Image
                className="self-start max-w-max"
                src={crossPlatformIcon}
                alt="hybrid app"
                height={25}
                width={25}
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">
                Hybrid Applications
              </h3>
              <p className="text-gray-200 leading-7 mt-2 mr-5 mb-6">
                Developing and publishing mobile applications (android, ios)
                with Apache Cordova and desktop applications (mac os, windows,
                linux) using Electron.
              </p>
            </div>
          </div>
        </article>
        <article>
          <h2 className="text-white font-bold text-2xl text-left">
            Coding Skills
          </h2>
          <div className="h-0.5 bg-gray-450 w-16 before:content-[''] before:block before:h-0.5 before:w-7 before:bg-blue"></div>
          <div className="mt-8">
            <ProgressBar
              title="HTML"
              percent={95}
              icon={require("@/public/html.svg")}
            />
          </div>
          <div className="mt-8">
            <ProgressBar
              title="Javascript"
              percent={95}
              icon={require("@/public/javascript.svg")}
            />
          </div>
          <div className="mt-8">
            <ProgressBar
              title="Typescript"
              percent={40}
              icon={require("@/public/typescript.svg")}
            />
          </div>
          <div className="mt-8">
            <ProgressBar
              title="React"
              percent={95}
              icon={require("@/public/react.svg")}
            />
          </div>
          <div className="mt-8">
            <ProgressBar
              title="Next.js"
              percent={25}
              icon={require("@/public/nextjs.svg")}
            />
          </div>
          <div className="mt-8">
            <ProgressBar
              title="Cordova"
              percent={98}
              icon={require("@/public/cordova.svg")}
            />
          </div>
          <div className="mt-8">
            <ProgressBar
              title="Electron"
              percent={95}
              icon={require("@/public/electron.svg")}
            />
          </div>
          <div className="mt-8">
            <ProgressBar
              title="React Native"
              percent={10}
              icon={require("@/public/react-native.svg")}
            />
          </div>
        </article>
      </div>
    </section>
  );
}
