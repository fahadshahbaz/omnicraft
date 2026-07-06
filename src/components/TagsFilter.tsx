"use client";
import { useState, useRef, useEffect } from "react";

interface TagsFilterProps {
	onFilterChange: (tags: string[]) => void;
	onClearSearch?: () => void;
	resetKey: string;
}

export default function TagsFilter({ onFilterChange, onClearSearch, resetKey }: TagsFilterProps) {
	const tags = [
		"All",
		"Favorites", // Show user's saved tools
		"Design", // Combined from Inspiration and Portfolio
		"Typography",
		"Color",
		"Illustrations",
		"Components", // Combined from UI Libraries and UI
		"Shadcn", // For shadcn-based libraries
		"Tools", // For utilities
		"Resources", // For learning materials
		"AI", // For AI tools
		"Animation", // For animations
	];

	const [selectedTags, setSelectedTags] = useState<string[]>(["All"]);
	const tagsContainerRef = useRef<HTMLDivElement>(null);

	const [scrollState, setScrollState] = useState({
		canScrollLeft: false,
		canScrollRight: false,
	});

	// Sync internal state when parent resets the filter (e.g. on search submit)
	useEffect(() => {
		if (resetKey === "All") {
			setSelectedTags(["All"]);
		}
	}, [resetKey]);

	// Monitor container scrolling to show/hide edge fades
	useEffect(() => {
		const container = tagsContainerRef.current;
		if (!container) return;

		const updateScrollState = () => {
			const isOverflowing = container.scrollWidth > container.clientWidth;
			const canScrollRight =
				isOverflowing && container.scrollLeft + container.clientWidth < container.scrollWidth - 5;
			const canScrollLeft = isOverflowing && container.scrollLeft > 5;

			setScrollState((prev) => {
				if (prev.canScrollLeft === canScrollLeft && prev.canScrollRight === canScrollRight) {
					return prev;
				}
				return { canScrollLeft, canScrollRight };
			});
		};

		updateScrollState();
		window.addEventListener("resize", updateScrollState);
		container.addEventListener("scroll", updateScrollState);

		return () => {
			window.removeEventListener("resize", updateScrollState);
			container.removeEventListener("scroll", updateScrollState);
		};
	}, []);

	const handleTagClick = (tag: string) => {
		let newSelectedTags: string[];

		if (tag === "All") {
			newSelectedTags = ["All"];
		} else {
			// If another tag is clicked, clear the search query and show all cards with that tag
			if (onClearSearch) {
				onClearSearch();
			}
			// If another tag is clicked
			if (selectedTags.includes(tag)) {
				// If the tag is already selected, deselect it and default to "All"
				newSelectedTags = ["All"];
			} else {
				// If the tag is not selected, select it (and remove "All")
				newSelectedTags = [tag];
			}
		}

		setSelectedTags(newSelectedTags);
		onFilterChange(newSelectedTags);
	};

	return (
		<div className="relative">
			<div
				ref={tagsContainerRef}
				className="flex gap-3 overflow-x-auto scroll-smooth hide-scrollbar"
				role="tablist"
				aria-label="Filter Tags"
			>
				{tags.map((tag) => (
					<button
						key={tag}
						type="button"
						onClick={() => handleTagClick(tag)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								handleTagClick(tag);
							}
						}}
						role="tab"
						aria-selected={selectedTags.includes(tag)}
						className={`shrink-0 py-2.5 px-6 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d] transition-all duration-300 ease-out ${
							selectedTags.includes(tag) ? "bg-white text-black" : "bg-transparent text-neutral-500"
						}`}
					>
						{tag}
					</button>
				))}
			</div>

			{/* Gradient edge fades for scroll cues */}
			{scrollState.canScrollRight && (
				<div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent pointer-events-none z-10" />
			)}
			{scrollState.canScrollLeft && (
				<div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent pointer-events-none z-10" />
			)}
		</div>
	);
}
