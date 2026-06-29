/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: "attachment",
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "v1.screenshot.11ty.dev",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "api.microlink.io",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.uneed.best",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
