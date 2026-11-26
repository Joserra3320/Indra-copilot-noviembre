# Instrucciones para GitHub Copilot

## Visión general del proyecto

- Este repositorio contiene **Brújula**, una página web estática y completamente realizada con HTML5, CSS3 y JavaScript.
- No hay framework, gestor de paquetes, proceso de compilación ni dependencias locales.
- Los recursos principales son `index.html`, `styles.css`, `script.js` y `README.md`.
- La página se puede abrir directamente en el navegador o servir con un servidor local como `python -m http.server 8000`.
- Mantén la solución simple y sin introducir herramientas innecesarias.

## Idioma y estilo

- Comunícate y escribe el contenido visible de la interfaz en español.
- Conserva el tono cálido, cercano y optimista ya usado en la página.
- Mantén nombres de variables y funciones legibles. Sigue la convención actual de camelCase en JavaScript.
- Usa HTML semántico, clases CSS descriptivas y JavaScript sencillo y moderno.
- Evita comentarios obvios. Solo comenta lógica que no resulte clara por sí sola.
- Realiza cambios pequeños y coherentes; no reformees ni renombres archivos sin necesidad.

## HTML

- Conserva la estructura principal de `header`, `main`, `section`, `footer` y `aside`.
- Declara siempre elementos de formulario y botones con el comportamiento adecuado:
  - Los controles que ejecutan una acción deben usar `type="button"`.
  - Los enlaces usados para navegación interna deben apuntar a un ancla existente.
- Añade etiquetas, nombres accesibles y descripciones solo donde aporten contexto real.
- Mantén el atributo `lang="es"` y los metadatos básicos.
- No dupliques IDs.
- Conserva los enlaces a hojas de estilos y scripts en `index.html`.

## CSS

- Organiza los cambios siguiendo el orden actual: variables y temas; reset; estructura general; componentes; responsive; preferencias de movimiento.
- Usa las variables CSS existentes en `:root` y en `body[data-theme="dark"]` para colores, superficies y estados.
- No sustituyas variables temáticas por colores fijos en componentes nuevos.
- Mantén el diseño adaptable con `width: min(...)`, grid y flexbox.
- Conserva los puntos de ruptura existentes, especialmente `760px` y `480px`.
- Respeta la separación visual, los bordes redondeados y la estética verde, crema y naranja del proyecto.
- Todas las imágenes ilustrativas principales están construidas con CSS. No añadas imágenes ni fuentes externas salvo que la tarea lo requiera.
- Conservar la tipografía actual: **DM Sans** para el texto general y **Manrope** para titulares y elementos destacados.
- Mantén la compatibilidad con `prefers-reduced-motion: reduce`.
- No ocultes elementos mediante estilos si pueden perderse elementos informativos o accesibles importantes.

## JavaScript

- Usa JavaScript plano sin frameworks ni librerías adicionales.
- Conserva las referencias a elementos obtenidas mediante `document.querySelector`.
- Añade listeners solo a elementos existentes y evita consultas repetidas innecesarias.
- Conserva la lógica independiente de ideas, tema y reloj siempre que sea posible.
- Para el tema:
  - Usa `body.dataset.theme`.
  - Mantén los estados `light` y `dark`.
  - Actualiza icono, etiqueta, `aria-label`, `title` y las variables CSS asociadas.
- Para el reloj:
  - Calcula horas, minutos y segundos a partir de la hora local.
  - Conserva las propiedades CSS personalizadas `--rotation`.
  - Mantiene actualizada la descripción accesible del reloj.
- La generación de ideas debe evitar repetir inmediatamente la idea anterior.
- Evita bloqueos, errores silenciosos y manipulación innecesaria del DOM.

## Accesibilidad

- Toda interacción debe poder realizarse con teclado.
- Conserva estados de foco visibles. Usa `:focus-visible` y no elimines los contornos de foco.
- Conserva `aria-live="polite"` en los mensajes dinámicos pertinentes.
- Los botones deben tener nombre accesible mediante texto visible o `aria-label`.
- Las ilustraciones decorativas deben permanecer fuera de la semántica con `aria-hidden="true"`.
- Los elementos informativos deben incluir alternativas o etiquetas accesibles apropiadas.
- Mantén contraste suficiente en ambos temas.
- Respeta movimiento reducido y usa transiciones discretas.

## Responsive y compatibilidad

- Verifica escritorio, tablet y móvil.
- Prioriza tamaños de pantalla aproximados de 1440, 1024, 760 y 375 píxeles.
- Conserva la navegación, las tarjetas, el reloj fijo y el pie de página sin solapamientos.
- No dependas de APIs exclusivas de navegadores modernos sin una razón clara.
- El sitio debe funcionar en navegadores actuales con JavaScript habilitado.

## Flujo de trabajo y cambios

1. Lee los archivos afectados y busca patrones existentes antes de modificar.
2. Cambia primero HTML/CSS/JavaScript en el archivo que corresponda.
3. Usa nombres claros y preserva el contenido, la navegación y el comportamiento existentes.
4. Realiza cambios completos, incluyendo el tema claro, el tema oscuro y las variantes responsive cuando sean relevantes.
5. Actualiza `README.md` únicamente si cambia una característica, un requisito o una instrucción de ejecución.
6. No añadas archivos de configuración ni dependencias si no son estrictamente necesarios.

## Validación

- Antes de finalizar, abre `index.html` o sirve el proyecto localmente.
- Prueba los botones, el cambio de tema, el reloj, los enlaces internos y la selección aleatoria de ideas.
- Comprueba al menos una vista de escritorio y una móvil.
- Verifica navegación por teclado, foco visible y reducción de movimiento.
- No borres ni sobrescribas cambios ajenos presentes en el repositorio.