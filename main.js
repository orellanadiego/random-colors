let hexaCodes = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexaCodes[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.querySelector(".colorWrapper").style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hexaCodes.length);
}
