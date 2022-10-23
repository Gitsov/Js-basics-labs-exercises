function birthday(input)
{
    let naemZala=Number(input[0]);
    let cakePrice=naemZala*0.2;
    let drinksPrice=cakePrice - cakePrice*0.45;
    let animatorPrice=naemZala/3;
    let total=naemZala+cakePrice+drinksPrice+animatorPrice;
    console.log(`${total}`)

}
birthday(["2250"])