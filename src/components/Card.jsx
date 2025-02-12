import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

export default function Card({ img, title, para, link }) {
  return (
    <section className="bg-[#171717] card flex flex-col w-full max-w-[320px] h-[400px] overflow-hidden rounded-xl border border-solid border-[#3f3f3fa2]">
      <Image
        className="mx-auto w-[272px] h-[200px] object-cover mt-8 rounded-lg"
        src={img}
        width={272} // 85% of 320px card width
        height={200}
        // sizes="272px"
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
          <h2 className="text-white text-[1.4rem] mt-4 p-2 font-semibold">
            {title}
          </h2>
          <p className="text-[#7F8080] text-base pb-[15px] pl-[10px]">{para}</p>
        </div>
        <div className="mt-8 pr-3">
          <a
            href={link}
            target="_blank"
            className="button rounded-full focus:outline-none"
            aria-label={`Visit ${title}`}
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
