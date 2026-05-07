"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Activity,
  Shield,
  Zap,
  Droplet,
  Star,
  Dumbbell,
} from "lucide-react";
import { fadeInUp, staggerFast } from "@/lib/animations";

const ICONS = {
  sparkles: Sparkles,
  activity: Activity,
  shield: Shield,
  zap: Zap,
  droplet: Droplet,
  star: Star,
  dumbbell: Dumbbell,
} as const;

type IconKey = keyof typeof ICONS;

interface Formula {
  name: string;
  tagline: string;
  description: string;
  icon: IconKey;
  highlight?: boolean;
}

interface FormulasGridProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  formulas: Formula[];
}

export function FormulasGrid({
  eyebrow,
  title,
  intro,
  formulas,
}: FormulasGridProps) {
  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="py-12 lg:py-16 border-t border-text-secondary/15"
    >
      {eyebrow && (
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-3 mb-4"
        >
          <span className="block w-8 h-px bg-accent-gold" />
          <span className="font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
            {eyebrow}
          </span>
        </motion.div>
      )}
      <motion.h3
        variants={fadeInUp}
        className="font-display font-normal text-text-primary leading-[1.1] tracking-[-0.02em] mb-4"
        style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
      >
        {title}
      </motion.h3>
      {intro && (
        <motion.p
          variants={fadeInUp}
          className="font-body text-sm lg:text-base text-text-secondary leading-[1.8] max-w-3xl mb-8"
        >
          {intro}
        </motion.p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {formulas.map((f) => {
          const Icon = ICONS[f.icon];
          return (
            <motion.div
              key={f.name}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className={`group relative rounded-2xl p-6 lg:p-7 overflow-hidden transition-shadow duration-[400ms] ${
                f.highlight
                  ? "bg-bg-dark text-text-light shadow-[0_4px_20px_rgba(15,14,13,0.18)] hover:shadow-[0_20px_50px_rgba(15,14,13,0.24)]"
                  : "bg-bg-secondary text-text-primary shadow-[0_2px_10px_rgba(15,14,13,0.04)] hover:shadow-[0_10px_30px_rgba(15,14,13,0.08)]"
              }`}
            >
              {f.highlight && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 100% 0%, rgba(184,115,85,0.18), transparent 60%)",
                  }}
                />
              )}
              <div className="relative">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    f.highlight
                      ? "bg-accent-gold/15 border border-accent-gold/30"
                      : "bg-white border border-accent-gold/20"
                  }`}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.6}
                    className="text-accent-gold"
                  />
                </div>
                <h4
                  className={`font-display font-normal text-lg lg:text-xl leading-tight tracking-[-0.01em] mb-1 ${
                    f.highlight ? "text-text-light" : "text-text-primary"
                  }`}
                >
                  {f.name}
                </h4>
                <p
                  className={`font-body text-[11px] uppercase tracking-[0.18em] mb-3 ${
                    f.highlight ? "text-accent-gold" : "text-accent-gold/85"
                  }`}
                >
                  {f.tagline}
                </p>
                <p
                  className={`font-body text-sm leading-[1.65] ${
                    f.highlight ? "text-text-light/75" : "text-text-secondary"
                  }`}
                >
                  {f.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
