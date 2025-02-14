// import box from "@/assets/icons/box.svg";
import gray from "@/assets/icons/gray.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="flex justify-between items-center p-4 px-4 sm:px-16">
        <div className="flex items-center justify-center space-x-3">
          <Image
            src={gray}
            alt="logo"
            className="size-7 sm:size-9 inline-block fill-[#9e9e1d]"
          />
          <a
            href="#home"
            className="text-2xl sm:text-4xl font-bold cursor-pointer text-[]"
          >
            OmniCraft.
          </a>
        </div>
        <a
          href="https://forms.gle/wGoTwG7tz6u1U5zt7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Submit feedback" // Add aria-label here
          className="flex justify-center items-center bg-[#131313] border border-[#2b2b2b] text-sm sm:text-base px-5 sm:px-7 py-[0.6rem] sm:py-[0.9rem] rounded-full font-semibold hover:bg-gray-300 hover:text-[#232323] duration-300 transition-all linear cursor-pointer"
        >
          Feedback
        </a>
      </nav>
      {/* <div className="flex justify-center items-center">
        <div className="w-full h-[1px] bg-[#212223]" />
      </div> */}
    </header>
  );
}
