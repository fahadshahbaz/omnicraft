import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "OmniCraft - Your Ultimate Resource Hub for Designs and UI Components",
	description:
		"OmniCraft provides an extensive library of resources, designs, icons, and UI components to inspire your next project.",
	keywords: "OmniCraft, UI Libraries, Web Development, Design Resources, Icons, Templates",
	authors: [{ name: "Fahad Shahbaz" }],
	robots: "index, follow",
	openGraph: {
		title: "OmniCraft - Your Ultimate Resource Hub for Designs and UI Components",
		description:
			"Explore a vast collection of resources, ready-to-use templates, and inspiration for your next project.",
		url: "https://omnicraft.vercel.app",
		siteName: "OmniCraft",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
			},
		],
		type: "website",
	},
	icons: {
		icon: [
			{
				url: "/favicon.png",
				type: "image/png",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@OmniCraft",
		creator: "@FahadShahbaz",
		title: "OmniCraft - Your Ultimate Resource Hub for Designs and UI Components",
		description:
			"Discover designs, UI libraries, icons, and more to craft visually appealing websites and applications.",
		images: ["/twitter-card.png"],
	},
	metadataBase: new URL("https://omnicraft.vercel.app"),
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	const isProd = process.env.NODE_ENV === "production";
	const isVercel = process.env.VERCEL === "1";
	const showAnalytics = isProd && isVercel;

	return (
		<html lang="en" className={`${inter.variable} antialiased`}>
			<head></head>
			<body>
				<FavoritesProvider>
					<a href="#main-content" className="skip-link">
						Skip to main content
					</a>
					<Navbar />
					<main id="main-content">{children}</main>
					{showAnalytics && <Analytics />}
					<Footer />
				</FavoritesProvider>
			</body>
		</html>
	);
}
