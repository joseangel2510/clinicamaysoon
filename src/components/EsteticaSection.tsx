import "./nuevo/areas-interiores.css";
import { TreatmentRow } from "./TreatmentRow";
import { ConsultaBlock } from "./ConsultaBlock";

const tratamientos = [
  {
    title: "Micropigmentación · Cejas, Eyeliner y Labios",
    description:
      "Maquillaje semipermanente que define cejas, mirada y labios con un acabado natural. Diseño personalizado según tu rostro y expresión.",
    details: [
      "Cejas: efecto pelo a pelo o sombreado (250 €)",
      "Eyeliner: mirada definida sin maquillaje diario (250 €)",
      "Labios: contorno, color y simetría (270 €)",
      "Sesión inicial + retoque al mes incluido",
    ],
    price: "250 €",
    href: "/tratamientos/micropigmentacion-microblading",
  },
];

// La micropigmentación en una fila con sus detalles y el precio; debajo, el
// cierre con la consulta. Componente de servidor.
export function EsteticaSection() {
  return (
    <section className="ai">
      <div className="marco">
        <div className="ai__cap ai__cap--lista">
          <div className="ai__margen" aria-hidden="true">
            <span className="ai__lis3">
              <i />
              <i />
              <i />
            </span>
          </div>
          <div className="ai__cap-cont">
            <div className="ai__filas">
              {tratamientos.map((t, i) => (
                <TreatmentRow key={t.title} index={i} {...t} />
              ))}
            </div>
          </div>
        </div>

        <ConsultaBlock
          title="Más servicios estéticos bajo consulta"
          description="Limpiezas faciales, depilación, manicura, lifting de pestañas y cuidados personalizados. Pregunta por nuestra agenda y precios actualizados."
        />
      </div>
    </section>
  );
}
