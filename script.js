const grid = document.querySelector(".grid");
const slider = document.querySelector("#slider");
const sliderContainer = document.querySelector(".slider-container");
const colorPicker = document.querySelector("#color-picker");
const paintedSquares = document.querySelectorAll(".square");

const defaultSize = slider.value;
const defaultColor = colorPicker.value;
let color = defaultColor;

const sliderLabel = document.createElement("p");
sliderLabel.classList.add("slider-label");
sliderLabel.textContent = `${defaultSize} x ${defaultSize}`;
sliderContainer.appendChild(sliderLabel);

let clicked = false;
document.body.onmouseup = () => (clicked = false);
document.body.onmousedown = () => (clicked = true);

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

function draw(e) {
  if (e.type === "mouseover" && !clicked) return; // it's there to paint the first clicked div.
  e.target.style.backgroundColor = color;
}

colorPicker.oninput = e => {
  color = e.target.value;
};

slider.onchange = e => {
  setupGrid(e.target.value);
};

slider.oninput = e =>
  (sliderLabel.textContent = `${e.target.value} x ${e.target.value}`);

window.onload = () => {
  setupGrid(defaultSize);
};
