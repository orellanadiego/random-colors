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

generate.addEventListener("click", function () {
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

// loop for new color.
function loopColors(colorGenerated) {
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
  color.textContent = hexColor;
  document.querySelector(".colorWrapper").style.backgroundColor = hexColor;

  if (generate) {
    backwardStack.push(hexColor);
  }
  currentColor = hexColor;
}

function generateColor() {
  loopColors();
}

function getRandomNumber() {
  return Math.floor(Math.random() * hexaCodes.length);
}

function colorBackward() {
  if (backwardStack.length === 2) {
    console.log("==== IF backward ====");
    console.log(backwardStack);
  } else {
    console.log("==== BACKWARD ====");
    console.log(forwardStack.push(currentColor));
    console.log((currentColor = backwardStack.pop()));
  }

  // console.log("====");
  // console.log("color in backward button: ", backwardStack);
  // console.log("Current color: ", currentColor);
}

function colorForward() {
  if (!forwardStack.length) {
    console.log("==== IF forward ====");
    console.log(forwardStack);
  } else {
    console.log("==== FORWARD ====");
    console.log(backwardStack.push(currentColor));
    console.log((currentColor = forwardStack.pop()));
  }

  // console.log("====");
  // console.log("color in forward button: ", forwardStack);
  // console.log("Current color: ", currentColor);
}
