# Design System — Clínica Maysoon

> **Estilo:** Warm Premium Luxury
> **Filosofía:** "Maysoon" — nombre árabe que significa "de hermoso rostro y cuerpo"

---

## Color Palette

| Token | Hex | Uso |
|-------|-----|-----|
| `bg-primary` | `#FAF7F2` | Fondo principal (crema cálido) |
| `bg-secondary` | `#F3EDE4` | Secciones alternadas (beige suave) |
| `bg-dark` | `#1A1614` | Contraste oscuro (casi negro cálido) |
| `accent-gold` | `#C4A265` | Acentos principales (dorado elegante) |
| `accent-gold-light` | `#D4B87A` | Hover / estados activos |
| `text-primary` | `#1A1614` | Texto principal |
| `text-secondary` | `#6B5E54` | Texto secundario |
| `text-light` | `#FAF7F2` | Texto sobre fondos oscuros |
| `text-muted` | `#9B8E82` | Texto terciario / sutil |

---

## Typography

| Rol | Fuente | Pesos | Notas |
|-----|--------|-------|-------|
| Display / Títulos | **Playfair Display** (serif) | 400, 700, 900 | Tracking `-0.03em` en headings grandes |
| Body / Texto | **DM Sans** (sans-serif) | 400, 500, 700 | Line-height `1.7` en body text |

### Escala tipográfica
- H1: `clamp(2.5rem, 5vw, 4.5rem)` — Playfair Display Bold
- H2: `clamp(2rem, 4vw, 3rem)` — Playfair Display Bold
- H3: `clamp(1.5rem, 3vw, 2rem)` — Playfair Display Semibold
- Eyebrow: `0.875rem` — DM Sans Medium, uppercase, `tracking: 0.25em`
- Body: `1.125rem` — DM Sans Regular
- Small: `0.875rem` — DM Sans Regular
- Caption: `0.75rem` — DM Sans Medium

---

## Spacing Tokens

Base unit: `4px`

| Token | Value |
|-------|-------|
| `xs` | 4px |
| `sm` | 8px |
| `md` | 16px |
| `lg` | 24px |
| `xl` | 32px |
| `2xl` | 48px |
| `3xl` | 64px |
| `4xl` | 96px |
| `5xl` | 128px |

---

## Border Radius

| Token | Value |
|-------|-------|
| `sm` | 4px |
| `md` | 8px |
| `lg` | 16px |
| `xl` | 24px |
| `full` | 9999px |

---

## Shadows

Siempre con tinte cálido, nunca grises puros. Capas múltiples.

```css
--shadow-sm: 0 1px 3px rgba(26, 22, 20, 0.04), 0 1px 2px rgba(26, 22, 20, 0.06);
--shadow-md: 0 4px 12px rgba(26, 22, 20, 0.06), 0 2px 4px rgba(26, 22, 20, 0.04);
--shadow-lg: 0 8px 32px rgba(26, 22, 20, 0.08), 0 4px 8px rgba(26, 22, 20, 0.04);
--shadow-gold: 0 4px 24px rgba(196, 162, 101, 0.15), 0 2px 8px rgba(196, 162, 101, 0.1);
```

---

## Surface / Depth System

| Layer | Fondo | Sombra | Uso |
|-------|-------|--------|-----|
| Base | `#FAF7F2` | ninguna | Fondo de página |
| Elevated | `#FFFFFF` | `shadow-md` | Cards, contenedores |
| Floating | `rgba(250,247,242,0.8)` + `backdrop-blur-xl` | `shadow-lg` | Navbar glassmorphism, modals |

---

## Animation Guidelines

### Easing
- Curva principal: `cubic-bezier(0.16, 1, 0.3, 1)` (spring suave)
- Curva sutil: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease-out suave)

### Duraciones
- Micro-interacciones: `200-300ms`
- Transiciones de UI: `400-600ms`
- Animaciones de entrada: `600-800ms`

### Stagger
- Delay entre elementos: `100-150ms`
- Delay inicial: `300ms` (para esperar que cargue la navbar)

### Reglas
- Solo animar `transform` y `opacity` (GPU-accelerated)
- Nunca usar `transition-all`
- Usar `will-change` solo durante la animación
- Animaciones suaves, no bounce — esto es un spa premium, no una app de juegos

---

## Component Styles

### Botones

**Primario:**
- Fondo: `accent-gold`, texto: `bg-dark`
- Hover: `accent-gold-light`, `scale(1.03)`
- Active: `scale(0.97)`
- Focus-visible: ring de 2px `accent-gold/50`
- Border-radius: `lg` (16px)
- Padding: `16px 32px`
- Shadow: `shadow-gold`

**Secundario:**
- Borde: 2px `accent-gold`, fondo transparente, texto: `accent-gold`
- Hover: fondo `accent-gold/10`, `scale(1.03)`
- Active: `scale(0.97)`
- Focus-visible: ring de 2px `accent-gold/50`

### Navbar
- Posición fija, z-50
- Default: fondo transparente
- Scrolled: glassmorphism (floating layer)
- Transición suave entre estados

### Trust badges
- Icono dorado + texto
- Fondo `bg-secondary`
- Borde superior sutil dorado (`accent-gold/10`)

---

## Principios de Diseño

1. **Mucho espacio en blanco** — breathing room, nunca apretar
2. **Transiciones suaves** — ease, nunca bounce
3. **Bordes redondeados sutiles** — no pastilla, no sharp
4. **Sombras difuminadas** — warm-tinted, multi-layer
5. **Sensación de SPA premium** — no de hospital
6. **Colores cálidos únicamente** — nunca azules médicos ni verdes hospital
7. **Imágenes con overlay sutil** — para integrarlas con la paleta
