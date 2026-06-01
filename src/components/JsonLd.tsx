/**
 * Renderiza un objeto como <script type="application/ld+json">.
 *
 * Va dentro del HTML servido (SSR/SSG) — los crawlers de IA lo leen sin
 * ejecutar JS. Es seguro usarlo tanto en Server Components como en Client
 * Components: el contenido del script no se ejecuta, solo se incluye como texto.
 */

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
