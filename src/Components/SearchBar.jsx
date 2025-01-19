// const SearchBar = ({ searchQuery, setSearchQuery, searchInputRef }) => {
//   return (
//     <>
//       <div className="flex justify-center bg-[#181818] rounded-xl mt-8 border border-[#2b2b2b]">
//         <form onSubmit={(e) => setSearchQuery(e.target.search.value)}>
//           <input
//             type="text"
//             placeholder="Search for resources"
//             value={searchQuery}
//             // onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full border-none bg-transparent px-2 sm:px-6 placeholder:text-zinc-700 text-white outline-none focus:outline-none"
//             name="search"
//             ref={searchInputRef} // Attach the ref to the input element
//           />
//           <button
//             type="submit"
//             className="m-2 rounded text-black font-medium bg-[#FF3D00] px-3 sm:px-5 py-[0.4rem]"
//           >
//             Search
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default SearchBar;


import { useState } from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, searchInputRef }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
    setInputValue(''); // Clear the input after search
  };

  return (
    <div className="flex justify-center bg-[#181818] rounded-xl mt-8 border border-[#2b2b2b]">
      <form onSubmit={handleSubmit} className="w-full flex">
        <input
          type="text"
          placeholder="Search for resources"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 border-none bg-transparent px-2 sm:px-6 placeholder:text-zinc-700 text-white outline-none focus:outline-none"
          name="search"
          ref={searchInputRef}
        />
        <button
          type="submit"
          className="m-2 rounded text-black font-medium bg-[#FF3D00] px-3 sm:px-5 py-[0.4rem]"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;