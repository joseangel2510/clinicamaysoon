// Miembro del equipo: retrato en arco con nombre, cargo y descripción debajo
// (en móvil, en fila: retrato a la izquierda y texto a la derecha).
import "./nuevo/nosotros.css";
import Image from "next/image";

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
  description: string;
  /**
   * CSS position value for the portrait (e.g. "center 25%").
   * Defaults to "center top" so head-anchored portraits look right.
   */
  imageObjectPosition?: string;
  /**
   * CSS size value (e.g. "150% auto") to zoom into the face.
   * Defaults to "cover". Solo "contain" cambia el encaje; el resto se
   * trata como "cover" (el retrato en arco ya recorta).
   */
  imageBgSize?: string;
}

export function TeamMemberCard({
  image,
  name,
  role,
  description,
  imageObjectPosition = "center top",
  imageBgSize = "cover",
}: TeamMemberCardProps) {
  return (
    <div className="no__mi" data-ap>
      <div className="no__mi-foto">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1100px) 240px, (min-width: 640px) 30vw, 108px"
          style={{
            objectPosition: imageObjectPosition,
            objectFit: imageBgSize === "contain" ? "contain" : "cover",
          }}
        />
      </div>

      <div className="no__mi-txt">
        <h3 className="no__mi-nombre">{name}</h3>
        <p className="no__mi-rol">{role}</p>
        <p className="no__mi-desc">{description}</p>
      </div>
    </div>
  );
}
