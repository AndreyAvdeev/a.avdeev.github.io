const isProd = process.env.NODE_ENV === "production";

const repo = "a.avdeev.github.io";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

module.exports = {
  images: {
    loader: "akamai",
    path: "",
    unoptimized: isProd ? false : true,
  },
  assetPrefix: isProd ? assetPrefix : './',
  basePath: isProd ? basePath : '',
};
