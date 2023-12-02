"use strict";

const getUl = document.querySelector("#categories");

const listOfLi = getUl.children.length;

console.log(`Number of categories: ${listOfLi}`);

const getH2 = document.querySelectorAll(".item h2");

getH2.forEach(function (textH2) {
  console.log(`Category: ${textH2.innerText}`);
  console.log(`Elements: ${textH2.nextElementSibling.children.length}`);
});
