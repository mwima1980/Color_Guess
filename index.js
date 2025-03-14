"using strict";

import {GenerateRandomColor, AddRandomColor, Shuffle} from "./src/libs/tools.js";

const hexcode = document.querySelector("#hexcode");
const colorboxes = document.querySelectorAll(".buttons");

let searchedColor = null;
searchedColor = GenerateRandomColor();

const mixedArray = Shuffle(AddRandomColor(11));

mixedArray.push(searchedColor);

hexcode.innerText = searchedColor;

colorboxes.forEach((element, index) => {
  element.style.backgroundColor = mixedArray[index];
});


