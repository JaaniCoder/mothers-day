// components/ui/PetalBackground.tsx
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PETALS = ["🌸", "🌺", "🌹", "🌷", "✿"];

const PETAL_CONFIGS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  emoji: PETALS[i % PETALS.length],
  startX: (i * 13 + 3) % 100,
  endX: (i * 11 + 8) % 100,
  duration: 16 + (i * 2.3) % 12,
  delay: (i * 0.8) % 12,
  size: ["text-lg", "text-xl", "text-2xl", "text-base"][i % 4],
  opacity: ["opacity-20", "opacity-30", "opacity-25", "opacity-15"][i % 4],
}));

export default function PetalBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {PETAL_CONFIGS.map((cfg) => (
        <motion.div
          key={cfg.id}
          initial={{ y: -60, x: `${cfg.startX}vw`, rotate: 0, opacity: 0 }}
          animate={{
            y: "110vh",
            x: `${cfg.endX}vw`,
            rotate: [0, 120, 240, 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: cfg.duration,
            repeat: Infinity,
            ease: "linear",
            delay: cfg.delay,
            times: [0, 0.1, 0.9, 1],
          }}
          className={`absolute ${cfg.size} ${cfg.opacity} select-none`}
        >
          {cfg.emoji}
        </motion.div>
      ))}
    </div>
  );
}