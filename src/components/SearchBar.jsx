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
			className="flex justify-center bg-[#0D0D0D] rounded-full mt-8 border border-[#2b2b2b] cursor-pointer"
			onClick={handleInputClick}
			transition={{
				type: "tween",
				ease: [0.22, 1, 0.36, 1],
				duration: 0.36,
			}}
		>
			<form onSubmit={handleSubmit} className="w-full flex">
				<input
					type="text"
					placeholder="Search for resources"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className="flex-1 border-none bg-transparent px-4 sm:px-6 placeholder:text-zinc-700 text-white outline-hidden focus:outline-hidden cursor-pointer"
					name="search"
					readOnly
				/>
				<button
					type="button"
					onClick={handleInputClick}
					className="m-2 rounded-full text-black font-medium bg-[#FF3D00] px-4 sm:px-9 py-[0.6rem] sm:py-[0.8rem] shadow-[0_8px_20px_4px_rgba(255,58,0,0.3)] transition-transform hover:scale-105 cursor-pointer"
				>
					Search
				</button>
			</form>
		</motion.div>
	);
}
