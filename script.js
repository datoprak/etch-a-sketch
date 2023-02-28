const container = document.querySelector(".container");

for (i = 0; i < 256; i++) {
  const gridSquare = document.createElement("div");
  gridSquare.classList.add("grid-square");
  container.appendChild(gridSquare);
}
