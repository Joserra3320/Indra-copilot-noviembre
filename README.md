# Brújula!!!

**Brújula** es una página web estática diseñada para despertar la curiosidad y ofrecer pequeñas ideas con las que dar el primer paso en un proyecto personal.

## Características

- Inspiración aleatoria mediante el botón **«Otra idea»**
- Cambio entre tema claro y tema oscuro
- Reloj analógico con la hora local, actualizado cada segundo
- Navegación con desplazamiento suave entre secciones
- Diseño adaptable para escritorio, tablet y móvil
- Estructura accesible con etiquetas, navegación semántica y soporte para movimiento reducido
- Ilustraciones e iconos creados con HTML y CSS

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Google Fonts

No se necesita ningún framework, gestor de paquetes ni proceso de compilación.

## Requisitos

Solo necesitas un navegador web moderno.

## Ejecución

Puedes abrir directamente el archivo `index.html` desde el navegador o iniciar un servidor local.

Desde la carpeta del proyecto, por ejemplo con Python:

```bash
python -m http.server 8000
```

Después, abre `http://localhost:8000` en el navegador.

También puedes usar la extensión **Live Server** de Visual Studio Code:

1. Abre la carpeta del proyecto.
2. Haz clic con el botón derecho sobre `index.html`.
3. Selecciona **Open with Live Server**.

## Pruebas

Abre `tests/test-runner.html` en un navegador para ejecutar las pruebas de ideas, cambio de tema y reloj. El ejecutor usa únicamente JavaScript y APIs del navegador; no requiere instalar dependencias.

## Funcionalidad

### Ideas de inspiración

`script.js` contiene una lista de retos pequeños. Al pulsar el botón de actualización, se selecciona una idea distinta y se muestra en la tarjeta principal.

### Tema claro y oscuro

El botón de tema modifica el atributo `data-theme` del elemento `body` y aplica las variables CSS correspondientes. El botón actualiza también su icono, texto y descripción accesible.

### Reloj analógico

El reloj fijo calcula las horas, minutos y segundos locales y rota cada manecilla mediante una propiedad CSS personalizada.

## Estructura del proyecto

```text
.
├── index.html  # Estructura y contenido de la página
├── styles.css  # Diseño, temas, animaciones y responsive
├── script.js   # Ideas, cambio de tema y reloj
└── README.md   # Documentación del proyecto
```