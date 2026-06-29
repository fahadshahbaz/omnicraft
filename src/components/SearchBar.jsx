"use client";
import { useState } from "react";
import { motion } from "motion/react";

export default function SearchBar({ setSearchQuery, onSearchBarClick }) {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
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
		<motion.div
			layoutId="search-bar"
			className="w-full max-w-[420px] flex justify-center bg-[#0D0D0D] rounded-full mt-8 shadow-border hover:shadow-border-hover transition-[box-shadow] duration-200 cursor-pointer"
			onClick={handleInputClick}
			transition={{
				type: "tween",
				ease: [0.22, 1, 0.36, 1],
				duration: 0.36,
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
					className="m-1.5 rounded-full text-black font-medium bg-[#FF3D00] px-6 py-3 text-sm sm:text-base shadow-[0_4px_12px_rgba(255,61,0,0.25)] cursor-pointer"
				>
					Search
				</button>
			</form>
		</motion.div>
	);
}
