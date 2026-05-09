// app/page.tsx
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Sparkles, ImagePlus, User, Heart } from "lucide-react";

export default function Home() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [showImages, setShowImages] = useState(false);

  const handleGenerate = () => {
    if (!name.trim()) return;
    const baseUrl = window.location.origin;
    const params = new URLSearchParams();
    if (from.trim()) params.set("from", from.trim());
    if (img1.trim()) params.set("img1", img1.trim());
    if (img2.trim()) params.set("img2", img2.trim());
    const query = params.toString() ? `?${params.toString()}` : "";
    setGeneratedLink(`${baseUrl}/${encodeURIComponent(name.trim())}${query}`);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#fdf6f0] flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-100/60 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-100/40 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-200 text-rose-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
          >
            <Heart size={12} className="fill-rose-500 text-rose-500" /> Mother's Day 2025
          </motion.div>
          <h1 className="font-serif text-4xl md:text-5xl text-slate-800 leading-tight">
            Craft a Surprise<br />
            <span className="text-rose-500 italic">with Love</span>
          </h1>
          <p className="mt-3 text-slate-500 text-sm">
            Create a personal, shareable tribute in seconds.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-rose-100/50 border border-rose-100/80 overflow-hidden">
          {/* Top accent */}
          <div className="h-1.5 w-full bg-linear-to-r from-rose-300 via-rose-500 to-amber-400" />

          <div className="p-7 space-y-5">
            {/* Name of mother */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold tracking-wider uppercase text-slate-400 flex items-center gap-1.5">
                <User size={11} /> Her Name
              </label>
              <input
                type="text"
                placeholder="e.g. Mom, Maa, Aai, or Her Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 transition-all"
              />
            </div>

            {/* Your name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold tracking-wider uppercase text-slate-400 flex items-center gap-1.5">
                <Heart size={11} /> Your Name (for the letter)
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul, Your Son/Daughter"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 transition-all"
              />
            </div>

            {/* Photos toggle */}
            <div>
              <button
                onClick={() => setShowImages(!showImages)}
                className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-rose-400 hover:text-rose-600 transition-colors cursor-pointer"
              >
                <ImagePlus size={13} />
                {showImages ? "Hide Photo Slots" : "Add Photos (optional)"}
              </button>

              <AnimatePresence>
                {showImages && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 pt-3">
                      <input
                        type="url"
                        placeholder="Photo URL 1 (https://...)"
                        value={img1}
                        onChange={(e) => setImg1(e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 transition-all"
                      />
                      <input
                        type="url"
                        placeholder="Photo URL 2 (https://...)"
                        value={img2}
                        onChange={(e) => setImg2(e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 transition-all"
                      />
                      <p className="text-xs text-slate-400 pl-1">
                        Tip: Google Drive share links work directly here 🎉 — just paste the <span className="text-rose-400 font-medium">/view?usp=sharing</span> URL. Make sure the file is set to <span className="text-rose-400 font-medium">"Anyone with the link"</span>.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Generate button */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={handleGenerate}
              disabled={!name.trim()}
              className="w-full bg-rose-500 hover:bg-rose-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-rose-200 cursor-pointer text-sm"
            >
              <Sparkles size={16} />
              Generate Magic Link
            </motion.button>

            {/* Generated link */}
            <AnimatePresence>
              {generatedLink && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-rose-50 rounded-2xl border border-rose-100 p-4 space-y-2"
                >
                  <p className="text-xs text-rose-500 font-bold uppercase tracking-wider">✨ Your link is ready!</p>
                  <div className="flex items-center gap-2">
                    <code className="text-xs flex-1 truncate bg-white text-slate-600 px-3 py-2 rounded-lg border border-rose-100">
                      {generatedLink}
                    </code>
                    <button
                      onClick={handleCopy}
                      className="shrink-0 bg-white border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white p-2 rounded-lg transition-all cursor-pointer"
                    >
                      {copied ? <Check size={15} /> : <Copy size={15} />}
                    </button>
                  </div>
                  <p className="text-xs text-slate-400">Share this link with her — she'll love it 💕</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-5">
          Made with love · Free forever
        </p>
      </motion.div>
    </div>
  );
}