function poolday(input)
{
    let people = Number(input[0]);
    let tax = Number(input[1]);
    let bedPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let taxAll=people*tax
    let bedPriceTotal=(Math.ceil(people*0.75))*bedPrice
    let umbPriceTotal=(Math.ceil(people*0.5))*umbrellaPrice
    let totalPrice=taxAll+bedPriceTotal+umbPriceTotal
    console.log(`${totalPrice.toFixed(2)} lv.`)
}
poolday(["100", "8", "6", "4"])