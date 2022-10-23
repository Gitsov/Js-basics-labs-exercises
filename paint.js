function paint(input)
{
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let razred = Number(input[2]);
    let hours = Number(input[3]);
    let nylonprice = (nylon+2)*1.50;
    let paintprice = (paint+(paint*(10/100)))*14.50;
    let razredprice = razred*5;
    let torbichki = 0.40;
    let totalprice= nylonprice + paintprice + razredprice + torbichki
    let finalprice= ((totalprice *(30/100))*hours)
    let endprice = totalprice + finalprice
    console.log(endprice);
}
paint(["10","11", "4", "8"])