"use client";
import Image from "next/image";

export default function AboutPage() {
	const dpUrl = "https://res.cloudinary.com/dgughuyuo/image/upload/v1769276695/dp_xkms9k.png";

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
						src={dpUrl}
						alt="Fahad Shahbaz"
						width={144}
						height={144}
						priority
						className="w-full h-full object-cover scale-125"
					/>
				</div>
				<div>
					<p className="font-medium text-white">Fahad Shahbaz</p>
					<p className="text-sm text-[#7D7F78]">3 min read • Creator of OmniCraft</p>
				</div>
			</div>

			{/* Divider */}
			<div className="h-px bg-[#2b2b2b] mb-10" />

			{/* Story */}
			<div className="prose prose-invert max-w-none">
				<h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Too Many Bookmarks</h2>
				<p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8">
					When I started web development, I bookmarked every good website I found. I saved links
					for designs, images, and code snippets. Soon, I had hundreds of bookmarks.
				</p>

				<p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8">
					But my folders became a mess. When I actually needed a resource, I could not find it.
					I forgot they even existed.
				</p>

				<h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 mt-10">A Better Way</h2>
				<p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8">
					That is why I created OmniCraft. It is a neat, organized home for the best tools.
					Instead of messy folders, everything is clean, visual, and easy to search.
				</p>

				<p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8">
					You want to use OmniCraft because it saves you time. You do not have to waste hours
					searching the web. I bring the best web development tools directly to you.
				</p>
			</div>

			{/* Visual Break - Quote */}
			<blockquote className="border-l-4 border-[#3a3a3a] pl-6 my-12">
				<p className="text-xl sm:text-2xl text-neutral-300 italic leading-relaxed">
					"I first made it only for myself. But then I thought, why not share it with others?"
				</p>
			</blockquote>

			{/* Curation & Quality */}
			<div className="prose prose-invert max-w-none">
				<h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Handpicked Quality</h2>
				<p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8">
					Every tool here is handpicked. I only add resources that I think are best for my own work.
					You only get high-quality links that actually help you build projects.
				</p>

				<h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 mt-10">Who Is This For?</h2>
				<p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8">
					This site is built for web developers, designers, and students. Whether you are building
					your very first website or working on a professional project, you will find tools that
					make your work easier and faster.
				</p>

				<h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 mt-10">Taste in the AI Era</h2>
				<p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8">
					Today, AI can write code and build websites in seconds. But AI still lacks human taste and
					style. OmniCraft helps you find clean designs and unique resources so you can make your
					projects stand out.
				</p>

				<h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 mt-10">Suggest a Resource</h2>
				<p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8">
					I look at new websites and tools every day. I test them myself to make sure they are fast
					and helpful. You can also suggest resources using the Submit button in the navbar. If
					they are good, I will add them.
				</p>
			</div>
		</article>
	);
}
