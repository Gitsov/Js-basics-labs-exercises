function demo(input)
{
    let productName = input[0];
    let cityName = input[1];
    let quantity = Number(input[2]);
    let priceTotal = 0;
    if (cityName == "Sofia"){
        if(productName == "coffee")
        {
            priceTotal = 0.5 * quantity;
        }
        else if(productName == "water")
        { 
            priceTotal = 0.8 * quantity;
        }
        else if(productName == "beer")
        { 
            priceTotal = 1.2 * quantity;
        }
        else if(productName == "sweets")
        {
            priceTotal = 1.45 * quantity;
        }
        else if(productName == "peanuts")
        {
            priceTotal = 1.60 * quantity;
        }

    }
    else if (cityName == "Plovdiv")
    {
        if(productName == "coffee")
        {
            priceTotal = 0.4 * quantity;
        }
        else if(productName == "water")
        { 
            priceTotal = 0.7 * quantity;
        }
        else if(productName == "beer")
        { 
            priceTotal = 1.15 * quantity;
        }
        else if(productName == "sweets")
        {
            priceTotal = 1.30 * quantity;
        }
        else if(productName == "peanuts")
        {
            priceTotal = 1.50 * quantity;
        }
    }
    else if (cityName == "Varna")
    {
        if(productName == "coffee")
        {
            priceTotal = 0.45*quantity;
        }
        else if(productName == "water")
        { 
            priceTotal = 0.7*quantity;
        }
        else if(productName == "beer")
        { 
            priceTotal = 1.1*quantity;
        }
        else if(productName == "sweets")
        {
            priceTotal = 1.35*quantity;
        }
        else if(productName == "peanuts")
        {
            priceTotal = 1.55*quantity;
        }
    }
    console.log(`total price = ${priceTotal.toFixed(2)}`);
}
demo(["peanuts", "Varna", "2"])