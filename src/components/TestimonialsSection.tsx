import "./nuevo/confianza.css";
import { Boton } from "@/components/nuevo/Boton";
import { GoogleBadge } from "./GoogleBadge";
import { TestimonialCarousel } from "./TestimonialCarousel";

const testimonials = [
  {
    stars: 5,
    text: "Trato excepcional y cercano. Jose y Dani, así como todo el equipo, son grandes profesionales. La mejor opción en Valencia si buscas resultados naturales y un trato inmejorable.",
    name: "María García",
    treatment: "Rejuvenecimiento Facial",
    timeAgo: "Hace 2 meses",
  },
  {
    stars: 5,
    text: "Me realicé un tratamiento de ojeras y el resultado ha sido muy positivo. Estoy muy contento del trabajo realizado por el Dr. Daniel. Muchas gracias por la profesionalidad y el trato recibido.",
    name: "Carlos Rodríguez",
    treatment: "Corrección de Ojeras",
    timeAgo: "Hace 3 meses",
  },
  {
    stars: 5,
    text: "Me hice una masculinización facial y me quitaron 15 años de encima. El Dr. Daniel tiene unas manos increíbles. Vuelvo a tener la piel en su sitio. No podría estar más feliz.",
    name: "Alejandro M.",
    treatment: "Masculinización Facial",
    timeAgo: "Hace 1 mes",
  },
  {
    stars: 5,
    text: "Siempre que he visitado la clínica he quedado encantada. Resultado siempre muy natural. El doctor Daniel te explica los tratamientos al detalle y te recomienda el que más se ajusta a tus necesidades.",
    name: "Laura Sánchez",
    treatment: "Medicina Estética",
    timeAgo: "Hace 4 meses",
  },
  {
    stars: 5,
    text: "Saben lo que necesitas y te ofrecen todas las posibilidades sin compromiso. Usa productos de primera calidad. Me arregló un problema que llevaba tiempo intentando. ¡Recomendados al 100%!",
    name: "Patricia López",
    treatment: "Tratamiento Facial",
    timeAgo: "Hace 2 meses",
  },
  {
    stars: 5,
    text: "Fantásticos profesionales. Estoy encantada de ser clienta, especialmente cada semana con la fantástica Eva y su increíble masaje. Muchas felicidades por la nueva clínica.",
    name: "Sofía Martínez",
    treatment: "Masajes Terapéuticos",
    timeAgo: "Hace 5 meses",
  },
];

// Testimonios: el bloque marrón de la página. A la izquierda el titular, la
// nota de Google y el enlace a las reseñas; a la derecha, una cita grande
// cada vez.
export function TestimonialsSection() {
  return (
    <section id="testimonios" className="co__tes">
      <div className="co__tes-caja sobre-oscuro">
        <div className="co__tes-in">
          <div className="co__tes-red">
            {/* ── Section Header ── */}
            <div className="co__tes-cab">
              {/* Eyebrow */}
              <span className="pildora pildora--cristal" data-ap>
                Lo que dicen nuestros pacientes
              </span>

              {/* Title */}
              <h2 className="tit tit--l co__tes-tit" data-tit>
                Historias Reales,
                <br />
                <em>Resultados Reales</em>
              </h2>

              {/* Google Badge */}
              <div className="co__tes-g" data-ap>
                <GoogleBadge />
              </div>

              {/* ── CTA Link ── */}
              <div className="co__tes-accion" data-ap>
                <Boton
                  href="https://www.google.com/maps/place/Cl%C3%ADnica+Maysoon/"
                  variante="linea"
                >
                  Ver Todas las Reseñas en Google
                </Boton>
              </div>
            </div>

            {/* ── Carousel ── */}
            <div className="co__tes-car" data-ap>
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
