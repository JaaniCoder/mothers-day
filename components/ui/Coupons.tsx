// components/ui/Coupons.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ticket, CheckCircle2, Lock } from "lucide-react";
import confetti from "canvas-confetti";

const COUPON_DATA = [
  { id: 1, emoji: "🧹", title: "Full Day Off from Chores", desc: "I'll handle everything today — dishes, laundry, cooking, all of it.", color: "from-rose-400 to-pink-500" },
  { id: 2, emoji: "🍽️", title: "Chef's Special Dinner", desc: "One homemade meal, entirely your choice. Delivered with love.", color: "from-amber-400 to-orange-500" },
  { id: 3, emoji: "🤗", title: "Unlimited Hugs", desc: "No expiry, no limit. Redeemable anytime, anywhere.", color: "from-purple-400 to-violet-500" },
  { id: 4, emoji: "🎬", title: "Movie Night, Your Pick", desc: "Snacks, blankets, and we watch whatever you want — no complaints.", color: "from-sky-400 to-blue-500" },
  { id: 5, emoji: "💆", title: "Head Massage Coupon", desc: "One relaxing head massage whenever you need to unwind.", color: "from-teal-400 to-emerald-500" },
  { id: 6, emoji: "☎️", title: "A Long Phone Call", desc: "I'll call and we'll talk for as long as you want, just us.", color: "from-rose-300 to-rose-500" },
];

export default function Coupons() {
  const [redeemed, setRedeemed] = useState<number[]>([]);

  const handleRedeem = (id: number) => {
    if (redeemed.includes(id)) return;
    setRedeemed((prev) => [...prev, id]);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.7 },
      colors: ["#f43f5e", "#fb923c", "#e879f9", "#34d399"],
    });
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center gap-3 px-1">
        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-2.5">
          <Ticket className="text-rose-500" size={20} />
        </div>
        <div>
          <h3 className="text-xl font-serif text-slate-800">Digital Coupons</h3>
          <p className="text-xs text-slate-400">
            {redeemed.length}/{COUPON_DATA.length} redeemed
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full bg-rose-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-linear-to-r from-rose-400 to-amber-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(redeemed.length / COUPON_DATA.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {COUPON_DATA.map((coupon, idx) => {
          const isRedeemed = redeemed.includes(coupon.id);
          return (
            <motion.div
              key={coupon.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
              className={`relative rounded-2xl border overflow-hidden transition-all ${
                isRedeemed
                  ? "border-green-200 bg-green-50/50"
                  : "border-rose-100 bg-white hover:shadow-md hover:shadow-rose-100/50"
              }`}
            >
              {/* Coupon notch */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#fdf6f0] border border-rose-100 z-10" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-[#fdf6f0] border border-rose-100 z-10" />

              {/* Left color stripe */}
              <div className={`absolute left-0 top-0 w-1 h-full bg-linear-to-b ${coupon.color}`} />

              <div className="pl-5 pr-4 py-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl leading-none mt-0.5">{coupon.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold text-sm leading-tight mb-1 ${isRedeemed ? "text-green-700 line-through" : "text-slate-800"}`}>
                      {coupon.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">{coupon.desc}</p>
                    <button
                      onClick={() => handleRedeem(coupon.id)}
                      disabled={isRedeemed}
                      className={`w-full text-xs font-semibold py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isRedeemed
                          ? "bg-green-100 text-green-600 cursor-default"
                          : "bg-rose-500 hover:bg-rose-600 text-white shadow-sm shadow-rose-200"
                      }`}
                    >
                      <AnimatePresence mode="wait">
                        {isRedeemed ? (
                          <motion.span key="done" initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center gap-1.5">
                            <CheckCircle2 size={13} /> Redeemed!
                          </motion.span>
                        ) : (
                          <motion.span key="redeem" initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center gap-1.5">
                            <Lock size={12} /> Redeem Coupon
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* All redeemed message */}
      <AnimatePresence>
        {redeemed.length === COUPON_DATA.length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-4 bg-rose-50 rounded-2xl border border-rose-100"
          >
            <p className="text-rose-500 font-serif text-base">All coupons redeemed! 🎉</p>
            <p className="text-slate-400 text-xs mt-1">You deserve every bit of this love.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}