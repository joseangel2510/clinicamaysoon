import "./nuevo/zonas.css";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface TreatmentRowProps {
  index: number;
  title: string;
  description: string;
  details?: string[];
  price?: string;
  href?: string;
}

// Fila de tratamiento: índice pequeño, título (con enlace si lo hay), texto,
// detalles en filas finas y el precio en cursiva serif a la derecha.
export function TreatmentRow({
  index,
  title,
  description,
  details = [],
  price,
  href,
}: TreatmentRowProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="zo__fila" data-ap>
      {/* Editorial number */}
      <div className="zo__fila-num">{number}</div>

      {/* Content */}
      <div>
        {href ? (
          <Link href={href} className="zo__fila-a">
            <h3 className="tit zo__fila-tit">{title}</h3>
            <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden />
          </Link>
        ) : (
          <h3 className="tit zo__fila-tit">{title}</h3>
        )}
        <p className="zo__fila-desc">{description}</p>
        {details.length > 0 && (
          <ul className="zo__fila-dets">
            {details.map((d) => (
              <li key={d} className="zo__fila-det">
                {d}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Price */}
      {price && (
        <div className="zo__fila-precio">
          <span className="zo__fila-desde">Desde</span>
          <span className="serif zo__precio">{price}</span>
        </div>
      )}
    </div>
  );
}
