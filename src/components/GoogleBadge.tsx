import "./nuevo/confianza.css";
import { StarRating } from "./StarRating";

// Nota de Google: la cifra en cursiva serif, las estrellas y el número de
// reseñas, entre dos líneas finas.
export function GoogleBadge() {
  return (
    <div className="co__g">
      {/* Google "G" */}
      <span className="co__g-marca">G</span>

      {/* Rating */}
      <div className="co__g-nota">
        <span className="serif co__g-cifra">4,7 / 5</span>
        <StarRating stars={4.7} size={16} />
      </div>

      {/* Divider */}
      <span className="co__g-raya" aria-hidden="true" />

      {/* Review count */}
      <span className="co__g-base">Basado en 114+ reseñas</span>
    </div>
  );
}
