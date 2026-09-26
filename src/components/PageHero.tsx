import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
}

// Componente de servidor: la entrada se anima con CSS (globals.css) para que
// el título y la imagen se pinten sin esperar a la hidratación de React.
export function PageHero({
  eyebrow,
  titleLine1,
  titleLine2,
  subtitle,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-20 overflow-hidden bg-bg-primary">
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(184,115,85,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Eyebrow */}
        <div
          className="hero-fade-left flex items-center justify-center gap-3 mb-6"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="block w-10 h-px bg-accent-gold" />
          <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-accent-gold">
            {eyebrow}
          </span>
          <span className="block w-10 h-px bg-accent-gold" />
        </div>

        {/* H1 — dos líneas visuales dentro de un único h1 (semántica correcta) */}
        <div className="text-center mb-6">
          <h1
            className="font-display font-normal leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            <span
              className="hero-fade-up block not-italic text-[#0F0E0D]"
              style={{ animationDelay: "0.1s" }}
            >
              {titleLine1}
            </span>
            <span
              className="hero-fade-up block italic text-[#7B6E5E]"
              style={{ animationDelay: "0.2s" }}
            >
              {titleLine2}
            </span>
          </h1>
        </div>

        {/* Decorative dot separator */}
        <div
          className="hero-scale-x flex items-center justify-center gap-3 mb-8 origin-center"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="block w-[60px] h-px bg-accent-gold/50" />
          <span className="soft-pulse block w-1.5 h-1.5 rounded-full bg-accent-gold" />
          <span className="block w-[60px] h-px bg-accent-gold/50" />
        </div>

        {/* Subtitle */}
        <p
          className={`hero-fade-up font-body text-sm sm:text-base text-text-secondary leading-[1.8] max-w-xl mx-auto text-center ${
            image ? "mb-12 lg:mb-16" : ""
          }`}
          style={{ animationDelay: "0.35s" }}
        >
          {subtitle}
        </p>

        {/* Hero Image (optional) */}
        {image && (
          <div
            className="hero-rise relative aspect-[21/9] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,14,13,0.12)]"
            style={{ animationDelay: "0.1s" }}
          >
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              priority
              fetchPriority="high"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-accent-gold/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        )}
      </div>
    </section>
  );
}
