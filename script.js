const container = document.querySelector(".container");

for (i = 0; i < 256; i++) {
  const gridSquare = document.createElement("div");
  gridSquare.classList.add("grid-square");
  container.appendChild(gridSquare);
}

const square = document.querySelectorAll(".grid-square");

square.forEach(s => {
  s.addEventListener("mouseenter", () => {
    s.classList.add("square");
  });
  //   s.addEventListener("mouseleave", () => {
  //     s.classList.remove("square")
  //   })
});
