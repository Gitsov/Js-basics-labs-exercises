function fishingboat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermanCount = Number(input[2]);
    let price = 0;
    let diff = 0;
    if (season == "Spring") {
        if ((fishermanCount <= 6) && (fishermanCount % 2 == 0)) {
            price = 3000 - (3000 * 0.15);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if (fishermanCount <= 6 && fishermanCount % 2 != 0) {
            price = 3000 - (3000 * 0.10);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if ((7 < fishermanCount) && (fishermanCount <= 11) && (fishermanCount % 2 == 0)) {
            price = 3000 - (3000 * 0.20);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if ((7 < fishermanCount) && (fishermanCount <= 11) && (fishermanCount % 2 != 0)) {
            price = 3000 - (3000 * 0.15);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if ((fishermanCount > 12) && (fishermanCount % 2 == 0)) {
            price = 3000 - (3000 * 0.30);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if ((fishermanCount > 12) && (fishermanCount % 2 != 0)) {
            price = 3000 - (3000 * 0.25);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        }
    }
    if (season == "Summer" || season == "Autumn") {
        if ((fishermanCount <= 6) && (fishermanCount % 2 == 0) && (season == "Summer")) {
            price = 4200 - (4200 * 0.15);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if ((fishermanCount <= 6) && (fishermanCount % 2 == 0) && (season == "Autumn")) {
            price = 4200 - (4200 * 0.10);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if ((fishermanCount <= 6) && (fishermanCount % 2 != 0)) {
            price = 4200 - (4200 * 0.10);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if ((7 < fishermanCount) && (fishermanCount <= 11) && (fishermanCount % 2 == 0) && (season == "Summer")) {
            price = 4200 - (4200 * 0.20);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if ((7 < fishermanCount) && (fishermanCount <= 11) && (fishermanCount % 2 == 0) && (season == "Autumn")) {
            price = 4200 - (4200 * 0.15);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if ((7 < fishermanCount) && (fishermanCount <= 11) && (fishermanCount % 2 != 0)) {
            price = 4200 - (4200 * 0.15);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if ((fishermanCount > 12) && (fishermanCount % 2 == 0) && (season == "Summer")) {
            price = 4200 - (4200 * 0.30);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if ((fishermanCount > 12) && (fishermanCount % 2 == 0) && (season == "Autumn")) {
            price = 4200 - (4200 * 0.25);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if ((fishermanCount > 12) && (fishermanCount % 2 != 0)) {
            price = 4200 - (4200 * 0.25);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        }
    }
    if (season == "Winter") {
        if ((fishermanCount <= 6) && (fishermanCount % 2 == 0)) {
            price = 2600 - (2600 * 0.15);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if (fishermanCount <= 6 && fishermanCount % 2 != 0) {
            price = 2600 - (2600 * 0.10);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if ((fishermanCount > 7) && (fishermanCount <= 11) && (fishermanCount % 2 == 0)) {
            price = 2600 - (2600 * 0.20);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if ((fishermanCount > 7) && (fishermanCount <= 11) && (fishermanCount % 2 != 0)) {
            price = 2600 - (2600 * 0.15);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if ((fishermanCount > 12) && (fishermanCount % 2 == 0)) {
            price = 2600 - (2600 * 0.30);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        } else if ((fishermanCount > 12) && (fishermanCount % 2 !== 0)) {
            price = 2600 - (2600 * 0.25);
            diff = Math.abs(budget - price);
            if (budget >= price) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
            }
        }
    }
}
fishingboat(["2000", "Winter", "13"])