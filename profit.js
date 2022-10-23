function profit(input)
{
    let name = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let price = Number(input[3]);
    let percent = Number(input[4]);
    let income = tickets*price;
    let totalIncome = income * days
    let percentIncome = totalIncome*(percent/100)
    let finalIncome = totalIncome - percentIncome
    console.log(`The profit from the movie ${name} is ${finalIncome.toFixed(2)} lv.`);
}
profit(["The Programmer","20","500","7.50", "7"])