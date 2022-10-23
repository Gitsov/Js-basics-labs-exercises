function change(input)
{
    let bitcoinCount=Number(input[0]);
    let chineeseUan=Number(input[1]);
    let comission=Number(input[2]);
    let bitcoinTotal=bitcoinCount*1168;
    let chinaTotal=chineeseUan*0.15;
    let dollaBill=chinaTotal*1.76;
    let totalKinti=bitcoinTotal+dollaBill;
    let totalEvro=totalKinti/1.95;
    let comissionTOtal=totalEvro*(comission/100);
    let finalSuma=totalEvro-comissionTOtal;
    console.log(`${finalSuma.toFixed(2)}`)
}
change(["20", "5678", "2.4"])