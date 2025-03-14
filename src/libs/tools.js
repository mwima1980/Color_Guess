"using strict";

export function GenerateRandomColor() {
  let newHexCode = "#";
  const chars = "0123456789ABCDEF";
  for(let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    newHexCode += chars[randomIndex]
  }
  return newHexCode;
}

export function AddRandomColor(amount) {
  let roundColors = [];
  for(let i = 0; i < amount; i++) {
    roundColors.push(GenerateRandomColor());
  }
  
  return roundColors;
}

export function Shuffle(colorList) {
  for(let i = colorList.length - 1; i > 0; i--) {
    const rndIndex = Math.floor(Math.random() * (i + 1));
    [colorList[i], colorList[rndIndex]] = [colorList[rndIndex],colorList[i]]
  }
  return colorList;

}