function catwalk(input){
    let minuteWalk=Number(input[0]);
    let dailyWalks=Number(input[1]);
    let catCaloriess=Number(input[2]);
    let totalWalk=minuteWalk*dailyWalks;
    let calsBurned=totalWalk*5;
    if (calsBurned>=(catCaloriess*0.5))
    {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${calsBurned}`)
    }
    else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${calsBurned}`)
    }
}
catwalk(["30","3","600"])