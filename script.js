const defaultSize = 16;

const grid = document.querySelector(".grid");
const slider = document.querySelector("#slider");

function setupGrid(size) {
  grid.innerHTML = "";

  for (i = 0; i < size ** 2; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridSquare.setAttribute(
      "style",
      `flex: 0 0 ${100 / size}%; height: ${640 / size}px`
    );
    gridSquare.addEventListener("mouseover", draw);
    gridSquare.addEventListener("mousedown", draw);
    grid.appendChild(gridSquare);
  }
}

let clicked = false;
document.body.onmouseup = () => (clicked = false);
document.body.onmousedown = () => (clicked = true);

function draw(e) {
  if (e.type === "mouseover" && clicked) {
    console.log(clicked);
    e.target.style.backgroundColor = "black";
  }
}

slider.onchange = e => {
  setupGrid(e.target.value);
  console.log(e.target.value);
};

window.onload = () => {
  setupGrid(defaultSize);
};
