const genislet = document.getElementById("genislet");
const oynat = document.getElementById("oynatma-butonu");
const ayarlar = document.getElementById("ayarlar");
const inputs = document.getElementsByClassName("input");
const selectElements = document.getElementsByClassName("select-element");
const rootElement = document.querySelector("html");
rootElement.style.setProperty("--animation-play-state", "paused");

genislet.addEventListener("click", () => {
  ayarlar.classList.toggle("genislet");
  genislet.classList.toggle("genislet");
});

oynat.addEventListener("click", () => {
  if (
    rootElement.style.getPropertyValue("--animation-play-state") === "paused"
  ) {
    rootElement.style.setProperty("--animation-play-state", "running");
  } else {
    rootElement.style.setProperty("--animation-play-state", "paused");
  }
  oynat.classList.toggle("oynat");
});

for (const input of inputs) {
  input.addEventListener("change", (e) => {
    rootElement.style.setProperty(`${e.target.id}`, `${e.target.value}s`);
  });
}

for (const selectElement of selectElements) {
  selectElement.addEventListener("change", (e) => {
    let selectElementValue =
      selectElement.options[selectElement.selectedIndex].value;
    rootElement.style.setProperty(`${e.target.id}`, selectElementValue);
  });
}
