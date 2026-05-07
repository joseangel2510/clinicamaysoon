"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { fadeInUp, staggerFast } from "@/lib/animations";

interface ComparisonRow {
  feature: string;
  values: (string | boolean)[];
}

interface ComparisonBlockProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  competitors: string[];
  rows: ComparisonRow[];
}

export function ComparisonBlock({
  eyebrow,
  title,
  intro,
  competitors,
  rows,
}: ComparisonBlockProps) {
  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-12 lg:py-16 border-t border-text-secondary/15"
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
        style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
      >
        {title}
      </motion.h3>
      {intro && (
        <motion.p
          variants={fadeInUp}
          className="font-body text-sm lg:text-base text-text-secondary leading-[1.8] max-w-3xl mb-8"
        >
          {intro}
        </motion.p>
      )}

      <motion.div variants={fadeInUp} className="overflow-x-auto -mx-4 px-4">
        <table className="w-full min-w-[640px] border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="text-left p-4 align-bottom">
                <span className="font-body text-[10px] uppercase tracking-[0.2em] text-text-secondary">
                  Característica
                </span>
              </th>
              {competitors.map((c, i) => {
                const isMaysoon = i === 0;
                return (
                  <th
                    key={c}
                    className={`text-center p-4 align-bottom ${
                      isMaysoon
                        ? "bg-accent-gold/10 rounded-t-xl border-t border-x border-accent-gold/30"
                        : ""
                    }`}
                  >
                    <span
                      className={`font-display text-base lg:text-lg block leading-tight ${
                        isMaysoon ? "text-accent-gold" : "text-text-primary"
                      }`}
                    >
                      {c}
                    </span>
                    {isMaysoon && (
                      <span className="font-body text-[10px] uppercase tracking-[0.2em] text-accent-gold/85 mt-1 block">
                        Nuestro equipo
                      </span>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => {
              const isLast = idx === rows.length - 1;
              return (
                <tr key={r.feature} className="border-t border-text-secondary/10">
                  <td className="p-4 border-t border-text-secondary/15 align-middle">
                    <span className="font-body text-sm text-text-primary leading-[1.5]">
                      {r.feature}
                    </span>
                  </td>
                  {r.values.map((v, vIdx) => {
                    const isMaysoon = vIdx === 0;
                    return (
                      <td
                        key={`${r.feature}-${vIdx}`}
                        className={`p-4 text-center align-middle border-t border-text-secondary/15 ${
                          isMaysoon
                            ? `bg-accent-gold/10 border-x border-accent-gold/30 ${
                                isLast ? "rounded-b-xl border-b" : ""
                              }`
                            : ""
                        }`}
                      >
                        {typeof v === "boolean" ? (
                          v ? (
                            <Check
                              size={20}
                              strokeWidth={2.4}
                              className="text-accent-gold inline-block"
                            />
                          ) : (
                            <X
                              size={20}
                              strokeWidth={2.4}
                              className="text-text-secondary/50 inline-block"
                            />
                          )
                        ) : (
                          <span
                            className={`font-body text-sm ${
                              isMaysoon
                                ? "text-accent-gold font-medium"
                                : "text-text-secondary"
                            }`}
                          >
                            {v}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}
