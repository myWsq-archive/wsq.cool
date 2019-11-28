const withCSS = require("@zeit/next-css");
const assetPrefix = process.env.NEXT_PREFIX || "";
const path = require("path");

module.exports = withCSS({
  /* config options here */
  assetPrefix,
  webpack(config, options) {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  }
});
