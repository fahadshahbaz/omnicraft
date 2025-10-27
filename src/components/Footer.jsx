import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import gray from "@/assets/icons/gray.svg";

export default function Footer() {
  return (
    <footer className="mt-20 space-y-6 pb-3">
      <div className="w-full h-1px] bg-[#212223]" />
      <div className="w-full mx-auto flex justify-around items-center py-1">
        <p className="text-center font-semibold text-base ">
          <Image src={gray} alt="logo" className="size-7 inline-block mr-3" /> ©
          2023 Omnicraft.{" "}
          <span className="hidden md:inline-block"> All rights reserved.</span>
        </p>
        <div className="flex items-center space-x-4 justify-center">
          <a
            href="https://www.linkedin.com/in/fahadshahbaz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/fahadshahbaz_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Twitter profile"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/fahadshahbaz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <TbBrandGithubFilled />
          </a>
        </div>
      </div>
    </footer>
  );
}
