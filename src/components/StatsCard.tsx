"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerFast } from "@/lib/animations";

interface Stat {
  value: string;
  label: string;
  detail?: string;
}

interface StatsCardProps {
  eyebrow?: string;
  title?: string;
  stats: Stat[];
  variant?: "light" | "dark";
}

export function StatsCard({
  eyebrow,
  title,
  stats,
  variant = "dark",
}: StatsCardProps) {
  const isDark = variant === "dark";
  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`my-10 lg:my-12 rounded-2xl p-7 lg:p-9 relative overflow-hidden ${
        isDark
          ? "bg-bg-dark text-text-light"
          : "bg-bg-secondary text-text-primary"
      }`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle at 100% 0%, rgba(184,115,85,0.18), transparent 60%)"
            : "radial-gradient(circle at 0% 100%, rgba(184,115,85,0.08), transparent 60%)",
        }}
      />
      <div className="relative">
        {eyebrow && (
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-3 mb-3"
          >
            <span className="block w-6 h-px bg-accent-gold" />
            <span className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-accent-gold">
              {eyebrow}
            </span>
          </motion.div>
        )}
        {title && (
          <motion.h4
            variants={fadeInUp}
            className={`font-display font-normal text-2xl lg:text-3xl leading-tight tracking-[-0.01em] mb-7 ${
              isDark ? "text-text-light" : "text-text-primary"
            }`}
          >
            {title}
          </motion.h4>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s) => (
            <motion.div key={`${s.value}-${s.label}`} variants={fadeInUp}>
              <div className="font-display text-3xl lg:text-4xl text-accent-gold leading-none mb-2">
                {s.value}
              </div>
              <div
                className={`font-body text-sm leading-[1.5] ${
                  isDark ? "text-text-light/95" : "text-text-primary"
                }`}
              >
                {s.label}
              </div>
              {s.detail && (
                <div
                  className={`font-body text-xs leading-[1.5] mt-1 ${
                    isDark ? "text-text-light/45" : "text-text-secondary"
                  }`}
                >
                  {s.detail}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
