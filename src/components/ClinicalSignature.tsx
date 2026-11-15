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

import "./nuevo/ficha-tarifas.css";
import Image from "next/image";
import { DIRECTOR_MEDICO } from "@/lib/clinic";
import { CONTENT_LAST_REVIEWED, CONTENT_LAST_REVIEWED_LABEL } from "@/lib/clinic";

export function ClinicalSignature() {
  return (
    <section className="fta__fir">
      <div className="marco">
        <div className="fta__fir-tira">
          {/* Avatar */}
          <div className="fta__fir-foto">
            <Image
              src="/images/nuevo/dr-daniel.webp"
              alt={`${DIRECTOR_MEDICO.name} — ${DIRECTOR_MEDICO.jobTitle}`}
              fill
              className="fta__fir-img"
              sizes="80px"
            />
          </div>

          {/* Text block */}
          <div>
            <span className="fta__micro">
              Contenido revisado clínicamente por
            </span>
            <span className="fta__fir-nom">
              {DIRECTOR_MEDICO.name}
            </span>
            <span className="serif fta__fir-rol">
              {DIRECTOR_MEDICO.jobTitle} · Maysoon
            </span>
          </div>

          {/* Last reviewed */}
          <div className="fta__fir-fecha">
            <span className="fta__micro">
              Última revisión
            </span>
            <time dateTime={CONTENT_LAST_REVIEWED} className="serif fta__fir-dia">
              {CONTENT_LAST_REVIEWED_LABEL}
            </time>
          </div>
        </div>
      </div>
    </section>
  );
}
