function basket(input)
{
    let basketTax = Number(input[0]);
    let shoe = basketTax - (basketTax*(40/100))
    let jersey = shoe - (shoe*(20/100))
    let ball = 0.25 * jersey
    let accesoer = 0.20 * ball
    let total = basketTax + shoe + jersey + ball + accesoer
    console.log(total);
}
basket(["365"])