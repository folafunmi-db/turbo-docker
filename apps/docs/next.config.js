const path = require("path");

module.exports = {
  reactStrictMode: true,
  basePath: "/docs",
  transpilePackages: ["ui", "logger"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
