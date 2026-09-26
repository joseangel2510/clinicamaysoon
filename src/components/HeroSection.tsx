import { MessageCircle } from "lucide-react";
import { ScrollIndicator } from "./ScrollIndicator";
import { AuthorizationBadge } from "./AuthorizationBadge";
import { HeroSlideshow } from "./HeroSlideshow";

// Componente de servidor: la entrada se anima con CSS (globals.css) para que
// el titular y la primera foto se pinten sin esperar a la hidratación de React.
export function HeroSection() {
  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* ── Left Side — Text Content ── */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 px-8 sm:px-12 lg:pl-20 lg:pr-12 pt-24 pb-10 lg:pt-24 lg:pb-0 bg-gradient-to-b from-bg-primary to-bg-secondary lg:bg-gradient-to-b lg:from-bg-primary lg:to-bg-secondary">
        {/* Subtle radial glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(184,115,85,0.06) 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-xl">
          {/* Eyebrow */}
          <div
            className="hero-fade-left flex items-center gap-3 mb-6 lg:mb-8"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="block w-10 h-px bg-accent-gold" />
            <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-accent-gold">
              Medicina Estética Avanzada en Valencia
            </span>
          </div>

          {/* H1 — dos líneas visuales dentro de un único h1 (semántica correcta) */}
          <div className="mb-5 lg:mb-6">
            <h1
              className="font-display font-normal leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
            >
              <span
                className="hero-fade-up block not-italic text-[#0F0E0D]"
                style={{ animationDelay: "0.1s" }}
              >
                Tu Belleza,
              </span>
              <span
                className="hero-fade-up block italic text-[#7B6E5E]"
                style={{ animationDelay: "0.2s" }}
              >
                Nuestra Ciencia
              </span>
            </h1>
          </div>

          {/* Decorative separator with breathing pulse */}
          <div
            className="hero-scale-x flex items-center gap-3 mb-6 lg:mb-8 origin-left"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="block w-[60px] h-px bg-accent-gold/50" />
            <span className="soft-pulse block w-1.5 h-1.5 rounded-full bg-accent-gold" />
            <span className="block w-[60px] h-px bg-accent-gold/50" />
          </div>

          {/* Subtitle */}
          <p
            className="hero-fade-up font-body text-sm sm:text-base text-text-secondary leading-[1.8] max-w-[480px] mb-8 lg:mb-10"
            style={{ animationDelay: "0.35s" }}
          >
            Donde las técnicas más avanzadas en medicina estética y láser se ponen
            al servicio de tu bienestar. Resultados naturales, atención
            personalizada.
          </p>

          {/* CTA + Badge row */}
          <div
            className="hero-fade-up flex flex-col sm:flex-row items-center sm:items-center gap-5"
            style={{ animationDelay: "0.45s" }}
          >
            {/* Authorization Badge */}
            <AuthorizationBadge />

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/34651545268?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-accent-gold text-bg-dark px-8 py-3.5 rounded-full font-body text-base font-medium transition-transform transition-shadow duration-300 hover:bg-accent-gold-light hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(184,115,85,0.3)] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-accent-gold/50"
            >
              <MessageCircle size={20} strokeWidth={2} />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Decorative vertical gold line between sides ── */}
      <div className="hero-line hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-accent-gold/15 z-20 origin-top" />

      {/* ── Slideshow único: arriba en móvil (40vh), a la derecha en escritorio.
          Un solo componente para que solo se descargue una foto inicial. ── */}
      <div className="relative order-first lg:order-last w-full h-[40vh] lg:w-1/2 lg:h-screen overflow-hidden flex-shrink-0">
        <HeroSlideshow
          sizes="(min-width: 1024px) 50vw, 100vw"
          imageClassName="object-top lg:object-center"
        />

        {/* Mobile: dark overlay into the text */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-bg-dark/30 via-transparent to-bg-primary z-20 pointer-events-none" />

        {/* Desktop: gradient overlay — left fade into text area */}
        <div
          className="hidden lg:block absolute inset-y-0 left-0 w-[35%] z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--color-bg-primary) 0%, transparent 100%)",
          }}
        />

        {/* Subtle terracotta tint overlay */}
        <div className="absolute inset-0 bg-accent-gold/5 z-[5] pointer-events-none" />
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
