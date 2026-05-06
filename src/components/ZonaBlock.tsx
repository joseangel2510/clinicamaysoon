"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  clipReveal,
  staggerContainer,
} from "@/lib/animations";

interface ZonaBlockProps {
  id: string;
  index: number;
  eyebrow: string;
  title: string;
  description?: string;
  treatments: string[];
  image?: string;
  imageAlt?: string;
  imageOrientation?: "portrait" | "landscape";
  imageSide?: "left" | "right";
  children?: ReactNode;
}

export function ZonaBlock({
  id,
  index,
  eyebrow,
  title,
  description,
  treatments,
  image,
  imageAlt,
  imageOrientation = "landscape",
  imageSide = "right",
  children,
}: ZonaBlockProps) {
  const number = String(index + 1).padStart(2, "0");
  const hasImage = Boolean(image);
  const reverse = imageSide === "left";

  return (
    <motion.div
      id={id}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="scroll-mt-24 py-16 lg:py-20 border-t border-text-secondary/15 first:border-t-0"
    >
      <div
        className={`grid grid-cols-1 ${
          hasImage ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-1"
        } gap-10 lg:gap-16 items-start`}
      >
        {/* Text column */}
        <div className={reverse && hasImage ? "lg:order-2" : ""}>
          {/* Numbered eyebrow */}
          <motion.div
            variants={fadeInLeft}
            className="flex items-center gap-3 mb-5"
          >
            <span className="font-display text-xl text-accent-gold/70 leading-none">
              {number}
            </span>
            <span className="block w-10 h-px bg-accent-gold/50" />
            <span className="font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
              {eyebrow}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={clipReveal}
            className="font-display font-normal not-italic text-text-primary leading-[1.1] tracking-[-0.02em] mb-5"
            style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          {description && (
            <motion.p
              variants={fadeInUp}
              className="font-body text-sm lg:text-base text-text-secondary leading-[1.8] mb-7 max-w-xl"
            >
              {description}
            </motion.p>
          )}

          {/* Treatments list */}
          {treatments.length > 0 && (
            <motion.ul variants={staggerContainer} className="flex flex-col gap-2.5 mb-2">
              {treatments.map((t) => (
                <motion.li
                  key={t}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <Check
                    size={16}
                    strokeWidth={2}
                    className="text-accent-gold mt-1 flex-shrink-0"
                  />
                  <span className="font-body text-sm lg:text-[15px] text-text-primary leading-[1.65]">
                    {t}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          )}

          {/* Extra content (pricing tables, notes) */}
          {children && <div className="mt-8 flex flex-col gap-8">{children}</div>}
        </div>

        {/* Image column */}
        {hasImage && image && (
          <motion.div
            variants={fadeInRight}
            className={`relative overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(15,14,13,0.1)] ${
              imageOrientation === "portrait"
                ? "aspect-[4/5]"
                : "aspect-[4/3]"
            } ${reverse ? "lg:order-1" : ""}`}
          >
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-accent-gold/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
