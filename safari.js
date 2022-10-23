function safari(input)
{
let budget=Number(input[0]);
let fuelLiters=Number(input[1]);
let dayWeek=input[2];
let fuelPrice=fuelLiters*2.10;
let eksPrice=100;
let total=fuelPrice+eksPrice;
if (dayWeek === "saturday")
{
     total=total-(total*0.1)
}
else if (dayWeek === "sunday")
{
     total=total-(total*0.2)
}
let diff=Math.abs(budget-total)
if (total<=budget){
    console.log(`Safari time! Money left: ${diff.toFixed(2)} lv. `)
}
else {
    console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`)
}
}
safari(["120","30", "saturday"])