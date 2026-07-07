import gray from "@/assets/icons/gray.svg";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Navbar() {
	return (
		<header className="w-full">
			<nav className="flex justify-between items-center px-4 sm:px-16 py-5 sm:py-6">
				<div className="flex items-center justify-center space-x-3">
					<Image src={gray} alt="logo" className="size-5 sm:size-6 inline-block fill-[#9e9e1d]" />
					<Link href="/" className="text-xl sm:text-2xl font-bold cursor-pointer">
						OmniCraft.
					</Link>
				</div>
				<div className="flex items-center space-x-4 sm:space-x-6">
					<Link
						href="/about"
						className="hidden sm:block text-sm sm:text-base font-semibold py-2 hover:text-gray-300 duration-300 transition-all linear cursor-pointer"
					>
						About
					</Link>
					<a
						href="https://github.com/fahadshahbaz/OmniCraft"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub Repository"
						className="text-neutral-400 hover:text-white transition-colors duration-300 cursor-pointer flex items-center justify-center"
					>
						<FaGithub className="size-5 sm:size-[22px]" />
					</a>
					<a
						href="https://tally.so/r/b5jyk1"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Submit a resource"
						className="flex justify-center items-center bg-[#131313] shadow-border text-sm sm:text-base px-5 py-2 rounded-full font-semibold hover:bg-gray-300 hover:text-[#232323] duration-300 transition-all linear cursor-pointer"
					>
						Submit
					</a>
				</div>
			</nav>
		</header>
	);
}
