"using strict";

export const buttons = document.querySelectorAll(".buttons");
export const hexCode = document.querySelector("#hexcode");
export const countdown = document.querySelector("#time");
export const buttonsContainer = document.querySelector(".buttons-container");
export const startGame = document.querySelector(".start");
export const spanRounds = document.querySelector("#rounds");
export const spanPoints = document.querySelector("#points");

export let searchedColor = null;
export let fillColors = [];
export let mixedArray = [];
let interval;
let rounds = 1;
let points = 0;

export function prepareGame() {
  searchedColor = GenerateRandomColor();
  fillColors = FillRoundColors(11);
  fillColors.push(searchedColor);
  mixedArray = Shuffle(fillColors);
  spanRounds.innerText = rounds;
  SetGame();
}

export function ResetStats() {
  console.log("Leider falsch");
  SetGame("Start Game", "#FFFFFF", false);
  buttonsContainer.removeEventListener("click", ColorBoxEvent);
  rounds = 0;
  points = 0;
  spanRounds.innerText = rounds;
  spanPoints.innerText = points;
}

export function UpdateStats() {
  rounds += 1;
  points += 5;
  spanRounds.innerText = rounds;
  spanPoints.innerText = points;
}

export function GenerateRandomColor() {
  let hexCode = "#";
  const chars = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    let randIndex = Math.floor(Math.random() * 16);
    hexCode += chars[randIndex];
  }
  return hexCode;
}

export function FillRoundColors(amount) {
  const array = [];
  for (let i = 0; i < amount; i++) {
    let hexCode = GenerateRandomColor();
    array.push(hexCode);
  }
  return array;
}

export function Shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const rndIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[rndIndex]] = [array[rndIndex], array[i]];
  }
  return array;
}

export function CheckColors(hex1, hex2) {
  if (hex1 === hex2) {
    return true;
  } else {
    return false;
  }
}

export function SetGame(innerText, colorCode, setCountdown = true) {
  hexCode.innerText = innerText || searchedColor;
  buttons.forEach((element, index) => {
    element.style.backgroundColor = colorCode || mixedArray[index];
    element.dataset.hex = mixedArray[index];
  });
  clearInterval(interval);
  if (setCountdown) {
    StartCountdown(10);
    return;
  }
  countdown.innerText = "00:00";
}

export function StartCountdown(timer) {
  // let timer = seconds;
  interval = setInterval(() => {
    timer -= 1;
    let displaySecond = timer < 10 ? "0" + timer : timer;
    countdown.innerText = "00:" + displaySecond;
    if (timer <= 0) {
      clearInterval(interval);
      ResetStats();
    }
  }, 1000);
}

// Color Box Event
export function ColorBoxEvent(event) {
  if (event.target.className !== "buttons") {
    return;
  }
  const { hex } = event.target.dataset;
  const result = CheckColors(searchedColor, hex);
  if (!result) {
    startGame.disabled = false;
     
    ResetStats(ColorBoxEvent);
    hexCode.innerText = "Start  Game";
    return;
  } else {
    UpdateStats();
    prepareGame();
    console.log(result);
  }
}
