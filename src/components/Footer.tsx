import Image from "next/image";
import Link from "next/link";
import { Boton } from "./nuevo/Boton";
import "./nuevo/pie.css";

// Pie de toda la web: tarjeta oscura encajada, con la declaración de la
// casa, las cuatro columnas y el nombre en grande recortado por el borde.
// Componente de servidor: las apariciones las mueve el motor global.

const MAPA =
  "https://maps.google.com/?q=Avda.+Cardenal+Benlloch+11,+46021+Valencia";

type Enlace = { href: string; texto: string };

const TRATAMIENTOS: Enlace[] = [
  { href: "/tratamientos", texto: "Catálogo de Tratamientos" },
  { href: "/medicina-estetica", texto: "Med. Estética · Mujer · Facial" },
  { href: "/medicina-estetica/corporal", texto: "Med. Estética · Mujer · Cuerpo" },
  { href: "/medicina-estetica/hombre", texto: "Med. Estética · Hombre · Facial" },
  { href: "/medicina-estetica/hombre/corporal", texto: "Med. Estética · Hombre · Cuerpo" },
  { href: "/depilacion-laser", texto: "Depilación Láser · HS-810" },
  { href: "/aparatologia", texto: "Aparatología & Técnicas" },
  { href: "/cirugias-menores", texto: "Cirugías Menores" },
  { href: "/unidad-capilar", texto: "Unidad Capilar" },
  { href: "/estetica", texto: "Estética" },
  { href: "/masajes", texto: "Masajes" },
  { href: "/formaciones", texto: "Formaciones" },
];

const CLINICA: Enlace[] = [
  { href: "/quienes-somos", texto: "Quiénes Somos" },
  { href: "/quienes-somos", texto: "Equipo Médico" },
  { href: "/por-que-maysoon", texto: "¿Por qué Maysoon?" },
  { href: "/contacto", texto: "Contacto" },
  { href: "/politica-de-privacidad", texto: "Política de Privacidad" },
  { href: "/politica-de-cookies", texto: "Política de Cookies" },
  { href: "/aviso-legal", texto: "Aviso Legal" },
];

const HORARIO: { dia: string; horas: string }[] = [
  { dia: "Lun – Jue:", horas: "9:30 – 13:00 · 16:30 – 20:30" },
  { dia: "Viernes:", horas: "9:30 – 14:00 · 15:30 – 18:30" },
  { dia: "Sábado y domingo:", horas: "Cerrado" },
];

function Lista({ enlaces, doble }: { enlaces: Enlace[]; doble?: boolean }) {
  return (
    <ul className={doble ? "pie__lista pie__lista--doble" : "pie__lista"}>
      {enlaces.map((e) => (
        <li key={e.texto}>
          <Link href={e.href} className="pie__enlace">
            <span>{e.texto}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="pie sobre-oscuro">
      {/* Declaración + Instagram */}
      <div className="pie__alto">
        <p className="pie__lema tit tit--m tit--claro" data-tit>
          Donde las más avanzadas técnicas en medicina estética y láser se ponen
          al servicio de <em>tu belleza y bienestar.</em>
        </p>
        <div className="pie__insta">
          <p className="pie__eti">Síguenos en Instagram</p>
          <Boton
            href="https://www.instagram.com/clinicamaysoon/"
            variante="linea"
            chico
            ariaLabel="Síguenos en Instagram @clinicamaysoon"
          >
            @clinicamaysoon
          </Boton>
        </div>
      </div>

      {/* Listones apoyados en la línea */}
      <div className="pie__raya" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="pie__cols">
        {/* Marca */}
        <div className="pie__col pie__col--marca" data-ap>
          <Image
            src="/brand/logo-maysoon.png"
            alt="Maysoon · Clínica Médico-Estética"
            width={364}
            height={121}
            sizes="150px"
            className="pie__logo"
          />
          <p className="pie__nombre">Maysoon</p>
          <p className="pie__sub">Clínica Médico-Estética</p>
        </div>

        {/* Tratamientos */}
        <div className="pie__col" data-ap>
          <h2 className="pie__tit">Tratamientos</h2>
          <nav aria-label="Tratamientos">
            <Lista enlaces={TRATAMIENTOS} doble />
          </nav>
        </div>

        {/* Clínica */}
        <div className="pie__col" data-ap>
          <h2 className="pie__tit">Clínica</h2>
          <nav aria-label="Clínica">
            <Lista enlaces={CLINICA} />
          </nav>
        </div>

        {/* Contacto */}
        <div className="pie__col" data-ap>
          <h2 className="pie__tit">Contacto</h2>
          <address className="pie__contacto">
            <a
              href={MAPA}
              target="_blank"
              rel="noopener noreferrer"
              className="pie__dato"
            >
              <span>
                Avda. Cardenal Benlloch 11
                <br />
                46021 Valencia, España
              </span>
            </a>
            <a
              href="https://wa.me/34601212258"
              target="_blank"
              rel="noopener noreferrer"
              className="pie__dato"
            >
              <span>WhatsApp recepción: +34 601 21 22 58</span>
            </a>
            <a
              href="https://wa.me/34651545268"
              target="_blank"
              rel="noopener noreferrer"
              className="pie__dato"
            >
              <span>WhatsApp 24h: +34 651 54 52 68</span>
            </a>
            <a href="mailto:info@clinicamaysoon.com" className="pie__dato">
              <span>info@clinicamaysoon.com</span>
            </a>
          </address>

          <dl className="pie__horas">
            {HORARIO.map((h) => (
              <div key={h.dia} className="pie__hora">
                <dt>{h.dia}</dt>
                <dd>{h.horas}</dd>
              </div>
            ))}
          </dl>

          <Boton href={MAPA} variante="linea" chico className="pie__mapa">
            Ver en Google Maps
          </Boton>
        </div>
      </div>

      {/* Nombre en grande, recortado por el borde de la tarjeta */}
      <div className="pie__cierre">
        <p className="pie__legal">
          © {new Date().getFullYear()} Maysoon · Clínica Médico-Estética. Todos los derechos reservados.
        </p>
        <div className="pie__marca" data-ap aria-hidden="true">
          <span>Maysoon</span>
        </div>
      </div>
    </footer>
  );
}
