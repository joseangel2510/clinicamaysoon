"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface TratamientoCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  href: string;
  priceFrom?: string;
}

export function TratamientoCard({
  image,
  category,
  title,
  description,
  href,
  priceFrom,
}: TratamientoCardProps) {
  return (
    <motion.div variants={fadeInUp} className="h-full">
      <Link
        href={href}
        className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white shadow-[0_4px_20px_rgba(15,14,13,0.06)] transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.4,0.25,1)] hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(15,14,13,0.14)] focus-visible:ring-2 focus-visible:ring-accent-gold/50 focus-visible:outline-none"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.25,0.4,0.25,1)] group-hover:scale-[1.06]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-accent-gold/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]" />
          <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-bg-primary/0 group-hover:bg-bg-primary/95 flex items-center justify-center text-bg-primary/0 group-hover:text-accent-gold transition-all duration-[400ms]">
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </span>
        </div>
        <div className="p-6 lg:p-7 flex flex-col flex-1 gap-2">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-accent-gold">
            {category}
          </span>
          <h3 className="font-display font-normal text-xl lg:text-2xl text-text-primary leading-tight tracking-[-0.01em]">
            {title}
          </h3>
          <p className="font-body text-sm text-text-secondary leading-[1.7] line-clamp-3 mt-1">
            {description}
          </p>
          {priceFrom && (
            <div className="mt-3 pt-3 border-t border-text-secondary/15 flex items-baseline justify-between">
              <span className="font-body text-[10px] uppercase tracking-[0.25em] text-text-secondary">
                Desde
              </span>
              <span className="font-display text-lg text-accent-gold">
                {priceFrom}
              </span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
