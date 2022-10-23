function luggage(input) {
    let priceLuggage=Number(input[0]);
    let luggageWeight=Number(input[1]);
    let daysLeft=Number(input[2]);
    let luggageCount=Number(input[3]);
    let luggagePrice=0;
    let daystoGo=0;
    if (luggageWeight<=10){
        luggagePrice=priceLuggage*0.2
    }
    else if(luggageWeight>20){
        luggagePrice=priceLuggage
    }
    else if(luggageWeight<=20){
        luggagePrice=priceLuggage*0.5
    }
    if (daysLeft>30){
        daystoGo=luggagePrice+(luggagePrice*0.1)
    }
    else if(daysLeft<7){
        daystoGo=luggagePrice+(luggagePrice*0.4)
    }
    else if(daysLeft<30){
        daystoGo=luggagePrice+(luggagePrice*0.15)
    }
        let total=daystoGo*luggageCount;
        console.log(`The total price of bags is: ${total.toFixed(2)} lv.`)
}
luggage(["63.80","23","3","1"])