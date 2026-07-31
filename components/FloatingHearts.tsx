"use client";
import { useEffect, useRef } from "react";

interface Heart {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  emoji: string;
}

export default function FloatingHearts() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let hearts: Heart[] = [];
    const emojis = ["🌹", "💖", "💕", "✨", "🌸"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Create initial hearts
    for (let i = 0; i < 15; i++) {
      hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 20 + Math.random() * 30,
        speed: 0.3 + Math.random() * 0.7,
        opacity: 0.3 + Math.random() * 0.5,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      });
    }

    // Click to add more hearts
    const addHeart = (e: MouseEvent) => {
      hearts.push({
        x: e.clientX,
        y: e.clientY,
        size: 25 + Math.random() * 35,
        speed: 0.5 + Math.random() * 1,
        opacity: 0.7,
        emoji: "🌹",
      });
    };
    window.addEventListener("click", addHeart);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts = hearts.filter((h) => h.y > -50);
      hearts.forEach((h) => {
        ctx.font = `${h.size}px serif`;
        ctx.globalAlpha = h.opacity;
        ctx.fillText(h.emoji, h.x, h.y);
        h.y -= h.speed;
        h.x += Math.sin(h.y * 0.05) * 0.3;
        if (h.y < 100) h.opacity -= 0.002;
      });
      if (Math.random() < 0.02) {
        hearts.push({
          x: Math.random() * canvas.width,
          y: canvas.height + 20,
          size: 20 + Math.random() * 30,
          speed: 0.3 + Math.random() * 0.7,
          opacity: 0.4,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
        });
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", addHeart);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
                     }
