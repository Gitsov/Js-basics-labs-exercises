function obedna(input)
{
    let serialName = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let timeforLunch = breakTime/8
    let timeforChill = breakTime/4
    let timeLeft=breakTime - timeforChill - timeforLunch
    let diff=Math.abs(timeLeft - episodeTime)
    if (timeLeft>=episodeTime){
    console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(diff)} minutes free time.`)}
    else{
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(diff)} more minutes.`)
    }
}
obedna(["Game of Thrones", "60", "96"])