function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const btns = document.querySelectorAll("button");
const boxes = document.querySelector("#boxes");

const createBox = (amount) => {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = 30 + 10 * i + "px";
    div.style.height = 30 + 10 * i + "px";

    div.style.backgroundColor = getRandomHexColor();

    boxes.append(div);
  }
};

input.addEventListener("input", createBox);

const createBoxes = (event) => {
  event.preventDefault();
  boxes.innerHTML = "";
  const quantity = input.value;
  const quantityNumber = parseInt(quantity, 10);

  if (quantityNumber > 0 && quantityNumber <= 100) {
    createBox(quantityNumber);
    input.value = "";
  }
};

const destroyBoxes = (event) => {
  event.preventDefault();

  boxes.innerHTML = "";
};

btns[0].addEventListener("click", createBoxes);
btns[1].addEventListener("click", destroyBoxes);
