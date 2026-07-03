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
  title: "Política de Privacidad | Maysoon",
  description:
    "Política de Privacidad de Clínica Maysoon. Información sobre el tratamiento de datos personales conforme al RGPD (UE) 2016/679 y a la LOPDGDD.",
  alternates: { canonical: "/politica-de-privacidad" },
};

export default function PoliticaPrivacidadPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Protección de Datos"
        titleLine1="Política de"
        titleLine2="Privacidad"
        subtitle="Cómo tratamos tus datos personales conforme al Reglamento General de Protección de Datos (RGPD) y a la LOPDGDD."
      />

      <section className="bg-bg-primary pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-text-secondary mb-10 pb-6 border-b border-text-secondary/15">
            Última actualización · {CONTENT_LAST_REVIEWED_LABEL}
          </p>

          {/* ── Resumen destacado ── */}
          <aside
            className="mb-14 rounded-2xl bg-bg-secondary border border-accent-gold/25 px-6 py-6 lg:px-8 lg:py-7"
            aria-label="Resumen de información básica de protección de datos"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
                Información básica de protección de datos
              </span>
              <span className="block flex-1 h-px bg-accent-gold/30" />
            </div>
            <LegalDefinitionList
              items={[
                {
                  term: "Responsable:",
                  description:
                    "MAYSOON MEDICINA ESTÉTICA Y CIRUGÍA PLÁSTICA, S.L.",
                },
                {
                  term: "Finalidad:",
                  description:
                    "Gestión de consultas, solicitudes de cita y relación con los usuarios.",
                },
                {
                  term: "Base jurídica:",
                  description:
                    "Consentimiento, medidas precontractuales, obligación legal e interés legítimo.",
                },
                {
                  term: "Destinatarios:",
                  description:
                    "No se cederán datos salvo obligación legal o proveedores autorizados.",
                },
                {
                  term: "Derechos:",
                  description:
                    "Acceso, rectificación, supresión, oposición, limitación y portabilidad.",
                },
                {
                  term: "Contacto:",
                  description: (
                    <a
                      href="mailto:info@clinicamaysoon.com"
                      className="text-accent-gold hover:underline"
                    >
                      info@clinicamaysoon.com
                    </a>
                  ),
                },
              ]}
            />
          </aside>

          <LegalSection number="1" title="Responsable del tratamiento">
            <p>
              En cumplimiento de lo dispuesto en el Reglamento (UE) 2016/679
              (RGPD) y en la Ley Orgánica 3/2018 (LOPDGDD), le informamos de que
              los datos personales facilitados a través de este sitio web serán
              tratados por:
            </p>
            <LegalDefinitionList
              items={[
                {
                  term: "Responsable:",
                  description:
                    "MAYSOON MEDICINA ESTÉTICA Y CIRUGÍA PLÁSTICA, S.L.",
                },
                { term: "NIF:", description: "B21637731" },
                {
                  term: "Domicilio:",
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
              ]}
            />
          </LegalSection>

          <LegalSection number="2" title="¿Qué datos personales tratamos?">
            <p>
              Podremos tratar los datos que el usuario facilite de forma
              voluntaria a través de los distintos canales disponibles en la
              web, tales como:
            </p>
            <LegalBulletList
              items={[
                "Nombre y apellidos.",
                "Teléfono.",
                "Dirección de correo electrónico.",
                "Información facilitada en formularios de contacto o solicitud de cita.",
                "Información necesaria para responder a consultas.",
                "Datos técnicos de navegación obtenidos mediante cookies (cuando exista consentimiento).",
              ]}
            />
            <p>
              No se solicitarán categorías especiales de datos personales salvo
              que resulte estrictamente necesario para la prestación del
              servicio y siempre conforme a la normativa aplicable.
            </p>
          </LegalSection>

          <LegalSection number="3" title="¿Con qué finalidad tratamos sus datos?">
            <p>Los datos podrán utilizarse para las siguientes finalidades:</p>
            <LegalBulletList
              items={[
                "Gestionar solicitudes de información.",
                "Gestionar solicitudes de cita.",
                "Contactar con el usuario para responder consultas.",
                "Gestionar la relación comercial o precontractual.",
                "Enviar comunicaciones relacionadas con los servicios solicitados.",
                "Cumplir obligaciones legales.",
                "Mejorar la experiencia de navegación.",
                "Analizar el funcionamiento del sitio web.",
                "Medir la eficacia de campañas publicitarias cuando el usuario haya prestado su consentimiento.",
              ]}
            />
          </LegalSection>

          <LegalSection number="4" title="Base jurídica del tratamiento">
            <p>Las bases legales que legitiman el tratamiento son:</p>
            <LegalBulletList
              items={[
                "El consentimiento del interesado.",
                "La ejecución de medidas precontractuales solicitadas por el usuario.",
                "El cumplimiento de obligaciones legales.",
                "El interés legítimo del responsable cuando resulte aplicable conforme a la normativa.",
              ]}
            />
          </LegalSection>

          <LegalSection number="5" title="¿Durante cuánto tiempo conservaremos los datos?">
            <p>Los datos personales se conservarán:</p>
            <LegalBulletList
              items={[
                "Mientras exista una relación con el usuario.",
                "Mientras sean necesarios para la finalidad para la que fueron recabados.",
                "Mientras exista una obligación legal de conservación.",
                "Hasta que el interesado solicite su supresión cuando sea posible.",
              ]}
            />
          </LegalSection>

          <LegalSection number="6" title="Destinatarios de los datos">
            <p>
              Con carácter general, los datos no serán cedidos a terceros salvo
              obligación legal.
            </p>
            <p>
              No obstante, podrán ser tratados por proveedores que prestan
              servicios al responsable, tales como:
            </p>
            <LegalBulletList
              items={[
                "Alojamiento web.",
                "Correo electrónico.",
                "Herramientas de gestión.",
                "Proveedores tecnológicos.",
                "Plataformas publicitarias y de analítica, siempre que exista la correspondiente base jurídica.",
              ]}
            />
            <p>
              Todos ellos actuarán, cuando proceda, como encargados del
              tratamiento conforme al artículo 28 del RGPD.
            </p>
          </LegalSection>

          <LegalSection number="7" title="Transferencias internacionales">
            <p>
              Algunos proveedores tecnológicos utilizados por este sitio web
              pueden encontrarse fuera del Espacio Económico Europeo. Cuando
              ello ocurra, las transferencias internacionales de datos se
              realizarán con las garantías adecuadas previstas por el RGPD,
              tales como decisiones de adecuación o cláusulas contractuales tipo
              aprobadas por la Comisión Europea.
            </p>
          </LegalSection>

          <LegalSection number="8" title="Derechos del interesado">
            <p>
              El usuario podrá ejercer en cualquier momento los siguientes
              derechos:
            </p>
            <LegalBulletList
              items={[
                "Acceso.",
                "Rectificación.",
                "Supresión.",
                "Oposición.",
                "Limitación del tratamiento.",
                "Portabilidad de los datos.",
                "Retirada del consentimiento cuando el tratamiento se base en el mismo.",
              ]}
            />
            <p>
              Para ejercer cualquiera de estos derechos podrá dirigirse por
              escrito al correo electrónico:{" "}
              <a
                href="mailto:info@clinicamaysoon.com"
                className="text-accent-gold hover:underline"
              >
                info@clinicamaysoon.com
              </a>
              .
            </p>
            <p>
              Asimismo, podrá presentar una reclamación ante la{" "}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-gold hover:underline"
              >
                Agencia Española de Protección de Datos
              </a>{" "}
              si considera que el tratamiento de sus datos no se ajusta a la
              normativa vigente.
            </p>
          </LegalSection>

          <LegalSection number="9" title="Seguridad de la información">
            <p>
              Clínica Maysoon adopta las medidas técnicas y organizativas
              necesarias para garantizar la confidencialidad, integridad y
              disponibilidad de los datos personales, evitando su alteración,
              pérdida, tratamiento o acceso no autorizado.
            </p>
          </LegalSection>

          <LegalSection number="10" title="Cookies">
            <p>
              Este sitio web utiliza cookies propias y de terceros para mejorar
              la experiencia del usuario, realizar análisis estadísticos y medir
              la eficacia de las campañas publicitarias, siempre conforme al
              consentimiento otorgado por el usuario. Puede consultar
              información detallada en nuestra{" "}
              <Link
                href="/politica-de-cookies"
                className="text-accent-gold hover:underline"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection number="11" title="Modificaciones de esta política">
            <p>
              La presente Política de Privacidad podrá actualizarse cuando
              resulte necesario para adaptarse a cambios normativos o a
              modificaciones en los tratamientos realizados.
            </p>
            <p>
              La versión publicada en este sitio web será la vigente en cada
              momento.
            </p>
          </LegalSection>

          <LegalSection number="12" title="Captación de solicitudes de información">
            <p>
              Cuando el usuario solicita información, una valoración o una cita
              a través de cualquiera de los formularios del sitio web, campañas
              publicitarias o canales de mensajería (como WhatsApp), sus datos
              serán tratados exclusivamente para gestionar dicha solicitud,
              contactar con el interesado y ofrecer la información o atención
              solicitada.
            </p>
            <p>
              En ningún caso se enviarán comunicaciones comerciales no
              solicitadas, salvo que el usuario haya prestado previamente su
              consentimiento expreso o exista otra base jurídica que lo
              legitime.
            </p>
          </LegalSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
