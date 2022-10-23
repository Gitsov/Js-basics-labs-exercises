function fruitshop(input){
    let fruit=input[0];
    let day=input[1];
    let quantity=Number(input[2]);
    let totalprice=0;
    if(day=="Monday" || day=="Tuesday" || day=="Wednesday" || day=="Thursday" || day=="Friday"){
        switch(fruit){
            case "banana":
            totalprice=quantity*2.50; 
            console.log(totalprice.toFixed(2));
                break;
            case "apple":
                totalprice=quantity*1.20; 
                console.log(totalprice.toFixed(2));
                    break;
            case "orange":
                totalprice=quantity*0.85; 
                console.log(totalprice.toFixed(2));
                    break;
            case "grapefruit":
                totalprice=quantity*1.45;    
            console.log(totalprice.toFixed(2));
                    break;
            case "kiwi":
                totalprice=quantity*2.70; 
                console.log(totalprice.toFixed(2));
                    break;
            case "pineapple":
                totalprice=quantity*5.50; 
                console.log(totalprice.toFixed(2));
                    break;
            case "grapes":
                totalprice=quantity*3.85; 
                console.log(totalprice.toFixed(2));
                    break;
            default:
            console.log("error");
        }
    }
    else if(day=="Saturday" || day=="Sunday"){
        switch(fruit){
            case "banana":
                totalprice=quantity*2.70;    
            console.log(totalprice.toFixed(2));
                break;
            case "apple":
                totalprice=quantity*1.25; 
                console.log(totalprice.toFixed(2));
                    break;
            case "orange":
                totalprice=quantity*0.90; 
                console.log(totalprice.toFixed(2));
                    break;
            case "grapefruit":
                totalprice=quantity*1.60;
                console.log(totalprice.toFixed(2));
                    break;
            case "kiwi":
                totalprice=quantity*3.00;
                console.log(totalprice.toFixed(2));
                    break;
            case "pineapple":
                totalprice=quantity*5.60;
                console.log(totalprice.toFixed(2));
                    break;
             case "grapes":
                totalprice=quantity*4.20;
                console.log(totalprice.toFixed(2));
                    break;
            default:
                console.log("error");
        }
    } else{
        console.log("error");
    }
}

fruitshop(["apple", "Tuesday", "2"])