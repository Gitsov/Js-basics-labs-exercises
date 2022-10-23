function hotel(input){
    let month = input[0];
    let nights=Number(input[1]);
    apartTotal=0
    studioTotal=0
    if(month=="May" || month=="Ocotober"){
        apartTotal=nights*65;
        studioTotal=nights*50;
        if(nights>=7 && nights<=14){
            studioTotal=studioTotal-(studioTotal*0.05);
            console.log(`Apartment: ${apartTotal.toFixed(2)} lv.`);
            console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
        }else if(nights>14){
            studioTotal=studioTotal-(studioTotal*0.3);
            apartTotal=apartTotal-(apartTotal*0.1);
            console.log(`Apartment: ${apartTotal.toFixed(2)} lv.`);
            console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);

        }
    } 
    else if(month=="June" || month=="September"){
        apartTotal=nights*68.70;
        studioTotal=nights*75.20;
        if(nights <= 14){
            console.log(`Apartment: ${apartTotal.toFixed(2)} lv.`);
            console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
        }else if(nights>14){
            studioTotal=studioTotal-(studioTotal*0.2);
            apartTotal=apartTotal-(apartTotal*0.1);
            console.log(`Apartment: ${apartTotal.toFixed(2)} lv.`);
            console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);

        }
    }
    else if(month=="July" || month=="August"){
        apartTotal=nights*77;
        studioTotal=nights*76;
        if(nights <= 14){
            console.log(`Apartment: ${apartTotal.toFixed(2)} lv.`);
            console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
        }else if(nights>14){
            apartTotal=apartTotal-(apartTotal*0.1);
            console.log(`Apartment: ${apartTotal.toFixed(2)} lv.`);
            console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);

        }
    }
}
hotel(["June",

"14"])