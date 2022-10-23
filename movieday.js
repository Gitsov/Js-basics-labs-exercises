function movieday(input)
{
    let time = Number(input[0]);
    let scene = Number(input[1]);
    let timeforScene = Number(input[2]);
    let podgotovka = time *0.15;
    let sceneFilming = scene*timeforScene;
    let timeNeeded = podgotovka+sceneFilming;
    let diff=Math.abs(time-timeNeeded)
    if (time >= timeNeeded) {
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(diff)} minutes left!`)
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.ceil(diff)} minutes.`)
    }
}
movieday(["60","15","3"])