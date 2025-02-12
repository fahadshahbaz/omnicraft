  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: "export", // This enables static export mode
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
