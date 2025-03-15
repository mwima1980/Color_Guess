"using strict";

import {GenerateRandomColor, AddRandomColor, Shuffle, checkColors} from "./src/libs/tools.js";
let mixedArray = [];
const hexcode = document.querySelector("#hexcode");
const colorboxes = document.querySelectorAll(".buttons");
const buttonsContainer = document.querySelector(".buttons-container");

let searchedColor = null;
searchedColor = GenerateRandomColor();


mixedArray = AddRandomColor(11);
mixedArray.push(searchedColor);
const shuffleArray = Shuffle(mixedArray);

hexcode.innerText = searchedColor;

colorboxes.forEach((element, index) => {
  element.style.backgroundColor = shuffleArray[index];
  element.dataset.hex = shuffleArray[index];
});

buttonsContainer.addEventListener("click", (event) => {
  if(event.target.className !== "buttons") {
    return;
  }
  const result =  checkColors(searchedColor, event.target.dataset.hex);
});
