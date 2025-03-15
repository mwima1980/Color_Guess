"using strict"

export function RandomColor() {
  let hexCode = "#";
  const chars ="0123456789ABCDEF";
  for(let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * 16);
    hexCode += chars[index];
  }  

  return hexCode;
}

export function AddRandomColors(amount) {
  const addColorHex = [];
  for(let i = 0; i < amount; i++) {
    addColorHex.push(RandomColor());
  }

  return addColorHex;
}

export function Shuffle(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const index = Math.floor(Math.random() * (i + 1));
    [array[i], array[index]] = [array[index], array[i]];
  }

  return array;
}

export function CheckColors(hex1, hex2) {
  if(hex1 === hex2) {
    return true;
  }else {
    return false;
  }
}