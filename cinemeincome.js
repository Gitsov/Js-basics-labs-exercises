function cinemaincome(input){
    let typeMovie=input[0];
    let rows=Number(input[1]);
    let columns=Number(input[2]);
    let total=0;
    if (typeMovie=="Premiere"){
        total=(rows*columns)*12;
        console.log(`${total.toFixed(2)} leva`);
    }
    else if (typeMovie=="Normal"){
        total=(rows*columns)*7.5;
        console.log(`${total.toFixed(2)} leva`);
    }
    else if (typeMovie=="Discount"){
        total=(rows*columns)*5;
        console.log(`${total.toFixed(2)} leva`);
    }
}
cinemaincome(["Discount", "12", "30"])