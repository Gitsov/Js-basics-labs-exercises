function citypercent(input){
    let city=input[0];
    let sales=Number(input[1]);
    let total=0;
    if(city=="Sofia"){
        if(0<=sales && sales<=500){
            total=sales*0.05;
            console.log(`${total.toFixed(2)}`);
        }
        else if(500<sales && sales<=1000){ 
            total=sales*0.07;
            console.log(`${total.toFixed(2)}`);
        }
        else if(1000<sales && sales<=10000){
            total=sales*0.08;
            console.log(`${total.toFixed(2)}`);
        }
        else if(sales>10000){
            total=sales*0.12;
            console.log(`${total.toFixed(2)}`);
        }
        else{
            console.log("error");
        }
    }
    else if(city=="Varna"){
        if(0<=sales && sales<=500){ 
            total=sales*0.045;
            console.log(`${total.toFixed(2)}`);
        }
       else if(500<sales && sales<=1000){
            total=sales*0.075;
            console.log(`${total.toFixed(2)}`);
        }
       else if(1000<sales && sales<=10000){
            total=sales*0.10;
            console.log(`${total.toFixed(2)}`);
        }
        else if(sales>10000){
            total=sales*0.13;
            console.log(`${total.toFixed(2)}`);
        }
        else{
            console.log("error");
        }
    }
    else if (city=="Plovdiv"){
        if(0<=sales && sales<=500){ 
        total=sales*0.055;
        console.log(`${total.toFixed(2)}`);
    }
   else if(500<sales && sales<=1000){
        total=sales*0.08;
        console.log(`${total.toFixed(2)}`);
    }
    else if(1000<sales && sales<=10000){
        total=sales*0.12;
        console.log(`${total.toFixed(2)}`);
    }
   else if(sales>10000){
        total=sales*0.145;
        console.log(`${total.toFixed(2)}`);
    }
    else {
        console.log("error")
    }
    }
    else {
        console.log("error")
    }
}

citypercent(["Plovdiv", "499.99"])