"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  eyebrow?: string;
  title: string;
  steps: Step[];
}

export function ProcessSteps({ eyebrow, title, steps }: ProcessStepsProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
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
        className="font-display font-normal text-text-primary leading-[1.1] tracking-[-0.02em] mb-10"
        style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
      >
        {title}
      </motion.h3>

      <div className="relative">
        {/* Vertical animated line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="absolute left-[19px] top-2 bottom-2 w-px bg-accent-gold/30 origin-top"
        />

        <ol className="flex flex-col gap-8 lg:gap-10">
          {steps.map((s, i) => {
            const number = String(i + 1).padStart(2, "0");
            return (
              <motion.li
                key={s.title}
                variants={fadeInUp}
                className="relative flex gap-6 lg:gap-8 pl-0"
              >
                {/* Number badge */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-bg-secondary border border-accent-gold/30 flex items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                    className="font-display text-sm text-accent-gold leading-none"
                  >
                    {number}
                  </motion.span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h4 className="font-display font-normal text-xl lg:text-2xl text-text-primary leading-tight tracking-[-0.01em] mb-2">
                    {s.title}
                  </h4>
                  <p className="font-body text-sm lg:text-[15px] text-text-secondary leading-[1.8] max-w-2xl">
                    {s.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </motion.div>
  );
}
