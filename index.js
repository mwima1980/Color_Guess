"using strict";

import {
  RandomColor,
  AddColors,
  Shuffle,
  CheckColors,
  StartGame,
  Points
} from "./src/libs/tools.js";

// Random - Colors
const searchColor = RandomColor();
const colors = AddColors(11);
colors.push(searchColor);
const shuffleColors = Shuffle(colors);
let checks = CheckColors();

// Querries - Selection
const hexcode = document.querySelector("#hexcode");
const buttonsColor = document.querySelectorAll(".buttons");
const buttonsContainer = document.querySelector(".buttons-container");
const startButton = document.querySelector(".start");
const points = document.querySelector("#points");
const rounds = document.querySelector("#rounds");

// Start - Game
startButton.addEventListener("click", (event) => {
  if (event.target.className === "start") {
    startButton.disabled = true;
    StartGame(
      hexcode,
      searchColor,
      buttonsColor,
      shuffleColors,
      buttonsContainer
    );
  } else {
    return;
  }
});

// Punkte
Points(buttonsContainer, searchColor, points, rounds, startButton)