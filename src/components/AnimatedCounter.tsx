"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

function useCountUp(end: number, duration: number = 2000, decimals: number = 0) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * end).toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration, decimals]);

  return { count, ref };
}

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
  decimals?: number;
}

export function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  label,
  duration = 2000,
  decimals = 0,
}: AnimatedCounterProps) {
  const { count, ref } = useCountUp(end, duration, decimals);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="text-center px-4 py-2"
    >
      <span className="font-display text-4xl lg:text-5xl font-bold text-accent-gold tracking-tight">
        {prefix}
        {decimals > 0 ? count.toFixed(decimals) : count}
        {suffix}
      </span>

      <span className="block w-8 h-px bg-accent-gold/40 mx-auto my-3" />

      <span className="block font-body text-xs uppercase tracking-[0.2em] text-text-light/60">
        {label}
      </span>
    </motion.div>
  );
}
