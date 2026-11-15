import "./nuevo/confianza.css";
import { Boton } from "@/components/nuevo/Boton";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

const treatments = [
  {
    beforeImage: "/images/before-after/facial-before.webp",
    afterImage: "/images/before-after/facial-after.webp",
    title: "Rejuvenecimiento Facial",
    description: "Combinación de mesoterapia y factores de crecimiento",
  },
  {
    beforeImage: "/images/before-after/lips-before.webp",
    afterImage: "/images/before-after/lips-after.webp",
    title: "Aumento de Labios",
    description: "Ácido hialurónico para volumen natural y definición",
  },
  {
    beforeImage: "/images/before-after/body-before.webp",
    afterImage: "/images/before-after/body-after.webp",
    title: "Reafirmación Corporal",
    description: "Radiofrecuencia y tratamiento Tightening",
  },
];

// Antes y después: panel arena con el titular a la izquierda, el texto a la
// derecha y los tres comparadores en fila.
export function BeforeAfterSection() {
  return (
    <section className="co__ba sec">
      <div className="marco">
        {/* ── Section Header ── */}
        <div className="co__ba-cab">
          <div className="co__ba-izq">
            {/* Eyebrow */}
            <span className="pildora" data-ap>
              Resultados Reales
            </span>

            {/* H2 with contrast typography */}
            <h2 className="tit tit--l" data-tit>
              La Transformación
              <br />
              <em>Habla por Sí Misma</em>
            </h2>
          </div>

          {/* Subtitle */}
          <div className="co__ba-der" data-ap>
            <span className="co__lis3 co__lis3--l" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <p className="cuerpo">
              Nuestros pacientes confían en nosotros para lograr resultados
              naturales y duraderos. Estos son algunos de sus tratamientos.
            </p>
          </div>
        </div>

        {/* ── Slider Grid ── */}
        <div className="co__ba-red">
          {treatments.map((t) => (
            <BeforeAfterSlider key={t.title} {...t} />
          ))}
        </div>

        {/* ── CTA Link ── */}
        <div className="co__ba-accion" data-ap>
          <Boton href="/medicina-estetica" variante="linea">
            Ver Todos los Tratamientos
          </Boton>
        </div>
      </div>
    </section>
  );
}
