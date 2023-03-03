const grid = document.querySelector(".grid");
const slider = document.querySelector("#slider");
const sliderContainer = document.querySelector(".slider-container");
const colorPicker = document.querySelector("#color-picker");
const colorButton = document.querySelector(".color-button");
const rainbowButton = document.querySelector(".rainbow-button");
const shadeButton = document.querySelector(".shade-button");
const clearButton = document.querySelector(".clear-button");

const defaultSize = slider.value;
const defaultColor = colorPicker.value;
const defaultMode = "color";
let color = defaultColor;
let mode = defaultMode;
let clicked = false;

const sliderLabel = document.createElement("p");
sliderLabel.classList.add("slider-label");
sliderLabel.textContent = `${defaultSize} x ${defaultSize}`;
sliderContainer.appendChild(sliderLabel);

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
  if (mode === "color") {
    e.target.style.backgroundColor = color;
  } else if (mode === "rainbow") {
    randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase();
    e.target.style.backgroundColor = randomColor;
  } else if (mode === "shade") {
    if (e.target.style.backgroundColor.slice(-2, -1) !== "0") {
      let currentOpacity = e.target.style.backgroundColor.slice(-4, -1);
      if (currentOpacity < 1) {
        currentOpacity = +currentOpacity + 0.1;
        e.target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
      }
    } else if (e.target.style.backgroundColor === "rgb(0, 0, 0)") {
      return;
    } else {
      e.target.style.backgroundColor = "rgb(0, 0, 0)";
    }
  }
}

colorPicker.oninput = e => {
  color = e.target.value;
};

colorButton.onclick = () => {
  mode = "color";
};

rainbowButton.onclick = () => {
  mode = "rainbow";
};

shadeButton.onclick = () => {
  mode = "shade";
};

clearButton.onclick = () => {
  setupGrid(defaultSize);
  sliderLabel.textContent = `${defaultSize} x ${defaultSize}`;
  slider.value = defaultSize;
};

slider.onchange = e => {
  setupGrid(e.target.value);
};

slider.oninput = e =>
  (sliderLabel.textContent = `${e.target.value} x ${e.target.value}`);

window.onload = () => {
  setupGrid(defaultSize);
};
