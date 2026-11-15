// Quiénes somos (página interior): filosofía y origen del nombre, la foto del
// equipo que se abre por listones con la de la dirección médica montada sobre
// su esquina, y los cuatro pilares en columnas separadas por líneas finas.
import "./nuevo/nosotros.css";
import Image from "next/image";

const pillars = [
  {
    n: "01",
    title: "Productos certificados",
    body: "Tratamientos de calidad con productos de primeras marcas y trazabilidad total.",
  },
  {
    n: "02",
    title: "Tecnología avanzada",
    body: "Equipos de última generación e instalaciones diseñadas para tu confort y resultado.",
  },
  {
    n: "03",
    title: "Personal cualificado",
    body: "Equipo médico con formación oficial y titulaciones reconocidas en medicina estética.",
  },
  {
    n: "04",
    title: "Trato cercano y familiar",
    body: "Cada paciente recibe un protocolo personalizado y acompañamiento humano.",
  },
];

export function QuienesSomosSection() {
  return (
    <section id="nosotros" className="no__qs sec">
      <div className="marco">
        {/* Titular a la izquierda; texto y origen del nombre a la derecha */}
        <div className="no__cab">
          <div className="no__cab-izq">
            <span className="pildora" data-ap>
              Quiénes Somos
            </span>
            <h2 className="tit tit--l" data-tit>
              Belleza desde la <em>salud, alma de</em> Maysoon.
            </h2>
          </div>

          <div className="no__cab-der">
            <p className="no__intro" data-ap>
              Nos dedicamos a devolver la belleza, y a conseguir esta desde la
              restitución de la salud. En nuestra clínica de Valencia, cada
              tratamiento parte de una valoración integral: cuidamos lo que se
              ve y lo que sostiene tu bienestar por dentro.
            </p>

            <figure className="no__origen" data-ap>
              <span className="pildora pildora--arena">El origen del nombre</span>
              <blockquote>
                «Maysoon» es un nombre árabe que significa
                <span> “Mujer de rostro y cuerpo bellos”</span>.
              </blockquote>
            </figure>

            <p className="no__dir" data-ap>
              <span className="no__marca" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              Avda. Cardenal Benlloch 11 · 46021 Valencia
            </p>
          </div>
        </div>

        {/* El equipo */}
        <div className="no__equipo">
          <div className="no__foto listones" data-lis>
            <Image
              src="/images/nuevo/equipo-listones.webp"
              alt="Equipo de Maysoon frente al muro de listones de la clínica"
              fill
              sizes="(min-width: 1440px) 1280px, 92vw"
            />
          </div>

          <div className="no__equipo-pie">
            <div className="no__equipo-txt">
              <div className="no__rotulo" data-ap>
                <span className="pildora">El Equipo</span>
                <span className="no__indice" aria-hidden>
                  02
                </span>
              </div>

              <h3 className="tit tit--m no__equipo-tit" data-tit>
                Equipo <em>titulado</em>,
                <br className="hidden sm:block" /> trato <em>humano</em>.
              </h3>

              <p className="cuerpo no__equipo-desc" data-ap>
                Detrás de cada protocolo hay un equipo cohesionado: médicos,
                auxiliares, recepción y bienestar trabajando en una misma sintonía.
                La cercanía no es una promesa de marketing — es la forma en que
                elegimos atenderte.
              </p>

              <div className="no__dato" data-ap>
                <span className="serif no__dato-num">6</span>
                <span className="no__dato-txt">
                  Profesionales titulados
                  <br />
                  al servicio de tu bienestar
                </span>
              </div>
            </div>

            <div className="no__lado">
              <div className="no__lado-foto listones" data-lis>
                <Image
                  src="/images/team/doctores-despacho.jpg"
                  alt="Dr. Daniel Sánchez Salvador y Dr. José David — dirección médica"
                  fill
                  sizes="(min-width: 900px) 520px, (min-width: 640px) 560px, 92vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pilares */}
        <ol className="no__pilares">
          {pillars.map((p) => (
            <li key={p.n} className="no__pilar" data-ap>
              <span className="no__pilar-num">{p.n}</span>
              <h3 className="no__pilar-tit">{p.title}</h3>
              <p className="no__pilar-txt">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
