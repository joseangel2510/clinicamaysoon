import "./nuevo/ficha-tarifas.css";
import { Boton } from "@/components/nuevo/Boton";

interface ConsultaBlockProps {
  title?: string;
  description: string;
}

// Cierre de página: bloque marrón con el titular, la descripción, el botón
// de WhatsApp y una columna de listones a la derecha como textura.
export function ConsultaBlock({
  title = "Más servicios disponibles bajo consulta",
  description,
}: ConsultaBlockProps) {
  return (
    <div className="fta__con sobre-oscuro mt-16 lg:mt-20" data-ap>
      <div className="fta__lamas" aria-hidden="true" />
      <div className="fta__con-in">
        <h3 className="tit tit--m">{title}</h3>
        <p className="cuerpo fta__con-desc">{description}</p>
        <div className="fta__con-accion">
          <Boton
            href="https://wa.me/34651545268?text=Hola%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20vuestros%20servicios"
            variante="claro"
          >
            Consulta personalizada
          </Boton>
        </div>
      </div>
    </div>
  );
}
