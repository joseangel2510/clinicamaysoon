import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import {
  LegalSection,
  LegalDefinitionList,
  LegalBulletList,
} from "@/components/LegalSection";
import { CONTENT_LAST_REVIEWED_LABEL } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Aviso Legal | Maysoon",
  description:
    "Aviso Legal de Maysoon Medicina Estética y Cirugía Plástica, S.L. Datos identificativos del titular, condiciones de uso, propiedad intelectual y responsabilidades.",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Marco Legal"
        titleLine1="Aviso"
        titleLine2="Legal"
        subtitle="Información legal y condiciones de uso del sitio web de Clínica Maysoon en cumplimiento de la Ley 34/2002 (LSSI-CE)."
      />

      <section className="bg-bg-primary pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-text-secondary mb-10 pb-6 border-b border-text-secondary/15">
            Última actualización · {CONTENT_LAST_REVIEWED_LABEL}
          </p>

          <LegalSection number="1" title="Datos identificativos del titular">
            <p>
              En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio,
              de Servicios de la Sociedad de la Información y de Comercio
              Electrónico (LSSI-CE), se informa a los usuarios de este sitio web
              de los siguientes datos identificativos:
            </p>
            <LegalDefinitionList
              items={[
                {
                  term: "Titular:",
                  description:
                    "MAYSOON MEDICINA ESTÉTICA Y CIRUGÍA PLÁSTICA, S.L.",
                },
                { term: "NIF:", description: "B21637731" },
                {
                  term: "Domicilio social:",
                  description:
                    "Avenida Cardenal Benlloch, 11, 46021 Valencia (España)",
                },
                {
                  term: "Correo electrónico:",
                  description: (
                    <a
                      href="mailto:info@clinicamaysoon.com"
                      className="text-accent-gold hover:underline"
                    >
                      info@clinicamaysoon.com
                    </a>
                  ),
                },
                {
                  term: "Teléfono:",
                  description: (
                    <a
                      href="tel:+34651545268"
                      className="text-accent-gold hover:underline"
                    >
                      +34 651 54 52 68
                    </a>
                  ),
                },
                {
                  term: "Sitio web:",
                  description: (
                    <a
                      href="https://clinicamaysoon.com"
                      className="text-accent-gold hover:underline"
                    >
                      https://clinicamaysoon.com
                    </a>
                  ),
                },
              ]}
            />
          </LegalSection>

          <LegalSection number="2" title="Objeto">
            <p>
              El presente Aviso Legal regula el acceso, navegación y utilización
              del sitio web de Clínica Maysoon, así como las responsabilidades
              derivadas de la utilización de sus contenidos.
            </p>
            <p>
              La navegación por este sitio web implica la condición de usuario y
              supone la aceptación plena de las condiciones aquí recogidas.
            </p>
          </LegalSection>

          <LegalSection number="3" title="Condiciones de uso">
            <p>
              El usuario se compromete a utilizar este sitio web de forma
              diligente, correcta y lícita.
            </p>
            <p>
              Queda expresamente prohibido utilizar los contenidos del sitio web
              para:
            </p>
            <LegalBulletList
              items={[
                "Realizar actividades ilícitas.",
                "Introducir virus o cualquier otro sistema susceptible de provocar daños.",
                "Intentar acceder a zonas restringidas sin autorización.",
                "Utilizar la información publicada con fines fraudulentos o contrarios a la buena fe.",
              ]}
            />
            <p>
              El titular podrá limitar o suspender el acceso al sitio web cuando
              detecte un uso contrario a estas condiciones.
            </p>
          </LegalSection>

          <LegalSection number="4" title="Propiedad intelectual e industrial">
            <p>
              Todos los contenidos del sitio web, incluyendo, entre otros:
            </p>
            <LegalBulletList
              items={[
                "Textos.",
                "Fotografías.",
                "Imágenes.",
                "Vídeos.",
                "Logotipos.",
                "Diseño gráfico.",
                "Código fuente.",
                "Estructura.",
                "Marcas y nombres comerciales.",
              ]}
            />
            <p>
              Son titularidad de MAYSOON MEDICINA ESTÉTICA Y CIRUGÍA PLÁSTICA,
              S.L. o de terceros que han autorizado su utilización, estando
              protegidos por la normativa vigente en materia de propiedad
              intelectual e industrial.
            </p>
            <p>
              Queda prohibida su reproducción, distribución, comunicación
              pública, transformación o cualquier otra forma de explotación sin
              autorización expresa del titular.
            </p>
          </LegalSection>

          <LegalSection number="5" title="Exclusión de responsabilidad">
            <p>
              El titular realiza todos los esfuerzos razonables para garantizar
              que la información publicada sea veraz, actualizada y correcta. No
              obstante, no garantiza la inexistencia de errores ni la
              disponibilidad permanente del sitio web.
            </p>
            <p>Asimismo, no será responsable de:</p>
            <LegalBulletList
              items={[
                "Interrupciones del servicio.",
                "Incidencias técnicas.",
                "Ataques informáticos.",
                "Daños derivados del uso indebido del sitio web.",
                "Contenidos de terceros enlazados desde esta página.",
              ]}
            />
          </LegalSection>

          <LegalSection number="6" title="Enlaces externos">
            <p>
              Este sitio web puede contener enlaces a páginas de terceros.
              Clínica Maysoon no se responsabiliza del contenido, políticas o
              prácticas de dichos sitios web, cuya responsabilidad corresponde
              exclusivamente a sus respectivos titulares.
            </p>
          </LegalSection>

          <LegalSection number="7" title="Protección de datos">
            <p>
              El tratamiento de los datos personales se regula mediante la
              correspondiente{" "}
              <Link
                href="/politica-de-privacidad"
                className="text-accent-gold hover:underline"
              >
                Política de Privacidad
              </Link>
              , disponible en este sitio web.
            </p>
          </LegalSection>

          <LegalSection number="8" title="Uso de cookies">
            <p>
              Este sitio web utiliza cookies propias y de terceros para mejorar
              la experiencia del usuario, analizar la navegación y ofrecer
              contenidos adaptados a sus intereses. Puede consultar toda la
              información en nuestra{" "}
              <Link
                href="/politica-de-cookies"
                className="text-accent-gold hover:underline"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection number="9" title="Legislación aplicable y jurisdicción">
            <p>El presente Aviso Legal se rige por la legislación española.</p>
            <p>
              Para cualquier controversia que pudiera derivarse del acceso o
              utilización del sitio web, las partes se someten a los Juzgados y
              Tribunales que resulten competentes conforme a la normativa
              vigente.
            </p>
          </LegalSection>

          <LegalSection number="10" title="Información sanitaria">
            <p>
              La información publicada en este sitio web tiene carácter
              meramente informativo y divulgativo. En ningún caso sustituye la
              valoración, diagnóstico o tratamiento realizado por un profesional
              sanitario cualificado.
            </p>
            <p>
              Cualquier decisión relacionada con la salud deberá adoptarse tras
              una consulta personalizada con el equipo médico de Clínica
              Maysoon.
            </p>
          </LegalSection>

          <LegalSection number="11" title="Uso de imágenes y resultados">
            <p>
              Las imágenes, fotografías y casos clínicos publicados en este
              sitio web tienen carácter ilustrativo o corresponden a pacientes
              que han autorizado expresamente su utilización conforme a la
              normativa aplicable.
            </p>
            <p>
              Los resultados de los tratamientos pueden variar en función de las
              características individuales de cada paciente, por lo que no
              pueden garantizarse resultados idénticos en todos los casos.
            </p>
          </LegalSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
