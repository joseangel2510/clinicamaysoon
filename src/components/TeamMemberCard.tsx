"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
  description: string;
  imageObjectPosition?: string;
  imageScale?: number;
}

export function TeamMemberCard({
  image,
  name,
  role,
  description,
  imageObjectPosition = "center top",
  imageScale = 1,
}: TeamMemberCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(15,14,13,0.05)] text-center transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(15,14,13,0.1)]"
    >
      <div className="relative w-[120px] h-[120px] mx-auto rounded-full overflow-hidden border-3 border-bg-secondary transition-colors duration-300 group-hover:border-accent-gold">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          style={{
            objectPosition: imageObjectPosition,
            transform: imageScale !== 1 ? `scale(${imageScale})` : undefined,
            transformOrigin: "center top",
          }}
          sizes="120px"
        />
      </div>

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
