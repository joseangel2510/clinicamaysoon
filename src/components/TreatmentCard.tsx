"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface TreatmentCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  index: number;
}

export function TreatmentCard({
  image,
  title,
  description,
  link,
  index,
}: TreatmentCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.a
      href={link}
      variants={fadeInUp}
      className="group block rounded-2xl overflow-hidden bg-white shadow-[0_4px_20px_rgba(26,22,20,0.06)] transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.4,0.25,1)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(26,22,20,0.12)]"
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.4,0.25,1)] group-hover:scale-[1.08]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]" />

        {/* Editorial number */}
        <span className="absolute top-4 left-5 font-display text-5xl font-bold text-white/[0.15] leading-none pointer-events-none select-none">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
          {title}
        </h3>
        <p className="font-body text-sm text-text-secondary leading-[1.7] line-clamp-3 mb-4">
          {description}
        </p>
        <span className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-accent-gold">
          Saber más
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
          {/* Animated underline */}
          <span className="absolute bottom-6 left-6 h-px bg-accent-gold/40 w-0 group-hover:w-[72px] transition-all duration-300" />
        </span>
      </div>
    </motion.a>
  );
}
