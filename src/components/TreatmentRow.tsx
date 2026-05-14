"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface TreatmentRowProps {
  index: number;
  title: string;
  description: string;
  details?: string[];
  price?: string;
  href?: string;
}

export function TreatmentRow({
  index,
  title,
  description,
  details = [],
  price,
  href,
}: TreatmentRowProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative grid grid-cols-1 lg:grid-cols-[80px_1fr_auto] gap-6 lg:gap-10 py-10 lg:py-12 border-b border-text-secondary/15 last:border-b-0"
    >
      {/* Editorial number */}
      <div className="font-display font-normal text-3xl lg:text-4xl text-accent-gold/60 leading-none">
        {number}
      </div>

      {/* Content */}
      <div>
        {href ? (
          <Link
            href={href}
            className="group/title inline-flex items-start gap-2 mb-3 transition-colors duration-300 hover:text-accent-gold focus-visible:outline-none focus-visible:text-accent-gold"
          >
            <h3 className="font-display font-normal text-2xl lg:text-3xl text-text-primary leading-tight tracking-[-0.01em] transition-colors duration-300 group-hover/title:text-accent-gold group-focus-visible/title:text-accent-gold">
              {title}
            </h3>
            <ArrowUpRight
              size={20}
              strokeWidth={1.8}
              className="mt-2 flex-shrink-0 text-accent-gold/50 transition-all duration-300 group-hover/title:text-accent-gold group-hover/title:translate-x-[2px] group-hover/title:-translate-y-[2px]"
              aria-hidden
            />
          </Link>
        ) : (
          <h3 className="font-display font-normal text-2xl lg:text-3xl text-text-primary leading-tight tracking-[-0.01em] mb-3">
            {title}
          </h3>
        )}
        <p className="font-body text-sm lg:text-base text-text-secondary leading-[1.8] mb-5 max-w-2xl">
          {description}
        </p>
        {details.length > 0 && (
          <ul className="flex flex-col gap-2.5">
            {details.map((d) => (
              <li key={d} className="flex items-start gap-2.5">
                <Check
                  size={16}
                  strokeWidth={2}
                  className="text-accent-gold mt-1 flex-shrink-0"
                />
                <span className="font-body text-sm text-text-primary leading-[1.6]">
                  {d}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Price */}
      {price && (
        <div className="lg:text-right lg:min-w-[120px]">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-text-secondary block mb-1">
            Desde
          </span>
          <span className="font-display text-2xl text-accent-gold">{price}</span>
        </div>
      )}
    </motion.div>
  );
}
