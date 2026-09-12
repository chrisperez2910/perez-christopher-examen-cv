# CV Interactivo — Christopher Pérez Sotomayor
### Tecnologías Web I (SIS-214) — Primera Evaluación Práctica

## Estructura de carpetas y archivos

```
cv-multipagina/
├── index.html          -> Inicio: datos personales, enlaces profesionales
├── perfil.html          -> Perfil profesional
├── educacion.html        -> Formación académica + Certificaciones
├── habilidades.html      -> Habilidades técnicas + Idiomas
├── proyectos.html        -> Proyectos destacados + Portafolio multimedia
├── contacto.html         -> Formulario de contacto (validado con JS)
├── css/
│   ├── variables.css      -> Tokens de diseño + tema claro/oscuro
│   ├── base.css           -> Reset y tipografía base
│   ├── layout.css         -> Header, nav, hero, grids, responsive
│   ├── components.css     -> Tabla, meter/progress, details, dl, formulario
│   ├── animations.css     -> Keyframes y clases de animación
│   ├── styles.css         -> Une todo con @import (único enlazado en el HTML)
│   └── README.md
├── js/
│   ├── main.js             -> Script global: tema, nav activa, validación
│   └── README.md
└── assets/
    ├── images/              -> Coloca aquí tus fotos y capturas reales
    ├── audio/                -> Audio de presentación
    └── video/                -> Video demostrativo
```

## Cómo se organizó el contenido en las 6 páginas pedidas

El docente pidió exactamente estos 6 archivos: `index.html`, `perfil.html`,
`educacion.html`, `habilidades.html`, `proyectos.html`, `contacto.html`. Para
no perder ningún contenido del CV original, se agruparon los temas afines
dentro de esas mismas 6 páginas:

| Página | Contenido |
|---|---|
| `index.html` | Datos personales (foto, nombre, contacto, cita), enlaces profesionales y accesos directos a las demás páginas. |
| `perfil.html` | Perfil profesional, fortalezas, objetivo profesional e información adicional. |
| `educacion.html` | Formación académica **y** certificaciones/logros (ambas son credenciales académicas). |
| `habilidades.html` | Habilidades técnicas **e** idiomas (ambas son "skills"). |
| `proyectos.html` | Proyectos destacados **y** portafolio multimedia (las capturas/audio/video son evidencia de esos mismos proyectos). |
| `contacto.html` | Formulario de contacto con validación 100% en cliente. |

Si tu docente prefiere una página exclusiva por cada tema (por ejemplo
`certificaciones.html` o `multimedia.html` separadas), es fácil de dividir:
copia la sección correspondiente a un nuevo archivo con el mismo `<header>`
y `<footer>`, y agrega el enlace en el `<nav>` de las 6 páginas.

## Funcionalidades JavaScript (js/main.js, comentado en detalle)

1. **Modo claro/oscuro** — persistente en `localStorage`, respeta
   `prefers-color-scheme` la primera vez, y un script inline en el
   `<head>` de cada página evita el parpadeo de tema al cargar.
2. **Validación del formulario de contacto** — intercepta el `submit`,
   valida campos obligatorios y formato de correo/teléfono con
   expresiones regulares, marca cada campo como válido/inválido,
   muestra mensajes de error específicos y un mensaje de éxito accesible.
3. *Extra:* resaltado automático del enlace de navegación activo
   (compara la URL actual contra el menú) y año dinámico en el pie de página.

## Pendiente para ti

1. **Fotos y multimedia reales** en `assets/images`, `assets/audio` y
   `assets/video` (o ajusta los nombres de archivo en el HTML).
2. **Enlaces profesionales reales**: reemplaza `https://github.com/tu-usuario`
   y `https://www.linkedin.com/in/tu-usuario` en `index.html`.
3. **Commits progresivos en Git**: la rúbrica pide un historial de commits
   descriptivos (ej. `feat: estructura de las 6 páginas`, `style: variables
   y tema oscuro`, `feat: validación de formulario con JS`). Un historial
   generado de una sola vez no demuestra avance real.
4. **Publicar en GitHub Pages**: sube el repositorio y activa
   Settings → Pages para obtener la URL pública.
5. **Validación W3C (opcional)**: valida cada HTML en
   https://validator.w3.org/ y el CSS en https://jigsaw.w3.org/css-validator/.
6. **Entrega en Moodle**: el `.zip` de este proyecto, el enlace al
   repositorio de GitHub, el enlace al sitio publicado y un comentario
   breve describiendo las funcionalidades implementadas.

## Cómo se cubre cada criterio de la rúbrica

| Criterio | Cómo se cumple |
|---|---|
| HTML semántico (30) | `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `figure`, `details`, `dl`, `table`, `address`, `time`, `blockquote` en las 6 páginas; un solo `h1` por página; ids/clases en snake_case. |
| CSS y maquetación (30) | Variables en `:root` (+ tema oscuro), Flexbox (header/nav/hero) y CSS Grid (perfil, habilidades, proyectos, certificaciones), 2 media queries responsive. |
| JavaScript e interactividad (20) | Modo claro/oscuro persistente + validación de formulario con mensajes específicos, sin errores de consola, con manipulación real del DOM. |
| Accesibilidad y validación (10) | Skip link, `alt` en imágenes, `label` en cada campo, `aria-live`, `aria-describedby`, `aria-current`, `aria-pressed`, contraste cuidado en ambos temas. |
| Git y entrega (10) | Depende de que tú hagas commits progresivos reales y subas el ZIP + enlaces a Moodle (puntos 3 y 6 arriba). |
