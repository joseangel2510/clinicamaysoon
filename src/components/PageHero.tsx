"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInUp,
  clipReveal,
  scaleXReveal,
  heroContainer,
} from "@/lib/animations";

interface PageHeroProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({
  eyebrow,
  titleLine1,
  titleLine2,
  subtitle,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-20 overflow-hidden bg-bg-primary">
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(184,115,85,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-6xl px-6 lg:px-8"
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeInLeft}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="block w-10 h-px bg-accent-gold" />
          <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-accent-gold">
            {eyebrow}
          </span>
          <span className="block w-10 h-px bg-accent-gold" />
        </motion.div>

        {/* Dual H1 */}
        <div className="text-center mb-6">
          <motion.h1
            variants={clipReveal}
            className="font-display font-normal not-italic text-[#0F0E0D] leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            {titleLine1}
          </motion.h1>
          <motion.h1
            variants={clipReveal}
            className="font-display font-normal italic text-[#7B6E5E] leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            {titleLine2}
          </motion.h1>
        </div>

        {/* Decorative dot separator */}
        <motion.div
          variants={scaleXReveal}
          className="flex items-center justify-center gap-3 mb-8 origin-center"
        >
          <span className="block w-[60px] h-px bg-accent-gold/50" />
          <motion.span
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="block w-1.5 h-1.5 rounded-full bg-accent-gold"
          />
          <span className="block w-[60px] h-px bg-accent-gold/50" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className={`font-body text-sm sm:text-base text-text-secondary leading-[1.8] max-w-xl mx-auto text-center ${
            image ? "mb-12 lg:mb-16" : ""
          }`}
        >
          {subtitle}
        </motion.p>

        {/* Hero Image (optional) */}
        {image && (
          <motion.div
            variants={fadeInUp}
            className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,14,13,0.12)]"
          >
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-accent-gold/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
