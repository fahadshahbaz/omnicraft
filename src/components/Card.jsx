"use client";
import { FaArrowRight, FaHeart, FaRegHeart } from "react-icons/fa6";
import Image from "next/image";
import { addReferrer } from "@/utils/linkHelper";
import { motion, AnimatePresence } from "motion/react";
import { useFavorites } from "@/context/FavoritesContext";

export default function Card({ img, title, description, link, priority = false }) {
  const { toggleFavorite, isFavorite, isHydrated } = useFavorites();
  const favorited = isFavorite(link);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(link);
  };

  return (
    <motion.section
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="card relative flex flex-col w-full max-w-[320px] h-[400px] overflow-hidden rounded-2xl border border-solid border-[#3f3f3fa2] bg-linear-to-br from-[#232323] to-[#0f0f0f] select-none"
    >
      {/* Image container with heart button inside */}
      <div className="relative mx-auto w-[272px] h-[200px] mt-8 rounded-lg bg-[#202225] overflow-hidden shrink-0">
        <Image
          className="w-full h-full object-cover"
          src={img}
          width={272}
          height={200}
          alt={`Image for ${title}`}
          draggable="false"
          priority={priority}
        />
        {/* Favorite button inside image box - edges clipped for immersive UI */}
        <motion.button
          onClick={handleFavoriteClick}
          disabled={!isHydrated}
          aria-label={
            favorited
              ? `Remove ${title} from favorites`
              : `Add ${title} to favorites`
          }
          aria-pressed={favorited}
          whileTap={{ scale: 0.85 }}
          className="absolute top-2 right-2 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors cursor-pointer disabled:opacity-50"
        >
          <AnimatePresence mode="wait" initial={false}>
            {favorited ? (
              <motion.div
                key="filled"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.15 }}
              >
                <FaHeart className="text-[#FF3D00] text-lg" />
              </motion.div>
            ) : (
              <motion.div
                key="outline"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.15 }}
              >
                <FaRegHeart className="text-white/60 hover:text-white text-lg transition-colors" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
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
