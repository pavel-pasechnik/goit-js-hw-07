"use strict";

const getInput = document.querySelector("#name-input");

const getName = document.querySelector("#name-output");

getInput.addEventListener("input", (event) => {
  if (getInput.value.trim() !== "") {
    getName.textContent = getInput.value.trim();
  } else {
    getName.textContent = "Anonymous";
  }
});
