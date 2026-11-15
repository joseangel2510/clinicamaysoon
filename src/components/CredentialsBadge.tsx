// Instituciones del equipo médico: una línea de rótulos entre listones finos.
import "./nuevo/nosotros.css";

const institutions = [
  "Universidad de Salamanca",
  "CEU",
  "ISAPS",
  "SNS",
];

export function CredentialsBadge() {
  return (
    <ul className="no__inst" data-ap>
      {institutions.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}
