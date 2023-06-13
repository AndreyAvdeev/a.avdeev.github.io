"use client";

import ProgressBar from "@/components/ProgressBar";
import Image from "next/image";

import serverIcon from "@/public/server.svg";
import automaticIcon from "@/public/automatic.svg";

export default function BackSkills() {
  return (
    <section className="py-20">
      <div className="my-2 border-t-2 border-b-2 bg-dark_light border-solid border-gray-400">
        <h1 className="text-white font-bold text-5xl text-left py-10 px-4 sm:px-8 lg:px-12">
          Backend skills
        </h1>
      </div>
      <div className="grid grid-cols-1 mx-5 my-8 md:grid-cols-2 md:mx-20">
        <article>
          <h2 className="text-white font-bold text-2xl text-left">Experience</h2>
          <div className="h-0.5 bg-gray-450 w-24 before:content-[''] before:block before:h-0.5 before:w-10 before:bg-blue"></div>
          <div className="flex my-8 mr-0 md:mr-8">
            <div className="flex mr-3 min-w-[2rem] max-w-[2rem]">
              <Image
                className="self-start max-w-max"
                src={automaticIcon}
                alt="automatic icon"
                height={25}
                width={25}
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">App builder</h3>
              <p className="text-gray-200 leading-7 mt-2 mr-5">
                Developed a node.js server to automatically build and sign
                applications on cordova and electron ready for publication
              </p>
            </div>
          </div>
          <div className="flex my-8 mr-0 md:mr-8">
            <div className="flex mr-3 min-w-[2rem] max-w-[2rem]">
              <Image
                className="self-start max-w-max"
                src={serverIcon}
                alt="server icon"
                height={25}
                width={25}
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">
                Trading platform server
              </h3>
              <p className="text-gray-200 leading-7 mt-2 mr-5">
                Participation in the development of the backend for trading
                platforms and CRM using (nodejs, MySQL, knex)
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
              title="NodeJS"
              percent={50}
              icon={require("@/public/nodejs.svg")}
            />
          </div>
          <div className="mt-8">
            <ProgressBar
              title="MYSQL"
              percent={30}
              icon={require("@/public/mysql.svg")}
            />
          </div>
          <div className="mt-8">
            <ProgressBar
              title="ORM's (sequalize, knex)"
              percent={30}
              icon={require("@/public/orm.png")}
            />
          </div>
          <div className="mt-8">
            <ProgressBar
              title="Moleculer"
              percent={25}
              icon={require("@/public/moleculer.svg")}
            />
          </div>
          <div className="mt-8">
            <ProgressBar
              title="Docker"
              percent={70}
              icon={require("@/public/docker.svg")}
            />
          </div>
        </article>
      </div>
    </section>
  );
}
