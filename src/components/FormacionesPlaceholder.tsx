import "./nuevo/bienestar.css";
import Image from "next/image";
import { Boton } from "@/components/nuevo/Boton";

// Formaciones: a un lado el aula contada en texto, con sus rasgos en filas
// con raya; al otro, las dos fotos del aula en marcos que se abren por
// listones. Debajo, el bloque marrón de la lista de espera.
export function FormacionesPlaceholder() {
  return (
    <section className="bi bi--aula">
      <div className="marco">
        <div className="bi__aula">
          {/* ── Texto ── */}
          <div className="bi__aula-txt">
            <div className="bi__aula-cab" data-ap>
              <span className="pildora pildora--arena">Aula Maysoon</span>
              <span className="bi__idx" aria-hidden="true">
                04
              </span>
            </div>

            <h2 className="tit tit--l bi__aula-tit" data-tit>
              Aula propia, <br />
              <em>docencia clínica</em>
            </h2>

            <p className="cuerpo bi__aula-p" data-ap>
              Las primeras sesiones internas ya están en marcha en nuestra aula
              dedicada. El Dr. Daniel Sánchez Salvador comparte protocolo,
              criterio clínico y horas de cabina con grupos reducidos — el
              formato que abriremos al público profesional próximamente.
            </p>

            <ul className="bi__rasgos">
              <li className="bi__rasgo" data-ap>
                <span className="bi__marca" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>Grupos reducidos</span>
              </li>
              <li className="bi__rasgo" data-ap>
                <span className="bi__marca" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>Práctica con casos reales</span>
              </li>
            </ul>
          </div>

          {/* ── Fotos del aula ── */}
          <div className="bi__aula-fotos">
            <div className="bi__foto bi__foto--aula listones" data-lis>
              <Image
                src="/images/formaciones/aula-completa.jpg"
                alt="Aula de formaciones Maysoon — sesión con Dr. Daniel Sánchez Salvador"
                fill
                sizes="(min-width: 900px) 600px, 90vw"
                priority
              />
            </div>
            <div className="bi__foto bi__foto--doc listones" data-lis>
              <Image
                src="/images/formaciones/dr-daniel-formando.jpg"
                alt="Dr. Daniel Sánchez Salvador impartiendo una sesión formativa"
                fill
                sizes="(min-width: 900px) 372px, 56vw"
              />
            </div>
          </div>
        </div>

        {/* ── Lista de espera ── */}
        <div className="bi__espera sobre-oscuro" data-ap>
          <div className="bi__lamas" aria-hidden="true" />
          <div className="bi__espera-in">
            <div className="bi__espera-izq">
              <span className="pildora pildora--cristal">
                Programa profesional
              </span>
              <h3 className="tit tit--l bi__espera-tit">
                Apertura al público <em>en breve</em>.
              </h3>
            </div>

            <div className="bi__espera-der">
              <p className="cuerpo bi__espera-p">
                Si quieres ser de los primeros profesionales del sector en recibir
                fechas, plazas y temario, déjanos tu interés por WhatsApp.
              </p>
              <div className="bi__espera-accion">
                <Boton
                  href="https://wa.me/34651545268?text=Hola%2C%20me%20interesa%20vuestra%20formaci%C3%B3n%20para%20profesionales"
                  variante="claro"
                >
                  Apúntame a la lista
                </Boton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
