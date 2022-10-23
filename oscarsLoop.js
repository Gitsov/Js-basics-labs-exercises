function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let academyPoints = Number(input[index]);
    index++;
   
    let amountOfJudges = Number(input[index]);
    index++;
   
    for (let i = 0; i < amountOfJudges; i++) {
      let judgeName = input[index];
      index++;
      let pointsGiven = Number(input[index]);
      index++;
   
      let pointsAfter = (judgeName.length * pointsGiven) / 2;
      academyPoints += pointsAfter;
   
      if (academyPoints > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
        break;
      }
    }
    if (academyPoints < 1250.5) {
      let diff = Math.abs(academyPoints - 1250.5);
      console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }
  }

oscars(["Zahari Baharov",

"205",

"4",

"Johnny Depp",

"45",

"Will Smith",

"29",

"Jet Lee",

"10",

"Matthew Mcconaughey",

"39"])