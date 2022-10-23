function demo(input){
let group=Number(input[0]);
let totalTourists = 0;
for(let i = 0; i < group; i++) {
        let num = Number(input[index]);
        totalTourists += num;
        index++;
        if (num <= 5) {
            musalaCounter += num;
        } else if (num >= 6 && num <= 12) {
            monblanCounter += num;
        } else if (num >= 13 && num <= 25) {
            kelimandjaroCounter += num;
        } else if (num >= 26 && num <= 40) {
            kTwoCounter += num;
        } else {
            everestCounter += num;
        }
    }
 
   let p1 = musalaCounter / totalTourists * 100;
   let p2 = monblanCounter / totalTourists * 100;
   let p3 = kelimandjaroCounter / totalTourists * 100;
   let p4 = kTwoCounter / totalTourists * 100;
   let p5 = everestCounter / totalTourists * 100;
    console.log(`${p1}`);
    console.log(`${p2}`);
    console.log(`${p3}`);
    console.log(`${p4}`);
    console.log(`${p5}`);

}
demo (["5",

"25",

"41",

"31",

"250",

"6"])