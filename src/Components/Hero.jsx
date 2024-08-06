const Hero = () => {
  return (
    <>
      <div className="w-full mx-auto text-center flex justify-center items-center flex-col font-roboto py-28 lg:py-32">
        <div className="w-[90%] sm:w-[50%] mx-auto">
          <h3 className="text-4xl sm:text-6xl font-bold">
            Frontend Inspiration resources from a{" "}
            <span className="text-[#909090]">Frontend Dev.</span>
          </h3>
        </div>
        <p className="text-sm sm:text-base w-[80%] sm:w-[60%] lg:w-[40%] text-[#7F8080] pt-8 pb-8">
          Discover top-tier tools and resources designed to streamline your
          process and elevate your creative and technical skills.
        </p>
        <a href="#" className="bg-white text-lg px-8 py-2 rounded-lg text-black hover:scale-105 transition-all ease-linear duration-150">
          Explore Now
        </a>
      </div>
    </>
  );
};

export default Hero;
