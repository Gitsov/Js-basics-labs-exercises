function agency(input) {
    let avioCompany=input[0];
    let adultTicket=Number(input[1]);
    let juniorTicket=Number(input[2]);
    let adultTicNetPrice=Number(input[3]);
    let serviceTax=Number(input[4]);
    let juniorTicketNetPrice=adultTicNetPrice-(adultTicNetPrice*0.7);
    let juniorWithTax=juniorTicketNetPrice+serviceTax;
    let adultWithTax=adultTicNetPrice+serviceTax;
    let totalTicketWin=(juniorWithTax*juniorTicket)+(adultTicket*adultWithTax);
    let profit=totalTicketWin*0.2;
    console.log(`The profit of your agency from ${avioCompany} tickets is ${profit.toFixed(2)} lv.`)
    
}
agency(["WizzAir", "60", "23", "158.96", "39.12"])