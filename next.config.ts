import type { NextConfig } from "next";

/**
 * Fully static export for GitHub Pages (https://m7mod77.github.io/ — a user site served from
 * the domain root, so no basePath/assetPrefix). Pages has no image optimisation server, so
 * images are shipped pre-sized (WebP) and served as-is.
 */
const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  images: { unoptimized: true },
};

export default nextConfig;
