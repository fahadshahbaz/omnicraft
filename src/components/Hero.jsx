import SearchBar from "./SearchBar.jsx";
import { useEffect, useState } from "react";

const Hero = ({
  searchQuery,
  setSearchQuery,
  searchInputRef,
  onSearchBarClick,
}) => {
  const [metaKey, setMetaKey] = useState(null);

  useEffect(() => {
    if (
      typeof navigator !== "undefined" &&
      /Mac|iPhone|iPad|iPod/.test(navigator.userAgent)
    ) {
      setMetaKey("Cmd");
    } else {
      setMetaKey("Ctrl");
    }
  }, []);
  return (
    <div className="w-full mx-auto text-center flex justify-center items-center flex-col py-28">
      <div className="max-w-5xl flex justify-center items-center flex-col mx-auto">
        <h3 className="font-bold text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.2] sm:leading-[1.18] xl:leading-[1.16] 2xl:leading-[1.16] bg-linear-to-r from-[#cccccc] to-[#888888] bg-clip-text text-transparent">
          The Best Resources for <br /> Design and Code <br /> in One Place
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#7D7F78] pt-5 leading-relaxed">
          Discover top tools and resources to boost <br />
          your workflow and sharpen your skills.
        </p>
      </div>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchInputRef={searchInputRef}
        onSearchBarClick={onSearchBarClick}
      />
      {metaKey && (
        <p className="text-xs sm:text-sm text-[#7F8080] pt-4">
          Press{" "}
          <kbd className="px-2 py-1 text-[#c9c9c9] bg-[#2b2b2b] rounded">
            {metaKey}
          </kbd>{" "}
          + K to open search
        </p>
      )}
    </div>
  );
};

export default Hero;
