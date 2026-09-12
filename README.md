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
    ├── images/              
    ├── audio/                
    └── video/                
```

## Arquitectura y Distribución del Contenido

El contenido está dividido en 6 páginas organizadas lógicamente para optimizar la experiencia de usuario:

| Página | Descripción del Contenido |
|---|---|
| `index.html` | Presentación principal, datos personales, cita destacada y enlaces profesionales. |
| `perfil.html` | Descripción de perfil profesional, fortalezas principales y objetivos. |
| `educacion.html` | Historial de formación académica, títulos y certificaciones obtenidas. |
| `habilidades.html` | Desglose de habilidades técnicas, herramientas de desarrollo e idiomas. |
| `proyectos.html` | Portafolio de proyectos desarrollados con evidencia multimedia (capturas, audio y video). |
| `contacto.html` | Formulario interactivo para envío de mensajes con validación instantánea. |

## Funcionalidades de JavaScript

1. **Gestión de Tema Claro/Oscuro:**
   * Alternancia dinámica entre modo claro y oscuro con almacenamiento persistente mediante `localStorage`.
   * Detección de la preferencia del sistema operativo (`prefers-color-scheme`).
   * Script optimizado en el encabezado para prevenir parpadeos al cargar la página.

2. **Validación del Formulario de Contacto:**
   * Intercepción del envío para validación de datos en el cliente.
   * Expresiones regulares para verificar formato de correo electrónico y teléfono.
   * Mensajes de error específicos e indicación visual de campos válidos o inválidos.

3. **Navegación e Interfaz:**
   * Resaltado automático del enlace activo según la página consultada.
   * Actualización dinámica del pie de página.

## Especificaciones Técnicas

* **HTML5:** Marcado semántico (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `figure`).
* **CSS3:** Arquitectura basada en CSS Grid y Flexbox, variables globales, temas adaptativos y media queries responsive.
* **Accesibilidad:** Uso de atributos ARIA, etiquetas explícitas en formularios y contrastes de color adaptados.
