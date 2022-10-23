function vacation(input)
{
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let priceperNight = Number(input[2]);
    let otherExp = Number(input[3]);
    let nightExp=nights*priceperNight
    if (nights > 7)
    {
       let discountedNights=nightExp - (nightExp*0.05)
       let totalExp=discountedNights + (budget*(otherExp/100))
       let diff=Math.abs(budget - totalExp)
       if (totalExp<=budget)
       {
           console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`)
       } else {
           console.log(`${diff.toFixed(2)} leva needed.`)
       }
    } 
    else {let totalExp=nightExp + (budget*(otherExp/100))
    let diff=Math.abs(budget - totalExp)
    if (totalExp<=budget)
    {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`)
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`)
    }}
    
  
}
vacation(["800.50", "8", "100" ,"2"])
