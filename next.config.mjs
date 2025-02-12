/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export mode
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
