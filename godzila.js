function godzila(input)
{
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let statDress = Number(input[2]);

    let decor=budget*0.10
    let statistDressTotal=statists*statDress
   if (statists>=150){
    statistDressTotal=statistDressTotal- (statistDressTotal)*0.10
   }
   totalbudget= decor + statistDressTotal;
   diff=Math.abs(budget-totalbudget);
   if (totalbudget>budget){
    console.log("Not enough money!")
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
   }else {
    console.log("Action!")
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
   }

}

godzila(["9587.88",

"222",

"55.68"])