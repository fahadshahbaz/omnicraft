"use client";
import { useState } from "react";
import { motion } from "motion/react";

interface SearchBarProps {
	searchQuery?: string;
	setSearchQuery: (query: string) => void;
	onSearchBarClick?: () => void;
	isSearchModalOpen: boolean;
	searchInputRef?: React.RefObject<HTMLInputElement | null>;
}

export default function SearchBar({
	setSearchQuery,
	onSearchBarClick,
	isSearchModalOpen,
}: SearchBarProps) {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearchQuery(inputValue);
		setInputValue("");
	};

	const handleInputClick = () => {
		if (onSearchBarClick) {
			onSearchBarClick();
		}
	};

	return (
		<div className="w-full max-w-[420px] h-[60px] relative mt-8 mx-auto">
			{!isSearchModalOpen && (
				<motion.div
					layoutId="search-bar"
					className="absolute inset-0 w-full flex items-center justify-center bg-[#0D0D0D] rounded-full shadow-border transition-shadow duration-150 cursor-pointer [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-border-hover"
					onClick={handleInputClick}
					transition={{
						type: "spring",
						stiffness: 400,
						damping: 35,
					}}
				>
					<form onSubmit={handleSubmit} className="w-full flex items-center">
						<input
							type="text"
							placeholder="Search for resources"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							className="flex-1 min-w-0 border-none bg-transparent pl-5 pr-3 placeholder:text-zinc-700 text-sm sm:text-base text-white outline-hidden focus:outline-hidden cursor-pointer"
							name="search"
							readOnly
						/>
						<button
							type="button"
							onClick={handleInputClick}
							className="m-1.5 rounded-full text-black font-medium bg-[#FF3D00] px-6 py-3 text-sm sm:text-base shadow-[0_4px_12px_rgba(255,61,0,0.25)] cursor-pointer transition-[transform,box-shadow] duration-100 ease-out active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_6px_20px_rgba(255,61,0,0.4)]"
						>
							Search
						</button>
					</form>
				</motion.div>
			)}
		</div>
	);
}
