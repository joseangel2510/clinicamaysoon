"use client";

// Cabecera: logo, enlaces en píldoras de cristal y botón de reserva. Sobre la
// foto del hero va en blanco; al bajar se recoge en una barra crema que se
// esconde al bajar y vuelve al subir. «Servicios» abre un panel con las once
// áreas. En móvil, panel flotante con enlaces grandes.
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Boton } from "@/components/nuevo/Boton";
import { scrollSuave } from "@/components/nuevo/Movimiento";
import { WA_CONSULTA } from "@/lib/mov";

const services = [
  { label: "Catálogo de Tratamientos", href: "/tratamientos", featured: true },
  { label: "Medicina Estética · Mujer · Facial", href: "/medicina-estetica" },
  { label: "Medicina Estética · Mujer · Cuerpo", href: "/medicina-estetica/corporal" },
  { label: "Medicina Estética · Hombre · Facial", href: "/medicina-estetica/hombre" },
  { label: "Medicina Estética · Hombre · Cuerpo", href: "/medicina-estetica/hombre/corporal" },
  { label: "Depilación Láser · HS-810", href: "/depilacion-laser" },
  { label: "Aparatología & Técnicas", href: "/aparatologia" },
  { label: "Cirugías Menores", href: "/cirugias-menores" },
  { label: "Unidad Capilar", href: "/unidad-capilar" },
  { label: "Estética", href: "/estetica" },
  { label: "Masajes", href: "/masajes" },
];

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "¿Por qué Maysoon?", href: "/por-que-maysoon" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Servicios", href: "#", dropdown: true },
  { label: "Formaciones", href: "/formaciones" },
  { label: "Contacto", href: "/contacto" },
];

const Instagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export function Navbar({ sobreFoto = false }: { sobreFoto?: boolean }) {
  const ruta = usePathname();
  const [bajado, setBajado] = useState(false);
  const [oculto, setOculto] = useState(false);
  const [servicios, setServicios] = useState(false);
  const [menu, setMenu] = useState(false);
  const [acordeon, setAcordeon] = useState(false);
  const caja = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let antes = window.scrollY;
    const alScroll = () => {
      const y = window.scrollY;
      setBajado(y > 60);
      if (Math.abs(y - antes) > 6) {
        setOculto(y > antes && y > 420);
        antes = y;
      }
    };
    alScroll();
    window.addEventListener("scroll", alScroll, { passive: true });
    return () => window.removeEventListener("scroll", alScroll);
  }, []);

  // El panel de servicios se cierra al pulsar fuera, con Escape o al navegar.
  useEffect(() => {
    const fuera = (e: MouseEvent) => {
      if (caja.current && !caja.current.contains(e.target as Node)) setServicios(false);
    };
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicios(false);
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", fuera);
    document.addEventListener("keydown", tecla);
    return () => {
      document.removeEventListener("mousedown", fuera);
      document.removeEventListener("keydown", tecla);
    };
  }, []);

  useEffect(() => {
    setServicios(false);
    setMenu(false);
  }, [ruta]);

  // Con el menú móvil abierto la página no se desplaza.
  useEffect(() => {
    document.documentElement.classList.toggle("menu-abierto", menu);
    const l = scrollSuave();
    if (menu) l?.stop();
    else l?.start();
  }, [menu]);

  const claro = sobreFoto && !bajado && !menu;
  const activo = (href: string) => (href === "/" ? ruta === "/" : ruta.startsWith(href));
  const enServicios = services.some((s) => ruta.startsWith(s.href));

  return (
    <>
      <header
        className={`cab${claro ? " cab--claro" : ""}${bajado ? " cab--bajado" : ""}${
          oculto && !servicios && !menu ? " cab--oculto" : ""
        }`}
      >
        <div className="cab__in">
          <Link href="/" aria-label="Maysoon — Inicio" className="cab__logo">
            <Image
              src="/brand/logo-maysoon.png"
              alt="Maysoon · Clínica Médico-Estética"
              width={364}
              height={121}
              priority
            />
          </Link>

          <nav className="cab__nav" aria-label="Principal" ref={caja}>
            <ul>
              {navLinks.map((l) =>
                l.dropdown ? (
                  <li key={l.label}>
                    <button
                      type="button"
                      className={`cab__link${enServicios || servicios ? " is-on" : ""}`}
                      aria-expanded={servicios}
                      aria-controls="panel-servicios"
                      onClick={() => setServicios((v) => !v)}
                    >
                      {l.label}
                      <svg viewBox="0 0 10 6" aria-hidden="true" className={servicios ? "is-giro" : ""}>
                        <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </button>
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link href={l.href} className={`cab__link${activo(l.href) ? " is-on" : ""}`}>
                      {l.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>

            <div id="panel-servicios" className={`cab__panel${servicios ? " is-on" : ""}`} inert={!servicios}>
              <Link href="/tratamientos" className="cab__destacado">
                <span className="pildora pildora--arena">Catálogo</span>
                <strong className="tit">
                  Catálogo de <em>Tratamientos</em>
                </strong>
                <span className="cab__flecha" aria-hidden="true">↗</span>
              </Link>
              <ul>
                {services
                  .filter((s) => !s.featured)
                  .map((s, i) => (
                    <li key={s.href}>
                      <Link href={s.href}>
                        <i>{String(i + 1).padStart(2, "0")}</i>
                        {s.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </nav>

          <div className="cab__der">
            <a
              href="https://www.instagram.com/clinicamaysoon/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram @clinicamaysoon"
              className="cab__ig"
            >
              <Instagram />
              <span>Síguenos</span>
            </a>
            <Boton href={WA_CONSULTA} variante={claro ? "claro" : "oscuro"} chico className="cab__cta">
              Reserva tu Consulta
            </Boton>
            <button
              type="button"
              className={`cab__burger${menu ? " is-on" : ""}`}
              aria-label={menu ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menu}
              onClick={() => setMenu((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      <div className={`menu${menu ? " is-on" : ""}`} inert={!menu} data-lenis-prevent>
        <div className="menu__velo" onClick={() => setMenu(false)} />
        <div className="menu__panel" role="dialog" aria-label="Menú">
          <ul className="menu__lista">
            {navLinks.map((l, i) =>
              l.dropdown ? (
                <li key={l.label} style={{ "--i": i } as React.CSSProperties}>
                  <button type="button" aria-expanded={acordeon} aria-controls="menu-servicios" onClick={() => setAcordeon((v) => !v)}>
                    <span>{l.label}</span>
                    <b className={acordeon ? "is-giro" : ""}>+</b>
                  </button>
                  <div id="menu-servicios" className={`menu__sub${acordeon ? " is-on" : ""}`} inert={!acordeon}>
                    <ul>
                      {services.map((s) => (
                        <li key={s.href}>
                          <Link href={s.href} className={s.featured ? "is-dest" : ""}>
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={l.label} style={{ "--i": i } as React.CSSProperties}>
                  <Link href={l.href} className={activo(l.href) ? "is-on" : ""}>
                    <span>{l.label}</span>
                  </Link>
                </li>
              ),
            )}
          </ul>
          <div className="menu__pie">
            <Boton href={WA_CONSULTA}>Reserva tu Consulta</Boton>
            <a
              href="https://www.instagram.com/clinicamaysoon/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram @clinicamaysoon"
            >
              Síguenos en Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
