"use client";
import { useState } from "react";

export default function SearchBar({ setSearchQuery, searchInputRef }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
    setInputValue("");
  };

  return (
    <div className="flex justify-center bg-[#0D0D0D] rounded-full mt-8 border border-[#2b2b2b]">
      <form onSubmit={handleSubmit} className="w-full flex">
        <input
          type="text"
          placeholder="Search for resources"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 border-none bg-transparent px-4 sm:px-6 placeholder:text-zinc-700 text-white outline-none focus:outline-none"
          name="search"
          ref={searchInputRef}
        />
        <button
          type="submit"
          className="m-2 rounded-full text-black font-medium bg-[#FF3D00] px-4 sm:px-9 py-[0.6rem] sm:py-[0.8rem] shadow-[0_8px_20px_4px_rgba(255,58,0,0.3)]"
        >
          Search
        </button>
      </form>
    </div>
  );
}
