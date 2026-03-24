"use client";

import { motion, type MotionValue, useTransform } from "framer-motion";

export function ExperienceProgressBar({
  progress,
  activeStep,
}: {
  progress: MotionValue<number>;
  activeStep: number;
}) {
  const scaleX = useTransform(progress, [0, 1], [0, 1]);

  return (
    <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
      {/* Track */}
      <div className="relative h-[2px] w-[200px] overflow-hidden rounded-full bg-white/15">
        {/* Fill */}
        <motion.div
          className="absolute inset-y-0 left-0 right-0 origin-left bg-accent-gold"
          style={{ scaleX }}
        />
        {/* Glow tip */}
        <motion.div
          className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent-gold"
          style={{
            left: useTransform(progress, [0, 1], ["0%", "100%"]),
            boxShadow: "0 0 8px rgba(196,162,101,0.6)",
          }}
        />
      </div>

      {/* Counter */}
      <span className="font-body text-xs text-white/40 tabular-nums">
        0{activeStep + 1} / 04
      </span>
    </div>
  );
}
