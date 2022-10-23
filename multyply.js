function multiplyTable(input) {
    let number = Number(input[0]);
    let last = number % 10;
    let removed = (number - last) / 10;
    let middle = removed % 10;
    let first = (removed- middle) / 10;
  
    for (let i = 1; i <= last; i++) {
      for (let j = 1; j <= middle; j++) {
        for (let k = 1; k <= first; k++) {
          console.log(`${i} * ${j} * ${k} = ${i * j * k};`);
        }
      }
    }
  }
  
  multiplyTable(["324"]);