import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "OmniCraft - Your Ultimate Resource Hub for Designs and UI Components",
  description:
    "OmniCraft provides an extensive library of resources, designs, icons, and UI components to inspire your next project.",
  keywords:
    "OmniCraft, UI Libraries, Web Development, Design Resources, Icons, Templates",
  authors: [{ name: "Fahad Shahbaz" }],
  robots: "index, follow",
  openGraph: {
    title:
      "OmniCraft - Your Ultimate Resource Hub for Designs and UI Components",
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
  twitter: {
    card: "summary_large_image",
    site: "@OmniCraft",
    creator: "@FahadShahbaz",
    title:
      "OmniCraft - Your Ultimate Resource Hub for Designs and UI Components",
    description:
      "Discover designs, UI libraries, icons, and more to craft visually appealing websites and applications.",
    images: ["/twitter-card.png"],
  },
  // verification: {
  //   // Add any verification tags if needed
  // },
  metadataBase: new URL("https://omnicraft.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head></head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
