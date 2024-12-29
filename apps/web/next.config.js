/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    "@repo/ui",
    "@repo/lib",
    "@repo/provider",
    "@repo/config",
    "@repo/assets",
    "@repo/hooks",
  ],
};
