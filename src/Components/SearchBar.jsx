import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <div class="flex justify-center bg-[#181818] rounded-xl mt-8 border border-[#2b2b2b]">
        <input
          type="text"
          placeholder="Search for resources"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          class=" w-full border-none bg-transparent px-2 sm:px-6 placeholder:text-gray-500 text-white outline-none focus:outline-none"
          name="search"
        />
        <button
          type="submit"
          class="m-2 rounded text-black font-medium bg-[#FF3D00] px-3 sm:px-5 py-[0.4rem]"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
