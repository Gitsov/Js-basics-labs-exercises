function moving(input) {
  let boxSize = 1 * 1 * 1;
 
  let widght = Number(input[0]);
  let lenght = Number(input[1]);
  let height = Number(input[2]);
 
  let freeSpace = widght * lenght * height;
 
  let index = 3;
  let command = input[index];
 
  let boxesMoved = Number(command);
 
  while (command !== "Done") {
    let boxesMoved = Number(command);
    freeSpace -= boxesMoved;
    if (freeSpace < 0) {
      console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
      break;
    }
    index++;
    command = input[index];
  }
  if (command === "Done") {
    console.log(`${Math.abs(freeSpace)} Cubic meters left.`);
  }
}