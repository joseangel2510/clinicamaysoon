# Baseline GEO — Plantilla de medición

> **Tabla para anotar las 132 corridas** (22 prompts × 3 ChatGPT + 3 Perplexity).
>
> Recomendado: **copiar esto a Google Sheets** para poder filtrar y calcular métricas.
> Si prefieres editar aquí en markdown también funciona.

## Cómo rellenar

| Columna | Qué pones |
|---|---|
| `Prompt #` | Número del prompt (1-22) según `baseline-prompts.md` |
| `Motor` | `ChatGPT` o `Perplexity` |
| `Corrida` | `1`, `2` o `3` (cuál de las 3 repeticiones es) |
| `Maysoon?` | `Sí` / `No` |
| `Posición` | Si apareció: 1, 2, 3, … (orden en el listado de la respuesta). Si no apareció: `—` |
| `Competidores mencionados` | Nombres de **otras clínicas valencianas** que la IA cita en esa respuesta. Separados por coma. Si no menciona ninguna clínica concreta: `—` |
| `Fuentes citadas (URLs)` | URLs/dominios que la IA muestra como fuente en su respuesta (ej. `doctoralia.es`, `topdoctors.es`, `clinicamaysoon.com`). Separadas por coma. |
| `Notas` | Cualquier cosa relevante: tono de la respuesta, si la IA dudó, si pidió más contexto, etc. |

---

## 📋 Tabla de medición

```
| Prompt # | Motor      | Corrida | Maysoon? | Posición | Competidores mencionados | Fuentes citadas (URLs) | Notas |
|----------|------------|---------|----------|----------|--------------------------|------------------------|-------|
| 1        | ChatGPT    | 1       |          |          |                          |                        |       |
| 1        | ChatGPT    | 2       |          |          |                          |                        |       |
| 1        | ChatGPT    | 3       |          |          |                          |                        |       |
| 1        | Perplexity | 1       |          |          |                          |                        |       |
| 1        | Perplexity | 2       |          |          |                          |                        |       |
| 1        | Perplexity | 3       |          |          |                          |                        |       |
| 2        | ChatGPT    | 1       |          |          |                          |                        |       |
| 2        | ChatGPT    | 2       |          |          |                          |                        |       |
| 2        | ChatGPT    | 3       |          |          |                          |                        |       |
| 2        | Perplexity | 1       |          |          |                          |                        |       |
| 2        | Perplexity | 2       |          |          |                          |                        |       |
| 2        | Perplexity | 3       |          |          |                          |                        |       |
| ...      | ...        | ...     |          |          |                          |                        |       |
```

> Copia y completa hasta el prompt 22.

---

## 📊 Métricas a calcular al final (te las saco yo cuando me pases la tabla)

### Globales (todos los prompts + todos los motores)

| Métrica | Fórmula | Valor baseline |
|---|---|---|
| **Tasa de mención** | corridas con `Maysoon? = Sí` / 132 | `___ %` |
| **Tasa de citación** | corridas con `clinicamaysoon.com` en fuentes / 132 | `___ %` |
| **Posición media cuando aparece** | media de la columna `Posición` (sólo filas con Maysoon? = Sí) | `___` |

### Por motor (importantísimo — pueden divergir)

| Métrica | ChatGPT | Perplexity |
|---|---|---|
| Tasa de mención | `___ %` | `___ %` |
| Tasa de citación | `___ %` | `___ %` |

### Share of voice (descubierto en el baseline, una vez tengamos los datos)

Esto se rellena tras correr los prompts. Identificas los 3-5 competidores valencianos que
más aparecen y se calcula:

| Clínica | Apariciones / 132 | % share |
|---|---|---|
| Maysoon | `__/132` | `__%` |
| [Competidor 1] | `__/132` | `__%` |
| [Competidor 2] | `__/132` | `__%` |
| [Competidor 3] | `__/132` | `__%` |

### Por categoría de prompt

| Categoría | Tasa de mención |
|---|---|
| A · Decisional general (prompts 1-5) | `___ %` |
| B · Servicio + ciudad (prompts 6-14) | `___ %` |
| C · Comparación (prompts 15-18) | `___ %` |
| D · Problema → solución (prompts 19-22) | `___ %` |

> Esto nos dice **en qué categoría hay más oportunidad real** y dónde concentrar contenido.

---

## 🔁 Cuándo repetir

- **Próxima medición**: 30-45 días tras este baseline → comparamos vs. estos números.
- **Después**: cada mes (si hay retainer mensual) o cada trimestre (si es ad-hoc).

> Las respuestas de IA son ruidosas: fluctuaciones semanales son normales.
> Lo que importa es la **tendencia a 30-60 días**, no las variaciones del día.
