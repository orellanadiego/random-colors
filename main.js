/* =======
ALL VARIABLES
======= */
const hexaCodes = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const generate = document.querySelector(".btn-generate");
const color = document.querySelector(".color");
const backward = document.querySelector(".btn-backward");
const forward = document.querySelector(".btn-forward");

let hexColors = [];
let forwardStack = [];
let backwardStack = [];
let currentColor = "";

/* =======
BUTTON LISTENERS
======= */
generate.addEventListener("click", function () {
  loopColors();
});

backward.addEventListener("click", function () {
  colorBackward();
  isBackwardEmpty();
  isForwardEmpty();
});

forward.addEventListener("click", function () {
  colorForward();
  isForwardEmpty();
  isBackwardEmpty();
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

  console.log("====");
  console.log(hexColors);
  console.log("Codes in array: " + hexColors.length);

  if (currentColor) {
    backwardStack.push(currentColor);
  }

  changeColor(hexColor);
  currentColor = hexColor;
  console.log("Current color: " + currentColor);

  isBackwardEmpty();
  isForwardEmpty();
}

// Get a random number based on lenght of array and convert it to a integer.
function getRandomNumber() {
  return Math.floor(Math.random() * hexaCodes.length);
}

function changeColor(hexColor) {
  color.textContent = hexColor;
  document.querySelector(".colorWrapper").style.backgroundColor = hexColor;
}

function isBackwardEmpty() {
  return backwardStack.length < 1
    ? (backward.disabled = true)
    : (backward.disabled = false);
}

function isForwardEmpty() {
  return forwardStack.length < 1
    ? (forward.disabled = true)
    : (forward.disabled = false);
}

function colorBackward() {
  console.log("==== BACKWARD IS WORKING ====");
  forwardStack.push(currentColor);
  currentColor = backwardStack.pop();
  console.log("colors in backwardStack: " + backwardStack.length);
  changeColor(currentColor);

  // for (let color of hexColors) {
  //   console.log(color);
  // }
  // if (backwardStack.length < 1) {
  //   backward.disabled = true;
  // } else {
  //   for (let color in hexColors) console.log(hexColors[color]);
  // }
}

function colorForward() {
  console.log("==== FORDWARD IS WORKING ====");
  backwardStack.push(currentColor);
  currentColor = forwardStack.pop();
  console.log("colors in backwardStack: " + backwardStack.length);
  console.log("colors in forwardStack: " + forwardStack.length);
  changeColor(currentColor);
}
