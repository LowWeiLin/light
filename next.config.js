/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "development" ? undefined : "/light",
  reactStrictMode: true,
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
      ignored: "**/node_modules",
    };
    return config;
  },
};

module.exports = nextConfig;
