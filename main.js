let hexaCodes = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexaCodes[random()];
  }
  let hexColors = [];
  let codes = hexColors.push(hexColor);

  console.log("New color: ", hexColor);
  console.log(hexColors);
  console.log("Value of color in array: ", hexColors.indexOf(hexColor));
  console.log("Quantity of codes in array: ", codes);
  console.log("Second time: ", hexColor);

  color.textContent = hexColor;
  document.querySelector(".colorWrapper").style.backgroundColor = hexColor;
});

let random = function getRandomNumber() {
  return Math.floor(Math.random() * hexaCodes.length);
};

// console.log(hexColors[0]);

function colorBackward() {
  // hexColors.push[];
}

function colorForward() {
  console.log("test");
}
