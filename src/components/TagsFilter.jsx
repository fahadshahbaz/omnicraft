"use client";
import { useState, useRef, useEffect } from "react";

export default function TagsFilter({ onFilterChange, onClearSearch }) {
  const tags = [
    "All",
    "Design", // Combined from Inspiration and Portfolio
    "Typography",
    "Color",
    "Components", // Combined from UI Libraries and UI
    "Tools", // For utilities
    "Resources", // For learning materials
    "AI", // For AI tools
    "Animation", // For animations
  ];

  const [selectedTags, setSelectedTags] = useState(["All"]);
  const [showScrollArrow, setShowScrollArrow] = useState(false);
  const tagsContainerRef = useRef(null);

  // Check if the tags container overflows and show/hide the scroll arrow
  useEffect(() => {
    const checkOverflow = () => {
      const container = tagsContainerRef.current;
      if (container) {
        const isOverflowing = container.scrollWidth > container.clientWidth;
        const isScrolledToEnd =
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 5;
        setShowScrollArrow(isOverflowing && !isScrolledToEnd);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    const container = tagsContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkOverflow);
    }

    return () => {
      window.removeEventListener("resize", checkOverflow);
      if (container) {
        container.removeEventListener("scroll", checkOverflow);
      }
    };
  }, [tags]);

  const handleTagClick = (tag) => {
    let newSelectedTags;

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

  // Scroll the tags container horizontally
  const scrollTags = (scrollOffset) => {
    if (tagsContainerRef.current) {
      tagsContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <ul
        ref={tagsContainerRef}
        role="listbox"
        className="flex gap-3 overflow-x-auto scroll-smooth hide-scrollbar"
        aria-label="Filter Tags"
      >
        {tags.map((tag) => (
          <li
            key={tag}
            onClick={() => handleTagClick(tag)}
            role="option"
            tabIndex={0}
            aria-selected={selectedTags.includes(tag)}
            className={`
        shrink-0 rounded-md list-none py-[0.3rem] px-6 cursor-pointer transition-all ease-in-out duration-300
        ${
          selectedTags.includes(tag)
            ? "bg-[#ffffff] text-black border-transparent"
            : "text-neutral-500 hover:text-white hover:bg-[#252525]"
        }
      `}
          >
            {tag}
          </li>
        ))}
      </ul>

      {showScrollArrow && (
        <>
          {/* Gradient fade effect */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none" />

          {/* Scroll arrow button */}
          <button
            onClick={() => scrollTags(200)}
            className="absolute right-2 top-[50%] transform -translate-y-1/2 p-2 rounded-full bg-[#1a1a1a] border border-[#2b2b2b] text-white/70 hover:text-white hover:bg-[#252525] transition-all z-10"
            aria-label="Scroll right to view more tags"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
