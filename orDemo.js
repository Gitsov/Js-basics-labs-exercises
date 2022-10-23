function ticket(input){
    
    let dayWeek =input[0];
    if ( dayWeek == "Monday" || dayWeek == "Tuesday" || dayWeek == "Friday")
    {
        console.log("12");
    }
    else if ( dayWeek == "Wednesday" || dayWeek == "Thursday")
    {
        console.log("14");
    }
    else if ( dayWeek == "Saturday" || dayWeek == "Sunday")
    {
        console.log("16");
    }
}
ticket(["Saturday"])