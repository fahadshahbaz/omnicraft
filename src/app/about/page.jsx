"use client";
import Link from "next/link";
import Image from "next/image";
import dp from "@/assets/dp.png";
import {
  FaSearch,
  FaHeart,
  FaTags,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: FaSearch,
    title: "Powerful Search",
    description: "Press Ctrl+K to instantly find any resource you need.",
  },
  {
    icon: FaHeart,
    title: "Save Favorites",
    description: "Build your personal collection for quick access later.",
  },
  {
    icon: FaTags,
    title: "Smart Categories",
    description: "Browse by Design, Typography, Color, AI and more.",
  },
  {
    icon: FaRocket,
    title: "Always Growing",
    description: "New handpicked resources are added on a regular basis.",
  },
];

export default function AboutPage() {
  return (
    <article className="min-h-screen max-w-3xl mx-auto px-6 py-16 sm:py-24">
      {/* Title */}
      <header>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          Why I Built <span className="text-[#c9c9c9]">OmniCraft</span>
        </h1>
      </header>

      {/* Author Info */}
      <div className="flex items-center gap-4 mt-8 mb-12">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-linear-to-br from-[#3a3a3a] to-[#2b2b2b] flex items-center justify-center text-lg font-semibold text-white">
          <Image
            src={dp}
            alt="Fahad Shahbaz"
            width={144}
            height={144}
            priority
            unoptimized
            className="w-full h-full object-cover scale-125"
          />
        </div>
        <div>
          <p className="font-medium text-white">Fahad Shahbaz</p>
          <p className="text-sm text-[#7D7F78]">
            3 min read • Creator of OmniCraft
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#2b2b2b] mb-10" />

      {/* Story - Paragraph 1 */}
      <div className="prose prose-invert max-w-none">
        <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8">
          When I started learning frontend development, I was constantly
          searching for resources. Websites for images, components, code
          snippets, everything. Whenever I came across something great, I
          bookmarked it.
        </p>

        <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8">
          But my bookmarks kept growing and growing. And when it was finally
          time to use those resources? I had completely forgotten about them.
          Lost in the chaos.
        </p>

        <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8">
          That is when I decided to build{" "}
          <span className="text-white font-medium">OmniCraft</span>.
        </p>
      </div>

      {/* Visual Break - Quote */}
      <blockquote className="border-l-4 border-[#3a3a3a] pl-6 my-12">
        <p className="text-xl sm:text-2xl text-neutral-300 italic leading-relaxed">
          "I first made it only for myself. But then I thought, why not share it
          with others?"
        </p>
      </blockquote>

      {/* Story - Paragraph 2 */}
      <div>
        <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8">
          All the resources here are handpicked. Not random stuff thrown
          together. Each one has been carefully selected because I found it
          genuinely useful in my own work.
        </p>

        <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8">
          Now I am gradually making OmniCraft more beautiful, more useful, and a
          place where designers and developers can find exactly what they need.
          Welcome home.
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-linear-to-r from-transparent via-[#2b2b2b] to-transparent my-12" />

      {/* Features - Minimal Cards with equal height */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          What you can do here
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col p-4 rounded-xl bg-[#141414] border border-[#1f1f1f] hover:border-[#2b2b2b] transition-colors duration-200 h-full min-h-[100px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-[#1f1f1f] flex items-center justify-center">
                  <feature.icon className="text-sm text-[#888888]" />
                </div>
                <h3 className="text-sm font-medium text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-16 text-center">
        <div className="h-px bg-linear-to-r from-transparent via-[#2b2b2b] to-transparent mb-12" />
        <p className="text-neutral-400 mb-6">
          Ready to explore the collection?
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#FF3D00] hover:bg-[#e63600] text-black font-medium px-6 py-3 rounded-full transition-all duration-300 text-sm shadow-[0_8px_20px_4px_rgba(255,58,0,0.3)] hover:scale-105"
        >
          Start Exploring
          <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </article>
  );
}
