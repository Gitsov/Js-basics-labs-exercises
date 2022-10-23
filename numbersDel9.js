function demo(input){
    let start=Number(input[0]);
    let end=Number(input[1])
    let sum=0;
    let nums = '';
    for(i=start; i<=end ; i++){
        if(i%9==0){
        sum+=i;
        nums+=i + "\n";
        }
        } 
        console.log(`The sum: ${sum}`);
        console.log(nums);
        }
       

demo(["100", "200"])