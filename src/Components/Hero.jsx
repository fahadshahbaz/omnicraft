const Hero = () => {
  return (
    <>
      <div className="w-[85%] sm:w-[50%] mx-auto text-center flex justify-center items-center flex-col font-outfit py-28 lg:py-32">
        <div className="">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Frontend Inspiration resources from a{" "}
            <span className="text-[#909090]">Frontend Dev.</span>
          </h3>
        </div>
        <p className="text-sm sm:text-base w-[95%] sm:w-[80%] lg:w-[75%] text-[#7F8080] pt-8 pb-8">
          Discover top-tier tools and resources designed to streamline your
          process and elevate your creative and technical skills.
        </p>
        <a className="bg-white px-8 py-2 rounded-lg text-black" href="#">
          Explore Now
        </a>
      </div>
    </>
  );
};

export default Hero;
