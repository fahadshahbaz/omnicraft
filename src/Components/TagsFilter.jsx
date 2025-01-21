import { useState, useRef, useEffect } from "react";

const TagsFilter = ({ onFilterChange }) => {
  const tags = [
    "All",
    "Inspiration",
    "UI",
    "Typography",
    "Portfolio",
    "Interview",
    "Resources",
    "Learning",
    "Tools",
    "Animation",
    "Open Source",
    "Practice",
    "AI",
    "CSS", // Added missing tag from data
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
      // If "All" is clicked, reset to only "All"
      newSelectedTags = ["All"];
    } else {
      // If another tag is clicked
      newSelectedTags = selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag) // Deselect the tag
        : [...selectedTags.filter((t) => t !== "All"), tag]; // Add the tag and remove "All"

      // If no tags are selected after deselecting, default to "All"
      if (newSelectedTags.length === 0) {
        newSelectedTags = ["All"];
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
    <div className="relative w-11/12 max-w-screen-2xl mx-auto px-4 sm:px-9">
      <div
        ref={tagsContainerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
      >
        {tags.map((tag) => (
          <li
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`
              flex-shrink-0 rounded-md list-none py-[0.3rem] px-4 cursor-pointer transition-all ease-in-out duration-300
              ${
                selectedTags.includes(tag)
                  ? "bg-[#161616] !border !border-neutral-700 text-white border-transparent" 
                  : "text-neutral-500 hover:text-white hover:bg-[#252525]"
              }
            `}
          >
            {tag}
          </li>
        ))}
      </div>

      {showScrollArrow && (
        <button
          onClick={() => scrollTags(200)} // Scroll 200px to the right
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-white opacity-75 hover:opacity-100 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
          >
            <path
              fill="currentColor"
              d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"
            ></path>
          </svg>{" "}
        </button>
      )}
    </div>
  );
};

export default TagsFilter;
