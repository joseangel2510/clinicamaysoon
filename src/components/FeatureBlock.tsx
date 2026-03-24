"use client";

import { motion } from "framer-motion";
import { fadeInRight } from "@/lib/animations";
import type { ComponentType } from "react";

interface FeatureBlockProps {
  icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  title: string;
  description: string;
  isLast?: boolean;
}

export function FeatureBlock({
  icon: Icon,
  title,
  description,
  isLast = false,
}: FeatureBlockProps) {
  return (
    <motion.div variants={fadeInRight} className="group">
      <div className="flex items-start gap-4 py-6">
        <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
          <Icon
            size={22}
            strokeWidth={1.8}
            className="text-accent-gold transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          />
        </div>

        <div>
          <h3 className="font-body font-semibold text-base text-text-primary transition-colors duration-300 group-hover:text-accent-gold">
            {title}
          </h3>
          <p className="font-body text-sm text-text-secondary leading-[1.7] mt-1">
            {description}
          </p>
        </div>
      </div>

      {!isLast && <div className="h-px bg-bg-secondary" />}
    </motion.div>
  );
}
