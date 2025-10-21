"use client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchModal({
  isOpen,
  setSearchQuery,
  searchInputRef,
  onClose,
}) {
  const [inputValue, setInputValue] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
    setInputValue("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-zinc-900 bg-opacity-65"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-[90%] sm:w-[500px] bg-[#2e2e2e] rounded-full px-6 py-3 shadow-xl flex items-center justify-center mb-64 border border-white/15"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className="w-full flex items-center">
          <IoSearch className="size-6" />
          <input
            type="text"
            placeholder="eg: inspiration"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full border-none bg-transparent px-4 py-2 placeholder:text-white/50 text-white outline-none focus:outline-1"
            ref={searchInputRef}
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
