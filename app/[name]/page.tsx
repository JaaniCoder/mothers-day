"use client";
import { useParams, useSearchParams } from 'next/navigation';
import { useState, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Pause, Sparkles } from 'lucide-react';
import PetalBackground from '@/components/ui/PetalBackground';
import FloatingHearts from '@/components/ui/FloatingHearts';
import Letter from '@/components/ui/Letter';
import Coupons from '@/components/ui/Coupons';
import Gallery from '@/components/ui/Gallery';

function SurpriseContent() {
  const { name } = useParams();
  const searchParams = useSearchParams();
  
  const from = searchParams.get('from') || "";
  const images = [searchParams.get('img1'), searchParams.get('img2')].filter(Boolean) as string[];

  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const decodedName = decodeURIComponent(name as string);

  const handleOpen = () => {
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {}); // graceful fail if autoplay blocked
      setIsPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen bg-[#fdf6f0]">
      <PetalBackground />
      {isOpened && <FloatingHearts />}
      <audio ref={audioRef} loop src="/bg-music.mp3" preload="auto" />

      {/* Envelope / Opening Screen */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            key="envelope"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fdf6f0]"
          >
            <PetalBackground />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center px-6 relative z-10"
            >
              {/* Envelope icon */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-7xl mb-6 select-none"
              >
                💌
              </motion.div>
              <h2 className="font-serif text-2xl text-slate-600 mb-2">
                You have a special gift,
              </h2>
              <h1 className="font-serif text-4xl md:text-5xl text-rose-500 font-semibold mb-8">
                {decodedName}
              </h1>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleOpen}
                className="bg-rose-500 hover:bg-rose-600 text-white cursor-pointer px-10 py-4 rounded-full text-base font-semibold shadow-2xl shadow-rose-200 flex items-center gap-3 mx-auto transition-all"
              >
                <Sparkles size={18} /> Open Your Gift
              </motion.button>
              <p className="text-slate-400 text-xs mt-4">
                (Enable sound for the best experience 🎵)
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-5xl mx-auto px-4 py-20 relative z-10"
          >
            {/* Hero heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <p className="text-rose-400 font-serif italic text-lg mb-2">
                A little something made with love 💕
              </p>
              <h1 className="text-5xl md:text-7xl font-serif text-slate-800 leading-tight">
                Happy Mother's Day,<br />
                <span className="text-rose-500">{decodedName}!</span>
              </h1>
              <div className="mt-4 flex justify-center">
                <div className="h-0.5 w-24 bg-linear-to-r from-transparent via-rose-300 to-transparent" />
              </div>
            </motion.div>

            {/* Letter + Coupons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
            >
              <Letter from={from} />
              <Coupons />
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Gallery images={images} />
            </motion.div>

            {/* Footer */}
            <div className="text-center pt-20 pb-10 space-y-2">
              <p className="text-rose-300 text-2xl">🌸</p>
              <p className="text-slate-400 text-sm font-light">
                Designed with love for every mother in the world.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music toggle */}
      {isOpened && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 bg-white/95 backdrop-blur-sm p-3.5 cursor-pointer rounded-full shadow-lg text-rose-500 border border-rose-100 hover:bg-rose-50 transition-all"
          title={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Pause size={18} /> : <Music size={18} />}
        </motion.button>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#fdf6f0] flex items-center justify-center">
        <div className="text-rose-400 font-serif text-xl animate-pulse">Loading your surprise... 💕</div>
      </div>
    }>
      <SurpriseContent />
    </Suspense>
  );
}