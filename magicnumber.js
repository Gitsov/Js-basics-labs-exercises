function demo(input){
    let a=Number(input[0]);
    let b=Number(input[1]);
    let magicNumber=Number(input[2]);
    combination=0;
    let isFound=false;
    for(let i=a; i<=b;i++){
        for(let j = a; j <= b; j++){
            let sum=i+j;
            combination++;
        if (sum === magicNumber){
            isFound = true;
            console.log(`Combination N:${combination} (${i} + ${j} = ${magicNumber})`);
            break;
        }
    }
        if (isFound==true){
            break;
        }
    }
        if (isFound==false){ 
            console.log(`${combination} combinations - neither equals ${magicNumber}`);
        }
}
demo(["23","24","20"])