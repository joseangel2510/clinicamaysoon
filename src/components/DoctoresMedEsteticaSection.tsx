import "./nuevo/confianza.css";
import Image from "next/image";

const doctores = [
  {
    image: "/images/team/dr-daniel-cabina.jpg",
    name: "Dr. Daniel Sánchez Salvador",
    role: "Director Médico",
    description:
      "Más de una década diseñando protocolos de medicina estética con criterio clínico y mirada artística. Cada tratamiento parte de tu anatomía, no de un molde.",
  },
  {
    image: "/images/team/dr-jose-david-cabina.jpg",
    name: "Dr. José David",
    role: "Médico Estético",
    description:
      "Técnica precisa al servicio del resultado natural. Acompaña cada protocolo con calma, escucha y respeto por tus tiempos y tus rasgos.",
  },
];

// Equipo médico de medicina estética: panel arena con el titular y la cifra
// a la izquierda, la foto del despacho a la derecha (abre por listones) y,
// debajo, una ficha por médico.
export function DoctoresMedEsteticaSection() {
  return (
    <section id="doctores" className="co__doc sec">
      <div className="marco">
        {/* ── Editorial header with image ── */}
        <div className="co__doc-cab">
          {/* Left: copy */}
          <div className="co__doc-txt">
            <span className="pildora" data-ap>
              Equipo Médico
            </span>

            <h2 className="tit tit--l co__doc-tit" data-tit>
              Dos miradas,
              <br />
              <em>un mismo criterio</em>
            </h2>

            <p className="cuerpo co__doc-desc" data-ap>
              La medicina estética en Maysoon la firman dos médicos que comparten
              filosofía: resultado natural, técnica rigurosa y un trato que pone
              al paciente — no al protocolo — en el centro.
            </p>

            <div className="co__doc-dato" data-ap>
              <span className="serif co__doc-cifra">14+</span>
              <span className="co__doc-leyenda">
                años de experiencia
                <br />
                clínica acreditada
              </span>
            </div>
          </div>

          {/* Right: editorial image */}
          <div className="co__doc-lado">
            <div className="co__doc-sobre" aria-hidden="true" data-ap>
              <span className="co__lis3">
                <i />
                <i />
                <i />
              </span>
              <span className="co__doc-idx">01</span>
            </div>

            <div className="co__doc-foto listones" data-lis>
              <Image
                src="/images/team/doctores-despacho.jpg"
                alt="Dr. Daniel Sánchez Salvador y Dr. José David — equipo médico de Maysoon"
                fill
                sizes="(max-width: 660px) 100vw, 620px"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── Doctor portrait cards ── */}
        <div className="co__doc-red">
          {doctores.map((doc) => (
            <article key={doc.name} className="co__doc-ficha" data-ap>
              <div className="co__doc-ret">
                <Image
                  src={doc.image}
                  alt={`${doc.name} — ${doc.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 604px"
                />
              </div>

              <div className="co__doc-cuerpo">
                <span className="pildora pildora--arena">{doc.role}</span>
                <h3 className="co__doc-nombre">{doc.name}</h3>
                <p className="co__doc-bio">{doc.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
