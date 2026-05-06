"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerFast } from "@/lib/animations";

interface PricingRow {
  label: string;
  detail?: string;
  price: string;
}

interface PricingTableProps {
  title: string;
  intro?: string;
  rows: PricingRow[];
  footnote?: string;
}

export function PricingTable({ title, intro, rows, footnote }: PricingTableProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-2xl bg-bg-secondary p-7 lg:p-9 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, rgba(184,115,85,0.08), transparent 60%)",
        }}
      />
      <div className="relative">
        {/* Title */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-6 h-px bg-accent-gold" />
          <span className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-accent-gold">
            Tarifas
          </span>
        </div>
        <h4 className="font-display font-normal text-xl lg:text-2xl text-text-primary leading-tight tracking-[-0.01em] mb-3">
          {title}
        </h4>
        {intro && (
          <p className="font-body text-sm text-text-secondary leading-[1.7] mb-6 max-w-2xl">
            {intro}
          </p>
        )}

        {/* Rows */}
        <motion.ul
          variants={staggerFast}
          className="flex flex-col divide-y divide-text-secondary/15"
        >
          {rows.map((r) => (
            <motion.li
              key={`${r.label}-${r.price}`}
              variants={fadeInUp}
              className="flex items-baseline justify-between gap-4 py-3"
            >
              <div className="flex flex-col min-w-0">
                <span className="font-body text-sm lg:text-[15px] text-text-primary leading-[1.5]">
                  {r.label}
                </span>
                {r.detail && (
                  <span className="font-body text-xs text-text-secondary leading-[1.5] mt-0.5">
                    {r.detail}
                  </span>
                )}
              </div>
              <span className="font-display text-base lg:text-lg text-accent-gold whitespace-nowrap">
                {r.price}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Footnote */}
        {footnote && (
          <p className="font-body text-xs italic text-text-secondary leading-[1.7] mt-6 pt-5 border-t border-text-secondary/15">
            {footnote}
          </p>
        )}
      </div>
    </motion.div>
  );
}
