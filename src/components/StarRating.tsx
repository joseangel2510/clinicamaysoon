import "./nuevo/confianza.css";

interface StarRatingProps {
  stars: number;
  size?: number;
  animate?: boolean;
}

const TRAZO =
  "M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.25 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z";

// Una estrella: el contorno siempre, y el relleno entero o recortado a la
// mitad. El color lo hereda del contenedor (terracota, o claro sobre marrón).
function StarIcon({ filled, half, size }: { filled: boolean; half?: boolean; size: number }) {
  return (
    <>
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d={TRAZO}
          fill={filled && !half ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
      {half && (
        <svg
          className="co__estrella-media"
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path d={TRAZO} fill="currentColor" />
        </svg>
      )}
    </>
  );
}

export function StarRating({ stars, size = 18, animate = false }: StarRatingProps) {
  const fullStars = Math.floor(stars);
  const hasHalf = stars % 1 >= 0.5;

  return (
    <div className="co__estrellas">
      {Array.from({ length: 5 }, (_, i) => {
        const isFull = i < fullStars;
        const isHalf = i === fullStars && hasHalf;

        return (
          <span
            key={i}
            className={`co__estrella${animate ? " co__estrella--entra" : ""}`}
            style={animate ? { animationDelay: `${i * 0.08}s` } : undefined}
          >
            <StarIcon filled={isFull} half={isHalf} size={size} />
          </span>
        );
      })}
    </div>
  );
}
