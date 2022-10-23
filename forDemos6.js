function demo(input) {
    //let peopleCount = Number(input[0]);
    let sum=0;
    let musalaClimbers=0;
    let montblancClimbers=0;
    let kilimandjaroClimbers=0;
    let k2Climbers=0;
    let everestClimbers=0
    for (let index = 1; index < input.length; index++) {
        let currentNumber = Number(input[index]);
        sum += currentNumber;
        if (currentNumber <= 5) {
            musalaClimbers+=currentNumber;
        } else if (currentNumber<=12) {     
             montblancClimbers+=currentNumber;
        } else if (currentNumber<=25) {
             kilimandjaroClimbers+=currentNumber;
        } else if (currentNumber<=40) {
             k2Climbers+=currentNumber;
        } else if (currentNumber >= 41) {
           everestClimbers+=currentNumber;
        }
    }
   console.log(`${((musalaClimbers/sum)*100).toFixed(2)}%`);
   console.log(`${((montblancClimbers/sum)*100).toFixed(2)}%`);
   console.log(`${((kilimandjaroClimbers/sum)*100).toFixed(2)}%`);
   console.log(`${((k2Climbers/sum)*100).toFixed(2)}%`);
   console.log(`${((everestClimbers/sum)*100).toFixed(2)}%`);
   
}
demo (["5",

"25",

"41",

"31",

"250",

"6"])