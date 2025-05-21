/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        
      },
    ],
  },
  devIndicators: false
};

module.exports = nextConfig;
