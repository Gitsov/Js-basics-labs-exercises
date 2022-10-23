function oscars(input)
{
    let budget = Number(input[0]);
    let statuePrice= budget - (budget*0.3);
    let cateringPrice= statuePrice - (statuePrice*0.15);
    let soundPrice=cateringPrice*0.5;
    totalPrice=budget+statuePrice+cateringPrice+soundPrice;
    console.log(`${totalPrice.toFixed(2)}`);
}

oscars([5555])