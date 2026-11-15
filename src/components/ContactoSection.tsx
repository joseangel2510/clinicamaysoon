import { MapPin, MessageCircle, Mail, Instagram } from "lucide-react";
import { Boton } from "@/components/nuevo/Boton";
import "./nuevo/catalogo.css";

const horario = [
  { day: "Lunes – Jueves", hours: "9:30 – 13:00 · 16:30 – 20:30" },
  { day: "Viernes", hours: "9:30 – 14:00 · 15:30 – 18:30" },
  { day: "Sábado y Domingo", hours: "Cerrado" },
];

const contactos = [
  {
    icon: MessageCircle,
    label: "WhatsApp recepción",
    value: "+34 601 21 22 58",
    href: "https://wa.me/34601212258",
    external: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp 24h",
    value: "+34 651 54 52 68",
    href: "https://wa.me/34651545268",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@clinicamaysoon.com",
    href: "mailto:info@clinicamaysoon.com",
  },
];

const INSTAGRAM_URL = "https://www.instagram.com/clinicamaysoon/";

// Contacto: a la izquierda los datos en una lista con líneas finas; a la
// derecha el mapa en un marco redondeado que acompaña la lectura.
export function ContactoSection() {
  return (
    <section className="ca__co sec">
      <div className="marco">
        <div className="ca__co-rejilla">
          {/* Left: Info */}
          <div className="ca__co-datos">
            {/* Address */}
            <div className="ca__co-dir" data-ap>
              <span className="pildora pildora--arena">Dónde estamos</span>
              <h3 className="tit tit--m ca__co-calle">
                Avinguda del Cardenal Benlloch, 11
              </h3>
              <p className="cuerpo ca__co-ciudad">46021 Valencia · España</p>
              <a
                href="https://maps.google.com/?q=Avda.+Cardenal+Benlloch+11,+46021+Valencia"
                target="_blank"
                rel="noopener noreferrer"
                className="ca__co-llegar"
              >
                <MapPin size={16} strokeWidth={1.5} aria-hidden="true" />
                <span>Cómo llegar</span>
              </a>
            </div>

            {/* Contact methods */}
            <dl className="ca__co-dl">
              {contactos.map(({ icon: Icon, label, value, href, external }) => (
                <div key={label} className="ca__co-fila" data-ap>
                  <dt className="ca__co-dt">
                    <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                    {label}
                  </dt>
                  <dd className="ca__co-dd">
                    {external ? (
                      <Boton href={href} variante="linea" chico>
                        {value}
                      </Boton>
                    ) : (
                      <a href={href} className="ca__co-enlace">
                        {value}
                      </a>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Schedule */}
            <div className="ca__co-horas" data-ap>
              <span className="pildora pildora--arena">Horario</span>
              <dl className="ca__co-horario">
                {horario.map((h) => (
                  <div key={h.day} className="ca__co-hora">
                    <dt className="ca__co-dia">{h.day}</dt>
                    <dd className="ca__co-rango">{h.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Instagram CTA */}
            <div className="ca__co-ig" data-ap>
              <span className="pildora">Síguenos en Instagram</span>
              <Instagram
                size={22}
                strokeWidth={1.5}
                className="ca__co-ig-icono"
                aria-hidden="true"
              />
              <p className="ca__co-ig-txt">
                Casos antes/después, novedades del equipo y consejos en directo.
                Únete a nuestra comunidad para no perderte nada.
              </p>
              <Boton
                href={INSTAGRAM_URL}
                ariaLabel="Síguenos en Instagram @clinicamaysoon"
              >
                @clinicamaysoon
              </Boton>
            </div>
          </div>

          {/* Right: Map */}
          <div className="ca__co-mapa" data-ap>
            <iframe
              title="Maysoon en Google Maps"
              src="https://www.google.com/maps?q=Avenida+Cardenal+Benlloch+11,+46021+Valencia&output=embed"
              className="ca__co-iframe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="ca__co-chip">
              <span className="ca__listones" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <div>
                <p>Avinguda del Cardenal Benlloch, 11</p>
                <p>46021 Valencia · España</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
