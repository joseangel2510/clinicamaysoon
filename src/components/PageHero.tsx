import Image from "next/image";
import { ArtDirectedImage } from "@/components/ArtDirectedImage";
import "./nuevo/pagehero.css";

interface PageHeroProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
  // Versión vertical para móvil: el marco pasa a 4:5 por debajo de md
  mobileImage?: string;
  imageClassName?: string;
}

// Cabecera de las páginas interiores. Componente de servidor: la entrada va
// en CSS (pagehero.css) para que el título y la imagen se pinten sin esperar
// a React. Titular a la izquierda, texto a la derecha y la foto debajo, en un
// panel redondeado que se abre por listones.
export function PageHero({
  eyebrow,
  titleLine1,
  titleLine2,
  subtitle,
  image,
  imageAlt,
  mobileImage,
  imageClassName = "",
}: PageHeroProps) {
  return (
    <section className={`ph${image ? "" : " ph--sin-foto"}`}>
      <div className="marco">
        <div className="ph__cab">
          <div className="ph__izq">
            <span className="pildora ph__e ph__e--1">{eyebrow}</span>
            {/* Un único h1 con dos líneas visuales (semántica correcta) */}
            <h1 className="tit tit--xl ph__tit">
              <span className="ph__linea">
                <span className="ph__e ph__e--sube ph__e--2">{titleLine1}</span>
              </span>
              <span className="ph__linea">
                <em className="ph__e ph__e--sube ph__e--3">{titleLine2}</em>
              </span>
            </h1>
          </div>
          <div className="ph__der ph__e ph__e--4">
            <span className="ph__listones" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <p className="cuerpo">{subtitle}</p>
          </div>
        </div>
      </div>

      {image && (
        <div className="ph__marco-foto">
          <div className={`ph__foto listones${mobileImage ? " ph__foto--movil" : ""}`}>
            {mobileImage ? (
              <ArtDirectedImage
                src={image}
                mobileSrc={mobileImage}
                alt={imageAlt ?? ""}
                eager
                className={`object-cover ${imageClassName}`}
                sizes="(max-width: 1440px) 100vw, 1420px"
              />
            ) : (
              <Image
                src={image}
                alt={imageAlt ?? ""}
                fill
                priority
                fetchPriority="high"
                className={`object-cover ${imageClassName}`}
                sizes="(max-width: 1440px) 100vw, 1420px"
              />
            )}
            <div className="ph__velo" aria-hidden="true" />
          </div>
        </div>
      )}
    </section>
  );
}
