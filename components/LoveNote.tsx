"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fullMessage = `My dearest Imani,

From the very first moment our paths intertwined, you painted my world in colours I never knew existed. Today, on our very first Girlfriend’s Day, I want you to feel what I carry in my heart every single day: an overwhelming, unwavering, head-over-heels love for you.

You are my safe place, my laughter, my quiet peace. Your smile is my sunrise, your voice my favourite melody. In your eyes, I’ve found a home more real than any place on earth.

I promise to celebrate you not just today, but in every heartbeat, in every “good morning” and every “goodnight”, until the stars grow old.

Forever your love.`;

export default function LoveNote() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullMessage.slice(0, i + 1));
      i++;
      if (i >= fullMessage.length) {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [isTyping]);

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line text-rose-100 font-serif italic">
        {displayedText}
        {isTyping && <span className="animate-pulse text-pink-400">|</span>}
      </p>
    </motion.div>
  );
}
