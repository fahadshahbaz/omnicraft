import gray from "@/assets/icons/gray.svg";
import Image from "next/image";
import Link from "next/link";

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
          <Link
            href="/"
            className="text-2xl sm:text-4xl font-bold cursor-pointer"
          >
            OmniCraft.
          </Link>
        </div>
        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link
            href="/about"
            className="text-sm sm:text-base font-semibold hover:text-gray-300 duration-300 transition-all linear cursor-pointer"
          >
            About
          </Link>
          <a
            href="#faq"
            aria-label="View FAQ"
            className="text-sm sm:text-base font-semibold hover:text-gray-300 duration-300 transition-all linear cursor-pointer"
          >
            FAQ
          </a>
          <a
            href="https://tally.so/r/b5jyk1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Submit a resource"
            className="flex justify-center items-center bg-[#131313] border border-[#2b2b2b] text-sm sm:text-base px-5 sm:px-7 py-[0.6rem] sm:py-[0.9rem] rounded-full font-semibold hover:bg-gray-300 hover:text-[#232323] duration-300 transition-all linear cursor-pointer"
          >
            Submit
          </a>
        </div>
      </nav>
    </header>
  );
}
