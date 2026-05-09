// components/ui/Gallery.tsx
"use client";
import { motion } from "framer-motion";

function resolveImageUrl(url: string): string {
  const driveFileRegex = /(?:drive\.google\.com\/file\/d\/|drive\.google\.com\/open\?id=)([a-zA-Z0-9_-]+)/;;
  const match = url.match(driveFileRegex);
  if (match) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
  }
  return url;
}

// Deterministic tilt so it doesn't jump on re-render
const TILTS = [-4, 3, -2, 5, -3, 2];

export default function Gallery({ images }: { images: string[] }) {
  if (images.length === 0) return null;

  return (
    <div className="py-12">
      {/* Section header */}
      <div className="text-center mb-12">
        <p className="text-rose-400 font-serif italic text-sm mb-1">a little trip down memory lane</p>
        <h3 className="text-3xl font-serif text-slate-800">Our Precious Moments</h3>
        <div className="mt-3 flex justify-center">
          <div className="h-0.5 w-16 bg-linear-to-r from-transparent via-rose-300 to-transparent" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {images.map((src, i) => {
          const tilt = TILTS[i % TILTS.length];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: tilt }}
              animate={{ opacity: 1, y: 0, rotate: tilt }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.05, rotate: 0, y: -6, zIndex: 10 }}
              className="relative bg-white p-4 pb-14 shadow-2xl shadow-slate-200/70 border border-slate-100 w-64 cursor-pointer"
              style={{ borderRadius: "2px" }}
            >
              {/* Photo area */}
              <div className="aspect-square overflow-hidden bg-rose-50 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resolveImageUrl(src)}
                  alt={`Memory ${i + 1}`}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    // Fallback if image fails
                    (e.target as HTMLImageElement).src = `https://placehold.co/256x256/fce7f3/f43f5e?text=Memory+${i + 1}`;
                  }}
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-rose-500/0 hover:bg-rose-500/5 transition-colors duration-300" />
              </div>

              {/* Caption area */}
              <div className="absolute bottom-0 left-0 right-0 py-3 px-4 text-center">
                <p className="font-serif text-slate-500 text-sm italic">
                  {i === 0 ? "Always my favourite photo 🌸" : "Memories I treasure 💕"}
                </p>
              </div>

              {/* Pin decoration */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-rose-400 shadow-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white/60" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}