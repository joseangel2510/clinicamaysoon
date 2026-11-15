/**
 * Bloque de sección numerada para páginas legales (Aviso Legal, Privacidad,
 * Cookies). Renderiza el header consistente + un contenedor tipográfico
 * para el contenido.
 *
 * Server Component estático — sin animaciones — para máxima legibilidad
 * y crawlability.
 */
import "./nuevo/catalogo.css";

interface LegalSectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ number, title, children }: LegalSectionProps) {
  const num = number.padStart(2, "0");
  return (
    <section className="ca__legal">
      <header className="ca__legal-cab">
        <span className="ca__legal-num">{num}</span>
        <h2 className="tit tit--m ca__legal-tit">{title}</h2>
      </header>
      <div className="ca__legal-txt">{children}</div>
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
    <dl className="ca__legal-dl">
      {items.map((it) => (
        <div key={it.term} className="ca__legal-fila">
          <dt className="ca__legal-dt">{it.term}</dt>
          <dd className="ca__legal-dd">{it.description}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Lista con viñetas de acento terracota. */
export function LegalBulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="ca__legal-ul">
      {items.map((item, i) => (
        <li key={i} className="ca__legal-li">
          <span className="ca__legal-punto">●</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
