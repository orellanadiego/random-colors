/* =======
ALL VARIABLES
======= */
const hexaCodes = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const generate = document.querySelector(".btn-generate");
const color = document.querySelector(".color");
const backward = document.querySelector(".btn-backward");
const forward = document.querySelector(".btn-forward");

const hexColors = [];
let forwardStack = [];
let backwardStack = [];
let currentColor = "";

/* =======
BUTTON LISTENERS
======= */
generate.addEventListener("click", function () {
  generateColor();
});

backward.addEventListener("click", function () {
  colorBackward();
});

forward.addEventListener("click", function () {
  colorForward();
});

/* =======
ALL FUNCTIONS
======= */

// loop for new color.
function loopColors() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexaCodes[getRandomNumber()];
  }
  hexColors.push(hexColor);
  // backwardStack.push(hexColor);

  console.log("====");
  console.log("New color: ", hexColor);
  console.log(hexColors);
  console.log("Value of color in array: ", Object.keys(hexColors));
  console.log("Quantity of codes in array: ", hexColors.length);
  console.log("Second time: ", hexColor);
  changeColor(hexColor);

  if (generate) {
    backwardStack.push(hexColor);
  }
  currentColor = hexColor;
}
function changeColor(hexColor) {
  color.textContent = hexColor;
  document.querySelector(".colorWrapper").style.backgroundColor = hexColor;
}

function generateColor() {
  loopColors();
}

function getRandomNumber() {
  return Math.floor(Math.random() * hexaCodes.length);
}

function colorBackward(hexColor) {
  if (backwardStack.length < 2) {
    console.log("==== NOTHING IN BACKWARD ====");
    console.log(Object.keys(backwardStack));
  } else {
    console.log("==== GREATER THAN 2 IN BACKWARD ====");
    console.log(backwardStack);
    forwardStack.push(currentColor);
    console.log((currentColor = backwardStack.pop()));
    changeColor();
  }
}

function colorForward() {
  if (!forwardStack.length) {
    console.log("==== SOMETHING IN FORWARD ====");
    console.log(forwardStack);
    backwardStack.push(currentColor);
    console.log((currentColor = forwardStack.pop()));
    changeColor();
  } else {
    console.log("==== NOTHING IN FORDWARD ====");
    console.log(Object.keys(forwardStack));
  }
}
