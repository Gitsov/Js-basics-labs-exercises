function euro2016(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let personsCount = Number(input[2]);
    let ticketPrice = 0;
    let transportPrice = 0;
    let diff = 0;
    switch (category) {
        case "Vip":
            ticketPrice = personsCount * 499.99;
            if (personsCount > 0 && personsCount <= 4) {
                transportPrice = budget * 0.75
                diff = Math.abs(budget - transportPrice);
                if (diff > ticketPrice) {
                    console.log(`Yes! You have ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva left.`);

                } else {
                    console.log(`Not enough money! You need ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva.`);
                }
            } else if (personsCount >= 5 && personsCount <= 9) {
                transportPrice = budget * 0.6;
                diff = Math.abs(budget - transportPrice)
                if (diff > ticketPrice) {
                    console.log(`Yes! You have ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva left.`);

                } else {
                    console.log(`Not enough money! You need ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva.`);
                }
            } else if (personsCount >= 10 && personsCount <= 24) {
                transportPrice = budget * 0.5;
                diff = Math.abs(budget - transportPrice)
                if (diff > ticketPrice) {
                    console.log(`Yes! You have ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva left.`);

                } else {
                    console.log(`Not enough money! You need ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva.`);
                }
            } else if (personsCount >= 25 && personsCount <= 49) {
                transportPrice = budget * 0.4;
                diff = Math.abs(budget - transportPrice)
                if (diff > ticketPrice) {
                    console.log(`Yes! You have ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva left.`);

                } else {
                    console.log(`Not enough money! You need ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva.`);
                }
            } else if (personsCount >= 50) {
                transportPrice = budget * 0.25;
                diff = Math.abs(budget - transportPrice)
                if (diff > ticketPrice) {
                    console.log(`Yes! You have ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva left.`);

                } else {
                    console.log(`Not enough money! You need ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva.`);
                }
            }
            break;
        case "Normal":
            ticketPrice = personsCount * 249.99;
            if (personsCount > 0 && personsCount <= 4) {
                transportPrice = budget * 0.75
                diff = Math.abs(budget - transportPrice);
                if (diff > ticketPrice) {
                    console.log(`Yes! You have ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva left.`);

                } else {
                    console.log(`Not enough money! You need ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva.`);
                }
            } else if (personsCount >= 5 && personsCount <= 9) {
                transportPrice = budget * 0.6;
                diff = Math.abs(budget - transportPrice)
                if (diff > ticketPrice) {
                    console.log(`Yes! You have ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva left.`);

                } else {
                    console.log(`Not enough money! You need ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva.`);
                }
            } else if (personsCount >= 10 && personsCount <= 24) {
                transportPrice = budget * 0.5;
                diff = Math.abs(budget - transportPrice)
                if (diff > ticketPrice) {
                    console.log(`Yes! You have ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva left.`);

                } else {
                    console.log(`Not enough money! You need ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva.`);
                }
            } else if (personsCount >= 25 && personsCount <= 49) {
                transportPrice = budget * 0.4;
                diff = Math.abs(budget - transportPrice)
                if (diff > ticketPrice) {
                    console.log(`Yes! You have ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva left.`);

                } else {
                    console.log(`Not enough money! You need ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva.`);
                }
            } else if (personsCount >= 50) {
                transportPrice = budget * 0.25;
                diff = Math.abs(budget - transportPrice)
                if (diff > ticketPrice) {
                    console.log(`Yes! You have ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva left.`);

                } else {
                    console.log(`Not enough money! You need ${(Math.abs(ticketPrice-diff)).toFixed(2)} leva.`);
                }
            }
            break;
    }
}
euro2016(["30000",
    "Vip",
    "49"
])