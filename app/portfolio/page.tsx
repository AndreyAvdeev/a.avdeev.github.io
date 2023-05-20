"use client";

import CardImage from "@/components/CardImage";

export default function Portfolio() {
  return (
    <section className="py-20">
      <div className="my-2 border-t-2 border-b-2 bg-dark_light border-solid border-gray-400">
        <h1 className="text-white font-bold text-5xl text-left py-10 px-4 sm:px-8 lg:px-12">
          Portfolio
        </h1>
      </div>
      <div className="mx-20 my-6 ">
        <article>
          <h2 className="text-white font-bold text-2xl text-left">Gallery</h2>
          <div className="h-0.5 bg-gray-450 w-16 before:content-[''] before:block before:h-0.5 before:w-7 before:bg-blue"></div>
          <div className="grid justify-items-center mt-8 gap-12 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-5">
            <div>
              <CardImage
                preview={require("@/public/preview/raidofinance_site_prev.png")}
                images={[
                  "gallery/raidofinance_site_1.png",
                  "gallery/raidofinance_site_2.png",
                  "gallery/raidofinance_site_3.png",
                  "gallery/raidofinance_site_4.png",
                  "gallery/raidofinance_site_5.png",
                  "gallery/raidofinance_site_6.png",
                ]}
                hoverElements={[
                  {
                    title: "Website",
                    link: "https://raidofinance.eu/",
                    target: "_blank",
                  },
                  {
                    title: "Gallery",
                  },
                ]}
              />
            </div>
            <div>
              <CardImage
                preview={require("@/public/preview/raidowallet_prev.png")}
                images={["gallery/raidowallet_1.png"]}
                hoverElements={[
                  {
                    title: "Website",
                    link: "https://raidowallet.com",
                    target: "_blank",
                  },
                  { title: "Gallery" },
                ]}
              />
            </div>
            <div>
              <CardImage
                preview={require("@/public/preview/raido-acquiring_prev.png")}
                images={[
                  "gallery/raido-acquiring_1.png",
                  "gallery/raido-acquiring_2.png",
                  "gallery/raido-acquiring_3.png",
                  "gallery/raido-acquiring_4.png",
                  "gallery/raido-acquiring_5.png",
                ]}
                hoverElements={[
                  {
                    title: "Website",
                    link: "https://new-acquiring.raidofinance.eu",
                    target: "_blank",
                  },
                  { title: "Gallery" },
                ]}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
