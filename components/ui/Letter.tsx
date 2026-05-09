// components/ui/Letter.tsx
"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Letter({ from }: { from?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-rose-100 shadow-xl shadow-rose-100/40 overflow-hidden"
    >
      {/* Top gradient bar */}
      <div className="h-1.5 w-full bg-linear-to-r from-rose-300 via-rose-500 to-amber-400" />

      {/* Subtle watermark */}
      <div className="absolute bottom-4 right-4 text-rose-100/60 text-8xl font-serif pointer-events-none select-none leading-none">
        ❤
      </div>

      <div className="p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-rose-50 border border-rose-100 rounded-2xl p-2.5">
            <Heart className="fill-rose-500 text-rose-500" size={20} />
          </div>
          <div>
            <h3 className="text-xl font-serif text-slate-800 leading-tight">A Note for You</h3>
            <p className="text-xs text-slate-400">Written with all the love in the world</p>
          </div>
        </div>

        {/* Letter rule */}
        <div className="border-t border-dashed border-rose-100 mb-6" />

        {/* Body */}
        <div className="space-y-4 text-slate-700 leading-relaxed text-[15px]">
          <p>
            There are no words grand enough to hold everything you mean. You have been my first home — warm, safe, and full of love I never had to earn.
          </p>
          <p>
            Every lesson you taught me, every late night you stayed up, every worry you carried quietly — I see it all now, and it fills me with a gratitude too deep for words.
          </p>
          <p className="font-serif text-lg text-rose-500 italic">
            "The world is a kinder place because you're in it."
          </p>
          <p>
            Thank you for being my greatest teacher, my loudest cheerleader, and my softest place to land.
          </p>
        </div>

        {/* Signature */}
        {from ? (
          <div className="mt-8 pt-5 border-t border-rose-50 flex items-end justify-between">
            <div className="flex gap-1">
              {["🌸", "💕", "🌷"].map((e, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                  className="text-lg"
                >
                  {e}
                </motion.span>
              ))}
            </div>
            <p className="font-serif text-lg text-rose-500 italic text-right">
              — With all my love,<br />
              <span className="text-xl font-semibold">{from}</span>
            </p>
          </div>
        ) : (
          <div className="mt-6 flex gap-1">
            {["🌸", "💕", "🌷"].map((e, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                className="text-lg"
              >
                {e}
              </motion.span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}