function ote(input) {

    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let minEarly = 0;
    let minLate = 0;

    let timeOfArrival = (arrivalHour * 60) + arrivalMinute;
    let timeOfExam = (examHour * 60) + examMinute;

    if (timeOfArrival > timeOfExam) {
        console.log(`Late`);
        minLate = finalArrival - finalExam;
        if (minLate < 60) {
            console.log(`${minLate} minutes after the start`);
        } else {
            let hours = Math.floor(minLate / 60);
            let minutes = minLate % 60;
            let formMinutes = String(minutes).padStart(2, "0");
            console.log(`${hours}:${formMinutes} hours after the start`);

        }


    } else if (timeOfArrival < timeOfExam && timeOfExam - timeOfArrival > 30) {
        console.log("Early");
        minEarly = timeOfExam - timeOfArrival;
        if (minEarly < 60) {
            console.log(`${minEarly} minutes before the start`);

        } else {
            let hours = Math.floor(minEarly / 60);
            let minutes = minEarly % 60;
            let formMinutes = String(minutes).padStart(2, "0");
            console.log(`${hours}:${formMinutes} hours before the start`);

        }
    } else if (timeOfArrival <= timeOfExam) {
        console.log(`On Time`);
        minEarly = timeOfExam - timeOfArrival;
        if (minEarly <= 30) {
            console.log(`${minEarly} minutes before the start`);
        }
    }
}
ote(["11", "30", "10", "55"])