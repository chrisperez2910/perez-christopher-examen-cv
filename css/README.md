# css/

Arquitectura CSS modular del proyecto.

| Archivo | Contenido |
|---|---|
| `variables.css` | Tokens de diseño: colores, tipografía, espaciado, sombras, radios, y las variables del tema oscuro (`[data-theme="dark"]`). |
| `base.css` | Reset, `box-sizing`, tipografía base (h1-h4, p, blockquote, etc.). |
| `layout.css` | Header sticky, navegación (Flexbox), hero, grids (CSS Grid), footer y las media queries responsive. |
| `components.css` | Componentes: tabla, `<progress>`/`<meter>`, `<details>`, `<dl>`, galería multimedia, formulario (incluye los estados `.campo_valido`/`.campo_invalido` que controla `js/main.js`). |
| `animations.css` | `@keyframes` y clases utilitarias de animación, con soporte para `prefers-reduced-motion`. |
| `styles.css` | Une todos los módulos anteriores con `@import`. **Es el único archivo que se enlaza desde cada HTML.** |

Todas las páginas cargan únicamente:

```html
<link rel="stylesheet" href="css/styles.css">
```

Esto evita que cada página tenga que enlazar 5 archivos distintos y
mantiene el orden de carga garantizado (variables antes que todo lo demás).
