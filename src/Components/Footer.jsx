import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="mt-20 font-roboto space-y-6 pb-3">
      <div className="w-full h-[1px] bg-[#212223]" />
      <div className="w-full mx-auto flex justify-around items-center py-1">
        <p className="text-center font-medium text-base text-zinc-300">
          © 2023 OmniCraft
          {/* <a href="https://fahadshahbaz.vercel.app" target="_blank">
            Fahad.
          </a> */}
        </p>
        <div className="flex items-center space-x-4 justify-center">
          <p className="hidden sm:block text-neutral-600 mr-2 text-sm">
            fahadshahbaz166@gmail.com
          </p>
          <a href="https://www.linkedin.com/in/fahadshahbaz/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https:/x.com/fahadshahbaz_" target="_blank">
            <FaXTwitter />
          </a>
          <a href="https://github.com/fahadshahbaz" target="_blank">
            <TbBrandGithubFilled />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
