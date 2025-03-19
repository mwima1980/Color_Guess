"using strict";

// Import
import {
  CheckColors,
  SetGame,
  prepareGame,
  searchedColor,
  hexCode
} from "./src/libs/tools.js";

// Queries - Selector
const buttonsContainer = document.querySelector(".buttons-container");
const startGame = document.querySelector(".start");
const spanRounds = document.querySelector("#rounds");
const spanPoints = document.querySelector("#points");

// Variable
let rounds = 0;
let points = 0;

// Game Start
startGame.addEventListener("click", (event) => {
  prepareGame();
  spanRounds.innerText = 1;
  spanPoints.rounds = 0;
  buttonsContainer.addEventListener("click", ColorBoxEvent)
});

// Color Box Event
function ColorBoxEvent(event) {
  if (event.target.className !== "buttons") {
    return;
  }
  const { hex } = event.target.dataset;
  const result = CheckColors(searchedColor, hex);
  if (!result) {
    console.log("Leider falsch");
    SetGame("Start Game", "#FFFFFF")
    buttonsContainer.removeEventListener("click", ColorBoxEvent);
    rounds = 0;
    points = 0;
    spanRounds.innerText = rounds;
    spanPoints.innerText = points;
    hexCode.innerText = "Start  Game";
    return;
  }else {
    rounds += 1;
    points += 5;
    spanRounds.innerText = rounds;
    spanPoints.innerText = points;
    prepareGame();
    console.log(result);
  }

}