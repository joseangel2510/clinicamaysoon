"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { scaleUp } from "@/lib/animations";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  description,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasPlayedDemo = useRef(false);
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, { once: true, amount: 0.4 });

  // Demo swipe animation on first viewport entry
  useEffect(() => {
    if (isInView && !hasPlayedDemo.current) {
      hasPlayedDemo.current = true;
      const timeout = setTimeout(() => {
        // Animate: 50 → 30 → 70 → 50
        const steps = [
          { to: 30, duration: 0.4 },
          { to: 70, duration: 0.5 },
          { to: 50, duration: 0.4 },
        ];
        let delay = 0;
        steps.forEach((step) => {
          setTimeout(() => {
            animate(position, step.to, {
              duration: step.duration,
              ease: [0.25, 0.4, 0.25, 1],
              onUpdate: (v) => setPosition(v),
            });
          }, delay * 1000);
          delay += step.duration + 0.05;
        });
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = (x / rect.width) * 100;
    setPosition(Math.max(2, Math.min(98, pct)));
  }, []);

  const handleMouseDown = useCallback(() => setIsDragging(true), []);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      updatePosition(e.clientX);
    };
    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, updatePosition]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  return (
    <motion.div ref={inViewRef} variants={scaleUp} className="group">
      {/* Slider container */}
      <div
        ref={containerRef}
        className="relative aspect-square rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,14,13,0.08)] cursor-ew-resize select-none transition-shadow duration-400 group-hover:shadow-[0_24px_70px_rgba(15,14,13,0.14)] group-hover:scale-[1.02] transition-transform"
        onMouseDown={handleMouseDown}
        onTouchStart={() => setIsDragging(true)}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* After image (base layer) */}
        <Image
          src={afterImage}
          alt="Después del tratamiento"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          draggable={false}
        />

        {/* Before image (clipped overlay) */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <Image
            src={beforeImage}
            alt="Antes del tratamiento"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            draggable={false}
          />
        </div>

        {/* Labels */}
        <span className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm text-white text-[10px] font-body font-medium uppercase tracking-[0.15em] px-3 py-1.5 rounded-full pointer-events-none">
          Antes
        </span>
        <span className="absolute top-4 right-4 z-10 bg-accent-gold text-bg-dark text-[10px] font-body font-medium uppercase tracking-[0.15em] px-3 py-1.5 rounded-full pointer-events-none">
          Después
        </span>

        {/* Drag handle line */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          {/* Vertical line */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/90 shadow-[0_0_8px_rgba(0,0,0,0.3)]" />

          {/* Circle handle */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-black/10 shadow-lg flex items-center justify-center gap-0.5 transition-transform duration-200 ${
              isDragging ? "scale-110" : ""
            }`}
          >
            <ChevronLeft size={14} className="text-accent-gold" strokeWidth={2.5} />
            <ChevronRight size={14} className="text-accent-gold" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* Treatment info below slider */}
      <div className="mt-5 text-center">
        <h3 className="font-body font-semibold text-base text-text-primary">
          {title}
        </h3>
        <p className="font-body text-sm text-text-muted mt-1">{description}</p>
      </div>
    </motion.div>
  );
}
