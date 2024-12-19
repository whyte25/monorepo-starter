/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    "@through-motion/ui",
    "@through-motion/lib",
    "@through-motion/provider",
    "@through-motion/config",
    "@through-motion/assets",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "**",
      },
    ],
  },
};
