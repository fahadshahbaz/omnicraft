import React from "react";

const SearchModal = ({ isOpen, searchQuery, setSearchQuery, searchInputRef, onClose }) => {
  if (!isOpen) return null;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onClose(); // Close the modal when Enter is pressed
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50">
      <div className="w-[90%] sm:w-[400px] bg-[#181818] rounded-lg p-4 shadow-lg">
        <input
          type="text"
          placeholder="Search for resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown} // Listen for Enter key
          className="w-full border-none bg-transparent px-4 py-2 placeholder:text-gray-500 text-white outline-none focus:outline-none"
          ref={searchInputRef}
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
