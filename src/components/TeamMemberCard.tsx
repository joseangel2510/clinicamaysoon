"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
  description: string;
  /**
   * CSS background-position value for the avatar (e.g. "center 25%").
   * Defaults to "center top" so head-anchored portraits look right.
   */
  imageObjectPosition?: string;
  /**
   * CSS background-size value (e.g. "150% auto") to zoom into the face.
   * Defaults to "cover".
   */
  imageBgSize?: string;
}

export function TeamMemberCard({
  image,
  name,
  role,
  description,
  imageObjectPosition = "center top",
  imageBgSize = "cover",
}: TeamMemberCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(15,14,13,0.05)] text-center transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(15,14,13,0.1)]"
    >
      <div
        className="w-[120px] h-[120px] mx-auto rounded-full overflow-hidden border-3 border-bg-secondary transition-colors duration-300 group-hover:border-accent-gold bg-bg-secondary"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: imageBgSize,
          backgroundPosition: imageObjectPosition,
          backgroundRepeat: "no-repeat",
        }}
        role="img"
        aria-label={name}
      />

      <h3 className="font-display font-semibold text-lg text-text-primary mt-4">
        {name}
      </h3>

      <p className="font-body text-xs uppercase tracking-[0.2em] text-accent-gold mt-1">
        {role}
      </p>

      <p className="font-body text-sm text-text-secondary leading-[1.6] mt-3">
        {description}
      </p>
    </motion.div>
  );
}
