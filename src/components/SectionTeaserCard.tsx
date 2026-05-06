"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface SectionTeaserCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

export function SectionTeaserCard({
  image,
  title,
  description,
  href,
  index,
}: SectionTeaserCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div variants={fadeInUp} className="h-full">
      <Link
        href={href}
        className="group relative block h-full rounded-2xl overflow-hidden bg-white shadow-[0_4px_20px_rgba(15,14,13,0.06)] transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.4,0.25,1)] hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(15,14,13,0.14)] focus-visible:ring-2 focus-visible:ring-accent-gold/50 focus-visible:outline-none"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.25,0.4,0.25,1)] group-hover:scale-[1.06]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Warm tint */}
          <div className="absolute inset-0 bg-accent-gold/5" />

          {/* Hover gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]" />

          {/* Editorial number */}
          <span className="absolute top-4 left-5 font-display text-5xl font-normal text-white/[0.18] leading-none pointer-events-none select-none">
            {number}
          </span>

          {/* Hover arrow */}
          <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-bg-primary/0 group-hover:bg-bg-primary/95 flex items-center justify-center text-bg-primary/0 group-hover:text-accent-gold transition-all duration-[400ms]">
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </span>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-7 flex flex-col gap-2">
          <h3 className="font-display font-normal text-xl text-text-primary leading-tight tracking-[-0.01em]">
            {title}
          </h3>
          <p className="font-body text-sm text-text-secondary leading-[1.7] line-clamp-2">
            {description}
          </p>
          <span className="mt-2 inline-flex items-center gap-1.5 font-body text-xs font-medium uppercase tracking-[0.18em] text-accent-gold">
            Descubrir
            <span className="block w-0 h-px bg-accent-gold transition-all duration-300 group-hover:w-8" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
