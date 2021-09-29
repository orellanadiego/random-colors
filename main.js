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

isBackwardEmpty();

/* =======
BUTTON LISTENERS
======= */
generate.addEventListener("click", function () {
  loopColors();
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

  console.log("====");
  console.log("New color: ", hexColor);
  console.log(hexColors);
  console.log("Quantity of codes in array: ", hexColors.length);
  changeColor(hexColor);
  currentColor = hexColor;
  console.log("This is current color: " + currentColor);

  if (currentColor) {
    backwardStack.push(currentColor);
  }
}
// Get a random number based on lenght of array and convert it to a integer.
function getRandomNumber() {
  return Math.floor(Math.random() * hexaCodes.length);
}

function changeColor(hexColor) {
  color.textContent = hexColor;
  document.querySelector(".colorWrapper").style.backgroundColor = hexColor;
}

// function generateColor() {
//   loopColors();
// }

function isBackwardEmpty() {
  if (backwardStack.length < 1) {
    backward.disabled = true;
    console.log("Less than 1 in backwardStack array");
    console.log(backwardStack);
  } else {
    backward.disabled = false;
    console.log("At least 1 item in backwardStack array.");
    console.log(backwardStack);
  }
}

function colorBackward() {
  console.log("==== BACKWARD IS WORKING ====");
  forwardStack.push(currentColor);
  console.log((currentColor = backwardStack.pop()));
  changeColor(currentColor);
  console.log(backwardStack.length);
}

function colorForward() {
  console.log("==== FORDWARD IS WORKING ====");
  backwardStack.push(currentColor);
  console.log((currentColor = forwardStack.pop()));
  changeColor(currentColor);
}

// #176094
