// Director médico: bloque marrón con el retrato en un marco en arco (se abre
// por listones) y, al lado, nombre, cargo, filosofía y formación fila a fila.
import "./nuevo/nosotros.css";
import Image from "next/image";
import { Boton } from "@/components/nuevo/Boton";

const credentials = [
  "Licenciado en Medicina — Universidad de Salamanca",
  "Máster en Técnicas Avanzadas de Medicina Estética y Láser — CEU",
  "Diploma en Estudios Avanzados (DEA) — Sobresaliente",
  "+14 años de experiencia en medicina estética",
];

export function DoctorHighlight() {
  return (
    <div className="no__dr sobre-oscuro">
      {/* Retrato */}
      <div className="no__dr-retrato">
        <i className="no__dr-linea" aria-hidden="true" />
        <div className="no__dr-foto listones" data-lis>
          <Image
            src="/images/nuevo/dr-daniel.webp"
            alt="Dr. Daniel Sánchez Salvador — Director Médico"
            fill
            sizes="(min-width: 560px) 440px, 82vw"
          />
        </div>
      </div>

      {/* Ficha */}
      <div className="no__dr-txt">
        <h3 className="tit no__dr-nombre" data-tit>
          Dr. Daniel <em>Sánchez Salvador</em>
        </h3>

        <p className="no__dr-rol" data-ap>
          Director Médico · Responsable Maysoon
        </p>

        <blockquote className="no__dr-cita" data-ap>
          &ldquo;Nuestra filosofía es conseguir una armonía entre el rostro y el
          cuerpo. No dejes que los años te roben lo que eres, vuelve a ser tú a
          pesar del paso del tiempo.&rdquo;
        </blockquote>

        <ul className="no__dr-creds">
          {credentials.map((cred, k) => (
            <li key={cred} className="no__dr-fila" data-ap>
              <span className="no__dr-num" aria-hidden="true">
                {String(k + 1).padStart(2, "0")}
              </span>
              <span className="no__dr-cred">{cred}</span>
            </li>
          ))}
        </ul>

        <div className="no__dr-cta" data-ap>
          <Boton href="/quienes-somos" variante="claro">
            Conoce a todo el equipo
          </Boton>
        </div>
      </div>
    </div>
  );
}
