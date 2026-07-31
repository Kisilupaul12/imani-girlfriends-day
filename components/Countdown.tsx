"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown({ isToday }: { isToday: boolean }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (isToday) {
      setTimeLeft("Today is the day! 🌹");
      return;
    }

    const target = new Date("August 1, 2026 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      if (distance < 0) {
        setTimeLeft("It's Girlfriend's Day! 🎉");
        clearInterval(interval);
        return;
      }
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    return () => clearInterval(interval);
  }, [isToday]);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 120, delay: 1 }}
      className="mt-8 z-10"
    >
      <div className="text-center">
        {isToday ? (
          <span className="font-script text-4xl md:text-5xl bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
            🌸 {timeLeft} 🌸
          </span>
        ) : (
          <>
            <p className="text-xl text-rose-200/80">Unveiled in</p>
            <p className="font-script text-4xl md:text-5xl text-pink-300 tracking-wider">
              {timeLeft}
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
            }
