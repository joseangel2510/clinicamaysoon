// Utilidades del motor de movimiento (GSAP + Lenis).

export const WA_CONSULTA =
  "https://wa.me/34651545268?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20consulta";

// Sin movimiento si el visitante lo pide o si la página ya se mostró sin la
// marca .mov (JavaScript tardó más de 5 s): entonces no se repite la entrada.
export const sinMovimiento = () =>
  typeof window === "undefined" ||
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
  !document.documentElement.classList.contains("mov");

// Ejecuta fn cuando el preloader ha terminado (o ya, si no hay preloader).
// Devuelve la función para cancelar.
export function alListo(fn: () => void): () => void {
  if (typeof document === "undefined") return () => {};
  if (document.documentElement.dataset.listo) {
    fn();
    return () => {};
  }
  const h = () => fn();
  window.addEventListener("maysoon:listo", h, { once: true });
  return () => window.removeEventListener("maysoon:listo", h);
}

export function marcarListo() {
  const d = document.documentElement;
  if (d.dataset.listo) return;
  d.dataset.listo = "1";
  window.dispatchEvent(new Event("maysoon:listo"));
}
