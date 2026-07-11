"use client";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

interface HeroProps {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
	searchInputRef?: React.RefObject<HTMLInputElement | null>;
	onSearchBarClick: () => void;
	isSearchModalOpen: boolean;
}

const Hero = ({
	searchQuery,
	setSearchQuery,
	searchInputRef,
	onSearchBarClick,
	isSearchModalOpen,
}: HeroProps) => {
	const [metaKey, setMetaKey] = useState<string | null>(null);

	useEffect(() => {
		if (typeof navigator !== "undefined" && /Mac|iPhone|iPad|iPod/.test(navigator.userAgent)) {
			setMetaKey("Cmd");
		} else {
			setMetaKey("Ctrl");
		}
	}, []);
	return (
		<div className="w-full mx-auto text-center flex justify-center items-center flex-col py-28">
			<div className="max-w-5xl flex justify-center items-center flex-col mx-auto">
				<h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl xl:text-6xl leading-[1.18] xs:leading-[1.18] sm:leading-[1.16] xl:leading-[1.14] bg-linear-to-r from-[#cccccc] to-[#888888] bg-clip-text text-transparent">
					The <span>Best</span> Resources for <br /> Design and Code <br /> in One Place
				</h1>
				<p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#7D7F78] pt-5 leading-relaxed text-pretty">
					Discover top tools and resources to boost <br />
					your workflow and sharpen your skills.
				</p>
			</div>
			<div className="w-full max-w-[420px] px-4 sm:px-0">
				<SearchBar
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
					searchInputRef={searchInputRef}
					onSearchBarClick={onSearchBarClick}
					isSearchModalOpen={isSearchModalOpen}
				/>
			</div>
			<div className="h-9 mt-4 flex items-center justify-center">
				<p
					className={`text-xs sm:text-sm text-[#7F8080] transition-all duration-500 ease-out transform ${
						metaKey ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5"
					}`}
				>
					{metaKey && (
						<>
							Press <kbd className="px-2 py-1 text-[#c9c9c9] bg-[#2b2b2b] rounded">{metaKey}</kbd> +
							K to open search
						</>
					)}
				</p>
			</div>
		</div>
	);
};

export default Hero;
