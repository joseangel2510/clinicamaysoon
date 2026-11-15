import Link from "next/link";

// Botón de la casa: píldora con insignia circular. Al pasar el puntero el
// texto se releva en vertical y la flecha sale en diagonal y entra otra.
type Props = {
  href: string;
  children: string;
  variante?: "oscuro" | "claro" | "linea";
  chico?: boolean;
  className?: string;
  ariaLabel?: string;
};

const Flecha = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M4.5 11.5l7-7M5.5 4.5h6v6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Boton({
  href,
  children,
  variante = "oscuro",
  chico,
  className = "",
  ariaLabel,
}: Props) {
  const externo = /^(https?:|mailto:|tel:)/.test(href);
  const clase = `btn${variante === "claro" ? " btn--claro" : ""}${
    variante === "linea" ? " btn--linea" : ""
  }${chico ? " btn--s" : ""} ${className}`;
  const dentro = (
    <>
      <span className="btn__t">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
      <span className="btn__i">
        <Flecha />
        <Flecha />
      </span>
    </>
  );
  return externo ? (
    <a
      href={href}
      className={clase}
      aria-label={ariaLabel}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {dentro}
    </a>
  ) : (
    <Link href={href} className={clase} aria-label={ariaLabel}>
      {dentro}
    </Link>
  );
}
