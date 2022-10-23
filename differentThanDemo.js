function demo(input){
    let number = Number(input[0]);
    let isValid = 100 <= number && number <= 200 || number == 0;
    if(!isValid){ 
    console.log("invalid");
    }
  
}
demo(["150"])