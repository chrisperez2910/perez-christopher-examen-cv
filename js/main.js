/* ==========================================================================
   CV INTERACTIVO — CHRISTOPHER PÉREZ SOTOMAYOR
   JS/MAIN.JS — Script global
   --------------------------------------------------------------------------
   Este archivo maneja la interactividad del sitio web. Funciona para las
   6 páginas del proyecto gracias a que verifica si los elementos existen
   en la pantalla antes de ejecutarse.
   ========================================================================== */

// Usamos una función anónima que se ejecuta sola para mantener el código ordenado
(function () {
  "use strict"; // Activa el modo estricto para evitar errores comunes de sintaxis

  /* ========================================================================
     BLOQUE 1 — CAMBIO DE TEMA (MODO CLARO Y OSCURO)
     ------------------------------------------------------------------------
     Permite alternar entre la apariencia clara y oscura guardando la
     preferencia del usuario en el navegador (localStorage).
     ======================================================================== */

  const CLAVE_TEMA = "cv_tema_preferido";
  const boton_tema = document.getElementById("theme_toggle_btn");
  const raiz_html = document.documentElement; // Selecciona la etiqueta <html>

  // Función para cambiar el tema en el HTML y actualizar el texto del botón
  function aplicar_tema(tema) {
    raiz_html.setAttribute("data-theme", tema);

    // Si el botón existe en la página actual, cambiamos su texto y estado
    if (boton_tema) {
      const es_oscuro = tema === "dark";
      boton_tema.setAttribute("aria-pressed", String(es_oscuro));
      boton_tema.innerHTML = es_oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
    }
  }

  // Función para averiguar qué tema usar al cargar la página por primera vez
  function obtener_tema_inicial() {
    // 1. Revisa si el usuario ya guardó un tema en visitas anteriores
    const guardado = localStorage.getItem(CLAVE_TEMA);
    if (guardado === "dark" || guardado === "light") {
      return guardado;
    }

    // 2. Si no hay nada guardado, revisa la preferencia del sistema operativo
    const prefiere_oscuro =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefiere_oscuro ? "dark" : "light";
  }

  // Aplica el tema inicial en cuanto se carga el script
  aplicar_tema(raiz_html.getAttribute("data-theme") || obtener_tema_inicial());

  // Escucha el clic en el botón para cambiar entre claro y oscuro
  if (boton_tema) {
    boton_tema.addEventListener("click", function () {
      const tema_actual = raiz_html.getAttribute("data-theme");
      const nuevo_tema = tema_actual === "dark" ? "light" : "dark";

      aplicar_tema(nuevo_tema);
      // Guarda la elección en la memoria del navegador
      localStorage.setItem(CLAVE_TEMA, nuevo_tema);
    });
  }

  /* ========================================================================
     BLOQUE 2 — MARCAR EL ENLACE DEL MENÚ SEGÚN LA PÁGINA ACTUAL
     ------------------------------------------------------------------------
     Detecta en qué página se encuentra el usuario y le añade un estilo
     al enlace correspondiente en el menú de navegación.
     ======================================================================== */

  function resaltar_enlace_nav_activo() {
    const enlaces_nav = document.querySelectorAll(".nav_principal a");
    if (enlaces_nav.length === 0) return;

    // Obtiene el nombre del archivo actual desde la dirección (URL)
    let pagina_actual = window.location.pathname.split("/").pop();
    if (pagina_actual === "") {
      pagina_actual = "index.html"; // Si la ruta está vacía, es la portada
    }

    // Compara cada enlace con el archivo actual
    enlaces_nav.forEach(function (enlace) {
      const href_enlace = enlace.getAttribute("href");
      const es_pagina_actual = href_enlace === pagina_actual;

      // Agrega o quita la clase CSS según corresponda
      enlace.classList.toggle("link_activo", es_pagina_actual);

      if (es_pagina_actual) {
        enlace.setAttribute("aria-current", "page");
      } else {
        enlace.removeAttribute("aria-current");
      }
    });
  }

  // Ejecuta la función del menú
  resaltar_enlace_nav_activo();

  /* ========================================================================
     BLOQUE 3 — MOSTRAR EL AÑO ACTUAL EN EL PIE DE PÁGINA
     ------------------------------------------------------------------------
     Obtiene el año en curso automáticamente para no tener que actualizarlo
     manualmente en el texto del HTML.
     ======================================================================== */

  const elemento_anio = document.getElementById("anio_actual");
  if (elemento_anio) {
    elemento_anio.textContent = new Date().getFullYear();
  }

  /* ========================================================================
     BLOQUE 4 — VALIDACIÓN DEL FORMULARIO DE CONTACTO
     ------------------------------------------------------------------------
     Comprueba que los datos introducidos por el usuario en contacto.html
     sean válidos antes de permitir el envío del formulario.
     ======================================================================== */

  const formulario = document.getElementById("formulario_contacto");

  // Solo ejecuta la lógica de validación si el formulario existe en la página
  if (formulario) {
    const mensaje_estado = document.getElementById("mensaje_estado_formulario");

    // Reglas de comprobación para cada campo del formulario
    const reglas_validacion = {
      nombre: {
        validar: function (valor) {
          // Revisa que tenga al menos 3 caracteres y solo sean letras
          return valor.trim().length >= 3 && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(valor.trim());
        },
        mensaje: "Ingresa un nombre válido (mínimo 3 letras, sin números)."
      },
      correo: {
        validar: function (valor) {
          // Revisa la estructura estándar de un correo (ejemplo@dominio.com)
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor.trim());
        },
        mensaje: "Ingresa un correo electrónico válido."
      },
      telefono: {
        validar: function (valor) {
          // Comprueba el formato de un teléfono de Bolivia (8 dígitos)
          return /^(\+591\s?)?[267][0-9]{7}$/.test(valor.trim());
        },
        mensaje: "Ingresa un número boliviano válido, ej: +591 70000000."
      },
      motivo: {
        validar: function (valor) {
          // Revisa que se haya elegido una opción de la lista
          return valor.trim() !== "";
        },
        mensaje: "Selecciona un motivo de contacto."
      },
      mensaje: {
        validar: function (valor) {
          // Comprueba que el texto tenga un mínimo de 10 caracteres
          return valor.trim().length >= 10;
        },
        mensaje: "El mensaje debe tener al menos 10 caracteres."
      },
      aceptacion: {
        validar: function (_valor, campo) {
          // Revisa si la casilla de verificación está marcada
          return campo.checked === true;
        },
        mensaje: "Debes aceptar para poder enviar el formulario."
      }
    };

    // Función auxiliar para mostrar u ocultar los mensajes de error en la pantalla
    function mostrar_error(campo, texto_error) {
      campo.classList.toggle("campo_invalido", Boolean(texto_error));
      campo.classList.toggle("campo_valido", !texto_error);
      campo.setAttribute("aria-invalid", texto_error ? "true" : "false");

      const contenedor_error = document.getElementById("error_" + campo.name);
      if (contenedor_error) {
        contenedor_error.textContent = texto_error || "";
      }
    }

    // Función para validar un solo campo usando las reglas anteriores
    function validar_campo(campo) {
      const regla = reglas_validacion[campo.name];
      if (!regla) return true; // Si no tiene regla, lo da por válido

      const valor = campo.type === "checkbox" ? campo.checked : campo.value;
      const es_valido = regla.validar(valor, campo);

      mostrar_error(campo, es_valido ? "" : regla.mensaje);
      return es_valido;
    }

    // Valida cada campo individualmente cuando el usuario quita el foco de él (evento blur)
    Object.keys(reglas_validacion).forEach(function (nombre_campo) {
      const campo = formulario.elements[nombre_campo];
      if (campo) {
        campo.addEventListener("blur", function () {
          validar_campo(campo);
        });
      }
    });

    // Controla la acción al hacer clic en el botón de "Enviar"
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault(); // Evita que la página se recargue

      let formulario_valido = true;
      let primer_campo_invalido = null;

      // Revisa todos los campos del formulario
      Object.keys(reglas_validacion).forEach(function (nombre_campo) {
        const campo = formulario.elements[nombre_campo];
        if (!campo) return;

        const campo_valido = validar_campo(campo);
        if (!campo_valido) {
          formulario_valido = false;
          if (!primer_campo_invalido) {
            primer_campo_invalido = campo; // Guarda el primer campo con error
          }
        }
      });

      // Si hay errores, detiene el proceso y muestra un aviso al usuario
      if (!formulario_valido) {
        if (mensaje_estado) {
          mensaje_estado.textContent =
            "Revisa los campos marcados en rojo antes de enviar el formulario.";
          mensaje_estado.className = "mensaje_estado_formulario visible error";
        }
        if (primer_campo_invalido) {
          primer_campo_invalido.focus(); // Coloca el cursor directamente en el error
        }
        return;
      }

      // Si todo es correcto, muestra el mensaje de éxito y limpia los campos
      if (mensaje_estado) {
        mensaje_estado.textContent =
          "¡Gracias! Tu mensaje fue validado correctamente y quedaría listo para enviarse.";
        mensaje_estado.className = "mensaje_estado_formulario visible exito";
      }

      formulario.reset();

      // Quita los bordes verdes de validación del formulario recién limpiado
      formulario.querySelectorAll(".campo_valido").forEach(function (campo) {
        campo.classList.remove("campo_valido");
      });
    });
  }
})();