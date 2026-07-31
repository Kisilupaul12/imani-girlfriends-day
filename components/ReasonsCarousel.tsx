"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  "The way your eyes light up when you talk about your dreams",
  "How you make even ordinary moments feel magical",
  "Your kindness that spills over to everyone around you",
  "That laugh — my favourite sound in the universe",
  "Your strength, grace, and the way you hold my heart",
  "Because loving you has made me the best version of myself",
];

export default function ReasonsCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % reasons.length);
  const prev = () => setIndex((prev) => (prev - 1 + reasons.length) % reasons.length);

  return (
    <div className="relative flex items-center justify-center">
      <button onClick={prev} className="absolute left-0 z-10 text-4xl text-pink-300 hover:text-pink-500 transition p-2">
        ‹
      </button>
      <div className="w-64 h-32 mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center text-pink-100 font-serif italic shadow-lg h-full flex items-center justify-center"
          >
            “{reasons[index]}”
          </motion.div>
        </AnimatePresence>
      </div>
      <button onClick={next} className="absolute right-0 z-10 text-4xl text-pink-300 hover:text-pink-500 transition p-2">
        ›
      </button>
    </div>
  );
}
