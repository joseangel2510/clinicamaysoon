import "./nuevo/zonas.css";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { getTreatmentLink } from "@/lib/treatmentLinks";

interface ZonaBlockProps {
  id: string;
  index: number;
  eyebrow: string;
  title: string;
  description?: string;
  treatments: string[];
  image?: string;
  imageAlt?: string;
  imageOrientation?: "portrait" | "landscape";
  imageSide?: "left" | "right";
  children?: ReactNode;
}

// Bloque de zona: imagen en marco redondeado que se abre por listones, con
// el índice en cursiva serif encima, y al lado la zona con sus tratamientos
// en filas. La imagen alterna de lado.
export function ZonaBlock({
  id,
  index,
  eyebrow,
  title,
  description,
  treatments,
  image,
  imageAlt,
  imageOrientation = "landscape",
  imageSide = "right",
  children,
}: ZonaBlockProps) {
  const number = String(index + 1).padStart(2, "0");
  const hasImage = Boolean(image);
  const reverse = imageSide === "left";

  return (
    <div id={id} className="zo__blq">
      <div
        className={`zo__blq-in${hasImage ? " zo__blq-in--foto" : ""}${
          hasImage && reverse ? " zo__blq-in--inv" : ""
        }`}
      >
        {/* Text column */}
        <div className="zo__txt">
          <div className="zo__cab" data-ap>
            {!hasImage && (
              <span className="serif zo__idx" aria-hidden="true">
                {number}
              </span>
            )}
            <span className="pildora pildora--arena">{eyebrow}</span>
          </div>

          <h2 className="tit tit--m" data-tit>
            {title}
          </h2>

          {description && (
            <p className="zo__desc" data-ap>
              {description}
            </p>
          )}

          {/* Treatments list */}
          {treatments.length > 0 && (
            <ul className="zo__trats">
              {treatments.map((t) => {
                const href = getTreatmentLink(t);
                return (
                  <li key={t} className="zo__trat" data-ap>
                    {href ? (
                      <Link href={href} className="zo__trat-a">
                        <span>{t}</span>
                        <ArrowUpRight
                          size={17}
                          strokeWidth={1.5}
                          className="zo__trat-ico"
                          aria-hidden
                        />
                      </Link>
                    ) : (
                      <span className="zo__trat-t">{t}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

          {/* Extra content (pricing tables, notes) */}
          {children && <div className="zo__extra">{children}</div>}
        </div>

        {/* Image column */}
        {hasImage && image && (
          <div
            className={`zo__fig${
              imageOrientation === "portrait" ? " zo__fig--alta" : ""
            }`}
          >
            <div className="zo__lis listones" data-lis>
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                sizes="(max-width: 960px) 92vw, 600px"
              />
            </div>
            <span className="serif zo__num" aria-hidden="true" data-ap>
              {number}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
