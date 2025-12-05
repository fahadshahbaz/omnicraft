"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiChevronDown } from "react-icons/hi";

export default function SortDropdown({ onSortChange, currentSort }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptions = [
    { id: "default", label: "Default" },
    { id: "a-z", label: "A → Z" },
    { id: "z-a", label: "Z → A" },
  ];

  const currentOption =
    sortOptions.find((opt) => opt.id === currentSort) || sortOptions[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSortSelect = (sortId) => {
    onSortChange(sortId);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2 px-4 py-2 bg-[#0D0D0D] hover:bg-[#1a1a1a] border border-[#2b2b2b] rounded-lg text-white/90 transition-colors"
      >
        <span className="text-sm">Sort: {currentOption.label}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <HiChevronDown className="text-white/70" />
        </motion.div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 w-full sm:w-40 bg-[#0D0D0D] border border-[#2b2b2b] rounded-lg shadow-xl overflow-hidden z-50"
          >
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSortSelect(option.id)}
                className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${currentSort === option.id
                    ? "bg-[#1a1a1a] text-white"
                    : "text-white/70 hover:bg-[#1a1a1a] hover:text-white"
                  }`}
              >
                <span className="text-sm">{option.label}</span>
                {currentSort === option.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-1.5 h-1.5 bg-[#FF3D00] rounded-full"
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
