"using strict";

import {GenerateRandomColor, AddRandomColor, Shuffle} from "./src/libs/tools.js";

GenerateRandomColor();

let mixedArray = Shuffle(AddRandomColor(5));

console.log(mixedArray);




