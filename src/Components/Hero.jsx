import React from 'react';
import SearchBar from './SearchBar.jsx';

const Hero = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full mx-auto text-center flex justify-center items-center flex-col py-28 lg:py-32 font-montserrat">
      <div className="w-[93%] sm:w-[50%] lg:w-[43%] mx-auto">
        <h3 className="text-3xl sm:text-5xl 2xl:text-6xl font-bold">
          Frontend Inspiration resources from a <br />
          <span className="text-[#909090] bg-gradient-to-r from-[#89898C] via-[#69696C] to-[#323235] text-transparent bg-clip-text">Frontend Dev.</span>
        </h3>
      </div>
      <p className="text-xs sm:text-base w-[80%] sm:w-[60%] lg:w-[35%] text-[#7F8080] pt-5">
        Discover top-tier tools and resources designed to streamline your
        process and elevate your creative and technical skills.
      </p>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default Hero;
