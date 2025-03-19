"using strict";

export const buttons = document.querySelectorAll(".buttons");
export const hexCode = document.querySelector("#hexcode");
export let searchedColor = null;
export let fillColors = [];
export let mixedArray = [];

export function prepareGame() {
  searchedColor = GenerateRandomColor();
  fillColors = FillRoundColors(11);
  fillColors.push(searchedColor);
  mixedArray = Shuffle(fillColors);
  SetGame();
}

export function GenerateRandomColor() {
  let hexCode ="#";
  const chars = "0123456789ABCDEF";
  for(let i = 0; i < 6; i++) {
    let randIndex = Math.floor(Math.random() * 16);
    hexCode += chars[randIndex];
  }
  return hexCode;
}

export function FillRoundColors(amount) {
  const array = [];
  for(let i = 0; i < amount; i++) {
    let hexCode = GenerateRandomColor();
    array.push(hexCode);
  }
  return array;
}

export function Shuffle(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const rndIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[rndIndex]] = [array[rndIndex], array[i]];
  }
  return array
}

export function CheckColors(hex1, hex2) {
  if(hex1 === hex2) {
    return true;
  }else {
    return false;
  }
}

export function SetGame(innerText, colorCode) {
  hexCode.innerText = innerText || searchedColor;
  buttons.forEach((element, index) => {
    element.style.backgroundColor = colorCode || mixedArray[index];
    element.dataset.hex = mixedArray[index];
  });
}

