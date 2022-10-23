function parts(input)
{
    let budget = Number(input[0]);
    let cards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let cardsPrice=cards*250
    let processorsPrice=(cardsPrice*0.35)*processors
    let ramPrice=(cardsPrice*0.10)*ram
    let totalPrice= cardsPrice + processorsPrice + ramPrice
    if (cards>processors){
        totalPrice=totalPrice-(totalPrice*0.15)
       } 
       diff=Math.abs(budget-totalPrice)
       if (totalPrice<=budget){
        console.log(`You have ${(diff).toFixed(2)} leva left!`)
       }
       else {
        console.log(`Not enough money! You need ${(diff).toFixed(2)} leva more!`)
       }
    }

    parts(["920.45",

    "3",
    
    "1",
    
    "1"])