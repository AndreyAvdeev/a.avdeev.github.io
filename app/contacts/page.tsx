"use client";

import style from "./style.module.scss";
import { useRef, useState } from "react";
import Image from "next/image";
import emailIcon from "@/public/email.svg";

type reqStatusType = "pending" | "ok" | "fail";

export default function Contacts() {
  const formRef = useRef<HTMLFormElement>(null);
  const emailFormRef = useRef<HTMLInputElement>(null);
  const nameFormRef = useRef<HTMLInputElement>(null);
  const textFormRef = useRef<HTMLTextAreaElement>(null);

  const [errors, setError] = useState<any>({});
  const [isLoading, setLoading] = useState<boolean>(false);
  const [reqStatus, setReqStatus] = useState<reqStatusType>("pending");

  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const cleanFormData = () => {
    setError([]);
    formRef?.current?.reset();
  };

  const CheckError = (input) => {
    switch (input.name) {
      case "email":
        return !validateEmail(input.value) ? "Invalid email" : "";
      case "name":
        return input.value.length > 50 ? "Name length max 50" : "";
      case "email_text":
        return input.value.length > 500 ? "Text length max 500" : "";
      default:
        return false;
    }
  };

  const validateInput = (input) => {
    setError((prev: any[]) => {
      return {
        ...prev,
        [input.target.name]: CheckError(input.target),
      };
    });
  };

  return (
    <section className="py-20">
      <div className="my-2 border-t-2 border-b-2 bg-dark_light border-solid border-gray-400">
        <h1 className="text-white font-bold text-5xl text-left py-10 px-4 sm:px-8 lg:px-12">
          Contacts
        </h1>
      </div>
      <div className="grid grid-cols-1 mx-5 my-8 md:grid-cols-2 md:mx-20">
        <article>
          <h2 className="text-white font-bold text-2xl text-left">Links</h2>
          <div className="h-0.5 bg-gray-450 w-24 before:content-[''] before:block before:h-0.5 before:w-10 before:bg-blue"></div>
          <div className="flex my-8 mr-0 md:mr-8">
            <div className="flex mr-3 min-w-[2rem] max-w-[2rem]">
              <Image
                className="self-center max-w-max"
                src={emailIcon}
                alt="logo"
                height={25}
                width={25}
              />
            </div>
            <div>
              <a
                className="text-white font-bold text-lg"
                href="mailto:avdandrejjj@gmail.com"
              >
                avdandrejjj@gmail.com
              </a>
            </div>
          </div>
        </article>
        <article>
          <h2 className="text-white font-bold text-2xl text-left">
            Contact me
          </h2>
          <div className="h-0.5 bg-gray-450 w-16 before:content-[''] before:block before:h-0.5 before:w-7 before:bg-blue"></div>
          <div className={style.contact_form}>
            <form
              ref={formRef}
              onSubmit={async (e) => {
                e.stopPropagation();
                e.preventDefault();
                if (Object.values(errors).some((error) => error)) return;
                setLoading(true);
                let data = {
                  email: emailFormRef.current?.value,
                  email_text: textFormRef.current?.value,
                  name: nameFormRef.current?.value,
                };
                let response = await fetch(
                  "http://localhost:3000/api/email_form",
                  {
                    method: "POST",
                    body: JSON.stringify({
                      data,
                    }),
                    headers: {
                      "content-type": "application/json",
                    },
                  }
                );
                let result = await response.json();
                if (!result?.data) {
                  setReqStatus("fail");
                  return;
                }
                setLoading(false);
                setReqStatus("ok");
                cleanFormData();
              }}
            >
              <div className="mt-6">
                <input
                  name="name"
                  className="w-full"
                  required
                  ref={nameFormRef}
                  type="text"
                  placeholder="name"
                  onChange={validateInput}
                />
                <p className="text-red text-right text-sm mt-1 h-2">
                  {errors["name"]}
                </p>
              </div>
              <div className="mt-6">
                <input
                  name="email"
                  className="w-full"
                  required
                  ref={emailFormRef}
                  type="text"
                  placeholder="email address"
                  onChange={validateInput}
                />
                <p className="text-red text-right text-sm mt-1 h-2">
                  {errors["email"]}
                </p>
              </div>
              <div className="mt-6">
                <textarea
                  name="email_text"
                  className="w-full h-48"
                  required
                  ref={textFormRef}
                  id="email_text"
                  placeholder="your message ..."
                  onChange={validateInput}
                ></textarea>
                <p className="text-red text-right text-sm mt-1 h-2">
                  {errors["email_text"]}
                </p>
              </div>
              <div className="mt-2">
                {reqStatus === "pending" ? (
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="bg-gray-400 w-full md:w-auto text-white py-2 px-16 rounded-full border-2 border-solid border-[#D5D5D5] hover:border-blue cursor-pointer transition"
                  >
                    Send
                  </button>
                ) : (
                  <div
                    className={
                      style.contact_message +
                      " bg-gray-400 py-2 px-16 text-center rounded"
                    }
                  >
                    {reqStatus === "ok" && (
                      <p className="text-blue">
                        Your message has been successfully sent &#128077;
                      </p>
                    )}
                    {reqStatus === "fail" && (
                      <p className="text-red">Something went wrong &#128546;</p>
                    )}
                  </div>
                )}
              </div>
            </form>
          </div>
        </article>
      </div>
    </section>
  );
}
