function deposit(input)
{
    let depsum=Number(input[0]);
    let months=Number(input[1]);
    let percent=Number(input[2]);
    let sum=depsum + months*((depsum*(percent/100))/12);
    console.log(sum)
}
deposit(["200 ", "3 ","5.7 "])