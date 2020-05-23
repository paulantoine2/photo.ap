const withSass = require("@zeit/next-sass");
module.exports = withSass({
  /* config options here */
  devIndicators: {
    autoPrerender: false,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
