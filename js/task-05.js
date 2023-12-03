function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const getButton = document.querySelector("button");
const getBody = document.querySelector("body");
const getSpan = document.querySelector(".color");

const listener = () => {
  const color = getRandomHexColor();
  getSpan.textContent = color;
  getBody.style.backgroundColor = color;
};

getButton.addEventListener("click", listener);
