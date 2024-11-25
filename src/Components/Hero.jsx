import React from "react";
import SearchBar from "./SearchBar.jsx";

// Helper function to detect if the user is on a Mac
const isMac = () => {
  // Primary modern method using userAgentData (not supported in all browsers yet)
  if (navigator.userAgentData) {
    return navigator.userAgentData.platform === "macOS";
  }

  // Fallback method using userAgent
  return /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
};

const Hero = ({ searchQuery, setSearchQuery, searchInputRef }) => {
  return (
    <div className="w-full mx-auto text-center flex justify-center items-center flex-col py-28 lg:py-32">
      <div className="w-full sm:w-[65%] lg:w-[60%] mx-auto">
        <h3 className="lg:leading-[1.1] font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[4rem]">
          Frontend Inspiration resources from a <br />
          Frontend Dev.
        </h3>
      </div>
      <p className="para-text text-sm sm:text-base md:text-lg lg:text-xl text-[#7F8080] pt-5 w-[75%] sm:w-[50%] lg:w-[35%] leading-relaxed">
        Discover top tools and resources to boost your workflow and sharpen your
        skills.
      </p>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchInputRef={searchInputRef} // Pass the ref to the SearchBar component
      />
      <p className="text-xs sm:text-sm text-[#7F8080] pt-4">
        Press{" "}
        <kbd className="px-2 py-1 text-[#c9c9c9] bg-[#2b2b2b] rounded">
          {/* The <kbd> HTML element represents a user input and produces an inline element displayed in the browser's default monospace font. */}
          {isMac() ? " " : "Ctrl"}
        </kbd>{" "}
        + K to open search
      </p>
    </div>
  );
};

export default Hero;
