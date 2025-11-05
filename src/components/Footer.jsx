import Image from "next/image";
import gray from "@/assets/icons/gray.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-[#2b2b2b]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src={gray} alt="Omnicraft logo" className="size-8" />
              <span className="text-2xl font-bold">Omnicraft</span>
            </div>
            <p className="text-[#7F8080] text-base leading-relaxed mb-6 max-w-md">
              The best resources for design and code in one place. Discover top
              tools to boost your workflow and sharpen your skills.
            </p>

            {/* Badge */}
            <a
              href="https://www.uneed.best/tool/omnicraft"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img
                src="https://www.uneed.best/EMBED1B.png"
                alt="Uneed Embed Badge"
                style={{ height: "50px", width: "auto" }}
              />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#faq"
                  className="text-[#7F8080] hover:text-white transition-colors text-base"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://forms.gle/wGoTwG7tz6u1U5zt7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7F8080] hover:text-white transition-colors text-base"
                >
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/fahadshahbaz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7F8080] hover:text-white transition-colors text-base"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/fahadshahbaz_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7F8080] hover:text-white transition-colors text-base"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/fahadshahbaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7F8080] hover:text-white transition-colors text-base"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-[#2b2b2b] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#7F8080] text-sm">
            © {currentYear} Omnicraft. All rights reserved.
          </p>
          <p className="text-[#7F8080] text-sm">
            Made with ❤️ for designers and developers
          </p>
        </div>
      </div>
    </footer>
  );
}
