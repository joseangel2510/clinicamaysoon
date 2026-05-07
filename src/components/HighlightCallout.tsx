"use client";

import { motion } from "framer-motion";
import { Quote, Lightbulb, AlertTriangle, Star } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const ICONS = {
  quote: Quote,
  insight: Lightbulb,
  warning: AlertTriangle,
  star: Star,
} as const;

type IconKey = keyof typeof ICONS;

interface HighlightCalloutProps {
  eyebrow?: string;
  text: string;
  icon?: IconKey;
}

export function HighlightCallout({
  eyebrow = "Sabías que",
  text,
  icon = "insight",
}: HighlightCalloutProps) {
  const Icon = ICONS[icon];
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="my-12 lg:my-14"
    >
      <div className="relative rounded-2xl bg-bg-secondary border-l-4 border-accent-gold p-7 lg:p-9 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 0% 100%, rgba(184,115,85,0.08), transparent 60%)",
          }}
        />
        <div className="relative flex items-start gap-5">
          <span className="w-12 h-12 rounded-full bg-accent-gold/15 border border-accent-gold/25 flex items-center justify-center flex-shrink-0">
            <Icon size={20} strokeWidth={1.6} className="text-accent-gold" />
          </span>
          <div className="flex-1">
            <span className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-accent-gold block mb-2">
              {eyebrow}
            </span>
            <p className="font-display italic font-normal text-lg lg:text-xl text-text-primary leading-[1.5]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
