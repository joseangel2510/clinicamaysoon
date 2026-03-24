"use client";

import { motion } from "framer-motion";
import { StarRating } from "./StarRating";

export function GoogleBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-8 mb-16 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.08] px-6 py-3 overflow-hidden"
    >
      {/* Shimmer effect */}
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "200%" }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
      />

      {/* Google "G" */}
      <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-transparent"
        style={{
          backgroundImage: "linear-gradient(#1A1614, #1A1614), conic-gradient(from 0deg, #4285F4, #EA4335, #FBBC05, #34A853, #4285F4)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      >
        <span className="font-body text-sm font-bold" style={{ color: "#4285F4" }}>G</span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <span className="font-body text-lg font-semibold text-text-light">4.5 / 5</span>
        <StarRating stars={4.5} size={16} />
      </div>

      {/* Divider */}
      <div className="h-5 w-px bg-white/15" />

      {/* Review count */}
      <span className="font-body text-xs text-text-light/50">
        Basado en 114+ reseñas
      </span>
    </motion.div>
  );
}
