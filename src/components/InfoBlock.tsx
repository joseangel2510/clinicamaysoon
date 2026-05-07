"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface InfoBlockProps {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
}

export function InfoBlock({ eyebrow, title, paragraphs }: InfoBlockProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-10 lg:py-12 border-t border-text-secondary/15 first:border-t-0"
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
        className="font-display font-normal text-text-primary leading-[1.1] tracking-[-0.02em] mb-5"
        style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
      >
        {title}
      </motion.h3>
      <div className="flex flex-col gap-4">
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            variants={fadeInUp}
            className="font-body text-sm lg:text-base text-text-secondary leading-[1.85] max-w-3xl"
          >
            {p}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}
