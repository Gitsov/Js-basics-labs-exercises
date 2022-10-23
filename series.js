function series(input)
{
    let seriesName = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let lenght = Number(input[3]);
    let adTime = lenght*0.2;
    let lenghtwithAd = lenght + adTime;
    let aditionalTime = seasons*10;
    let totaltime=lenghtwithAd*episodes*seasons+aditionalTime;
    console.log(`Total time needed to watch the ${seriesName} series is ${Math.ceil(totaltime)} minutes.`);
}
series(["Lucifer","3","18","55"])