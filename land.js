function land(input)
{
    let squareArea = input[0]
    let price = squareArea * 7.61
    let discount = price * 0.18 
    let finalprice = price - discount
    console.log(`The final price is: ${finalprice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
land(["550"])