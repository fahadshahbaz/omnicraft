"use client";
import { FaArrowRight, FaHeart, FaRegHeart } from "react-icons/fa6";
import Image from "next/image";
import { addReferrer } from "@/utils/linkHelper";
import { useFavorites } from "@/context/FavoritesContext";

export default function Card({ img, title, description, link, priority = false }) {
	const { toggleFavorite, isFavorite, isHydrated } = useFavorites();
	const favorited = isFavorite(link);

	const handleFavoriteClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		toggleFavorite(link);
	};

	return (
		<section className="card group relative flex flex-col w-full max-w-[320px] h-fit p-3 pb-5 overflow-hidden rounded-2xl shadow-border hover:shadow-border-hover transition-shadow duration-200 bg-linear-to-br from-[#232323] to-[#0f0f0f] select-none">
			{/* Image container (inset by parent padding, with rounded corners) */}
			<div className="relative w-full h-[180px] bg-[#202225] rounded-md overflow-hidden shrink-0">
				<Image
					className="w-full h-full object-cover"
					src={img}
					width={296}
					height={180}
					alt={`Image for ${title}`}
					draggable="false"
					priority={priority}
				/>
				{/* Favorite button inside image box (placed above link with z-10) */}
				<button
					type="button"
					onClick={handleFavoriteClick}
					disabled={!isHydrated}
					aria-label={favorited ? `Remove ${title} from favorites` : `Add ${title} to favorites`}
					aria-pressed={favorited}
					className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors cursor-pointer disabled:opacity-50 z-10 card-fav-btn before:absolute before:-inset-2"
				>
					<div className="t-icon-swap" data-state={favorited ? "b" : "a"}>
						<div className="t-icon" data-icon="a">
							<FaRegHeart className="text-white/60 hover:text-white text-base transition-colors" />
						</div>
						<div className="t-icon" data-icon="b">
							<FaHeart className="text-[#FF3D00] text-base" />
						</div>
					</div>
				</button>
			</div>

			{/* Info container */}
			<div className="mt-[28px] px-1 relative flex-1">
				<div className="pr-6">
					<h2 className="text-lg font-semibold text-white">{title}</h2>
					<p className="text-[#7F8080] text-sm mt-0 line-clamp-2 leading-relaxed">{description}</p>
				</div>

				{/* The actual stretched link covering the entire card */}
				<a
					href={addReferrer(link)}
					target="_blank"
					rel="noopener noreferrer"
					className="after:absolute after:inset-0 after:z-0 focus:outline-hidden"
					aria-label={`Visit ${title}`}
				>
					{/* Visual arrow indicator that reveals on hover */}
					<span className="absolute bottom-1 right-1 opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 text-white z-10 pointer-events-none">
						<FaArrowRight className="text-xl -rotate-45" />
					</span>
				</a>
			</div>
		</section>
	);
}
