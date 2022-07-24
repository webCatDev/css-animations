const expandButton = document.getElementById("expand-btn")! as HTMLButtonElement;
const playButton = document.getElementById("play-btn")! as HTMLButtonElement;
const settings = document.getElementById("settings")! as HTMLTableSectionElement;
const rootElement = document.querySelector("html")! as HTMLHtmlElement;

rootElement.style.setProperty("--animation-play-state", "paused");

function expandMenu() {
  settings.classList.toggle("expanded");
  expandButton.classList.toggle("expanded");
}

function toogleAnimationPlayingState() {
  const property = "--animation-play-state";

  rootElement.style.getPropertyValue(property) === "paused"
    ? rootElement.style.setProperty(property, "running")
    : rootElement.style.setProperty(property, "paused");

  playButton.classList.toggle("play");
}

function setAnimationProperties(event: Event) {
  const target = event.target as HTMLInputElement
 
  const { animationProperty } = target.dataset;
  const { tagName, value } = target;

  rootElement.style.setProperty(
    animationProperty as string,
    `${tagName === "INPUT" ? `${value}s` : tagName === "SELECT" ? value : ""}`
  );
}

expandButton.addEventListener("click", expandMenu);
playButton.addEventListener("click", toogleAnimationPlayingState);
settings.addEventListener("change", setAnimationProperties);
