"use client";

import { motion } from "framer-motion";
import { StarRating } from "./StarRating";

interface TestimonialCardProps {
  stars: number;
  text: string;
  name: string;
  treatment: string;
  timeAgo: string;
  isActive?: boolean;
  animateStars?: boolean;
}

export function TestimonialCard({
  stars,
  text,
  name,
  treatment,
  timeAgo,
  isActive = false,
  animateStars = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-500 ${
        isActive
          ? "border-white/15 bg-white/[0.07] shadow-[0_0_30px_rgba(184,115,85,0.08)]"
          : "border-white/[0.08] bg-white/[0.05]"
      }`}
    >
      {/* Decorative opening quote */}
      <span
        className="pointer-events-none absolute left-6 top-4 select-none font-display text-6xl leading-none text-accent-gold/15"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div className="mb-4">
        <StarRating stars={stars} size={18} animate={animateStars} />
      </div>

      {/* Review text */}
      <p className="mt-2 flex-1 font-body text-base leading-[1.8] text-text-light/85">
        &ldquo;{text}&rdquo;
      </p>

      {/* Separator */}
      <div className="my-6 h-px w-10 bg-text-light/15" />

      {/* Patient info */}
      <div>
        <p className="font-body text-sm font-semibold text-text-light">{name}</p>
        <p className="mt-1 font-body text-xs uppercase tracking-wider text-accent-gold">
          {treatment}
        </p>
        <p className="mt-1 font-body text-xs text-text-light/40">{timeAgo}</p>
      </div>
    </div>
  );
}
