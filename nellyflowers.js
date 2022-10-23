function flowers(input) {
    let flowerName = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    let total = 0;
    let diff = 0
    if (flowerName == "Roses") {
        if (flowerCount > 80) {
            price = flowerCount * 5;
            total = price - (price * 0.1);
            diff = Math.abs(budget - total);
            if (budget >= total) {
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerName} and ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
            }
        } else {
            price = flowerCount * 5;
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerName} and ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
            }
        }
    } else if (flowerName == "Dahlias") {
        if (flowerCount > 90) {
            price = flowerCount * 3.80;
            total = price - (price * 0.15);
            diff = Math.abs(budget - total);
            if (budget >= total) {
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerName} and ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
            }
        } else {
            price = flowerCount * 3.80;
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerName} and ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
            }
        }
    } else if (flowerName == "Tulips") {
        if (flowerCount >= 80) {
            price = flowerCount * 2.80;
            total = price - (price * 0.15);
            diff = Math.abs(budget - total);
            if (budget >= total) {
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerName} and ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
            }
        } else {
            price = flowerCount * 5;
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerName} and ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
            }
        }
    } else if (flowerName == "Narcissus") {
        if (flowerCount < 120) {
            price = flowerCount * 3.00;
            total = price + (price * 0.15);
            diff = Math.abs(budget - total);
            if (budget >= total) {
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerName} and ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
            }
        } else {
            price = flowerCount * 3.00;
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerName} and ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
            }
        }
    } else if (flowerName == "Gladiolus") {
        if (flowerCount < 80) {
            price = flowerCount * 2.50;
            total = price + (price * 0.2);
            diff = Math.abs(budget - total);
            if (budget >= total) {
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerName} and ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
            }
        } else {
            price = flowerCount * 2.50;
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerName} and ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
            }
        }
    }
}
flowers(["Gladiolus", "64", "160"])