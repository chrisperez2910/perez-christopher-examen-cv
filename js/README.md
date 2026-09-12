# js/

## main.js

Único script del proyecto, enlazado igual en las 6 páginas HTML
(`<script src="js/main.js"></script>`, justo antes de `</body>`). Está
dividido en 4 bloques, cada uno protegido con comprobaciones de
existencia del elemento (`if (elemento) { ... }`) para poder compartir
el mismo archivo entre todas las páginas sin generar errores en consola:

1. **Modo claro/oscuro** — agrega/quita `data-theme="dark"` en `<html>`,
   persiste la elección en `localStorage` y respeta `prefers-color-scheme`
   la primera vez.
2. **Enlace de navegación activo** — compara la URL actual contra los
   `href` del menú y resalta el enlace correspondiente.
3. **Año dinámico** — actualiza el año del pie de página.
4. **Validación del formulario de contacto** — solo se activa en
   `contacto.html` (busca `#formulario_contacto`); valida cada campo,
   muestra errores específicos y un mensaje de éxito accesible
   (`aria-live="polite"`).

No se usan librerías externas (jQuery, etc.): todo es JavaScript nativo
del navegador (DOM API, `localStorage`, `matchMedia`).
