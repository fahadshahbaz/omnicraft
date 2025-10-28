"use client";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { addReferrer } from "@/utils/linkHelper";
import { motion } from "motion/react";

export default function Card({ img, title, description, link }) {
  return (
    <motion.section
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="card flex flex-col w-full max-w-[320px] h-[400px] overflow-hidden rounded-2xl border border-solid border-[#3f3f3fa2] bg-linear-to-br from-[#232323] to-[#0f0f0f]"
    >
      <div className="mx-auto w-[272px] h-[200px] mt-8 rounded-lg bg-[#202225] overflow-hidden shrink-0">
        <Image
          className="w-full h-full object-cover"
          src={img}
          width={272}
          height={200}
          alt={`Image for ${title}`}
          draggable="false"
          priority={false}
          loading="lazy"
        />
      </div>
      <div className="flex justify-between items-center p-4">
        <div>
          <h2 className="text-[1.4rem] mt-4 p-2 font-semibold text-white">
            {title}
          </h2>
          <p className="text-[#7F8080] text-base pb-[15px] pl-2">
            {description}
          </p>
        </div>
        <div className="mt-8 pr-3">
          <a
            href={addReferrer(link)}
            target="_blank"
            rel="noopener noreferrer"
            className="button rounded-full focus:outline-hidden text-white"
            aria-label={`Visit ${title}`}
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
