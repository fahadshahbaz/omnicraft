import { IoSearch } from "react-icons/io5";

const SearchModal = ({ isOpen, searchQuery, setSearchQuery, searchInputRef, onClose }) => {
  if (!isOpen) return null;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black bg-opacity-50">
      <div className="w-[90%] sm:w-[400px] bg-[#252525] rounded-md px-4 py-2 shadow-xl flex items-center justify-center">
        <IoSearch className="size-6"/>
        <input
          type="text"
          placeholder="Search for resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown} // Listen for Enter key
          className="w-full border-none bg-transparent px-4 py-2 placeholder:text-zinc-500 text-white outline-none focus:outline-1"
          ref={searchInputRef}
        />
        <button
          onClick={onClose}
          className="absolute top-5 right-6 bg-white/65 px-4 py-[0.6rem] rounded-full text-gray-900"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
