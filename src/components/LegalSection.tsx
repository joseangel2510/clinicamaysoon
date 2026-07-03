/**
 * Bloque de sección numerada para páginas legales (Aviso Legal, Privacidad,
 * Cookies). Renderiza el header consistente + un contenedor tipográfico
 * para el contenido.
 *
 * Server Component estático — sin animaciones — para máxima legibilidad
 * y crawlability.
 */

interface LegalSectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ number, title, children }: LegalSectionProps) {
  const num = number.padStart(2, "0");
  return (
    <section className="py-10 lg:py-12 border-t border-text-secondary/15 first:border-t-0 first:pt-0">
      <header className="flex items-baseline gap-4 mb-6">
        <span className="font-display text-xl lg:text-2xl text-accent-gold/70 leading-none">
          {num}
        </span>
        <span className="block w-10 h-px bg-accent-gold/40" />
        <h2 className="font-display font-normal text-xl lg:text-2xl text-text-primary leading-[1.25] tracking-[-0.01em]">
          {title}
        </h2>
      </header>
      <div className="font-body text-sm lg:text-[15px] text-text-secondary leading-[1.85] flex flex-col gap-4">
        {children}
      </div>
    </section>
  );
}

/** Definition list para bloques tipo "Nombre: valor" (datos identificativos). */
export function LegalDefinitionList({
  items,
}: {
  items: Array<{ term: string; description: React.ReactNode }>;
}) {
  return (
    <dl className="grid gap-2.5 pl-0 sm:pl-4 border-l-0 sm:border-l-2 sm:border-accent-gold/25 my-2">
      {items.map((it) => (
        <div key={it.term} className="flex flex-col sm:flex-row sm:gap-3">
          <dt className="font-body font-medium text-text-primary min-w-[180px]">
            {it.term}
          </dt>
          <dd className="font-body text-text-secondary">{it.description}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Lista con viñetas de acento dorado. */
export function LegalBulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2 mt-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-accent-gold mt-1.5 flex-shrink-0 text-[10px]">
            ●
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
