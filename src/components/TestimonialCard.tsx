import "./nuevo/confianza.css";
import { StarRating } from "./StarRating";

interface TestimonialCardProps {
  stars: number;
  text: string;
  name: string;
  treatment: string;
  timeAgo: string;
  isActive?: boolean;
  animateStars?: boolean;
}

// Una cita grande: estrellas, el texto en sans ligera y, debajo, el nombre
// en versalitas con el tratamiento en cursiva serif.
export function TestimonialCard({
  stars,
  text,
  name,
  treatment,
  timeAgo,
  isActive = false,
  animateStars = false,
}: TestimonialCardProps) {
  return (
    <figure className="co__cita" data-activa={isActive ? "" : undefined}>
      {/* Stars */}
      <StarRating stars={stars} size={18} animate={animateStars} />

      {/* Review text */}
      <blockquote className="co__cita-txt">
        <p>&ldquo;{text}&rdquo;</p>
      </blockquote>

      {/* Patient info */}
      <figcaption className="co__cita-pie">
        <p className="co__cita-nombre">{name}</p>
        <p className="serif co__cita-trat">{treatment}</p>
        <p className="co__cita-hace">{timeAgo}</p>
      </figcaption>
    </figure>
  );
}
