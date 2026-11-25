const ideas = [
  "Dedica diez minutos a aprender algo que siempre te haya dado curiosidad.",
  "Sal a dar un paseo y fotografía tres cosas que normalmente pasarías por alto.",
  "Escribe una idea que te ilusione, sin pensar todavía en cómo llevarla a cabo.",
  "Haz algo hoy de una manera distinta a la habitual.",
  "Cuéntale a alguien un proyecto que te gustaría empezar."
];

const ideaText = document.querySelector("#idea-text");
const newIdeaButton = document.querySelector("#new-idea");
let previousIdeaIndex = 0;

newIdeaButton.addEventListener("click", () => {
  let nextIdeaIndex = Math.floor(Math.random() * ideas.length);

  while (ideas.length > 1 && nextIdeaIndex === previousIdeaIndex) {
    nextIdeaIndex = Math.floor(Math.random() * ideas.length);
  }

  previousIdeaIndex = nextIdeaIndex;
  ideaText.textContent = ideas[nextIdeaIndex];
});

const clock = document.querySelector("#analog-clock");
const hourHand = document.querySelector("#hour-hand");
const minuteHand = document.querySelector("#minute-hand");
const secondHand = document.querySelector("#second-hand");

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  hourHand.style.setProperty("--rotation", `${hours * 30 + minutes * 0.5}deg`);
  minuteHand.style.setProperty("--rotation", `${minutes * 6 + seconds * 0.1}deg`);
  secondHand.style.setProperty("--rotation", `${seconds * 6}deg`);
  clock.setAttribute(
    "aria-label",
    `Reloj analógico, hora local: ${new Intl.DateTimeFormat("es", {
      hour: "2-digit",
      minute: "2-digit"
    }).format(now)}`
  );
}

updateClock();
setInterval(updateClock, 1000);

