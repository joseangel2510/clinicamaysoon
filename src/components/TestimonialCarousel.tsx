"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "./TestimonialCard";

interface Testimonial {
  stars: number;
  text: string;
  name: string;
  treatment: string;
  timeAgo: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const GAP = 24;

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [starKey, setStarKey] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const isPaused = useRef(false);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  // Measure container + responsive visible count
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 768) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);

      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Clamp index when visibleCount changes
  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [maxIndex, currentIndex]);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, maxIndex));
      setCurrentIndex(clamped);
      setStarKey((k) => k + 1);
    },
    [maxIndex]
  );

  const next = useCallback(() => {
    goTo(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  }, [currentIndex, maxIndex, goTo]);

  const prev = useCallback(() => {
    goTo(currentIndex <= 0 ? maxIndex : currentIndex - 1);
  }, [currentIndex, maxIndex, goTo]);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused.current) next();
    }, 5000);
    return () => clearInterval(interval);
  }, [next]);

  function pauseAutoplay() {
    isPaused.current = true;
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
  }

  function resumeAutoplay() {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      isPaused.current = false;
    }, 3000);
  }

  function handleDragEnd(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
    resumeAutoplay();
  }

  // Compute slide offset in pixels
  const cardWidth = containerWidth > 0
    ? (containerWidth - GAP * (visibleCount - 1)) / visibleCount
    : 0;
  const offsetX = -(currentIndex * (cardWidth + GAP));

  const dotCount = maxIndex + 1;

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Carousel track */}
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          style={{ gap: GAP }}
          animate={{ x: offsetX }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragStart={pauseAutoplay}
          onDragEnd={handleDragEnd}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {testimonials.map((t, i) => {
            const centerIndex = currentIndex + Math.floor(visibleCount / 2);
            return (
              <motion.div
                key={i}
                className="shrink-0"
                style={{ width: cardWidth > 0 ? cardWidth : `calc((100% - ${GAP * (visibleCount - 1)}px) / ${visibleCount})` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <TestimonialCard
                  {...t}
                  isActive={visibleCount >= 3 && i === centerIndex}
                  animateStars={true}
                  key={`${i}-${starKey}`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation arrows + dots */}
      <div className="mt-8 flex items-center justify-center gap-6 lg:mt-0">
        <button
          onClick={() => { pauseAutoplay(); prev(); resumeAutoplay(); }}
          aria-label="Testimonio anterior"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-transparent text-text-light transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-accent-gold lg:absolute lg:-left-16 lg:top-1/2 lg:-translate-y-1/2"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: dotCount }, (_, i) => (
            <button
              key={i}
              onClick={() => { pauseAutoplay(); goTo(i); resumeAutoplay(); }}
              aria-label={`Ir al grupo de testimonios ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "h-2.5 w-2.5 bg-accent-gold"
                  : "h-2 w-2 bg-text-light/20 hover:bg-text-light/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => { pauseAutoplay(); next(); resumeAutoplay(); }}
          aria-label="Siguiente testimonio"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-transparent text-text-light transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-accent-gold lg:absolute lg:-right-16 lg:top-1/2 lg:-translate-y-1/2"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
