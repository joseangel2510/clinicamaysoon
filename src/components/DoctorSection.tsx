// Equipo médico (página Quiénes somos): cabecera, el bloque del director
// médico, las instituciones y el resto del equipo en retratos en arco.
import "./nuevo/nosotros.css";
import { DoctorHighlight } from "./DoctorHighlight";
import { TeamMemberCard } from "./TeamMemberCard";
import { CredentialsBadge } from "./CredentialsBadge";

const teamMembers = [
  {
    image: "/images/team/dr-jose-david.webp",
    name: "Dr. José David",
    role: "Médico Estético",
    description:
      "Criterio clínico y técnica al servicio del resultado natural. Diseña cada protocolo respetando tus rasgos y tus tiempos.",
  },
  {
    image: "/images/team/diana.webp",
    name: "Diana",
    role: "Especialista en cosmetología",
    description: "Auxiliar de medicina estética, aparatología y quirófano.",
    imageObjectPosition: "center",
  },
  {
    image: "/images/team/ricardo-cabina.jpg",
    name: "Ricardo",
    role: "Masajista Profesional",
    description:
      "Manos expertas. Especialista en técnicas terapéuticas y de bienestar para liberar tensión y devolver el equilibrio al cuerpo.",
    imageObjectPosition: "center top",
  },
  {
    image: "/images/team/laura-fernandez-portrait.jpg",
    name: "Laura Fernández",
    role: "Asesora médica y planes de financiación",
    description:
      "Tu primera guía. Te acompaña desde el primer contacto, resolviendo dudas y diseñando el plan que mejor encaja con tus objetivos.",
  },
  {
    image: "/images/team/lisa-recepcion.webp",
    name: "Lisa",
    role: "Recepción y Atención",
    description:
      "El rostro que te recibe. Coordina agendas y se asegura de que cada visita transcurra con calma, puntualidad y cercanía.",
  },
];

export function DoctorSection() {
  return (
    <section id="equipo" className="no__eq sec">
      <div className="marco">
        {/* Cabecera */}
        <div className="no__eq-cab">
          <div className="no__eq-izq">
            <span className="pildora" data-ap>
              Equipo Médico
            </span>
            <h2 className="tit tit--l" data-tit>
              Profesionales <br />
              <em>A Tu Servicio</em>
            </h2>
          </div>

          <div className="no__eq-der" data-ap>
            <span className="no__marca" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <p className="cuerpo no__eq-sub">
              Un equipo titulado, con años de experiencia y una pasión genuina por
              la medicina estética y el bienestar de cada paciente.
            </p>
          </div>
        </div>

        {/* Director médico */}
        <DoctorHighlight />

        {/* Instituciones */}
        <CredentialsBadge />

        {/* Resto del equipo */}
        <div className="no__miembros">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
