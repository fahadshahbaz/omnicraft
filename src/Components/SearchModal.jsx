import { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { RxCross1 } from 'react-icons/rx';

const SearchModal = ({ isOpen, setSearchQuery, searchInputRef, onClose }) => {
  const [inputValue, setInputValue] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
    setInputValue('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-zinc-800 bg-opacity-65">
      <div className="w-[90%] sm:w-[500px] bg-[#2e2e2e] rounded-md px-6 py-3 shadow-xl flex items-center justify-center mb-64 border border-white/15">
        <form onSubmit={handleSubmit} className="w-full flex items-center">
          <IoSearch className="size-6"/>
          <input
            type="text"
            placeholder="eg: inspiration"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full border-none bg-transparent px-4 py-2 placeholder:text-white/50 text-white outline-none focus:outline-1"
            ref={searchInputRef}
          />
        </form>
        <button
          onClick={onClose}
          className="absolute top-5 right-6 bg-white px-3 py-[0.7rem] rounded-full text-gray-900"
        >
          <RxCross1 className='size-5'/>
        </button>
      </div>
    </div>
  );
};

export default SearchModal;