const transformInputs = document.getElementsByClassName("transform");

for (const transformProperty of transformInputs) {
  transformProperty.addEventListener("change", () => {
    rootElement.style.setProperty(
      `transform`,
      `translate(${transformInputs[0].value}px,${transformInputs[1].value}px) 
      translate3d(${transformInputs[3].value}px,${transformInputs[4].value}px,${transformInputs[5].value}px)
      translateX(${transformInputs[6].value}%) 
      translateX(${transformInputs[7].value}%)
      `
    );
  });
}
