"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerFast } from "@/lib/animations";

const institutions = [
  "Universidad de Salamanca",
  "CEU",
  "ISAPS",
  "SNS",
];

export function CredentialsBadge() {
  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 max-w-3xl mx-auto my-10"
    >
      {institutions.map((name) => (
        <motion.span
          key={name}
          variants={fadeInUp}
          className="font-body text-xs uppercase tracking-[0.2em] text-text-muted opacity-40 transition-opacity duration-300 hover:opacity-100 cursor-default select-none"
        >
          {name}
        </motion.span>
      ))}
    </motion.div>
  );
}
