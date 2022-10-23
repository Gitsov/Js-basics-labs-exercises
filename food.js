function food(input)
{
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);
    let dostavka = 2.50
    let cenaHrana = (chickenMenu*10.35) + (fishMenu*12.40) + (veganMenu*8.15) 
    let cenaDesert = cenaHrana*(20/100)
    let finalPrice= cenaDesert + cenaHrana + dostavka
    
    console.log(finalPrice);
}
food(["2","4", "3"])