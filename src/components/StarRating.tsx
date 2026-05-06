"use client";

import { motion } from "framer-motion";

interface StarRatingProps {
  stars: number;
  size?: number;
  animate?: boolean;
}

function StarIcon({ filled, half, size }: { filled: boolean; half?: boolean; size: number }) {
  if (half) {
    return (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <defs>
          <linearGradient id="halfStar">
            <stop offset="50%" stopColor="#B87355" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.25 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z"
          fill="url(#halfStar)"
          stroke="#B87355"
          strokeWidth="1"
        />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.25 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z"
        fill={filled ? "#B87355" : "none"}
        stroke="#B87355"
        strokeWidth="1"
      />
    </svg>
  );
}

export function StarRating({ stars, size = 18, animate = false }: StarRatingProps) {
  const fullStars = Math.floor(stars);
  const hasHalf = stars % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => {
        const isFull = i < fullStars;
        const isHalf = i === fullStars && hasHalf;

        if (animate) {
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <StarIcon filled={isFull} half={isHalf} size={size} />
            </motion.span>
          );
        }

        return (
          <span key={i}>
            <StarIcon filled={isFull} half={isHalf} size={size} />
          </span>
        );
      })}
    </div>
  );
}
