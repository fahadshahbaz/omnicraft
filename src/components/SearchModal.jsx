"use client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";

export default function SearchModal({
  isOpen,
  setSearchQuery,
  searchInputRef,
  onClose,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
    setInputValue("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 backdrop-blur-lg bg-zinc-900/65"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "tween",
              ease: [0.22, 1, 0.36, 1],
              duration: 0.42,
            }}
          />

          {/* Modal Content */}
          <motion.div
            layoutId="search-bar"
            className="relative w-[90%] sm:w-[500px] bg-[#2e2e2e] rounded-full px-6 py-3 shadow-xl flex items-center justify-center mb-64 border border-white/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "tween",
              ease: [0.22, 1, 0.36, 1],
              duration: 0.36,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit} className="w-full flex items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.12,
                  type: "tween",
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.36,
                }}
              >
                <IoSearch className="size-6" />
              </motion.div>
              <motion.input
                type="text"
                placeholder="eg: inspiration"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full border-none bg-transparent px-4 py-2 placeholder:text-white/50 text-white outline-hidden focus:outline-1"
                ref={searchInputRef}
                autoFocus
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.18,
                  type: "tween",
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.42,
                }}
              />
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
