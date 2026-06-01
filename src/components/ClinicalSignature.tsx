/**
 * Firma clínica al pie de cada ficha de tratamiento.
 *
 * Señales E-E-A-T (Experience, Expertise, Authoritativeness, Trust) — clave
 * para visibilidad en buscadores de IA:
 *  - Autoría con nombre real, cargo y credenciales.
 *  - Foto del autor (Person schema dispone de imagen).
 *  - Fecha de última revisión visible → señal de frescura.
 *
 * El contenido se sirve estático (sin animaciones) y se ancla al final del
 * artículo principal, antes del CTA de consulta.
 */

import Image from "next/image";
import { DIRECTOR_MEDICO } from "@/lib/clinic";
import { CONTENT_LAST_REVIEWED, CONTENT_LAST_REVIEWED_LABEL } from "@/lib/clinic";

export function ClinicalSignature() {
  return (
    <section className="bg-bg-primary py-10 lg:py-12 border-t border-text-secondary/15">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
          {/* Avatar */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-full overflow-hidden ring-1 ring-accent-gold/30">
            <Image
              src="/images/team/dr-daniel.jpg"
              alt={`${DIRECTOR_MEDICO.name} — ${DIRECTOR_MEDICO.jobTitle}`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>

          {/* Text block */}
          <div className="flex-1 flex flex-col gap-1">
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-accent-gold">
              Contenido revisado clínicamente por
            </span>
            <span className="font-display text-base lg:text-lg text-text-primary leading-tight">
              {DIRECTOR_MEDICO.name}
            </span>
            <span className="font-body italic text-xs lg:text-sm text-text-secondary">
              {DIRECTOR_MEDICO.jobTitle} · Maysoon
            </span>
          </div>

          {/* Last reviewed */}
          <div className="flex flex-col gap-1 sm:items-end sm:text-right pt-2 sm:pt-0 sm:pl-6 sm:border-l border-text-secondary/15">
            <span className="font-body text-[10px] uppercase tracking-[0.25em] text-text-secondary">
              Última revisión
            </span>
            <time
              dateTime={CONTENT_LAST_REVIEWED}
              className="font-body text-xs lg:text-sm text-text-primary"
            >
              {CONTENT_LAST_REVIEWED_LABEL}
            </time>
          </div>
        </div>
      </div>
    </section>
  );
}
