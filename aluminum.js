function aluminum(input) {
    let count = Number(input[0]);
    let type = input[1];
    let delivery = input[2];
    let price = 0
    switch (type) {
        case "90X130":
            price = count * 110
            if (delivery == "With delivery") {
                if (count <= 10) {
                    price = price + 60
                    console.log(`Invalid order`);
                } else if (count > 10 && count <= 30) {
                    price = price + 60
                    console.log(`${(price).toFixed(2)} BGN`);
                } else if (count > 30 && count <= 60) {
                    price = price * 0.95;
                    price = price + 60
                    console.log(`${(price).toFixed(2)} BGN`);
                } else if (count > 60) {
                    price = price * 0.92;
                    price = price + 60
                    if (count > 99) {
                        price = price * 0.96
                        console.log(`${(price).toFixed(2)} BGN`);
                    } else {
                        console.log(`${(price).toFixed(2)} BGN`);
                    }
                }
            } else if (delivery == "Without delivery") {
                if (count <= 10) {
                    price = price
                    console.log(`Invalid order`);
                } else if (count > 10 && count <= 30) {
                    price = price 
                    console.log(`${(price).toFixed(2)} BGN`);
                } else if (count > 30 && count <= 60) {
                    price = price * 0.95;
                    price = price
                    console.log(`${(price).toFixed(2)} BGN`);
                } else if (count > 60) {
                    price = price * 0.92;
                    price = price 
                    if (count > 99) {
                        price = price * 0.96
                        console.log(`${(price).toFixed(2)} BGN`);
                    } else {
                        console.log(`${(price).toFixed(2)} BGN`);
                    }
                }
            }
            break;
        case "100X150":
            price=count*140
            if (delivery == "With delivery") {
                if (count <= 10) {
                    console.log(`Invalid order`);
                } else if (count > 10 && count <= 40) {
                    price = price + 60
                    console.log(`${(price).toFixed(2)} BGN`);
                } else if (count > 40 && count <= 80) {
                    price = price * 0.94;
                    price = price + 60
                    console.log(`${(price).toFixed(2)} BGN`);
                } else if (count > 80) {
                    price = price * 0.90;
                    price = price + 60

                    if (count > 99) {
                        price = price * 0.96 ;
                        console.log(`${(price).toFixed(2)} BGN`);
                    } else {
                        console.log(`${(price).toFixed(2)} BGN`);
                    }
                }
            } else if (delivery == "Without delivery") {
                if (count <= 10) {
                    console.log(`Invalid order`);
                } else if (count > 10 && count <= 40) {
                    console.log(`${(price).toFixed(2)} BGN`);
                } else if (count > 40 && count <= 80) {
                    price = price * 0.94;
                    console.log(`${(price).toFixed(2)} BGN`);
                } else if (count > 80) {
                    price = price * 0.90;
                    if (count > 99) {
                        price = price * 0.96
                        console.log(`${(price).toFixed(2)} BGN`);
                    } else {
                        console.log(`${(price).toFixed(2)} BGN`);
                    }
                }
            }
            break;
        case "130X180":
            price = count * 190
            if (delivery == "With delivery") {
                if (count <= 10) {
                    price = price + 60
                    console.log(`Invalid order`);
                } else if (count > 10 && count <= 20) {
                    price = price + 60
                    console.log(`${(price).toFixed(2)} BGN`);
                } else if (count > 20 && count <= 50) {
                    price = price * 0.93;
                    price = price + 60
                    console.log(`${(price).toFixed(2)} BGN`);
                } else if (count > 50) {
                    price = price * 0.88;
                    price = price + 60
                    if (count > 99) {
                        price = price * 0.96;
                        console.log(`${(price).toFixed(2)} BGN`);
                    } else {
                        console.log(`${(price).toFixed(2)} BGN`);
                    }
                }
            } else if (delivery == "Without delivery") {
                if (count <= 10) {
                    console.log(`Invalid order`);
                } else if (count > 10 && count <= 20) {
                    console.log(`${(price).toFixed(2)} BGN`);
                } else if (count > 20 && count <= 50) {
                    price = price * 0.95;
                    console.log(`${(price).toFixed(2)} BGN`);
                } else if (count > 50 <= 99) {
                    price = price * 0.92;

                    if (count > 99) {
                        price = price * 0.96
                        console.log(`${(price).toFixed(2)} BGN`);
                    } else {
                        console.log(`${(price).toFixed(2)} BGN`);
                    }
                }
            }
            break;
        case "200X300":
            price = count * 250
            if (delivery == "With delivery") {
                if (count <= 10) {
                    console.log(`Invalid order`);
                } else if (count > 10 && count <= 25) {
                    price = price + 60
                    console.log(`${(price).toFixed(2)} BGN`);
                } else if (count > 25 && count <= 50) {
                    price = price * 0.91;
                    price = price + 60
                    console.log(`${(price).toFixed(2)} BGN`);
                } else if (count > 50) {
                    price = price * 0.86;
                    price = price + 60
                    if (count > 99) {
                        price = price * 0.96 ;
                        console.log(`${(price).toFixed(2)} BGN`);
                    } else {
                        console.log(`${(price).toFixed(2)} BGN`);
                    }
                }
            } else if (delivery == "Without delivery") {
                if (count <= 10) {
                    console.log(`Invalid order`);
                } else if (count > 10 && count <= 25) {
                    console.log(`${(price).toFixed(2)} BGN`);
                } else if (count > 25 && count <= 50) {
                    price = price * 0.91;
                    console.log(`${(price).toFixed(2)} BGN`);
                } else if (count > 50) {
                    price = price * 0.86;
                    console.log(`${(price).toFixed(2)} BGN`);
                    if (count > 99) {
                        price = price * 0.96
                        console.log(`${(price).toFixed(2)} BGN`);
                    } else {
                        console.log(`${(price).toFixed(2)} BGN`);
                    }
                }
            }
            break;

    }
}
aluminum(["105",
    "100X150",
    "With delivery"
    ])