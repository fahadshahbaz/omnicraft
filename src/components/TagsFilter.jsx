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
    const container = tagsContainerRef.current;
    if (container) {
      const isOverflowing = container.scrollWidth > container.clientWidth;
      setShowScrollArrow(isOverflowing);
    }
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
    <div className="relative w-11/12 max-w-screen-2xl mx-auto px-2 sm:px-9">
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
        <button
          onClick={() => scrollTags(200)} // Scroll 200px to the right
          className="absolute right-0 top-[50%] transform -translate-y-1/2 p-1 rounded-full text-white opacity-75 hover:opacity-100 transition-opacity"
          aria-label="Scroll right to view more tags" // Add a descriptive label for screen readers
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1.2em"
            className="bg-[#000002]"
            aria-hidden="true" // Hide the icon from screen readers
          >
            <path
              fill="currentColor"
              d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
}
