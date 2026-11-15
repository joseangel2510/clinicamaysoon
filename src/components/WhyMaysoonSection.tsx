// Por qué Maysoon (página interior): la fila de cifras con listones finos, el
// bloque marrón con el titular y la foto de la clínica, y las cuatro razones
// en filas grandes con índice en cursiva serif.
import "./nuevo/nosotros.css";
import Image from "next/image";
import { Sparkles, Heart, Shield, Award } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { FeatureBlock } from "./FeatureBlock";

const counters = [
  {
    end: 14,
    prefix: "+",
    suffix: "",
    label: "Años de experiencia",
    duration: 2000,
    decimals: 0,
  },
  {
    end: 114,
    prefix: "+",
    suffix: "",
    label: "Reseñas en Google",
    duration: 2500,
    decimals: 0,
  },
  {
    end: 100,
    prefix: "",
    suffix: "%",
    label: "Personal titulado",
    duration: 2000,
    decimals: 0,
  },
  {
    end: 4.7,
    prefix: "",
    suffix: "/5",
    label: "Valoración media",
    duration: 2000,
    decimals: 1,
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Tecnología de Última Generación",
    description:
      "Equipos de láser diodo de alta potencia, Morpheus, BodyTite y las técnicas más avanzadas del mercado.",
  },
  {
    icon: Heart,
    title: "Trato Cercano y Personalizado",
    description:
      "Cada paciente recibe una valoración integral y un protocolo diseñado específicamente para sus necesidades.",
  },
  {
    icon: Shield,
    title: "Productos Certificados de Primera Línea",
    description:
      "Solo trabajamos con marcas comerciales certificadas. Transparencia total en cada tratamiento.",
  },
  {
    icon: Award,
    title: "Resultados Naturales y Duraderos",
    description:
      "Nuestra filosofía: realzar tu belleza natural. Sin excesos, sin artificialidad. Tú, en tu mejor versión.",
  },
];

export function WhyMaysoonSection() {
  return (
    <section id="por-que-maysoon" className="no__pq">
      {/* ── Cifras ── */}
      <div className="marco no__pq-cifras">
        <dl className="no__cifras">
          {counters.map((c) => (
            <AnimatedCounter key={c.label} {...c} />
          ))}
        </dl>
      </div>

      {/* ── Titular y foto de la clínica ── */}
      <div className="no__pq-caja">
        <div className="no__pq-panel sobre-oscuro">
          <div className="marco no__pq-rejilla">
            <div className="no__pq-txt">
              <span className="pildora pildora--cristal" data-ap>
                ¿Por qué Maysoon?
              </span>
              <h2 className="tit tit--l no__pq-tit" data-tit>
                La Excelencia <br />
                <em>Como Estándar</em>
              </h2>
              <p className="cuerpo no__pq-sub" data-ap>
                En Maysoon no solo cuidamos tu imagen, cuidamos cada
                detalle de tu experiencia.
              </p>
            </div>

            <div className="no__pq-foto listones" data-lis>
              <Image
                src="/images/why-maysoon.jpg"
                alt="Maysoon — Excelencia y experiencia clínica"
                fill
                sizes="(min-width: 640px) 560px, 92vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Razones ── */}
      <div className="marco sec">
        <div className="no__razones">
          {features.map((f, i) => (
            <FeatureBlock
              key={f.title}
              icon={f.icon}
              title={f.title}
              description={f.description}
              isLast={i === features.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
