/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    "@workspace/ui",
    "@workspace/lib",
    "@workspace/provider",
    "@workspace/config",
    "@workspace/assets",
    "@workspace/hooks",
  ],
};
