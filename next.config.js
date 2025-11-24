/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './lib/cloudinary-loader.ts',
  },
}

module.exports = withPWA(nextConfig);