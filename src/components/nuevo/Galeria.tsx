"use client";

// Las diez áreas como una galería que avanza con el scroll: la sección se queda
// fija y las tarjetas pasan de lado; la del centro crece y se enfoca, las de los
// lados giran hacia atrás. Abajo, el contador y diez listones marcan por dónde vas.
// Sin movimiento (o sin JavaScript) la fila se desliza con el dedo, como siempre.
import "./galeria.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { alListo, sinMovimiento } from "@/lib/mov";

const areas: { img: string; nombre: string; fin?: string; texto: string; href: string }[] = [
  {
    img: "/images/sections/por-que-maysoon-logo.jpg",
    nombre: "¿Por qué",
    fin: "Maysoon?",
    texto: "Tecnología, trato y resultados al nivel que mereces. La excelencia como estándar.",
    href: "/por-que-maysoon",
  },
  {
    img: "/images/team/equipo-maysoon-horizontal.webp",
    nombre: "Quiénes",
    fin: "Somos",
    texto: "Conoce al Dr. Daniel Sánchez Salvador y al equipo titulado de Maysoon.",
    href: "/quienes-somos",
  },
  {
    img: "/images/team/doctores-recepcion.jpg",
    nombre: "Medicina",
    fin: "Estética",
    texto: "Neuromoduladores, hilos tensores, peelings y protocolos médicos personalizados.",
    href: "/medicina-estetica",
  },
  {
    img: "/images/aparatologia/equipos-cabina.jpg",
    nombre: "Aparatología",
    fin: "& Técnicas",
    texto: "Láser diodo HS-810 y tecnologías avanzadas para resultados eficaces.",
    href: "/aparatologia",
  },
  {
    img: "/images/sections/teaser-cirugias.webp",
    nombre: "Cirugías",
    fin: "Menores",
    texto: "Blefaroplastia y otras intervenciones precisas con resultados naturales.",
    href: "/cirugias-menores",
  },
  {
    img: "/images/sections/unidad-capilar-real.webp",
    nombre: "Unidad",
    fin: "Capilar",
    texto: "Trasplante FUE, mesoterapia, PRP y Trichotest.",
    href: "/unidad-capilar",
  },
  {
    img: "/images/sections/teaser-estetica.webp",
    nombre: "Estética",
    texto: "Micropigmentación de cejas, eyeliner y labios con técnica y mirada artística.",
    href: "/estetica",
  },
  {
    img: "/images/masajes/cabina-masajes.jpg",
    nombre: "Masajes",
    texto: "Sesiones estéticas, relajantes y terapéuticas en manos de un equipo titulado.",
    href: "/masajes",
  },
  {
    img: "/images/formaciones/aula-completa.jpg",
    nombre: "Formaciones",
    texto: "Próximamente: programa de formaciones para profesionales del sector.",
    href: "/formaciones",
  },
  {
    img: "/images/sections/contacto-sala-espera.jpg",
    nombre: "Contacto ·",
    fin: "Dónde Estamos",
    texto: "Avda. Cardenal Benlloch 11, Valencia. Teléfono, WhatsApp y horarios.",
    href: "/contacto",
  },
];

const dos = (n: number) => String(n).padStart(2, "0");

const Flecha = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4.5 11.5l7-7M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Galeria() {
  const raiz = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = raiz.current;
    if (!el) return;
    if (sinMovimiento()) return;
    let ctx: gsap.Context | undefined;
    const cancelar = alListo(() => {
      ctx = gsap.context(() => {
        const recorrido = el.querySelector<HTMLElement>(".gal__recorrido")!;
        const pista = el.querySelector<HTMLElement>(".gal__pista")!;
        const cartas = gsap.utils.toArray<HTMLElement>(".gal__carta", el);
        const cuenta = el.querySelector<HTMLElement>(".gal__cuenta b")!;
        const nombre = el.querySelector<HTMLElement>(".gal__ahora")!;
        const barras = gsap.utils.toArray<HTMLElement>(".gal__barras i", el);
        const fondos = gsap.utils.toArray<HTMLElement>(".gal__fondo-foto", el);
        const tit = el.querySelector<HTMLElement>(".gal__tit")!;

        // ── Cabecera
        gsap.set(tit, { visibility: "visible" });
        SplitText.create(tit, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (s) =>
            gsap.from(s.lines, {
              yPercent: 112,
              duration: 1.15,
              ease: "power4.out",
              stagger: 0.1,
              scrollTrigger: { trigger: tit, start: "top 88%", once: true },
            }),
        });
        gsap.fromTo(
          ".gal__pildora, .gal__sub",
          { opacity: 0, y: 26, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power3.out",
            stagger: 0.25,
            clearProps: "filter,transform",
            scrollTrigger: { trigger: ".gal__cab", start: "top 86%", once: true },
          },
        );

        // ── La galería: fija mientras el scroll la recorre
        el.classList.add("gal--viva");
        const largo = () => Math.max(0, pista.scrollWidth - window.innerWidth);
        const medir = () => recorrido.style.setProperty("--rec", `${Math.round(largo() * 1.15)}px`);
        medir();

        let activo = -1;
        const pintar = (p: number) => {
          gsap.set(pista, { x: -p * largo() });
          const medio = window.innerWidth / 2;
          const paso = cartas[0].offsetWidth * 1.08;
          cartas.forEach((c) => {
            const r = c.getBoundingClientRect();
            const d = (r.left + r.width / 2 - medio) / paso;
            const a = Math.min(Math.abs(d), 2.4);
            const dentro = c.firstElementChild as HTMLElement;
            // cada tarjeta gira sobre su propio eje, como una hoja: de frente
            // en el centro y casi de canto dos puestos más allá
            dentro.style.transform = `rotateY(${Math.max(-64, Math.min(64, -d * 50)).toFixed(2)}deg) scale(${(1 - Math.min(a, 1) * 0.14).toFixed(4)})`;
            dentro.style.opacity = String(1 - Math.min(a * 0.2, 0.5));
            c.style.zIndex = String(20 - Math.round(a * 4));
            c.classList.toggle("is-centro", a < 0.5);
          });
          const k = Math.round(p * (cartas.length - 1));
          if (k !== activo) {
            activo = k;
            cuenta.textContent = dos(k + 1);
            nombre.textContent = [areas[k].nombre, areas[k].fin].filter(Boolean).join(" ");
            barras.forEach((b, i) => b.classList.toggle("is-on", i <= k));
            fondos.forEach((f, i) => f.classList.toggle("is-on", i === k));
          }
        };
        pintar(0);

        ScrollTrigger.create({
          trigger: recorrido,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          invalidateOnRefresh: true,
          onRefresh: (st) => {
            medir();
            pintar(st.progress);
          },
          onUpdate: (st) => pintar(st.progress),
        });

        // Las tarjetas llegan desde abajo, en cascada, cuando asoma la escena
        gsap.from(cartas.slice(0, 5), {
          y: 140,
          opacity: 0,
          duration: 1.3,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: { trigger: recorrido, start: "top 78%", once: true },
        });
        gsap.fromTo(
          ".gal__pie",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: recorrido, start: "top 55%", once: true } },
        );
      }, el);
      ScrollTrigger.refresh();
    });
    return () => {
      cancelar();
      ctx?.revert();
      el.classList.remove("gal--viva");
    };
  }, []);

  return (
    <section ref={raiz} id="servicios" className="gal sobre-oscuro" aria-labelledby="gal-tit" data-propio>
      <div className="gal__bloque">
        <div className="gal__fondo" aria-hidden="true">
          {areas.map((a, k) => (
            <div key={a.href} className={`gal__fondo-foto${k === 0 ? " is-on" : ""}`}>
              <Image src={a.img} alt="" fill sizes="50vw" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="gal__velo" aria-hidden="true" />

        <header className="marco gal__cab">
          <span className="pildora gal__pildora">Explora Maysoon</span>
          <h2 id="gal-tit" className="tit tit--l gal__tit" data-tit>
            Diez Áreas, <br />
            <em>Una Misma Excelencia</em>
          </h2>
          <p className="cuerpo gal__sub">
            Cada sección refleja la misma filosofía: protocolos médicos serios, tecnología avanzada y un
            trato personalizado.
          </p>
        </header>

        <div className="gal__recorrido">
          <div className="gal__escena">
            <ol className="gal__pista">
              {areas.map((a, k) => (
                <li key={a.href} className="gal__carta">
                  <Link href={a.href} className="gal__dentro">
                    <span className="gal__foto">
                      <Image src={a.img} alt={[a.nombre, a.fin].filter(Boolean).join(" ")} fill sizes="(min-width: 900px) 380px, 74vw" loading="lazy" />
                      <span className="gal__num">{dos(k + 1)}</span>
                    </span>
                    <span className="gal__txt">
                      <span className="gal__nom">
                        {a.nombre} {a.fin && <em className="serif">{a.fin}</em>}
                      </span>
                      <span className="gal__desc">{a.texto}</span>
                      <span className="gal__ir">
                        Descubrir
                        <i>
                          <Flecha />
                        </i>
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>

            <div className="marco gal__pie" aria-hidden="true">
              <span className="gal__cuenta">
                <b>01</b>
                <i>/ {dos(areas.length)}</i>
              </span>
              <span className="gal__ahora">¿Por qué Maysoon?</span>
              <span className="gal__barras">
                {areas.map((a, k) => (
                  <i key={a.href} className={k === 0 ? "is-on" : ""} />
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
