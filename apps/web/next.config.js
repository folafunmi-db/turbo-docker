const path = require("path");
const { DOCS_URL } = process.env;

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui", "logger", "store"],
  output: "standalone",
  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */
      {
        source: "/docs",
        destination: `${DOCS_URL}/docs`,
      },
      {
        source: "/docs/:path*",
        destination: `${DOCS_URL}/docs/:path*`,
      },
    ];
  },
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
