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
                preview={require("@/public/preview/raidofinance_site_prev.webp")}
                images={[
                  "gallery/raidofinance_site_1.webp",
                  "gallery/raidofinance_site_2.webp",
                  "gallery/raidofinance_site_3.webp",
                  "gallery/raidofinance_site_4.webp",
                  "gallery/raidofinance_site_5.webp",
                  "gallery/raidofinance_site_6.webp",
                ]}
                hoverElements={[
                  {
                    title: "Website",
                    link: "https://raidofinance.eu/",
                    target: "_blank"
                  },
                  {
                    title: "Gallery",
                  },
                ]}
              />
            </div>
            <div>
              <CardImage
                preview={require("@/public/preview/raidowallet_prev.webp")}
                images={["gallery/raidowallet_1.webp"]}
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
                preview={require("@/public/preview/raido-acquiring_prev.webp")}
                images={[
                  "gallery/raido-acquiring_1.webp",
                  "gallery/raido-acquiring_2.webp",
                  "gallery/raido-acquiring_3.webp",
                  "gallery/raido-acquiring_4.webp",
                  "gallery/raido-acquiring_5.webp",
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
            <div>
              <CardImage
                preview={require("@/public/preview/raidowallet_app_prev.webp")}
                images={[
                  "gallery/raidowallet_app_1.webp",
                  "gallery/raidowallet_app_2.webp",
                  "gallery/raidowallet_app_3.webp",
                  "gallery/raidowallet_app_4.webp",
                  "gallery/raidowallet_app_5.webp",
                  "gallery/raidowallet_app_6.webp",
                  "gallery/raidowallet_app_7.webp",
                ]}
                hoverElements={[
                  {
                    title: "",
                    link: "https://play.google.com/store/apps/details?id=com.raido_wallet",
                    target: "_blank",
                    icon: require("@/public/android.svg"),
                  },
                  { title: "Gallery" },
                  {
                    title: "",
                    link: "https://apps.apple.com/us/app/raido-crypto-wallet/id1536567791",
                    target: "_blank",
                    icon: require("@/public/apple.svg"),
                  },
                ]}
              />
            </div>
            <div>
              <CardImage
                preview={require("@/public/preview/trading_crm_prev.webp")}
                images={[
                  "gallery/trading_crm_1.webp",
                  "gallery/trading_crm_2.webp",
                  "gallery/trading_crm_3.webp",
                  "gallery/trading_crm_4.webp",
                  "gallery/trading_crm_5.webp",
                  "gallery/trading_crm_6.webp",
                ]}
                hoverElements={[
                  {
                    title: "Website",
                    link: "https://digital.siera.tech/en/crm/login",
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
