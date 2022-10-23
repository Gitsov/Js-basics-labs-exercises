function fruitmarket(input) {
    let strawberryPrice=Number(input[0]);
    let banannaCount=Number(input[1]);
    let orangeCount=Number(input[2]);
    let raspberryCount=Number(input[3]);
    let strawberryCount=Number(input[4]);
    let raspberryPrice=strawberryPrice*0.5;
    let orangePrice=raspberryPrice-(raspberryPrice*0.4);
    let bananaPrice=raspberryPrice-(raspberryPrice*0.8);
    let strawberryTotal=strawberryPrice*strawberryCount;
    let raspberryTotal=raspberryCount*raspberryPrice;
    let bananaTotal=bananaPrice*banannaCount;
    let OrangeTotal=orangeCount*orangePrice;
    let total=strawberryTotal+raspberryTotal+bananaTotal+OrangeTotal;
    console.log(`${total.toFixed(2)}`)
    
}
fruitmarket(["63.5", "3.57", "6.35", "8.15", "2.5"])