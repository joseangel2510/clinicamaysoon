import type { Metadata } from "next";
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
  title: "Política de Cookies | Maysoon",
  description:
    "Política de Cookies de Clínica Maysoon. Información sobre las cookies propias y de terceros utilizadas en el sitio web y cómo gestionarlas.",
  alternates: { canonical: "/politica-de-cookies" },
};

const cookieProviders = [
  {
    provider: "Google Analytics",
    purpose: "Estadísticas de navegación",
  },
  {
    provider: "Meta Platforms Ireland Ltd.",
    purpose: "Medición y optimización publicitaria",
  },
  {
    provider: "Google Ads",
    purpose: "Medición de conversiones",
  },
  {
    provider: "Google Maps",
    purpose: "Mostrar mapas interactivos",
  },
  {
    provider: "YouTube",
    purpose: "Reproducción de vídeos",
  },
  {
    provider: "Vimeo",
    purpose: "Reproducción de contenidos audiovisuales",
  },
];

const consentSummary = [
  { type: "Técnicas", requires: "No" },
  { type: "Preferencias", requires: "Sí" },
  { type: "Analíticas", requires: "Sí" },
  { type: "Publicitarias", requires: "Sí" },
];

const browserGuides = [
  {
    name: "Google Chrome",
    href: "https://support.google.com/chrome/answer/95647",
  },
  {
    name: "Mozilla Firefox",
    href: "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we",
  },
  {
    name: "Microsoft Edge",
    href: "https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
  },
  {
    name: "Safari",
    href: "https://support.apple.com/es-es/guide/safari/sfri11471/mac",
  },
  {
    name: "Opera",
    href: "https://help.opera.com/en/latest/web-preferences/#cookies",
  },
];

export default function PoliticaCookiesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Uso de Cookies"
        titleLine1="Política de"
        titleLine2="Cookies"
        subtitle="Información sobre las cookies utilizadas en este sitio web, su finalidad y cómo configurarlas o rechazarlas."
      />

      <section className="bg-bg-primary pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-text-secondary mb-10 pb-6 border-b border-text-secondary/15">
            Última actualización · {CONTENT_LAST_REVIEWED_LABEL}
          </p>

          <LegalSection number="1" title="¿Qué son las cookies?">
            <p>
              Este sitio web utiliza cookies y tecnologías similares para
              garantizar el correcto funcionamiento de la página, mejorar la
              experiencia de navegación, analizar el uso del sitio y, cuando el
              usuario lo autoriza, personalizar contenidos y medir la eficacia
              de nuestras campañas publicitarias.
            </p>
            <p>
              Las cookies son pequeños archivos que se almacenan en el
              dispositivo del usuario (ordenador, móvil o tablet) durante la
              navegación y que permiten recordar determinada información.
            </p>
          </LegalSection>

          <LegalSection number="2" title="¿Quién es el responsable del uso de las cookies?">
            <p>Responsable del sitio web:</p>
            <LegalDefinitionList
              items={[
                {
                  term: "Titular:",
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
              ]}
            />
          </LegalSection>

          <LegalSection number="3" title="¿Qué tipos de cookies utilizamos?">
            <div className="flex flex-col gap-6">
              {/* a) Técnicas */}
              <div>
                <h3 className="font-display text-lg text-text-primary mb-2">
                  a) Cookies técnicas <span className="text-accent-gold text-sm italic ml-1">Necesarias</span>
                </h3>
                <p>
                  Son imprescindibles para el funcionamiento del sitio web.
                  Permiten, entre otras funciones:
                </p>
                <LegalBulletList
                  items={[
                    "Navegar por la web.",
                    "Acceder a áreas seguras.",
                    "Recordar preferencias básicas.",
                    "Gestionar el consentimiento de cookies.",
                    "Garantizar la seguridad de la navegación.",
                  ]}
                />
                <p className="mt-3 italic">
                  Estas cookies no requieren el consentimiento del usuario.
                </p>
              </div>

              {/* b) Análisis */}
              <div>
                <h3 className="font-display text-lg text-text-primary mb-2">
                  b) Cookies de análisis
                </h3>
                <p>
                  Nos permiten conocer cómo interactúan los usuarios con el
                  sitio web para mejorar continuamente nuestros contenidos y
                  servicios. Estas cookies recopilan información de forma
                  agregada y anónima.
                </p>
                <p className="mt-2">
                  Ejemplos: Google Analytics 4 (GA4).
                </p>
                <p className="mt-2 italic">
                  Solo se instalarán cuando el usuario las acepte.
                </p>
              </div>

              {/* c) Personalización */}
              <div>
                <h3 className="font-display text-lg text-text-primary mb-2">
                  c) Cookies de personalización
                </h3>
                <p>
                  Permiten recordar determinadas preferencias del usuario, como
                  el idioma o determinadas configuraciones de navegación.
                </p>
              </div>

              {/* d) Publicitarias */}
              <div>
                <h3 className="font-display text-lg text-text-primary mb-2">
                  d) Cookies publicitarias
                </h3>
                <p>
                  Permiten mostrar publicidad más relevante y medir la eficacia
                  de las campañas publicitarias. En este sitio web pueden
                  utilizarse herramientas como:
                </p>
                <LegalBulletList
                  items={[
                    "Meta Pixel.",
                    "Meta Conversion API (cuando esté implementada).",
                    "Google Ads.",
                    "Google Ads Conversion Tracking.",
                  ]}
                />
                <p className="mt-3 italic">
                  Estas cookies únicamente se instalarán cuando el usuario
                  otorgue su consentimiento.
                </p>
              </div>
            </div>
          </LegalSection>

          <LegalSection number="4" title="Cookies de terceros">
            <p>
              Este sitio web puede utilizar servicios prestados por terceros que
              instalan cookies en nombre del responsable. Entre ellos pueden
              encontrarse:
            </p>

            <div className="overflow-x-auto -mx-6 lg:mx-0">
              <table className="w-full min-w-[480px] mt-2 border-collapse">
                <thead>
                  <tr className="border-b-2 border-accent-gold/40">
                    <th className="text-left py-3 px-3 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent-gold">
                      Proveedor
                    </th>
                    <th className="text-left py-3 px-3 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent-gold">
                      Finalidad
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cookieProviders.map((c) => (
                    <tr
                      key={c.provider}
                      className="border-b border-text-secondary/10"
                    >
                      <td className="py-3 px-3 font-body text-sm text-text-primary">
                        {c.provider}
                      </td>
                      <td className="py-3 px-3 font-body text-sm text-text-secondary">
                        {c.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              La utilización concreta de estos servicios dependerá de las
              funcionalidades activadas en el sitio web.
            </p>
          </LegalSection>

          <LegalSection number="5" title="¿Cómo puede configurar las cookies?">
            <p>
              Cuando accede por primera vez al sitio web puede aceptar, rechazar
              o configurar las cookies mediante el panel de configuración
              mostrado en el banner de consentimiento.
            </p>
            <p>
              Posteriormente podrá modificar sus preferencias en cualquier
              momento desde el enlace permanente <em>&ldquo;Configurar
              cookies&rdquo;</em>, disponible en el sitio web.
            </p>
            <p>
              Asimismo, puede eliminar o bloquear las cookies desde la
              configuración de su navegador. Puede consultar las instrucciones
              de los principales navegadores:
            </p>
            <ul className="flex flex-wrap gap-2 mt-2">
              {browserGuides.map((b) => (
                <li key={b.name}>
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-secondary border border-accent-gold/25 text-xs text-text-primary hover:border-accent-gold hover:text-accent-gold transition-colors"
                  >
                    {b.name}
                  </a>
                </li>
              ))}
            </ul>
          </LegalSection>

          <LegalSection number="6" title="Transferencias internacionales">
            <p>
              Algunos de los proveedores utilizados pueden realizar
              transferencias internacionales de datos fuera del Espacio
              Económico Europeo. Cuando ello ocurra, dichas transferencias se
              realizarán con las garantías exigidas por el Reglamento General de
              Protección de Datos (RGPD).
            </p>
          </LegalSection>

          <LegalSection number="7" title="Actualización de la Política de Cookies">
            <p>
              Esta Política de Cookies podrá modificarse para adaptarse a
              cambios legislativos, técnicos o a la incorporación de nuevos
              servicios en el sitio web.
            </p>
            <p>Se recomienda al usuario revisarla periódicamente.</p>
          </LegalSection>

          {/* ── Resumen de consentimiento ── */}
          <aside
            className="mt-14 rounded-2xl bg-bg-secondary border border-accent-gold/25 px-6 py-6 lg:px-8 lg:py-7"
            aria-label="Resumen de consentimiento"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
                Resumen de consentimiento
              </span>
              <span className="block flex-1 h-px bg-accent-gold/30" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[360px] border-collapse">
                <thead>
                  <tr className="border-b border-accent-gold/30">
                    <th className="text-left py-2.5 pr-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent-gold">
                      Tipo de cookie
                    </th>
                    <th className="text-left py-2.5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent-gold">
                      ¿Requiere consentimiento?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {consentSummary.map((c) => (
                    <tr key={c.type} className="border-b border-text-secondary/10 last:border-b-0">
                      <td className="py-3 pr-4 font-body text-sm text-text-primary">
                        {c.type}
                      </td>
                      <td className="py-3 font-body text-sm text-text-secondary">
                        {c.requires}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
