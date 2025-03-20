import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: "output",
  basePath: "",
  compress: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
