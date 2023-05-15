/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  basePath: "/risk",
  transpilePackages: ["ui", "logger"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};

module.exports = nextConfig;
