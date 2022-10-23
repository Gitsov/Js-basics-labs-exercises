function hotel(input) {
    let month = input[0];
    let nights = Number(input[1]);
    apartTotal = 0
    studioTotal = 0
    switch (month) {
        case "May":
        case "October":
            apartTotal = nights * 65;
            studioTotal = nights * 50;
            if (nights <= 7) {
                console.log(`Apartment: ${apartTotal.toFixed(2)} lv.`);
                console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
            } else if (nights > 7 && nights <= 14) {
                studioTotal = studioTotal * 0.95;
                console.log(`Apartment: ${apartTotal.toFixed(2)} lv.`);
                console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
            } else if (nights > 14) {
                studioTotal = studioTotal * 0.70;
                apartTotal = apartTotal * 0.90;
                console.log(`Apartment: ${apartTotal.toFixed(2)} lv.`);
                console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
            }
            break;
        case "June":
        case "September":
            apartTotal = nights * 68.70;
            studioTotal = nights * 75.20;
            if (nights <= 7) {
                console.log(`Apartment: ${apartTotal.toFixed(2)} lv.`);
                console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
            } else if (nights <= 14) {
                console.log(`Apartment: ${apartTotal.toFixed(2)} lv.`);
                console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
            } else if (nights > 14) {
                studioTotal = studioTotal * 0.80;
                apartTotal = apartTotal * 0.90;
                console.log(`Apartment: ${apartTotal.toFixed(2)} lv.`);
                console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
            }
            break;
        case "July":
        case "August":
            apartTotal = nights * 77;
            studioTotal = nights * 76;
            if (nights <= 7) {
                console.log(`Apartment: ${apartTotal.toFixed(2)} lv.`);
                console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
            } else if (nights <= 14) {
                console.log(`Apartment: ${apartTotal.toFixed(2)} lv.`);
                console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
            } else if (nights > 14) {
                apartTotal = apartTotal * 0.90;
                console.log(`Apartment: ${apartTotal.toFixed(2)} lv.`);
                console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
            }
            break;


    }
}
hotel(["August", "7"])