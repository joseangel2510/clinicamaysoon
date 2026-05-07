"use client";

import { motion } from "framer-motion";
import { Check, AlertCircle, Plus } from "lucide-react";
import { fadeInUp, staggerFast } from "@/lib/animations";

type BulletStyle = "check" | "warning" | "plus";

interface BulletListBlockProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: string[];
  style?: BulletStyle;
  columns?: 1 | 2;
}

const ICONS = {
  check: Check,
  warning: AlertCircle,
  plus: Plus,
};

export function BulletListBlock({
  eyebrow,
  title,
  intro,
  items,
  style = "check",
  columns = 1,
}: BulletListBlockProps) {
  const Icon = ICONS[style];
  const iconColor = style === "warning" ? "text-text-secondary" : "text-accent-gold";

  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-10 lg:py-12 border-t border-text-secondary/15"
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
        style={{ fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)" }}
      >
        {title}
      </motion.h3>
      {intro && (
        <motion.p
          variants={fadeInUp}
          className="font-body text-sm lg:text-base text-text-secondary leading-[1.8] max-w-3xl mb-6"
        >
          {intro}
        </motion.p>
      )}
      <ul
        className={`grid grid-cols-1 ${
          columns === 2 ? "sm:grid-cols-2" : ""
        } gap-x-8 gap-y-2.5`}
      >
        {items.map((it) => (
          <motion.li
            key={it}
            variants={fadeInUp}
            className="flex items-start gap-3"
          >
            <Icon
              size={16}
              strokeWidth={2}
              className={`${iconColor} mt-1 flex-shrink-0`}
            />
            <span className="font-body text-sm lg:text-[15px] text-text-primary leading-[1.65]">
              {it}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
