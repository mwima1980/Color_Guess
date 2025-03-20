"using strict";

// Import
import {
  CheckColors,
  prepareGame,
  searchedColor,
  hexCode,
  buttonsContainer,
  startGame,
  ColorBoxEvent
} from "./src/libs/tools.js";

// Game Start
startGame.addEventListener("click", (event) => {
  prepareGame();
  startGame.disabled = true;
  buttonsContainer.addEventListener("click", ColorBoxEvent);
});


