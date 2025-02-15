import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

export default function Card({ img, title, para, link }) {
  return (
    <section className="card flex flex-col w-full max-w-[320px] h-[400px] overflow-hidden rounded-2xl border border-solid border-[#3f3f3fa2] bg-gradient-to-br from-[#232323] to-[#0f0f0f]">
      <Image
        className="mx-auto w-[272px] h-[200px] object-cover mt-8 rounded-lg"
        src={img}
        width={272} // 85% of 320px card width
        height={200}
        alt={`Image for ${title}`}
        draggable="false"
        unoptimized // to prevent Next.js from optimizing the image, vercel showing issue so temporary fix
        style={{
          backgroundColor: "#202225",
          filter: "blur(10px)",
          transition: "filter 0.3s ease-in-out",
        }}
        onLoad={(e) => (e.target.style.filter = "none")}
      />
      <div className="flex justify-between items-center p-4">
        <div>
          <h2 className="text-[1.4rem] mt-4 p-2 font-semibold text-white">
            {title}
          </h2>
          <p className="text-[#7F8080] text-base pb-[15px] pl-[10px]">{para}</p>
        </div>
        <div className="mt-8 pr-3">
          <a
            href={link}
            target="_blank"
            className="button rounded-full focus:outline-none text-white"
            aria-label={`Visit ${title}`}
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
