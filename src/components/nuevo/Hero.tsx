"use client";

// Portada: las fotos de la clínica dentro de un panel redondeado que ocupa la
// pantalla. Las fotos se relevan abriéndose por listones; el titular va abajo
// a la izquierda y el sello de autorización, en cristal, abajo a la derecha.
// Al bajar, el panel se encoge y la foto se desplaza más despacio.
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ArtDirectedImage } from "@/components/ArtDirectedImage";
import { Boton } from "@/components/nuevo/Boton";
import { alListo, sinMovimiento, WA_CONSULTA } from "@/lib/mov";

const slides: { src: string; alt: string; mobileSrc?: string; pos?: string; rotulo: string }[] = [
  {
    src: "/images/nuevo/equipo-recepcion.webp",
    mobileSrc: "/images/nuevo/equipo-pasillo.webp",
    alt: "Equipo de Maysoon en la clínica",
    pos: "object-[50%_18%] md:object-[50%_30%]",
    rotulo: "El equipo",
  },
  {
    src: "/hero/dsc_9921.webp",
    mobileSrc: "/hero/dsc_9921-movil.webp",
    alt: "Logo Maysoon en la recepción de la clínica",
    rotulo: "Recepción",
  },
  { src: "/hero/dsc_0429.webp", alt: "Sala de tratamiento Maysoon", rotulo: "Sala de tratamiento" },
  { src: "/hero/dsc_0428.webp", alt: "Tecnología láser de última generación", rotulo: "Tecnología láser" },
  {
    src: "/hero/dsc_0444.webp",
    mobileSrc: "/hero/dsc_0444-movil.webp",
    alt: "Instalaciones de Maysoon",
    rotulo: "Instalaciones",
  },
];

const DURA = 5600;

export function Hero() {
  const raiz = useRef<HTMLElement>(null);
  const [i, setI] = useState(0);
  const [antes, setAntes] = useState(-1);
  const [vivo, setVivo] = useState(false);
  const [pausa, setPausa] = useState(false);

  // Relevo de fotos
  useEffect(() => {
    if (!vivo || pausa || sinMovimiento()) return;
    const t = window.setTimeout(() => {
      setAntes(i);
      setI((v) => (v + 1) % slides.length);
    }, DURA);
    return () => window.clearTimeout(t);
  }, [i, vivo, pausa]);

  // El relevo se detiene cuando la portada no está a la vista.
  useEffect(() => {
    const el = raiz.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setPausa(!e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Cada foto nueva se abre por listones sobre la anterior.
  useEffect(() => {
    if (antes < 0 || !raiz.current) return;
    const capa = raiz.current.querySelector<HTMLElement>(`[data-foto="${i}"]`);
    if (!capa) return;
    if (sinMovimiento()) return;
    const img = capa.querySelector("img");
    const tl = gsap.timeline();
    tl.fromTo(capa, { "--abre": 0 }, { "--abre": 1, duration: 1.5, ease: "power3.inOut" }, 0);
    if (img) tl.fromTo(img, { scale: 1.16 }, { scale: 1, duration: 2.2, ease: "power3.out" }, 0);
    return () => {
      tl.progress(1).kill();
    };
  }, [i, antes]);

  // Entrada y comportamiento con el scroll
  useEffect(() => {
    const el = raiz.current;
    if (!el) return;
    if (sinMovimiento()) {
      setVivo(true);
      return;
    }
    let ctx: gsap.Context | undefined;
    const cancelar = alListo(() => {
      setVivo(true);
      ctx = gsap.context(() => {
        const h1 = el.querySelector<HTMLElement>(".hero__tit")!;
        gsap.set(h1, { visibility: "visible" });
        const partido = SplitText.create(h1, { type: "lines", mask: "lines" });
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.fromTo(".hero__fotos", { scale: 1.22 }, { scale: 1, duration: 2.4, ease: "power3.out" }, 0)
          .from(partido.lines, { yPercent: 115, duration: 1.3, stagger: 0.12 }, 0.25)
          .fromTo(
            ".hero [data-h]",
            { opacity: 0, y: 26, filter: "blur(10px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, ease: "power3.out", stagger: 0.1, clearProps: "filter" },
            0.55,
          )
          .fromTo(
            ".hero__sello",
            { opacity: 0, xPercent: 18, filter: "blur(12px)" },
            { opacity: 1, xPercent: 0, filter: "blur(0px)", duration: 1.3, ease: "power3.out", clearProps: "filter" },
            0.9,
          )
          .fromTo(".hero__guia", { scaleY: 0 }, { scaleY: 1, duration: 1.6, stagger: 0.08, ease: "power3.inOut" }, 0.2);

        // Scroll: el panel se recoge y la foto se queda atrás
        const mm = gsap.matchMedia();
        mm.add("(min-width: 900px)", () => {
          gsap
            .timeline({
              scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
            })
            .to(".hero__panel", { scale: 0.93, borderRadius: 44, ease: "none" }, 0)
            .to(".hero__fotos", { yPercent: 9, ease: "none" }, 0)
            .to(".hero__txt", { yPercent: -14, opacity: 0, ease: "none" }, 0)
            .to(".hero__sello", { yPercent: -30, opacity: 0, ease: "none" }, 0);
        });
        mm.add("(max-width: 899.98px)", () => {
          gsap
            .timeline({
              scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
            })
            .to(".hero__panel", { scale: 0.94, borderRadius: 34, ease: "none" }, 0)
            .to(".hero__fotos", { yPercent: 7, ease: "none" }, 0)
            .to(".hero__txt", { yPercent: -10, opacity: 0.1, ease: "none" }, 0);
        });
      }, el);
      ScrollTrigger.refresh();
    });
    return () => {
      cancelar();
      ctx?.revert();
    };
  }, []);

  const ir = (k: number) => {
    if (k === i) return;
    setAntes(i);
    setI(k);
  };

  return (
    <section ref={raiz} className="hero" data-propio>
      <div className="hero__panel">
        <div className="hero__fotos">
          {slides.map((s, k) => (
            <div
              key={s.src}
              data-foto={k}
              className={`hero__foto listones${k === i ? " is-on" : ""}${k === antes ? " is-antes" : ""}`}
              aria-hidden={k !== i}
            >
              {!(k === i || k === antes || k === (i + 1) % slides.length) ? null : s.mobileSrc ? (
                <ArtDirectedImage
                  src={s.src}
                  mobileSrc={s.mobileSrc}
                  alt={s.alt}
                  sizes="100vw"
                  eager={k === 0}
                  className={`object-cover ${s.pos ?? ""}`}
                />
              ) : (
                <Image src={s.src} alt={s.alt} fill sizes="100vw" className="object-cover" loading="lazy" />
              )}
            </div>
          ))}
        </div>
        <div className="hero__sombra" aria-hidden="true" />
        <div className="hero__guias" aria-hidden="true">
          <i className="hero__guia" />
          <i className="hero__guia" />
          <i className="hero__guia" />
          <i className="hero__guia" />
        </div>

        <div className="hero__txt">
          <span className="pildora pildora--cristal" data-h>
            Medicina Estética Avanzada en Valencia
          </span>
          <h1 className="tit tit--xl tit--claro hero__tit" data-tit>
            Tu Belleza, <br />
            <em>Nuestra Ciencia</em>
          </h1>
          <p className="hero__sub" data-h>
            Donde las técnicas más avanzadas en medicina estética y láser se ponen al servicio de tu
            bienestar. Resultados naturales, atención personalizada.
          </p>
          <div data-h>
            <Boton href={WA_CONSULTA} variante="claro">
              Escríbenos por WhatsApp
            </Boton>
          </div>
        </div>


        <div
          className="hero__paso"
          data-h
          onPointerEnter={() => setPausa(true)}
          onPointerLeave={() => setPausa(false)}
        >
          <span className="hero__rotulo">
            <b>{String(i + 1).padStart(2, "0")}</b>
            <i>/ {String(slides.length).padStart(2, "0")}</i>
            {slides[i].rotulo}
          </span>
          <div className="hero__barras" role="tablist" aria-label="Fotos de la clínica">
            {slides.map((s, k) => (
              <button
                key={s.src}
                type="button"
                role="tab"
                aria-selected={k === i}
                aria-label={s.rotulo}
                className={k === i ? "is-on" : k < i ? "is-hecho" : ""}
                onClick={() => ir(k)}
              >
                <i style={{ animationDuration: `${DURA}ms` }} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <aside className="hero__sello" aria-label="Autorización sanitaria">
        <div className="hero__sello-cab">
          <span className="hero__seme">SEME</span>
          <span className="hero__estrellas" aria-hidden="true">
            ✦ ✦ ✦ ✦ ✦
          </span>
        </div>
        <p className="hero__aut">
          Autorización U.48
          <strong>
            Medicina <em className="serif">Estética</em>
          </strong>
        </p>
        <dl>
          <div>
            <dt>Cód. Aut. Sanit.</dt>
            <dd>40143</dd>
          </div>
          <div>
            <dt>Daniel Sánchez Salvador</dt>
            <dd>Núm. Coleg. 464620598</dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}
