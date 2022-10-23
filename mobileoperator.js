function mobile(input){
    let duration=input[0];
    let type=input[1];
    let mobileData=input[2];
    let months=input[3];

    let small=0;
    let middle=0;
    let large=0;
    let extraLarge=0;
    let internetTax=0;
    if(duration=="one"){
        switch(type){
       case'Small':  small=9.98; 
        if(mobileData==="yes") {
            internetTax=5.50; console.log(`${((small+internetTax)*months).toFixed(2)} lv.`);}
        else if(mobileData==="no"){
            console.log(`${(small*months).toFixed(2)} lv.`);}
        
            break; 
       case'Middle':  middle=18.99; 
       if(mobileData==="yes") { 
        internetTax=4.35;  console.log(`${((middle+internetTax)*months).toFixed(2)} lv.`);}
        else if(mobileData==="no"){
            console.log(`${(middle*months).toFixed(2)} lv.`);} 
        break;
       case'Large':  large=25.98;
       if(mobileData==="yes") {
        internetTax=4.35; console.log(`${((large+internetTax)*months).toFixed(2)} lv.`);}
        else if(mobileData==="no"){
            console.log(`${(large*months).toFixed(2)}lv.`);} 
         break;
       case'ExtraLarge':  extraLarge=35.99; if(mobileData==="yes") { 
        internetTax=3.85;console.log(`${((extraLarge+internetTax)*months).toFixed(2)} lv.`);}
        else if(mobileData==="no"){
            console.log(`${(extraLarge*months).toFixed(2)} lv.`);} 
         break;
    }
    }
    else if(duration=="two"){
        switch(type){
            case'Small':  small=8.58; 
             if(mobileData==="yes") {
                 internetTax=5.50; console.log(`${(((small+internetTax)*months)*0.9625).toFixed(2)} lv.`);}
             else if(mobileData==="no"){
                 console.log(`${((small*months)*0.9625).toFixed(2)} lv.`);
                }
             
                 break; 
            case'Middle':  middle=17.09; 
            if(mobileData==="yes") { 
             internetTax=4.35;  console.log(`${(((middle+internetTax)*months)*0.9625).toFixed(2)} lv.`);}
             else if(mobileData==="no"){
                 console.log(`${((middle*months)*0.9625).toFixed(2)} lv.`);} 
             break;
            case'Large':  large=23.59;
            if(mobileData==="yes") {
             internetTax=4.35; console.log(`${(((large+internetTax)*months)*0.9625).toFixed(2)} lv.`);}
             else if(mobileData==="no"){
                 console.log(`${((large*months)*0.9625).toFixed(2)} lv.`);} 
              break;
            case'ExtraLarge':  extraLarge=31.79; if(mobileData==="yes") { 
             internetTax=3.85;console.log(`${(((extraLarge+internetTax)*months)*0.9625).toFixed(2)} lv.`);}
             else if(mobileData==="no"){
                 console.log(`${((extraLarge*months)*0.9625).toFixed(2)}lv.`);} 
              break;
         }

    }

}
mobile(["two","Large","no","10"])