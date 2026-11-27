(() => {
  const { elements, setTime, getClockInterval, getClockIntervalDelay } = window.testSupport;
  const results = document.querySelector("#results");
  const summary = document.querySelector("#summary");
  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  }

  function test(name, callback) {
    const item = document.createElement("li");

    try {
      callback();
      item.className = "pass";
      item.textContent = `✓ ${name}`;
      passed += 1;
      console.log(`OK: ${name}`);
    } catch (error) {
      item.className = "fail";
      item.textContent = `✗ ${name}: ${error.message}`;
      failed += 1;
      console.error(`FALLO: ${name}`, error);
    }

    results.append(item);
  }

  test("Una idea nueva no repite inmediatamente la anterior", () => {
    const ideaText = elements.get("#idea-text");
    const button = elements.get("#new-idea");
    const originalIdea = ideaText.textContent;
    const originalRandom = Math.random;
    const randomValues = [0, 0.2, 0.2, 0.4];
    Math.random = () => randomValues.shift();

    try {
      button.click();
      const firstIdea = ideaText.textContent;
      button.click();
      const secondIdea = ideaText.textContent;
      assert(firstIdea && firstIdea !== originalIdea, "El primer clic debe mostrar otra idea.");
      assert(secondIdea && secondIdea !== firstIdea, "El segundo clic no debe repetir la idea anterior.");
    } finally {
      Math.random = originalRandom;
    }
  });

  test("El botón alterna el tema y actualiza sus etiquetas", () => {
    const button = elements.get("#theme-toggle");
    const icon = button.querySelector(".theme-icon");
    const label = button.querySelector(".theme-label");

    button.click();
    assert(document.body.dataset.theme === "dark", "Debe activar el tema oscuro.");
    assert(icon.textContent === "☀" && label.textContent === "Claro", "Debe mostrar la opción de tema claro.");
    assert(button.getAttribute("aria-label") === "Cambiar a tema claro", "Debe actualizar el nombre accesible.");
    assert(button.title === "Cambiar a tema claro", "Debe actualizar el título del botón.");

    button.click();
    assert(document.body.dataset.theme === "light", "Debe volver al tema claro.");
    assert(icon.textContent === "☾" && label.textContent === "Oscuro", "Debe mostrar la opción de tema oscuro.");
  });

  test("El reloj calcula las manecillas y se actualiza cada segundo", () => {
    const hourHand = elements.get("#hour-hand");
    const minuteHand = elements.get("#minute-hand");
    const secondHand = elements.get("#second-hand");
    const clock = elements.get("#analog-clock");

    assert(hourHand.style.values["--rotation"] === "92deg", "La manecilla de horas debe reflejar las 03:04.");
    assert(minuteHand.style.values["--rotation"] === "24.5deg", "La manecilla de minutos debe reflejar 04:05.");
    assert(secondHand.style.values["--rotation"] === "30deg", "La manecilla de segundos debe reflejar el segundo 5.");
    assert(/^Reloj analógico, hora local: \d{2}:\d{2}$/.test(clock.getAttribute("aria-label")), "Debe incluir una hora accesible.");
    assert(getClockIntervalDelay() === 1000, "Debe programar la actualización cada segundo.");

    setTime(2024, 0, 1, 3, 5, 6);
    getClockInterval()();
    assert(hourHand.style.values["--rotation"] === "92.5deg", "La manecilla de horas debe actualizarse.");
    assert(minuteHand.style.values["--rotation"] === "30.6deg", "La manecilla de minutos debe actualizarse.");
    assert(secondHand.style.values["--rotation"] === "36deg", "La manecilla de segundos debe actualizarse.");
  });

  summary.textContent = `${passed + failed} pruebas: ${passed} correctas, ${failed} fallidas.`;
  summary.className = failed === 0 ? "pass" : "fail";
})();