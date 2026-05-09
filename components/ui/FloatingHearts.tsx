"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart, Flower, Star } from "lucide-react";

// Static configs so values don't re-randomize on re-render
const HEART_CONFIGS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  type: i % 3, // 0=heart, 1=flower, 2=star
  size: 14 + (i * 7) % 22,
  startX: (i * 17 + 5) % 100,
  endX: (i * 13 + 15) % 100,
  duration: 12 + (i * 3) % 10,
  delay: (i * 1.1) % 8,
  color: ["text-rose-300", "text-pink-200", "text-rose-200", "text-amber-200"][i % 4],
  fillColor: ["fill-rose-200/40", "fill-pink-200/40", "fill-rose-100/40", "fill-amber-100/40"][i % 4],
}));

export default function FloatingHearts() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {HEART_CONFIGS.map((cfg) => {
        const Icon = cfg.type === 0 ? Heart : cfg.type === 1 ? Flower : Star;
        return (
          <motion.div
            key={cfg.id}
            initial={{
              y: "110vh",
              x: `${cfg.startX}vw`,
              opacity: 0,
              scale: 0.4,
              rotate: 0,
            }}
            animate={{
              y: "-10vh",
              x: `${cfg.endX}vw`,
              opacity: [0, 0.6, 0.6, 0],
              scale: [0.4, 1, 0.9, 0.7],
              rotate: cfg.type === 1 ? 360 : 0,
            }}
            transition={{
              duration: cfg.duration,
              repeat: Infinity,
              ease: "linear",
              delay: cfg.delay,
              times: [0, 0.2, 0.8, 1],
            }}
            className={`absolute ${cfg.color}`}
          >
            <Icon size={cfg.size} className={cfg.fillColor} />
          </motion.div>
        );
      })}
    </div>
  );
}