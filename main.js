/* =======
ALL VARIABLES
======= */
const hexaCodes = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
const backward = document.querySelector(".btn-backward");
const forward = document.querySelector(".btn-forward");
const hexColors = [];

btn.addEventListener("click", function () {
  generateColor();
});

/* =======
BUTTON LISTENERS
======= */
backward.addEventListener("click", function () {
  colorBackward();
});

forward.addEventListener("click", function () {
  colorForward();
});

/* =======
ALL FUNCTIONS
======= */
function generateColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexaCodes[getRandomNumber()];
  }
  hexColors.push(hexColor);

  console.log("====");
  console.log("New color: ", hexColor);
  console.log(hexColors);
  console.log("Value of color in array: ", Object.keys(hexColors));
  console.log("Quantity of codes in array: ", hexColors.length);
  console.log("Second time: ", hexColor);
  color.textContent = hexColor;
  document.querySelector(".colorWrapper").style.backgroundColor = hexColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hexaCodes.length);
}

function colorBackward() {
  console.log("This is the backward button!");
}

function colorForward() {
  console.log("This is the forward button!");
}
