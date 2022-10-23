function aquarium(input)
{
    let lenght = Number(input[0]);
    let hight = Number(input[1]);
    let width = Number(input[2]);
    let percent = Number(input[3]);
    let volume = lenght*hight*width
    let volumeLitre = volume*0.001
    let litreNeeded= volumeLitre*(1-(percent/100))
    
    console.log(litreNeeded);
}
aquarium(["85 ", "75 ", "47 ", "17 "])