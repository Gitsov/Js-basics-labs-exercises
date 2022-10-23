function toyShop(input)
{
    let ecsPrice = Number(input[0]);
    let puzzCount = Number(input[1]);
    let speakDoll = Number(input[2]);
    let teddyBear = Number(input[3]);
    let minnion= Number(input[4]);
    let trucks = Number(input[5]);

    let toycount = puzzCount + speakDoll + teddyBear + minnion + trucks;
    let price = (puzzCount*2.60) + (speakDoll*3.00) + (teddyBear*4.10) + (minnion*8.20) + (trucks*2);
   
    if (toycount>=50){
        price = price*0.75
    }
    price = price*0.90
    let diff=Math.abs(price-ecsPrice);
    if (price>=ecsPrice ){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)}
        else{
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
        };
    }



toyShop(["1", "1", "1", "1", "1", "1"])