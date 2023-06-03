const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: 'export',
  images: {
//     loader: "akamai",
//     path: "",
    unoptimized: true,
  },
  assetPrefix: './',
  basePath: '',
};
