"use client";
import { motion, AnimatePresence } from "motion/react";

export default function CardContainer({ children }) {
  return (
    <div className="container-card w-11/12 max-w-screen-2xl flex flex-wrap justify-center pt-8 gap-5 mx-auto overflow-hidden">
      <AnimatePresence mode="popLayout">{children}</AnimatePresence>
    </div>
  );
}
