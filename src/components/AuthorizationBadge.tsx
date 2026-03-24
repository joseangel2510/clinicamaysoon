"use client";

import { motion } from "framer-motion";

export function AuthorizationBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px]"
    >
      {/* Outer glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            "0 0 0px rgba(196,162,101,0)",
            "0 0 30px rgba(196,162,101,0.15)",
            "0 0 0px rgba(196,162,101,0)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating outer ring with dots */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Outer dotted circle */}
          {Array.from({ length: 48 }).map((_, i) => {
            const angle = (i * 360) / 48;
            const rad = (angle * Math.PI) / 180;
            const cx = 100 + 95 * Math.cos(rad);
            const cy = 100 + 95 * Math.sin(rad);
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={i % 6 === 0 ? 2.5 : 1.2}
                fill={i % 6 === 0 ? "#C4A265" : "rgba(196,162,101,0.4)"}
              />
            );
          })}
        </svg>
      </motion.div>

      {/* Static main badge body */}
      <div className="absolute inset-[10px] rounded-full border-2 border-accent-gold/60 bg-bg-primary/95 backdrop-blur-sm flex flex-col items-center justify-center text-center px-3">
        {/* Inner gold ring */}
        <div className="absolute inset-[4px] rounded-full border border-accent-gold/20" />

        {/* Star decorations top */}
        <div className="flex items-center gap-1 mb-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.svg
              key={i}
              className="w-2.5 h-2.5 text-accent-gold"
              viewBox="0 0 12 12"
              fill="currentColor"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + i * 0.1, duration: 0.3 }}
            >
              <path d="M6 0l1.5 4.5L12 6l-4.5 1.5L6 12 4.5 7.5 0 6l4.5-1.5z" />
            </motion.svg>
          ))}
        </div>

        {/* SEME text */}
        <motion.span
          className="font-display text-[11px] font-bold tracking-wider text-accent-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          SEME
        </motion.span>

        {/* Authorization */}
        <motion.div
          className="mt-0.5"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.5 }}
        >
          <p className="font-body text-[8px] text-text-secondary leading-tight">
            Autorización U.48
          </p>
          <p className="font-display text-[11px] font-bold text-text-primary leading-tight mt-0.5">
            Medicina Estética
          </p>
        </motion.div>

        {/* Gold divider */}
        <motion.div
          className="w-10 h-px bg-accent-gold/40 my-1.5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 0.4 }}
        />

        {/* Doctor info */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.5 }}
        >
          <p className="font-body text-[7px] text-text-muted leading-tight">
            Cód. Aut. Sanit. 40143
          </p>
          <p className="font-body text-[8px] font-semibold text-text-primary leading-tight mt-0.5">
            Daniel Sánchez Salvador
          </p>
          <p className="font-body text-[7px] text-text-muted leading-tight">
            Núm. Coleg. 464620598
          </p>
        </motion.div>

        {/* Valencia shield - simplified */}
        <motion.div
          className="mt-1.5 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.1, duration: 0.4 }}
        >
          <div className="w-5 h-6 rounded-b-full border border-accent-gold/30 overflow-hidden flex">
            <div className="w-1/2 flex flex-col">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`flex-1 ${i % 2 === 0 ? "bg-[#DA251D]" : "bg-[#FCDD09]"}`}
                />
              ))}
            </div>
            <div className="w-1/2 flex flex-col">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`flex-1 ${i % 2 === 0 ? "bg-[#FCDD09]" : "bg-[#DA251D]"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Shimmer sweep effect */}
      <motion.div
        className="absolute inset-[10px] rounded-full overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(196,162,101,0.08) 45%, rgba(196,162,101,0.15) 50%, rgba(196,162,101,0.08) 55%, transparent 60%)",
          }}
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
