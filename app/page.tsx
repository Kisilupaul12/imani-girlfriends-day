"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Countdown from "@/components/Countdown";
import FloatingHearts from "@/components/FloatingHearts";
import LoveNote from "@/components/LoveNote";
import ReasonsCarousel from "@/components/ReasonsCarousel";

export default function Home() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const today = new Date();
  const isAugust1st = today.getMonth() === 7 && today.getDate() === 1;

  // Launch confetti automatically on August 1st
  useEffect(() => {
    if (isAugust1st) {
      const duration = 5 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: ["#ff4d6d", "#ffb3c6", "#f9a8d4"],
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: ["#ff4d6d", "#ffb3c6", "#f9a8d4"],
        });

        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  }, [isAugust1st]);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 py-20 overflow-hidden">
      {/* Floating hearts canvas */}
      <FloatingHearts />

      {/* Romantic header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10"
      >
        <h1 className="font-script text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-pink-300 via-red-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse-soft">
          Happy Girlfriend’s Day
        </h1>
        <p className="font-script text-3xl md:text-4xl mt-4 text-rose-200">
          Imani🌹
        </p>
      </motion.div>

      {/* Countdown / Celebration */}
      <Countdown isToday={isAugust1st} />

      {/* Love letter typewriter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="mt-12 z-10 w-full max-w-2xl"
      >
        <LoveNote />
      </motion.div>

      {/* Reasons carousel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5, duration: 1 }}
        className="mt-16 z-10 w-full max-w-xl"
      >
        <h2 className="font-script text-3xl text-center text-pink-200 mb-6">
          Reasons my heart chose you
        </h2>
        <ReasonsCarousel />
      </motion.div>

      {/* Secret message button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowSurprise(!showSurprise)}
        className="mt-16 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-script text-2xl rounded-full shadow-2xl animate-pulse-soft z-10"
      >
        ✨ Tap for a secret ✨
      </motion.button>
      <AnimatePresence>
        {showSurprise && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mt-8 z-10 bg-white/10 backdrop-blur-md p-8 rounded-3xl max-w-md text-center border border-white/20"
          >
            <p className="text-xl italic text-pink-100">
              “In a world full of ordinary days, <br />
              you are my forever August 1st. <br />
              I love you more than all the stars.”
            </p>
            <p className="mt-4 text-4xl">💖🌹</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🎵 Play our song button + YouTube player */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="mt-12 z-10 flex flex-col items-center"
      >
        {!showPlayer ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPlayer(true)}
            className="px-8 py-4 bg-white/10 backdrop-blur border border-pink-400/30 text-pink-200 font-script text-2xl rounded-full shadow-xl hover:bg-white/20 transition"
          >
            🎵 Play “Unanifaa” – Iyanii
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-pink-400/20 shadow-2xl"
          >
            <iframe
              width="300"
              height="60"
              src="https://www.youtube.com/embed/g1c0qFg0Gbk?autoplay=1&loop=1&playlist=g1c0qFg0Gbk&controls=0&modestbranding=1&showinfo=0&rel=0"
              title="Unanifaa by Iyanii"
              allow="autoplay; encrypted-media"
              className="rounded-lg"
            />
            <p className="text-center text-pink-200/70 text-sm mt-2 font-script">
              🌹 our song 🌹
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Footer */}
      <p className="mt-20 text-white/40 text-sm z-10">
        Forever yours, <span className="font-script text-xl">Your Love</span>
      </p>
    </main>
  );
                  }
